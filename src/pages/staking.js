import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { toast } from "react-toastify";

import "../styles/staking.css";
import refresh from "../img/Refresh Button.png";

import Stake from "../components/stake";
import UnStake from "../components/unstake";
import Claim from "../components/claim";
import Bar from "../components/progressbar";
import { formatCubeId, formatError } from "../global/utils";
import { useEthers } from "@usedapp/core";
import {
  useBalance,
  useGetApprovedForAll,
  useSetApprovalForAll,
  useTokens,
} from "../hooks/useVoxelsNFT";
import {
  useCalculateRewards,
  useClaimRewards,
  useDeposit,
  useStakedTokens,
  useWithdraw,
} from "../hooks/useVoxelsStaking";
import { VOXELS_STAKING } from "../global/constants";

const Staking = () => {
  const [stake, setStake] = useState(true);
  const [unStake, setUnStake] = useState(false);
  const [claim, setClaim] = useState(false);

  const [stakeSelected, setStakeSelected] = useState([]);
  const [unstakeSelected, setUnstakeSelected] = useState([]);
  const { account } = useEthers();
  const tokens = useTokens(account);
  const stakedTokens = useStakedTokens(account);
  const claimable = useCalculateRewards(account, stakedTokens);
  const totalStaked = useBalance(VOXELS_STAKING);
  const approved = useGetApprovedForAll(account, VOXELS_STAKING);
  const { state: claimState, claimRewards } = useClaimRewards();
  const { state: stakeState, depositCubes } = useDeposit();
  const { state: unstakeState, withdrawCubes } = useWithdraw();
  const { setApprovalForAll } = useSetApprovalForAll();

  const stakeBtn = () => {
    setStake(true);
    setUnStake(false);
    setClaim(false);
  };

  const unStakeBtn = () => {
    setStake(false);
    setUnStake(true);
    setClaim(false);
  };

  const unClaimBtn = () => {
    setStake(false);
    setUnStake(false);
    setClaim(true);
  };

  const handleStake = () => {
    if (stakeSelected.length) {
      if (!approved) {
        setApprovalForAll(VOXELS_STAKING, true);
      } else {
        depositCubes(stakeSelected);
      }
    } else {
      toast.error("You should select at least one voxel!", {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
      });
    }
  };

  const handleUnstake = () => {
    if (unstakeSelected.length) {
      withdrawCubes(unstakeSelected);
    } else {
      toast.error("You should select at least one voxel!", {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
      });
    }
  };

  const onStakeSelect = (tokenId, selected) => {
    const index = stakeSelected.indexOf(tokenId);
    if (selected && index === -1) {
      setStakeSelected([...stakeSelected, tokenId]);
      return;
    }
    if (!selected && index !== -1) {
      const temp = [...stakeSelected];
      temp.splice(index, 1);
      setStakeSelected(temp);
    }
  };

  const onUnstakeSelect = (tokenId, selected) => {
    const index = unstakeSelected.indexOf(tokenId);
    if (selected && index === -1) {
      setUnstakeSelected([...unstakeSelected, tokenId]);
      return;
    }
    if (!selected && index !== -1) {
      const temp = [...unstakeSelected];
      temp.splice(index, 1);
      setUnstakeSelected(temp);
    }
  };

  const onClaim = () => {
    claimRewards(stakedTokens);
  };

  const stakeSelects = useMemo(() => {
    return stakeSelected.map((num) => formatCubeId(num)).join(", ");
  }, [stakeSelected]);

  const unstakeSelects = useMemo(() => {
    return unstakeSelected.map((num) => formatCubeId(num)).join(", ");
  }, [unstakeSelected]);

  useEffect(() => {
    const state = stake ? stakeState : claim ? claimState : unstakeState;
    if (state.status === "Exception" || state.status === "Fail") {
      toast.error(formatError(state.errorMessage), {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
      });
    }
  }, [claimState, stakeState, unstakeState, stake, claim]);

  return (
    <div className="staking">
      <div className="voxel-box">
        <div className="stake-nav  flex">
          <Link to="/staking">
            <div
              className={
                stake ? "kasumi stake-nav-btn-active" : "kasumi stake-nav-btn"
              }
              onClick={stakeBtn}
            >
              STAKE
            </div>
          </Link>
          <Link to="/staking/unstake">
            <div
              className={
                unStake ? "kasumi stake-nav-btn-active" : "kasumi stake-nav-btn"
              }
              onClick={unStakeBtn}
            >
              UNSTAKE
            </div>
          </Link>
          <Link to="/staking/claim">
            <div
              className={
                claim ? "kasumi stake-nav-btn-active" : "kasumi stake-nav-btn"
              }
              onClick={unClaimBtn}
            >
              CLAIM $WIRE
            </div>
          </Link>
        </div>
        <div className="voxel-box-title">
          <img src={refresh} className="refresh" alt="refresh" />
        </div>
        <Routes>
          <Route
            path="/unstake"
            element={
              <UnStake onCubeSelect={onUnstakeSelect} tokens={stakedTokens} />
            }
          />
          <Route path="/claim" element={<Claim rewards={claimable} />} />
          <Route
            path="/"
            element={<Stake onCubeSelect={onStakeSelect} tokens={tokens} />}
          />
        </Routes>
      </div>
      <div className={stake ? "show-stake" : "hide"}>
        {!!stakeSelected.length && (
          <p className="agency ">Voxel {stakeSelects} has been selected</p>
        )}
        <button
          className="mint-button kasumi"
          href="#mint"
          onClick={handleStake}
        >
          {approved ? "STAKE" : "APPROVE"}
        </button>
        <div className="line" />
        <Bar
          now={`${(totalStaked / 6363) * 100}%`}
          label={`Voxels Staked: ${totalStaked}/6363`}
        />
      </div>
      <div className={unStake ? "show-unstake" : "hide"}>
        {!!unstakeSelects.length && (
          <p className="agency ">Voxel {unstakeSelects} has been selected</p>
        )}
        <button className="mint-button kasumi" onClick={handleUnstake}>
          UNSTAKE
        </button>
        <div className="line" />
        <Bar
          now={`${(totalStaked / 6363) * 100}%`}
          label={`Voxels Staked: ${totalStaked}/6363`}
        />
      </div>
      <div className={claim ? "show-claim" : "hide"}>
        <button className="mint-button kasumi" onClick={onClaim}>
          CLAIM $WIRE
        </button>
        <div className="line" />
        <Bar
          now={`${(totalStaked / 6363) * 100}%`}
          label={`Voxels Staked: ${totalStaked}/6363`}
        />
      </div>
    </div>
  );
};

export default Staking;
