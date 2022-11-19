import { Alert, AlertTitle, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import validators from '../validators';

import pocztaLogo from '../poczta-polska-logo.png';

function PocztatorForm() {
  const [selectedFile, setSelectedFile] = useState(undefined);
  const [errors, setErrors] = useState(undefined);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if(!!selectedFile) {

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
  }, [selectedFile, setErrors, setSelectedFile]);
  
  const errorsMapped = errors?.map(error => (<span key={error.id}>
    {error.id}: <i>{error.message}</i><br />
  </span>)) || [];

  return (
    <>
      {selectedFile && 
        <Typography variant={"h6"} style={{textAlign:"center"}}>{selectedFile.name}</Typography>
      }
      <Button fullWidth style={{marginTop:"2em", marginBottom: "2em"}} variant={"contained"} pt={3} pb={3} component="label">
        <Typography variang="h4">Wgraj plik do walidacji</Typography>
        <input
          hidden
          type='file'
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
      </Button>

      {!!errors?.length &&
        <Alert severity="error">
          <AlertTitle><strong>Plik NIEPOPRAWNY</strong> - popraw poniższe błędy</AlertTitle>
          {errorsMapped}
        </Alert>
      }

      {valid && <>
        <Alert severity="success">
          <AlertTitle>Poprawny!</AlertTitle>
          Twój plik jest poprawny i może być wysłany do Poczty Polskiej
        </Alert>
        <Typography variant="h5" style={{marginTop: "2em", marginBottom: "1em", textAlign: "center"}}>
          Możesz bezpiecznie wysłać plik do Poczty Polskiej<br />
          <img src={pocztaLogo} alt="Poczta Polska - logo" style={{marginTop:"1em", maxWidth:"150px"}} />
        </Typography>
      </>}

      <div style={{marginTop:"6em", textAlign: "center"}}>
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