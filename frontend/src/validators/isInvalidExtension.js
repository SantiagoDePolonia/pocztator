import getExtension from "./helpers/getExtension";

function isInvalidExtension(filename) {
  const fileExtension = getExtension(filename);

  if(fileExtension !== "pdf") {
    return {
      id: "WT_NOT_PDF",
      message:"Podany plik nie jest plikiem PDF"
    };
  }

  return false;
}

export default isInvalidExtension;