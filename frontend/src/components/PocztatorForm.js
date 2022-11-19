import { Button, FormGroup, Input } from "@mui/material";
import { useEffect, useState } from "react";
import validators from '../validators';

function PocztatorForm() {
  const [selectedFile, setSelectedFile] = useState(undefined);

  useEffect(() => {
    if(!!selectedFile) {
      console.log("selectedFile", selectedFile);
      // 1. VALIDATE NAME
      const filename = selectedFile.name;
      let errors = {};
      validators.forEach((fun) => {
        const result = fun(filename);
        if(result) {
          errors = {...errors, ...result};
        }
      });
      
      console.log("errors", errors);

      // 2. VALIDATE MARGINS ON THE BACKEND
    }
  }, [selectedFile]);

  return (
    <FormGroup>
      <Input
        style={{marginTop: "5em"}}
        type='file'
        onChange={(e) => setSelectedFile(e.target.files[0])}
      />
      <Button style={{marginTop:"2em"}} variant={"contained"} pt={3} pb={3}>
        Wgraj plik do weryfikacji dla Poczty Polskiej
      </Button>
    </FormGroup>
  );
}

export default PocztatorForm;