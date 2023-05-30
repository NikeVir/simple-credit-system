import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button,SvgIcon } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { connectWallet, getCurrentWalletConnected } from "./utils/interact.js";
import { Link } from 'react-router-dom';
function App() {

  return (
    <div >
         <CssBaseline />
      <Container  >
        <Box sx={{ 
          bgcolor: '#3acef1', 
          height: '80vh',
          width:"100%",
          marginTop:"10vh",
          display:"flex",
          flexDirection:"column",
          justifyContent:'center',
          alignItems:"center" 
          
          }}>
            <SvgIcon sx={{color:"white",fontSize:"100px"}} component={EmojiEmotionsIcon} inheritViewBox />
          <Box sx={{fontSize:"4rem",fontFamily:"monospace", fontWeight:"bold",textAlign:"center"}}>Hello! Welcome to<br/> Decentralized Credit System</Box>
          <Button sx ={{
            border:"2px solid grey",
            fontWeight:"bold",
            fontSize:"20px"
          }}
          
          ><Link to="/credit">Go to credits</Link></Button>
          </Box>
      </Container>
    </div>
  );
}

export default App;
