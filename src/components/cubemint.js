import voxels from "../img/Main Cube.png";
import { parseEther } from "@ethersproject/units";
import { toast } from "react-toastify";
import Bar from "./progressbar";
import Cube from "./cube";
import {
  useInitialMintingStatus,
  usePublicMint,
  useWhitelistAmountMint,
  useWhitelistAmountUsed,
  useWhitelistRemaining,
  useWhitelistSelectionMint,
  useWhitelistSelectionUsed,
} from "../hooks/useVoxelsNFT";

import "../styles/cube.css";
import { useEffect, useMemo, useState } from "react";
import { useEthers } from "@usedapp/core";
import { MERKLE_TREE_DATA_1, MERKLE_TREE_DATA_3 } from "../global/constants";
import { formatError } from "../global/utils";
import useEstimateGas from "../hooks/useEstimateGas";

const WHITELIST = {
  NULL: -1,
  NONE: 0,
  AMOUNT: 1,
  SELECTION: 2,
};

export default function Cubemint({ isPublic = false }) {
  const { pendingCount, totalCount, mintPrice } = useInitialMintingStatus();
  const [mintAmount, setMintAmount] = useState(1);
  const { account } = useEthers();
  const remaining = useWhitelistRemaining(account);
  const amountUsed = useWhitelistAmountUsed(account);
  const selectionUsed = useWhitelistSelectionUsed(account);

  const { whitelistAmountGas, whitelistSelectionGas, publicMintGas } =
    useEstimateGas();

  const { state: whitelistState, whitelistAmountMint } =
    useWhitelistAmountMint();
  const { state: whitelistSelState, whitelistSelectionMint } =
    useWhitelistSelectionMint();
  const { state: publicState, publicMint } = usePublicMint();

  const whitelistType = useMemo(() => {
    if (!account) return WHITELIST.NULL;
    if (MERKLE_TREE_DATA_1[account]) return WHITELIST.SELECTION;
    if (MERKLE_TREE_DATA_3[account]) return WHITELIST.AMOUNT;
    return WHITELIST.NONE;
  }, [account]);

  const notifText = useMemo(() => {
    if (whitelistType === WHITELIST.AMOUNT) {
      return remaining || !amountUsed
        ? `* ELIGIBLE TO MINT ${!amountUsed ? 3 : remaining} *`
        : `* You already minted your allowed allocation *`;
    } else if (whitelistType === WHITELIST.SELECTION) {
      return !selectionUsed
        ? `* ELIGIBLE TO MINT 1 *`
        : `* You already minted your allowed allocation *`;
    } else if (isPublic) return `* ELIGIBLE TO MINT 1 *`;
    return null;
  }, [isPublic, remaining, selectionUsed, amountUsed, whitelistType]);

  const onWhitelistMint = async () => {
    const mintCost = parseEther(`${mintPrice}`).mul(mintAmount);

    switch (whitelistType) {
      case WHITELIST.NULL:
        toast.error("Must connect to a wallet!", {
          position: toast.POSITION.TOP_RIGHT,
          hideProgressBar: true,
        });
        return;

      case WHITELIST.NONE:
        toast.error("The wallet is not whitelisted", {
          position: toast.POSITION.TOP_RIGHT,
          hideProgressBar: true,
        });
        return;

      case WHITELIST.AMOUNT:
        try {
          const estimateGas = await whitelistAmountGas(
            mintAmount,
            MERKLE_TREE_DATA_3[account].leaf,
            MERKLE_TREE_DATA_3[account].proof,
            { value: mintCost }
          );
          whitelistAmountMint(
            mintAmount,
            MERKLE_TREE_DATA_3[account].leaf,
            MERKLE_TREE_DATA_3[account].proof,
            { value: mintCost, gasLimit: estimateGas }
          );
        } catch (error) {
          toast.error(formatError(error.error.message), {
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: true,
          });
        }
        return;

      case WHITELIST.SELECTION:
        try {
          const estimatedGas = await whitelistSelectionGas(
            MERKLE_TREE_DATA_1[account].leaf,
            MERKLE_TREE_DATA_1[account].proof,
            { value: mintCost }
          );
          whitelistSelectionMint(
            MERKLE_TREE_DATA_1[account].leaf,
            MERKLE_TREE_DATA_1[account].proof,
            { value: mintCost, gasLimit: estimatedGas }
          );
        } catch (error) {
          toast.error(formatError(error.error.message), {
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: true,
          });
        }
        return;
      default:
        break;
    }
  };

  useEffect(() => {
    if (whitelistType === WHITELIST.SELECTION && mintAmount !== 1) {
      setMintAmount(1);
    }
  }, [whitelistType, mintAmount]);

  const onPublicMint = async () => {
    const mintCost = parseEther(`${mintPrice}`);
    try {
      const estimatedGas = await publicMintGas(mintAmount, { value: mintCost });
      publicMint(mintAmount, { value: mintCost, gasLimit: estimatedGas });
    } catch (error) {
      toast.error(formatError(error.error.message), {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
      });
    }
  };

  useEffect(() => {
    const state = isPublic
      ? publicState
      : whitelistType === WHITELIST.SELECTION
      ? whitelistSelState
      : whitelistState;

    if (state.status === "Exception" || state.status === "Fail") {
      toast.error(formatError(state.errorMessage), {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
      });
    }
  }, [whitelistState, whitelistSelState, publicState, isPublic, whitelistType]);

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
          {!isPublic &&
            whitelistType === WHITELIST.AMOUNT &&
            (remaining || !amountUsed) && (
              <button
                className="minus agency"
                onClick={() => setMintAmount(Math.max(1, mintAmount - 1))}
              >
                -
              </button>
            )}
          <a className="value agency">{mintAmount}</a>
          {!isPublic &&
            whitelistType === WHITELIST.AMOUNT &&
            (remaining || !amountUsed) && (
              <button
                className="plus agency"
                onClick={() =>
                  setMintAmount(
                    Math.min(!amountUsed ? 3 : remaining, mintAmount + 1)
                  )
                }
              >
                +
              </button>
            )}
        </div>
        <button
          className="mint-button kasumi"
          onClick={() => (isPublic ? onPublicMint() : onWhitelistMint())}
        >
          MINT
        </button>
        <p className="agency eligible">{notifText}</p>
      </div>
    </div>
  );
}
