import { Interface } from "@ethersproject/abi";
import { Contract } from "@ethersproject/contracts";
import {
  useContractCall,
  useContractCalls,
  useContractFunction,
} from "@usedapp/core";

import VoxelsNFTABI from "../global/abis/VoxelsNFT.json";
import { BIG_ZERO, VOXELS_NFT } from "../global/constants";
import { formatAmount } from "../global/utils";

export function useGetApprovedForAll(owner, operator) {
  const abi = new Interface(VoxelsNFTABI);

  const [approved] = useContractCall({
    abi,
    address: VOXELS_NFT,
    method: "isApprovedForAll",
    args: [owner, operator],
  }) ?? [false];

  return approved;
}

export function useSetApprovalForAll(owner, operator) {
  const abi = new Interface(VoxelsNFTABI);
  const contract = new Contract(VOXELS_NFT, abi);
  const { send, state } = useContractFunction(contract, "setApprovalForAll");
  return {
    state,
    setApprovalForAll: send,
  };
}

export function useMintStartTimestamp() {
  const abi = new Interface(VoxelsNFTABI);

  const startTimestamp = useContractCall({
    abi,
    address: VOXELS_NFT,
    method: "mintStartTimestamp",
    args: [],
  }) ?? [BIG_ZERO];

  return Number(startTimestamp.toString());
}

export function useBurnStartTimestamp() {
  const abi = new Interface(VoxelsNFTABI);

  const startTimestamp = useContractCall({
    abi,
    address: VOXELS_NFT,
    method: "burnStartTimestamp",
    args: [],
  }) ?? [BIG_ZERO];

  return Number(startTimestamp.toString());
}

export function useBurnTokenAmount() {
  const abi = new Interface(VoxelsNFTABI);

  const [burnTokenAmount] = useContractCall({
    abi,
    address: VOXELS_NFT,
    method: "burnTokenAmount",
    args: [],
  }) ?? [BIG_ZERO];

  return burnTokenAmount;
}

export function useInitialMintingStatus() {
  const abi = new Interface(VoxelsNFTABI);

  const pendingCount = useContractCall({
    abi,
    address: VOXELS_NFT,
    method: "pendingCount",
    args: [],
  }) ?? [BIG_ZERO];

  const totalCount = useContractCall({
    abi,
    address: VOXELS_NFT,
    method: "cubeInitialMaxItems",
    args: [],
  }) ?? [BIG_ZERO];

  const mintPrice = useContractCall({
    abi,
    address: VOXELS_NFT,
    method: "mintPrice",
    args: [],
  }) ?? [BIG_ZERO];

  return {
    pendingCount: Number(pendingCount.toString()),
    totalCount: Number(totalCount.toString()),
    mintPrice: formatAmount(mintPrice[0]),
  };
}

export function useWhitelistAmountMint() {
  const abi = new Interface(VoxelsNFTABI);
  const contract = new Contract(VOXELS_NFT, abi);
  const { send, state } = useContractFunction(contract, "whitelistAmountMint");
  return {
    state,
    whitelistAmountMint: send,
  };
}

export function usePublicMint() {
  const abi = new Interface(VoxelsNFTABI);
  const contract = new Contract(VOXELS_NFT, abi);
  const { send, state } = useContractFunction(contract, "publicMint");
  return {
    state,
    publicMint: send,
  };
}

export function useGenesisMint() {
  const abi = new Interface(VoxelsNFTABI);
  const contract = new Contract(VOXELS_NFT, abi);
  const { send, state } = useContractFunction(contract, "genesisMint");
  return {
    state,
    genesisMint: send,
  };
}

export function useBalance(address) {
  const abi = new Interface(VoxelsNFTABI);
  const balance = useContractCall({
    abi,
    address: VOXELS_NFT,
    method: "balanceOf",
    args: [address],
  }) ?? [BIG_ZERO];

  return Number(balance.toString());
}

export function useTokens(address) {
  const abi = new Interface(VoxelsNFTABI);
  const balance = useBalance(address);
  const tokens = useContractCalls(
    [...Array(balance).keys()].map((idx) => ({
      abi,
      address: VOXELS_NFT,
      method: "tokenOfOwnerByIndex",
      args: [address, idx],
    }))
  );
  return tokens.map((token) => Number((token ?? [BIG_ZERO]).toString()));
}
