require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.7.6",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/saOQ9XSUKvDgOQtHHbkmSmnk7j90nI_d",
      accounts:["975f646ef556e8df44a5350bab28970d2757c67a6b2c3058826338c480739400"]
    },
    hardhat:{
      forking:{
        url: "https://eth-mainnet.g.alchemy.com/v2/DjOmHdrG3ogDArdN_iPieyQRkajC4dx0"
        // url: "https://eth-goerli.g.alchemy.com/v2/saOQ9XSUKvDgOQtHHbkmSmnk7j90nI_d"
      }
    }
  }
};
