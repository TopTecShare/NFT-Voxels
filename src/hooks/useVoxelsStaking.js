import { Interface } from "@ethersproject/abi";
import { Contract } from "@ethersproject/contracts";
import { useContractCall, useContractFunction } from "@usedapp/core";

import VoxelsStakingABI from "../global/abis/VoxelsStaking.json";

import { BIG_ZERO, VOXELS_STAKING } from "../global/constants";

export const useDeposit = () => {
  const abi = new Interface(VoxelsStakingABI);
  const contract = new Contract(VOXELS_STAKING, abi);
  const { send, state } = useContractFunction(contract, "deposit");
  return {
    state,
    depositCubes: send,
  };
};

export const useWithdraw = () => {
  const abi = new Interface(VoxelsStakingABI);
  const contract = new Contract(VOXELS_STAKING, abi);
  const { send, state } = useContractFunction(contract, "withdraw");
  return {
    state,
    withdrawCubes: send,
  };
};

export function useStakedTokens(address) {
  const abi = new Interface(VoxelsStakingABI);
  const [tokens] = useContractCall({
    abi,
    address: VOXELS_STAKING,
    method: "depositsOf",
    args: [address],
  }) ?? [[]];

  return tokens.map((token) => Number(token.toString()));
}

export function useCalculateRewards(address, tokenIds) {
  const abi = new Interface(VoxelsStakingABI);
  const [rewards] = useContractCall({
    abi,
    address: VOXELS_STAKING,
    method: "calculateRewards",
    args: [address, tokenIds],
  }) ?? [BIG_ZERO];

  return rewards;
}

export function useClaimRewards() {
  const abi = new Interface(VoxelsStakingABI);
  const contract = new Contract(VOXELS_STAKING, abi);
  const { send, state } = useContractFunction(contract, "claimRewards");
  return {
    state,
    claimRewards: send,
  };
}
