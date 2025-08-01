# an-nft-grid-list

An app that fetches and displays NFTs owned by any Ethereum address using the NFTPort API. Features a responsive grid layout with search functionality and detailed NFT information.

## Tech stack

- React
- Typescript
- Prettier, ESLint, and Husky
- SCSS
- classnames
- Alchemy NFT API

## Getting Started

### Prerequisites

Before running the development server, you need to set up the connection to Alchemy NFT API.

**Set Environment Variables**

Create a `.env` file in the root directory and add:

```
REACT_APP_PRIVATE_KEY=your_private_key_here
```

### Development Server

Next step is to install dependencies and run the development server:

```bash
To run the application locally:

1. Install dependencies: `npm install`
2. Prepare Husky hooks: `npm run husky-prepare`
3. Start the development server: `npm start`
```

## Live Demo

A live version of this app is hosted on [Render](https://render.com/) (free tier). Please note:

- The app may take several seconds to start on first use, as the server may be sleeping.
- Performance may be limited during periods of high usage.

[View the live demo here](https://an-nft-grid-list.onrender.com/)

## Example Addresses

If you don't have an Ethereum (ETH) address yet, you can still try out the app using one of the sample addresses below, courtesy of NFTPort. Just copy and paste any of these addresses into the input field to explore how the app works:

<pre>
0x942878558bC523777fE11e6d725AF93c86458050
0x599aa2feaeec1c4caa33da6b7fbd0e6578953c96
0x51688cd36c18891167e8036bde2a8fb10ec80c43
</pre>
