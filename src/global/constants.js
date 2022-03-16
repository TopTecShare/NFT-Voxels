import { BigNumber } from "@ethersproject/bignumber";

export const BIG_ZERO = BigNumber.from("0");

// === Addresses ===
export const VOXELS_NFT = "0x064d31aB21653174A4ad23b9c984d1A6Abe5c705";
export const WIRE_TOKEN = "0x79900F2b09DD36FD6Bf071B088066699aa209E90";
export const VOXELS_STAKING = "0xd92046a2Bc0ff5A0da5c45A3d9dF5590202dE2c7";

// === Merkle Tree ===
export const MERKLE_TREE_DATA_3 = {
  "0x64C408D2F4327bDfA5B275e5dAF8D5B0ADF871eC": {
    leaf: "0x7ebc03527473112559967171c14205bd0081469297bef26a27f45d2471aed5f7",
    proof: [
      "0x05e003741c5ae0508ba9e6aec5e133e06a0b71b3f1ee8eaf2115309edcd800d2",
    ],
  },
  "0xd39f2c5F49453ea54794AA480fCd550eabD56A5A": {
    leaf: "0x05e003741c5ae0508ba9e6aec5e133e06a0b71b3f1ee8eaf2115309edcd800d2",
    proof: [
      "0x7ebc03527473112559967171c14205bd0081469297bef26a27f45d2471aed5f7",
    ],
  },
};

export const MERKLE_TREE_DATA_1 = {
  "0x51087Fb146C4983AF55e520C6b927acEf391511C": {
    leaf: "0x3e953d7e9d888c62039653b3f98eb826ae3bc153a272bd28d14bed6565bdd199",
    proof: [
      "0x47b5ebfb0e7d82fc3c3cf1e6952c011be7b9d9a7039db76fd119ae7c1be90ac2",
      "0xc6394276cbe2c33deef535585be5f01035f7641273cc87edd95ea215e8a868f9",
    ],
  },
  "0x98e82f6484f446F6F3a81971bdd9d68121E747AE": {
    leaf: "0x47b5ebfb0e7d82fc3c3cf1e6952c011be7b9d9a7039db76fd119ae7c1be90ac2",
    proof: [
      "0x3e953d7e9d888c62039653b3f98eb826ae3bc153a272bd28d14bed6565bdd199",
      "0xc6394276cbe2c33deef535585be5f01035f7641273cc87edd95ea215e8a868f9",
    ],
  },
  "0x8011B2696e654fcB268A8877f4A7574800bBde76": {
    leaf: "0x74af80de55e33babb154ec0ee83e5381b3a5c14e2775fb97ad3d64c85c1a5e2e",
    proof: [
      "0xd08d74c9e2af30150e767eac58d0a4dd3529b033de0cd067d0b72ca90b88a8c7",
      "0x1a8ff4e9cbab46cee280e144d4d28b1972111cd4c6ba0d591fa298bbd5cbe47a",
    ],
  },
  "0xaC8223FEeE85508319FdA40a230Ffb23F935dcbb": {
    leaf: "0xd08d74c9e2af30150e767eac58d0a4dd3529b033de0cd067d0b72ca90b88a8c7",
    proof: [
      "0x74af80de55e33babb154ec0ee83e5381b3a5c14e2775fb97ad3d64c85c1a5e2e",
      "0x1a8ff4e9cbab46cee280e144d4d28b1972111cd4c6ba0d591fa298bbd5cbe47a",
    ],
  },
};
