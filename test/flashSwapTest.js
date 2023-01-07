// const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
// const { ethers } = require("hardhat");

// describe("It should perform a flash on uniswap", ()=> {

//     const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
//     const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
//     const DAI_HOLDER = "0xb527a981e1d415af696936b3174f2d7ac8d11369";
//     const USDC_HOLDER = "0xda9ce944a37d218c3302f6b82a094844c6eceb17";
//     const UniswapFactory = "0x1F98431c8aD98523631AE4a59f267346ea31F984";
//     const SWAP_ROUTER = "0xE592427A0AEce92De3Edee1F18E0157C05861564";
//     const WETH9 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

//     const swapFixture = async() => {
//         const[owner] = await ethers.getSigners();
//         const flashSwapContract = await ethers.getContractFactory("PairFlash");
//         const flashSwapInstance = await flashSwapContract.deploy(SWAP_ROUTER,UniswapFactory,WETH9);
//         return {owner, flashSwapInstance};
//     }

//     it("should flash", async()=> {
//         const {owner, flashSwapInstance} = await loadFixture(swapFixture);
//        await flashSwapInstance.initFlash([DAI,USDC,3000,ethers.utils.parseEther("200"), ethers.utils.parseUnits("200",6),3000,3000]);
//     })
// })