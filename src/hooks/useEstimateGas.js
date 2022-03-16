import { Interface } from "@ethersproject/abi";
import { Contract } from "@ethersproject/contracts";
import { useEthers } from "@usedapp/core";
import VoxelsNFTABI from "../global/abis/VoxelsNFT.json";
import { VOXELS_NFT } from "../global/constants";

export default function useEstimateGas() {
  const abi = new Interface(VoxelsNFTABI);
  const { library } = useEthers();

  const whitelistAmountGas = async (...args) => {
    const contract = new Contract(VOXELS_NFT, abi, library.getSigner());
    const estimatedGas = await contract.estimateGas.whitelistAmountMint(
      ...args
    );

    return estimatedGas;
  };

  const whitelistSelectionGas = async (...args) => {
    const contract = new Contract(VOXELS_NFT, abi, library.getSigner());
    const estimatedGas = await contract.estimateGas.whitelistSelectionMint(
      ...args
    );

    return estimatedGas;
  };

  const publicMintGas = async (...args) => {
    const contract = new Contract(VOXELS_NFT, abi, library.getSigner());
    const estimatedGas = await contract.estimateGas.publicMint(...args);

    return estimatedGas;
  };

  return { whitelistAmountGas, whitelistSelectionGas, publicMintGas };
}
