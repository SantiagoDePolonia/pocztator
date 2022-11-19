
import { Grid, Typography } from "@mui/material";
import PocztatorForm from "./PocztatorForm";

function App() {
  return (
    <div className="App">
      <header>
        <Typography variant="h1">Logo</Typography>
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
