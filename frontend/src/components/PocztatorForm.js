import { Alert, AlertTitle, Button } from "@mui/material";
import { useEffect, useState } from "react";
import validators from '../validators';

function PocztatorForm() {
  const [selectedFile, setSelectedFile] = useState(undefined);
  const [errors, setErrors] = useState(undefined);
  const [valid, setValid] = useState(false);


  useEffect(() => {
    if(!!selectedFile) {
      console.log("selectedFile", selectedFile);

      // 1. VALIDATE NAME
      const filename = selectedFile.name;
      const errors = [];
      validators.forEach((fun) => {
        const result = fun(filename);
        if(result) {
          errors.push(result);
        }
      });
      
      setErrors(errors);
      setValid(!errors.length);
      // 2. VALIDATE MARGINS ON THE BACKEND
    }
  }, [selectedFile, errors]);
  
  const errorsMapped = errors.map(error)
  return (
    <>
      <Button fullWidth style={{marginTop:"2em"}} variant={"contained"} pt={3} pb={3} component="label">
        Wgraj plik do weryfikacji dla Poczty Polskiej
        <input
          hidden
          type='file'
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
      </Button>
      {valid && 
        <Alert severity="success">
          <AlertTitle>Poprawny!</AlertTitle>
          Twój plik jest poprawny i moze być wysłany do Poczty Polskiej
        </Alert>
      }
      {errors.length &&
        <Alert severity="error">
          <AlertTitle>Plik NIEPOPRAWNY</AlertTitle>
          Popraw ponizsze błędy
          This is an error alert — <strong>check it out!</strong>
        </Alert>
      }
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://mc.bip.gov.pl/fobjects/download/999150/do-publikacji-minimalne_wymagania_techniczne_v-1-0-pdf.html"
        >
          Wymagania techniczne pliku
        </a>
      </div>
    </>
  );
}

export default PocztatorForm;