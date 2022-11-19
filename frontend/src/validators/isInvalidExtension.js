import getExtension from "./helpers/getExtension";

function isInvalidExtension(filename) {
  const fileExtension = getExtension(filename);

  if(fileExtension !== "pdf") {
    return {"WT_NOT_PDF": "Podany plik, nie jest plikiem PDF"};
  }

  return false;
}

export default isInvalidExtension;