import React from "react"
import HiddenCode from "./img/HiddenCode.png"
import NFTStore from "./img/NFTStore.png"

const HiddingCodeBlog: React.FC = () => {
  return (
    <div>
      <h1>Hidding Code</h1>
      <p>
        Imagine you want to implement a smart contract that allows you to buy a
        really cool and rare NFT. You verify the contract by using a block
        explorer like etherscan the contract source has even been verified. Can
        you spot the vulnerability?
      </p>
      <img src={NFTStore} alt="NFTStore" />
      <p>
        When you execute the contract the “buy” method inside of BuyANFT is
        never hit and you lose all your deposited funds. The vulnerability is
        the constructor loads an untrusted address into BuyANFT the address
        could be any contract, and would work perfectly as long as there is a
        buy function. You should never trust a contract that uses an unverified
        contract address.
        <br />
        <br />
        This is the contract that was called
      </p>
      <img src={HiddenCode} alt="HiddenCode" />
      <br/>
      <br/>
      <a  href="https://github.com/hendrash/SolidityExploits">There's a demo on github if you want to try it out ?</a>
    </div>
  );
};
export default HiddingCodeBlog;
