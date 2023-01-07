// const { impersonateAccount, loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
// const { ethers } = require("hardhat");
// const { isCallTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace");
// const ERC20ABI = require("@uniswap/v2-core/build/ERC20.json").abi;
// const FactoryABI = require("@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json").abi;
// const PoolABI = require("@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json").abi;

// describe("Test adding liquidity to uniswap", () => {
//     const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
//     const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
//     const DAI_HOLDER = "0xb527a981e1d415af696936b3174f2d7ac8d11369";
//     const USDC_HOLDER = "0xda9ce944a37d218c3302f6b82a094844c6eceb17";
//     const UniswapFactory = "0x1F98431c8aD98523631AE4a59f267346ea31F984";
    

//     const liquidityFixture = async() => {
//        await impersonateAccount(DAI_HOLDER);
//        await impersonateAccount(USDC_HOLDER); 
//        const [owner] = await ethers.getSigners();
//        const DaiSigner = await ethers.getSigner(DAI_HOLDER);
//        const UsdcSigner = await ethers.getSigner(USDC_HOLDER);
//        const liquidityContract = await ethers.getContractFactory("Liquidity");
//        const LiquidityContractInstance = await liquidityContract.deploy("0xC36442b4a4522E871399CD717aBDD847Ab11FE88");
//        const DAIContractInstance = await new ethers.Contract(DAI,ERC20ABI, DaiSigner);
//        const USDCContractInstance = await new ethers.Contract(USDC,ERC20ABI,UsdcSigner);
//        const FactoryInstance = await new ethers.Contract(UniswapFactory,FactoryABI,owner)
//        return {owner, DaiSigner, UsdcSigner, LiquidityContractInstance, DAIContractInstance, USDCContractInstance, FactoryInstance};
//     }


//     it("should add liquidity to the uniswap pool", async()=>{
//         const {owner, FactoryInstance, DaiSigner, UsdcSigner, LiquidityContractInstance, DAIContractInstance, USDCContractInstance} = await loadFixture(liquidityFixture);
//         // const dai_holder_dai_balance =  await DAIContractInstance.balanceOf(DAI_HOLDER);
//         // console.log(`dai balance of dai holder is ${ethers.utils.formatUnits(dai_holder_dai_balance.toString(),18)}`);
//         // const usdc_balance = await USDCContractInstance.balanceOf(USDC_HOLDER);
//         // console.log(`usdc balance of usdc holder is ${ethers.utils.formatUnits(usdc_balance.toString(),6)}`);
        
//         await owner.sendTransaction({to:USDC_HOLDER, value: ethers.utils.parseEther("1")});
//         await owner.sendTransaction({to:DAI_HOLDER, value: ethers.utils.parseEther("1")});
//         await DAIContractInstance.transfer(owner.address, ethers.utils.parseEther("1000"));
//         await USDCContractInstance.transfer(DAI_HOLDER, ethers.utils.parseUnits("1000",6));

//         let dai_balance =  await DAIContractInstance.balanceOf(DAI_HOLDER);
//         console.log(`dai balance of dai holder before adding liquidity is ${ethers.utils.formatUnits(dai_balance.toString(),18)}`);
//         let usdc_balance_b = await USDCContractInstance.balanceOf(DAI_HOLDER);
//         console.log(`usdc balance of dai holder is ${ethers.utils.formatUnits(usdc_balance_b.toString(),6)}`);
//         const poolAddress = await FactoryInstance.getPool(DAI,USDC,3000);

//         const poolInstance = await new ethers.Contract(poolAddress,PoolABI,owner);
//         const slot0 = await poolInstance.slot0();
//         const currentTick = parseInt(slot0.tick);

//         const currentTickSPacing =  parseInt(await poolInstance.tickSpacing());
      
//         const currentTickDiv = Math.ceil(currentTick/currentTickSPacing);

        
//         let lowerTick = (currentTickDiv * currentTickSPacing) - currentTickSPacing;
//         let upperTick = (currentTickDiv * currentTickSPacing) + currentTickSPacing;

//         // console.log("upper tick is", upperTick);
//         // console.log("lower tick is", lowerTick);

//         // console.log("current tick is", currentTick);
//         // console.log("current tick spacing is", currentTickSPacing);

//         dai_balance =  await DAIContractInstance.balanceOf(poolAddress);
//         console.log(`dai balance of pool before adding liquidity is ${ethers.utils.formatUnits(dai_balance.toString(),18)}`);
//         let usdc_balance = await USDCContractInstance.balanceOf(poolAddress);
//         console.log(`usdc balance of pool before adding liquidity is ${ethers.utils.formatUnits(usdc_balance.toString(),6)}`);
        

//         console.log("");
//         console.log("");
//         await DAIContractInstance.approve(LiquidityContractInstance.address, ethers.utils.parseUnits("1000",18));
//         await USDCContractInstance.connect(DaiSigner).approve(LiquidityContractInstance.address, ethers.utils.parseUnits("1000",6));
       
//         await LiquidityContractInstance.connect(DaiSigner).mintNewPosition(ethers.utils.parseEther("1000"),ethers.utils.parseUnits("1000",6),lowerTick, upperTick);

//         dai_balance =  await DAIContractInstance.balanceOf(DAI_HOLDER);
//         console.log(`dai balance of dai holder after adding liquidity is ${ethers.utils.formatUnits(dai_balance.toString(),18)}`);
//         usdc_balance_b = await USDCContractInstance.balanceOf(DAI_HOLDER);
//         console.log(`usdc balance of dai holder after adding liquidty is ${ethers.utils.formatUnits(usdc_balance_b.toString(),6)}`);
    
//         console.log("");
//         console.log("");

//         dai_balance =  await DAIContractInstance.balanceOf(poolAddress);
//         console.log(`dai balance of pool after adding liquidity is ${ethers.utils.formatUnits(dai_balance.toString(),18)}`);
//         usdc_balance = await USDCContractInstance.balanceOf(poolAddress);
//         console.log(`usdc balance of pool after adding liquidity is ${ethers.utils.formatUnits(usdc_balance.toString(),6)}`);
//     })

// })