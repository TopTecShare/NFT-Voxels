import voxels from "../img/Main Cube.png";
import { parseEther } from "@ethersproject/units";
import { toast } from "react-toastify";
import Bar from "./progressbar";
import Cube from "./cube";
import {
  useInitialMintingStatus,
  usePublicMint,
  useWhitelistAmountMint,
} from "../hooks/useVoxelsNFT";

import "../styles/cube.css";
import { useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";
import { MERKLE_TREE_DATA } from "../global/constants";
import { formatError } from "../global/utils";

export default function Cubemint({ isPublic = false }) {
  const { pendingCount, totalCount, mintPrice } = useInitialMintingStatus();
  const [mintAmount, setMintAmount] = useState(1);
  const { account } = useEthers();
  const { state: whitelistState, whitelistAmountMint } =
    useWhitelistAmountMint();
  const { state: publicState, publicMint } = usePublicMint();

  const onWhitelistAmountMint = () => {
    if (!account || !MERKLE_TREE_DATA[account]) {
      toast.error("The wallet is not whitelisted", {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
      });
      return;
    }
    const mintCost = parseEther(`${mintPrice}`).mul(mintAmount);
    whitelistAmountMint(
      mintAmount,
      MERKLE_TREE_DATA[account].leaf,
      MERKLE_TREE_DATA[account].proof,
      { value: mintCost }
    );
  };

  const onPublicMint = () => {
    const mintCost = parseEther(`${mintPrice}`);
    publicMint({ value: mintCost });
  };

  useEffect(() => {
    const state = isPublic ? publicState : whitelistState;
    if (state.status === "Exception" || state.status === "Fail") {
      toast.error(formatError(state.errorMessage), {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
      });
    }
  }, [whitelistState, publicState, isPublic]);

  return (
    <div>
      <div className="cube">
        <Cube />
      </div>
      <div className="mint-action">
        <p className="agency price">Price: {mintPrice} ETH</p>
        <Bar
          now={`${((totalCount - pendingCount) / totalCount) * 100}%`}
          label={`Minted: ${totalCount - pendingCount}/${totalCount}`}
        />
        <div>
          <button
            className="minus agency"
            onClick={() => setMintAmount(Math.max(1, mintAmount - 1))}
          >
            -
          </button>
          <a className="value agency">{mintAmount}</a>
          <button
            className="plus agency"
            onClick={() => setMintAmount(Math.min(3, mintAmount + 1))}
          >
            +
          </button>
        </div>
        <button
          className="mint-button kasumi"
          onClick={() => (isPublic ? onPublicMint() : onWhitelistAmountMint())}
        >
          MINT
        </button>
        <p className="agency eligible">
          * ELIGIBLE TO MINT {isPublic ? 1 : 3} *
        </p>
      </div>
    </div>
  );
}
