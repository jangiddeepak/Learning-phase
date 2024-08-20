import { Grid, Paper, TextField ,Button} from "@mui/material"
import './login.css'
import { Link } from "react-router-dom"
export let Regsiter = ()=>{
    return <div className="container1">
<Paper>



<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
    <h1>Register page</h1>
    <TextField id="outlined-basic" label="name" variant="outlined" /><br />
    <TextField id="outlined-basic" label="phonenumber" variant="outlined" /><br />
    <TextField id="outlined-basic" label="Email" variant="outlined" />
    <br />
    <TextField id="outlined-basic" label="password" variant="outlined" />
    <br />
    <Link to={'/login'}>
    <Button variant="contained">Login</Button>
    </Link>

        <Button variant="contained">Regsiter</Button>
</Grid>

</Paper>

    </div>

}