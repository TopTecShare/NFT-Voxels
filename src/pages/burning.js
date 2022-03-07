import refresh from "../img/Refresh Button.png";
import Box from "../components/box";
import { toast } from "react-toastify";
import { useEthers, useTokenBalance } from "@usedapp/core";
import { WIRE_TOKEN } from "../global/constants";
import { formatAmount, formatCubeId, formatError } from "../global/utils";
import {
  useBurnTokenAmount,
  useGenesisMint,
  useTokens,
} from "../hooks/useVoxelsNFT";
import { useEffect, useMemo, useState } from "react";

import "../styles/burning.css";

const Burning = () => {
  const { account } = useEthers();
  const tokens = useTokens(account);
  const tokenBalance = useTokenBalance(WIRE_TOKEN, account);
  const burnTokenAmount = useBurnTokenAmount();
  const { state: burnState, genesisMint } = useGenesisMint();

  const [burnSelected, setBurnSelected] = useState([0, 0, 0]);

  const onBurnSelect = (tokenId, selected) => {
    const index = burnSelected.indexOf(tokenId);
    const cubeType = Math.floor((tokenId - 1) / 2121);
    if (selected && index === -1 && burnSelected[cubeType] === 0) {
      const temp = [...burnSelected];
      temp[cubeType] = tokenId;
      setBurnSelected(temp);
      return;
    }
    if (!selected && index !== -1 && burnSelected[cubeType] !== 0) {
      const temp = [...burnSelected];
      temp[cubeType] = 0;
      setBurnSelected(temp);
    }
  };

  const burnSelects = useMemo(() => {
    return burnSelected
      .filter((id) => !!id)
      .map((num) => formatCubeId(num))
      .join(", ");
  }, [burnSelected]);

  const onGenesisMint = () => {
    const unselected = burnSelected.indexOf(0);
    if (unselected !== -1) {
      toast.error(`You should select Cube ${unselected + 1}!`, {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
      });
      return;
    }
    if (tokenBalance.sub(burnTokenAmount).isNegative()) {
      toast.error(
        `You should have at least ${formatAmount(burnTokenAmount)} $WIRE!`,
        {
          position: toast.POSITION.TOP_RIGHT,
          hideProgressBar: true,
        }
      );
      return;
    }
    genesisMint(burnSelected);
  };

  useEffect(() => {
    if (burnState.status === "Exception" || burnState.status === "Fail") {
      toast.error(formatError(burnState.errorMessage), {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
      });
    }
  }, [burnState]);

  return (
    <div className="burning">
      <div className="voxel-box">
        <div className="voxel-box-title">
          <p className="agency balance">
            Balance: {formatAmount(tokenBalance)} WIRE
          </p>
          <img src={refresh} className="refresh" alt="refresh" />
        </div>
        <div className="voxel-sections">
          {[...Array(3).keys()].map((idx) => {
            const cubeTokens = tokens.filter(
              (tokenId) =>
                tokenId >= idx * 2121 + 1 && tokenId <= (idx + 1) * 2121
            );
            return (
              <div className="section" key={idx}>
                <p>CUBE {idx + 1}</p>
                <div className="flex voxel-pos">
                  {cubeTokens.map((tokenId) => {
                    const burnTokenId =
                      burnSelected[Math.floor((tokenId - 1) / 2121)];
                    return (
                      <Box
                        onSelect={(selected) => onBurnSelect(tokenId, selected)}
                        key={tokenId}
                        allowed={burnTokenId === 0 || burnTokenId === tokenId}
                      >
                        {formatCubeId(tokenId)}
                      </Box>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <p className="balance agency">
          * Eligible for burn. Select one Cube from EACH group. *
        </p>
      </div>
      <div>
        {!!burnSelects.length && (
          <p className="agency select-cube">Cube {burnSelects} selected</p>
        )}
      </div>
      <div>
        <button className="kasumi mint-button" onClick={onGenesisMint}>
          BURN
        </button>
      </div>
      <p className="agency cost-cube">
        Cost: {formatAmount(burnTokenAmount)} $WIRE
      </p>
    </div>
  );
};

export default Burning;
