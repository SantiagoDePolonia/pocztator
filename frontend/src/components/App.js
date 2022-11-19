
import { Grid, Typography } from "@mui/material";
import PocztatorForm from "./PocztatorForm";
import logo from "../logo.png";

function App() {
  return (
    <div>
      <header style={{textAlign:"center"}}>
        <img src={logo} alt="Pocztator" style={{maxWidth:"300px"}} />
      </header>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sm={8} xs={10} md={6}>
          <PocztatorForm />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
