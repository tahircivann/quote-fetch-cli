#!/usr/bin/env node
import chalk from 'chalk';
import fetch from 'node-fetch';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { KNOWN_CHARACTERS } from './constant.js';

const API_BASE_URL = 'https://api.oss117quotes.xyz/v1';


export function isValidCharacter(character) {
  return character && Object.hasOwn(KNOWN_CHARACTERS, character);
}

function printQuotes(quotes, character) {
  quotes.forEach(quote => {
    const characterName = KNOWN_CHARACTERS[quote.character] || quote.character.name;
    console.log(chalk.cyan(`${characterName}:`), chalk.yellow(quote.sentence));
  });
}

export async function fetchQuotes(url) {
  const response = await fetch(url);
  if (!response.ok) console.log(chalk.red(`Error fetching quotes: ${response.status} ${response.statusText}`));
  else return response.json();
}

async function getQuotesByKeyword(keyword, character) {
  const allCharactersUrl = `${API_BASE_URL}/characters`;
  const allCharacters = await fetchQuotes(allCharactersUrl);

  return allCharacters.flatMap(char => char.quotes.map(quote => ({
    sentence: quote,
    character: char.slug
  }))).filter(quote =>
    quote.sentence.toLowerCase().includes(keyword.toLowerCase()) &&
    (!character || quote.character.toLowerCase() === character.toLowerCase())
  );
}

export async function getQuotes({ number, character, keyword }) {
  let fetchedQuotes = [];
  try {
    console.log(chalk.yellow('Fetching quotes...'));

    if (keyword && (!character || isValidCharacter(character))) {
      const quotes = await getQuotesByKeyword(keyword, character);
      console.log(chalk.yellow(`Fetched ${quotes.length} quotes containing keyword: ${keyword}`));

      if (!quotes || quotes.length === 0) {
        console.error(chalk.red(`No quotes found containing keyword: ${keyword} for character: ${character}`));
        return []; // Return an empty array if no quotes are found
      }
      
      fetchedQuotes = quotes.slice(0, number);
    } else {
      let url = constructUrl(API_BASE_URL, character, number);
      const quotes = await fetchQuotes(url);
      fetchedQuotes = Array.isArray(quotes) ? quotes : [quotes];
    }
    
    // Logging the quotes to console
    fetchedQuotes.forEach(quote => {
      let characterName = KNOWN_CHARACTERS[quote.character] || quote.character
      if (typeof characterName === 'object') characterName = characterName.name;
      console.log(chalk.cyan(`${characterName}:`), chalk.yellow(quote.sentence));
    });
    return fetchedQuotes;

  } catch (error) {
    console.error(chalk.red('Could not fetch quotes:', error.message));
    return []; // Return an empty array in case of an error
  }
  

}

function constructUrl(baseUrl, character, number) {
  let url = baseUrl + '/random';
  if (character) {
    if (!isValidCharacter(character)) {
      console.error(chalk.red(`Invalid character: ${character}. Please use one of the following: ${Object.keys(KNOWN_CHARACTERS).join(', ')}.`));
      return '';
    }
    url = `${baseUrl}/author/${character}`;
    if (number) {
      url += `/${number}`;
    }
  } else if (number) {
    url = `${baseUrl}/random/${number}`;
  }
  return url;
}

const argv = yargs(hideBin(process.argv))
  .option('number', { alias: 'n', describe: 'Number of quotes to fetch', type: 'number' })
  .option('character', { alias: 'c', describe: 'Fetch quotes from a specific character (use slug)', type: 'string' })
  .option('keyword', { alias: 'k', describe: 'Fetch quotes containing a specific keyword', type: 'string' })
  .help().alias('help', 'h')
  .parse();

getQuotes(argv);
