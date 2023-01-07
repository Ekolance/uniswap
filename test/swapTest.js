// const { impersonateAccount, loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
// const { ethers } = require("hardhat");
// const { isCallTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace");
// const ERC20ABI = require("@uniswap/v2-core/build/ERC20.json").abi;
// const QUOTER_ABI = require("@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json").abi;

// describe("Test Swapping with uniswap", ()=>{
//     const DAI = "0xDF1742fE5b0bFc12331D8EAec6b478DfDbD31464";
//     const LINK = "0x07C725d58437504CA5f814AE406e70E21C5e8e9e";
//     const TOKEN_HOLDER = "0x14Faf58613AE78D6C4e5bfFcEA320ba1E09Dcd1b";
//     const SWAP_ROUTER = "0xE592427A0AEce92De3Edee1F18E0157C05861564";
//     const QUOTER = "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6";

//     const swapFixture = async() => {
//        await impersonateAccount(TOKEN_HOLDER);
//        const Token_Signer = await ethers.getSigner(TOKEN_HOLDER);
//        const swapContract = await ethers.getContractFactory("Swap");
//        const [owner] = await ethers.getSigners();
//        const swapContractInstance = await swapContract.deploy(SWAP_ROUTER);
//        const DAIContractInstance = await new ethers.Contract(DAI,ERC20ABI,Token_Signer);
//        const LinkContractInstance = await new ethers.Contract(LINK,ERC20ABI,Token_Signer);
//        const QuoterContractInstance = await new ethers.Contract(QUOTER,QUOTER_ABI,Token_Signer);
//        return {Token_Signer, swapContractInstance,DAIContractInstance, LinkContractInstance, QuoterContractInstance, owner};
//     }

//     it("Should perform an exact input single swap", async()=> {
//         const {swapContractInstance,DAIContractInstance, LinkContractInstance, QuoterContractInstance, Token_Signer, owner } = await loadFixture(swapFixture);
        
//         console.log("balance before swap");
//         const dai_balance = ethers.utils.formatUnits(await DAIContractInstance.balanceOf(TOKEN_HOLDER),18);
//         console.log(dai_balance);
  
//         const link_balance = ethers.utils.formatUnits(await LinkContractInstance.balanceOf(TOKEN_HOLDER),18);
//         console.log(link_balance);

//         await owner.sendTransaction({to: TOKEN_HOLDER, value: ethers.utils.parseUnits("1",18)});

//         await DAIContractInstance.approve(swapContractInstance.address, ethers.utils.parseUnits("100",18));
        
//         const result = await QuoterContractInstance.callStatic.quoteExactInputSingle(DAI,LINK,3000,ethers.utils.parseUnits("100",18),0);

//         console.log(`quoter amount out is ${ethers.utils.formatUnits(result,18)}`)

//         await swapContractInstance.connect(Token_Signer).swapExactInputSingle(ethers.utils.parseUnits("100",18));

//         console.log(" ");
//         console.log("balance after swap");

//         const dai_balance_after = ethers.utils.formatUnits(await DAIContractInstance.balanceOf(TOKEN_HOLDER),18);
//         console.log(dai_balance_after);
  
//         const link_balance_after= ethers.utils.formatUnits(await LinkContractInstance.balanceOf(TOKEN_HOLDER),18);
//         console.log(link_balance_after);
//     })

  

// })