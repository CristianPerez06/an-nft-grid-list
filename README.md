# an-nft-grid-list

An app that lets you fetch the NFTs owned by the specified address.

## Tech stack

- React
- Typescript
- Prettier, ESLint, and Husky
- SCSS
- classnames
- NFTPort API

## How to execute the app

1. Run `npm install`
2. Run `npm run husky-prepare`
3. Create an `.env` file inside the root folder. Add a new env variable named `REACT_APP_PRIVATE_KEY` and fill its value with the Key obtained after registering to NFTPort.
4. Run `npm start`

## Live example

This example is deployed on [Render](https://render.com/) using a free account. Taking this into account there are a couple of things to keep in mind before using the app:

- On first use, the App will have to boot, which could take several seconds.
- Extensive use may affect performance.

Go to [live example](https://an-nft-grid-list.onrender.com/)

## Example data
If you're new to using Ethereum, you may not have an ETH address yet. You can still test the app by using one of the example addresses provided by NFTPort. Simply enter the address into the appropriate field and follow the prompts to begin using the app:
<pre>
  - 0x942878558bC523777fE11e6d725AF93c86458050
  - 0x599aa2feaeec1c4caa33da6b7fbd0e6578953c96
  - 0x51688cd36c18891167e8036bde2a8fb10ec80c43
</pre>
