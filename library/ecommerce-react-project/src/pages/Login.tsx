import { Grid, Paper, TextField ,Button} from "@mui/material"
import './login.css'
import { Link } from "react-router-dom"
export let Login = ()=>{
    return <div className="container1">
<Paper>



<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
    <h1>login page</h1>
    <TextField id="outlined-basic" label="Email" variant="outlined" />
    <br />
    <TextField id="outlined-basic" label="password" variant="outlined" />
    <br />
    <Button variant="contained">Login</Button>
    <Link to={'/register'}>
    <Button variant="contained">Regsiter</Button>
    </Link>
</Grid>

</Paper>

    </div>

}