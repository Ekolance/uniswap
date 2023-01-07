// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity =0.7.6;

interface ISwap{
    function swapExactInputSingle(uint256 amountIn) external returns (uint256 amountOut);
    function swapExactOutputSingle(uint256 amountOut, uint256 amountInMaximum) external returns (uint256 amountIn);
}