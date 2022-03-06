import Box from "./box";

import "../styles/burning.css";
import { formatCubeId } from "../global/utils";

export default function Stake({ onCubeSelect, tokens }) {
  return (
    <div className="stake">
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
                {cubeTokens.map((tokenId) => (
                  <Box
                    onSelect={(selected) => onCubeSelect(tokenId, selected)}
                    key={tokenId}
                  >
                    {formatCubeId(tokenId)}
                  </Box>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
