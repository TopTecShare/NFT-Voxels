import { BigNumber } from "@ethersproject/bignumber";

export const BIG_ZERO = BigNumber.from("0");

// === Addresses ===
export const VOXELS_NFT = "0x064d31aB21653174A4ad23b9c984d1A6Abe5c705";
export const WIRE_TOKEN = "0x79900F2b09DD36FD6Bf071B088066699aa209E90";
export const VOXELS_STAKING = "0xd92046a2Bc0ff5A0da5c45A3d9dF5590202dE2c7";

// === Merkle Tree ===
export const MERKLE_TREE_DATA_3 = {
  "0x7fDE1a599FCEd3139C7e8F2FCCE92526FF65A649": {
    leaf: "0xf5a94117f5a80fbc2f6508f0003aaedb3d5163b29d7d8c6d65b2f913aa60440a",
    proof: [],
  },
};

export const MERKLE_TREE_DATA_1 = {
  "0x163fe55bfC66115503BA3DE2D0d64b462f3fb90D": {
    leaf: "0xcee7b70e19110d8ee3cf5bc53d8d9d11318b3c6e0a961fb974ff484ce07bcead",
    proof: [
      "0x4809722789b6afc45ea0293736a8afa1c2ea603570feebbd4b81151148968fa5",
    ],
  },
  "0xe86AeBc40Bd023f8e1da04fB5A069fF823f8C62D": {
    leaf: "0x4809722789b6afc45ea0293736a8afa1c2ea603570feebbd4b81151148968fa5",
    proof: [
      "0xcee7b70e19110d8ee3cf5bc53d8d9d11318b3c6e0a961fb974ff484ce07bcead",
    ],
  },
};
