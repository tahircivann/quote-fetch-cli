# quote-fetch-cli
quote-fetch-cli is a versatile and user-friendly command-line interface (CLI) tool designed for anyone who loves quotes or needs a quick dose of inspiration from their favourite characters.

# OSSQuotes CLI

`OSSQuotes` is a Node.js Command Line Interface (CLI) tool designed for fetching and displaying quotes from the OSS 117 quotes API. It offers functionality to retrieve random quotes, filter quotes by characters, or search for quotes containing specific keywords.

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

chalk for terminal string styling.
node-fetch for making HTTP requests.
yargs for parsing command-line arguments.

Install the required dependencies.

```sh
npm install
Optionally, link the package globally to use the ossquotes command anywhere on your system.

```sh
npm link

Usage
Global Execution
After global installation, you can use the ossquotes command followed by options:

```sh
ossquotes [options]

Local Execution
Within the project directory, execute the script using npm:

```sh
npm run fetch-quotes -- [options]

Options
-n, --number <number> - Specify the number of quotes to fetch (default: 1).
-c, --character <characterSlug> - Fetch quotes from a specific character.
-k, --keyword <keyword> - Fetch quotes containing a specific keyword.
Examples
Fetch a single random quote:

```sh
ossquotes

Fetch five random quotes:

```sh
ossquotes -n 5

Fetch quotes from "Hubert":

```sh
ossquotes -c hubert

Fetch quotes containing "love":

```sh
ossquotes -k avec

Development
The project uses the following main packages:

chalk for terminal string styling.
node-fetch for making HTTP requests.
yargs for parsing command-line arguments.
