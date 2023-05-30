/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle")

const ALCHEMY_API_KEY ="rYZ4BKOfh_3HHjlOf_UR0JiyW8ePFEqj"
const SEPOLIA_PRIVATE_KEY = "5e3a4d6bd348b49743b5bee9c425170399fb870cb5ddd0f7af6fb1095cde4e2c"
module.exports = {
  solidity: "0.8.18",
  networks:{
    sepolia:{
      url:`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[`${SEPOLIA_PRIVATE_KEY}`]
    }
  }
};
// 0x5FbDB2315678afecb367f032d93F642f64180aa3
// 0x42604eC59D8dB5690D2FA8C78F29De90505f77e4