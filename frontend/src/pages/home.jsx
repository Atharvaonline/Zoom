import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { IconButton, TextField } from "@mui/material";
import {Button} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { AuthContext } from "../contexts/AuthContext";


 function HomeComponent() {

    let navigate = useNavigate();

    const [meetingCode, setMeetingCode] = useState("");

    const{addToUserHistory} = useContext(AuthContext);


    let handleJoinVideocall = async () => {
        await addToUserHistory(meetingCode)
       navigate(`/${meetingCode}`)
    }
    const primaryButtonSx = {
        background: "linear-gradient(135deg, #2A2E35 0%, #7B8FA1 70%, #7B8FA1 100%)",
        color: "#E4E9EC",
        borderRadius: "12px",
        px: 3,
        fontWeight: 700,
        textTransform: "none",
        boxShadow: "0 15px 30px rgba(0,0,0,0.35)",
        transition: "all 0.3s ease",
        "&:hover": {
            background: "linear-gradient(135deg, #7B8FA1 0%, #7B8FA1 90%)",
            boxShadow: "0 25px 45px rgba(0,0,0,0.45)",
            transform: "translateY(-2px)"
        }
    };

    return(
       <div className="pageShell">

       <div className="navBar">

        <div style={{display: "flex", alignItems: "center"}}>
            <div className="logo">
                <span className="logoZ">Z</span>
                <span className="logoV">V</span>
                <span className="logoText">Call</span>
            </div>
        </div>

        <div style={{display: "flex",alignItems: "center" }}>
            <IconButton sx={{color: "#7B8FA1"}} onClick={
                ()=>{

                    navigate("/history")
               
                }
            }>
                <RestoreIcon/>
            </IconButton>
            <p>History</p>

            <Button sx={primaryButtonSx} onClick={()=> {
                localStorage.removeItem("token")
                navigate("/auth")
            }}>

                Logout

            </Button>

        </div>

       </div>
       <div className="meetContainer">
        <div className="leftPanel">
            <div>
            <h2>Providing Quality Video Calling Service</h2>
            <div style={{display: "flex" , gap: "10px"}}>
                <TextField onChange={e => setMeetingCode(e.target.value) } id="outline-basic" label="Meeting Code" variant="outlined" InputLabelProps={{style:{color:"#7B8FA1"}}} InputProps={{style:{color:"#E4E9EC"}}}></TextField>
                <Button sx={primaryButtonSx} onClick={handleJoinVideocall}>Join</Button>
            </div>
        </div>
        </div>

        <div className="rightPanel">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=700&q=80" alt="Video collaboration" />
        </div>
       </div>
       
       </div>
    )
}

export default withAuth(HomeComponent);