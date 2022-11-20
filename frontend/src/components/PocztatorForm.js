import { Alert, AlertTitle, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import validators from '../validators';

import pocztaLogo from '../poczta-polska-logo.png';
import getExtension from "../validators/helpers/getExtension";

// function getMetadata(raw) {
//   var Pages = raw.match(/\/Type[\s]*\/Page[^s]/g).length;
//   var regex = /<xmp.*?:(.*?)>(.*?)</g;
//   var meta = [{
//     Pages
//   }];
//   var matches = regex.exec(raw);
//   while (matches != null) {
//     matches.shift();
//     meta.push({
//       [matches.shift()]: matches.shift()
//     });
//     matches = regex.exec(raw);
//   }
//   console.log("meta", meta);
// }

function PocztatorForm() {
  const [selectedFile, setSelectedFile] = useState(undefined);
  const [errors, setErrors] = useState(undefined);
  const [valid, setValid] = useState(false);
  console.log("PDFJS", window.PDFJS);
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
      if(getExtension(selectedFile.name) !== 'pdf') {
        return;
      }
      // 2. Reading PDF's and checking a few properties
      let reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const additionalErrors = [];
          const arrayBuffer = e.target.result;

          const loadingTask = window.PDFJS.getDocument(arrayBuffer);

          const pdf = await loadingTask.promise;

          const page = await pdf.getPage(1);
          const view = page.view;

          // Is vertical?
          if(view[2] >= view[3]) {
            additionalErrors.push({
              id: "WT_2_1",
              message: "Plik powinien być w orientacji pionowej"
            });
          }

          // Is A4?
          const dimensions = page.getViewport(1).viewBox.map(n => Math.round(n / 72 * 30));
          console.log("dimensions", dimensions);
          if(dimensions[2] != 248 || dimensions[3] != 351) {
            additionalErrors.push({
              id: "WT_2_2",
              message: "Podany plik nie jest w formacie A4"
            });
          }

          console.log("page.view", page.view);
          console.log("page", page);
          setErrors([...errors, ...additionalErrors]);
          if(additionalErrors.length){
            setValid(false);
          }
        } catch (e) {
          if(e.message === "No password given") {
            setErrors([...errors, {
              id:"WD_2_4",
              message: "Plik PDF nie powinien być zabezpieczony hasłem! Zdejmij blokadę przed wysłaniem"
            }]);
          } else {
            setErrors([...errors, {
              id:"WD_PDF_INWALID",
              message: "Plik PDF jest niepoprawny: "+e.message
            }]);
          }
          setValid(false);
        }
      };
      reader.readAsArrayBuffer(selectedFile);
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
          Twój plik jest najprawdopodobniej poprawny i może być wysłany do Poczty Polskiej
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