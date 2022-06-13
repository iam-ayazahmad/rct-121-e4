import { Link } from "react-router-dom"

export const Home=()=>{
    return(
        <div>
            <h1 style={{textDecoration:"none",padding:"10px 20px",border:"3px solid black" ,margin:"10px",borderRadius:"5px"}} >Home Page</h1>
            <div style={{margin:"50px"}}><Link style={{textDecoration:"none",padding:"10px 20px",border:"3px solid black" ,margin:"100px",borderRadius:"5px"}} to="/company">COMPNIES</Link></div>
            <div><Link style={{textDecoration:"none",padding:"10px 20px",border:"3px solid black" ,margin:"10px",borderRadius:"5px"}}  to="/employee"> EMPLOYEES</Link></div>

        </div>
    )
}