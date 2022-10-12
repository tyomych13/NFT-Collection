require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

//const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const QUICKNODE_HTTP_URL = "https://blissful-methodical-patina.ethereum-goerli.discover.quiknode.pro/51dfe371b0ad5301224b46a9357c1bd5722931d9/";
const PRIVATE_KEY = "a7dcd33a603ab5123f2a79727405e0c05fbd3de68b349e883f3e7a4664c9139a";

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
