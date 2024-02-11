# quote-fetch-cli
quote-fetch-cli is a versatile and user-friendly command-line interface (CLI) tool designed for anyone who loves quotes or needs a quick dose of inspiration from their favourite characters.


Certainly! For a GitHub-focused documentation that better aligns with common README structures, here's a refined version. This documentation is designed to be included in your project's README.md file, providing clear instructions on installation, usage, and contribution guidelines.

OSSQuotes CLI
OSSQuotes is a Node.js Command Line Interface (CLI) tool designed for fetching and displaying quotes from the OSS 117 quotes API. It offers features to retrieve random quotes, filter quotes by characters, or search for quotes containing specific keywords.

Features
Retrieve a specified number of random quotes.
Filter quotes by specific characters using their slug.
Search for quotes containing specified keywords.
Prerequisites
Node.js (Version 12.x or higher is recommended)
Installation
Clone this repository or download the source code.
sh
Copy code
git clone https://github.com/yourusername/ossquotes-cli.git
cd ossquotes-cli
Install the required dependencies.
sh
Copy code
npm install
Optionally, link the package globally to use ossquotes command anywhere on your system.
sh
Copy code
npm link
Usage
Global Execution
After global installation, you can use the ossquotes command followed by options:

bash
Copy code
ossquotes [options]
Save to grepper
Local Execution
Within the project directory, execute the script using npm:

bash
Copy code
npm run fetch-quotes -- [options]
Save to grepper
Options
-n, --number <number> - Specify the number of quotes to fetch (default: 1).
-c, --character <characterSlug> - Fetch quotes from a specific character.
-k, --keyword <keyword> - Fetch quotes containing a specific keyword.
Examples
Fetch a single random quote:

bash
Copy code
ossquotes
Save to grepper
Fetch five random quotes:

bash
Copy code
ossquotes -n 5
Save to grepper
Fetch quotes from "Hubert":

bash
Copy code
ossquotes -c hubert
Save to grepper
Fetch quotes containing "love":

bash
Copy code
ossquotes -k love
Save to grepper
Development
The project uses the following main packages:

chalk for terminal string styling.
node-fetch for making HTTP requests.
yargs for parsing command-line arguments.
