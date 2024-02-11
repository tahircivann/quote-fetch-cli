import { isValidCharacter, fetchQuotes, getQuotes } from './fetchQuotes';
import {jest} from '@jest/globals';




beforeEach(() => {
  fetch.mockClear();
});
global.console.error = jest.fn();
describe('isValidCharacter', () => {
  it('returns true for a known character', () => {
    expect(isValidCharacter('hubert')).toBe(true);
  });

  it('returns false for an unknown character', () => {
    expect(isValidCharacter('unknown')).toBe(false);
  });

});


describe('fetchQuotes', () => {

  
  it('should fetch quotes successfully', async () => {
    const mockQuotes = [
      { quote: "This is a mock quote", character: "mock-character" }
    ];
  
    fetch.mockResolvedValueOnce({ ok: true, json: () => Promise.resolve(mockQuotes) });
    const quotes = await fetchQuotes('mock-url');
    expect(quotes).toEqual(mockQuotes);
  });

  it('should handle fetch error', async () => {
    fetch.mockResolvedValueOnce({ ok: false, status: 404, statusText: 'Not Found' });
    await expect(fetchQuotes('mock-url')).resolves.toEqual(undefined); // Adjust based on your error handling
  });
});

// Mock KNOWN_CHARACTERS from './constant.js'
jest.mock('./constant.js', () => ({
  KNOWN_CHARACTERS: {
    "hubert": "Hubert Bonnisseur de La Bath (alias OSS 117)"
  }
}));
it('should return quotes based on keyword', async () => {
  const keyword = "polish";
  const character = "hubert";
  const number = 2;
  fetch.mockResponseOnce(JSON.stringify([
    {
      slug: "hubert",
      quotes: ["I'm polish"]
    }
  ]));
  
  const result = await getQuotes({ number, character, keyword });
  
  // Correct assertion: Expecting the result to match the mocked fetch response
  expect(result).toEqual([
    {
      character: "hubert",
      sentence: "I'm polish"
    }
  ]);
  
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('https://api.oss117quotes.xyz/v1/characters');
});