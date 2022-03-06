import { useEthers, useTokenBalance } from "@usedapp/core";
import { WIRE_TOKEN } from "../global/constants";
import { formatAmount } from "../global/utils";
import "../styles/staking.css";

export default function Claim({ rewards }) {
  const { account } = useEthers();
  const tokenBalance = useTokenBalance(WIRE_TOKEN, account);

  return (
    <div className="claim">
      <div className="claim-content">
        <p className="agency">Balance</p>
        <p className="agency">{formatAmount(tokenBalance)} WIRE</p>
      </div>
      <div className="claim-content">
        <p className="agency">Claimable $WIRE:</p>
        <p className="agency">{formatAmount(rewards)} WIRE</p>
      </div>
    </div>
  );
}
