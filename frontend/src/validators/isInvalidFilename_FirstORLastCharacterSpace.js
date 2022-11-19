// WT_2_5_b

import getExtension from "./helpers/getExtension";

function isInvalidFilename_FirstORLastCharacterSpace(filename) {
  const isFirstCharacterSpace = filename[0] === " ";

  const nameWithoutExtension = filename.toLowerCase().replace(getExtension(filename), "");
  const isLastCharacterSpace = nameWithoutExtension[nameWithoutExtension.length -1 ] === " ";
  if(isFirstCharacterSpace || isLastCharacterSpace) {
    return {"WT_2_5_b": "Spacje wiodące i końcowe w nazwach plików lub folderów nie są dozwolone"};
  }

  return false;
}

export default isInvalidFilename_FirstORLastCharacterSpace;
