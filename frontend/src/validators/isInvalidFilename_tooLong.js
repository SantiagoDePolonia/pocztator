
const LENGTH_LIMIT = 255;

function isInvalidFilename_tooLong(filename) {
  if(filename.length > LENGTH_LIMIT){
    return {
      id: "WT_2_5_d",
      message: "Długość nazwy pliku wraz z rozszerzeniem max 255"
    }
  }

  return false;
}

export default isInvalidFilename_tooLong;
