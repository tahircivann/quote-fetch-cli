# OSSQuotes CLI ( quote-fetch-cli ) 

`OSSQuotes` is a Node.js Command Line Interface (CLI) tool designed for fetching and displaying quotes from the OSS 117 quotes API. It offers functionality to retrieve random quotes, filter quotes by characters, or search for quotes containing specific keywords.

## Activity Diagram
![ZL91ReGm3Bpd5TQUs2_0eRkgMWbrLV455Xo82Wbh9rln-uQ40YrjrLiipup7uvpObcHTtudm46bH4YESgN4zQikPK1AInxQaih98C92vgnhhXoFO5ZKa8_9H04oedA5QWFUoKpiKGBfAAOwWp3UmyqCJRMRGnJHmo7Lehvg7B7JPcc6Yw5f9iH9Z7Uo-uFXkgFxLRFgCjchXve](https://github.com/tahircivann/quote-fetch-cli/assets/69795597/c6836d12-1dd0-4992-bf73-5318084bd568)

## Sequence Diagram 

![tLFDJiCm3BxdAQoUEec-G0zeC0cnWM08mTsaxXgH9YL9cVRsk6agw5I9-mvjdVZxiJ-fQn_GXRxLekElagf34o1xy-GoG0yz5_FMvd5xZwRI2I2rclTVUXleZe9i4g8UQr5Xm0_q1DdDVXixs2rnO-jhg8GOxA6u7bnAsADZjhHjo_w5LeO0tQ5loGGl6340ara91mfHpUUs2y](https://github.com/tahircivann/quote-fetch-cli/assets/69795597/3bcde72e-de5b-4c2a-865b-0448e45b34f1)


## Features

- Retrieve a specified number of random quotes.
- Filter quotes by specific characters using their slug.
- Search for quotes containing specified keywords.

## Prerequisites

- Node.js (Version 12.x or higher is recommended)

## Installation

Clone this repository or download the source code.

```sh
git clone https://github.com/yourusername/ossquotes-cli.git
cd ossquotes-cli
```
chalk for terminal string styling.
node-fetch for making HTTP requests.
yargs for parsing command-line arguments.

Install the required dependencies.

```sh
npm install
```
Optionally, link the package globally to use the ossquotes command anywhere on your system.


```sh
npm link
```

## Usage
Global Execution
After global installation, you can use the ossquotes command followed by options:

```sh
ossquotes [options]
```
## Local Execution
Within the project directory, execute the script using npm:

```sh
npm run fetch-quotes -- [options]
```

## Options
 
1. `-n, --number <number> - Specify the number of quotes to fetch (default: 1). `
2. `-c, --character <characterSlug> - Fetch quotes from a specific character. `
3. `-k, --keyword <keyword> - Fetch quotes containing a specific keyword. `
 
Examples
Fetch with all options:

```sh
npm run fetch-quotes -- --number=30 --keyword=tu --character=bill
```
Fetch a single random quote:

```sh
ossquotes
```
Fetch five random quotes:

```sh
ossquotes -n 5
```
Fetch quotes from "Hubert":

```sh
ossquotes -c hubert
```
Fetch quotes containing "avec":

```sh
ossquotes -k avec
```
## Development
The project uses the following main packages:

chalk for terminal string styling.
node-fetch for making HTTP requests.
yargs for parsing command-line arguments.
