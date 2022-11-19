
const PROHIBITED_CHARACTERS = ['~','"','#','%','&','*',':','<','>','?','!','/','\\','{','|','}'];

function isInvalidFilename_prohibitedCharacters(filename) {

  for(let i=0; i<PROHIBITED_CHARACTERS.length; i++) {
    if(filename.split("").find( char => char === PROHIBITED_CHARACTERS[i])) {
      return {
        id: "WT_2_5_a",
        message: "Nazwa pliku zawiera niedozwolone znaki specjalne, takie jak:~\"#%&*:<>?!/\\{|}"
      }
    }
  }

  return false;
}

export default isInvalidFilename_prohibitedCharacters;