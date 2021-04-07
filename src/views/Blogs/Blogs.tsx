import "./Blogs.css";
import ethStore from "./img/EtherStore.png";
import attack from "./img/Attack.png";
import solution from "./img/solution.png";

const Blogs: React.FC = () => {
  return (
    <div className="margins">
      <h1>Reentry Attack</h1>
      <p>
        A Reentry Attack is a greedy exploit that can be exploited by completely
        draining a smart contract of all its ether. A Reentry Attack can occur
        when a contract does a internal count with a balance variable and
        exposes the withdraw function. The vulnerability can occur if the
        contract transfers funds before it sets its balance to zero. This allows
        the attacker to repeatedly call the withdraw function until the contract
        is completely drained. This is possible because of solidity’s
        asynchronous nature. All the attacker needs is the balance amount mapped
        to the victim’s contract and the withdraw function to be exposed.
      </p>
      <div>
        <img src={ethStore} alt="EtherStore" className="left" />
      </div>
      <div>
        <img src={attack} alt="attack" className="push" />
      </div>
      <p>The prevention for this is very simple</p>

      <div>
        <img src={solution} alt="solution" className="left" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>
      By updating the balance before we send the ether we can ensure that the
        current balance is correct. The example we looked at is a reentry single
        function attack but there is also cross-function reentrancy attacks as
        well which is a little harder to detect and they occur when an attacker
        can affect the state of a victim's contract, It's important to point out
        that contracts should never trust external contract calls to execute
        without throwing an error.
      </p>
    </div>
  );
};
export default Blogs;
