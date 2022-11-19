import { Button, FormGroup, Input } from "@mui/material";
import { useEffect, useState } from "react";

function PocztatorForm() {
  const [selectedFile, setSelectedFile] = useState(undefined);

  useEffect(() => {
    if(!!selectedFile) {
      console.log("selectedFile", selectedFile);
    }
  }, [selectedFile]);

  return (
    <FormGroup>
      <Input 
        style={{marginTop: "5em"}}
        type='file'
        onChange={(e) => setSelectedFile(e.target.files[0])}
      />
      <Button style={{marginTop:"2em"}} variant={"contained"} pt={3} pb={3}>Wgraj plik do weryfikacji dla Poczty Polskiej</Button>
    </FormGroup>
  );
}

export default PocztatorForm;