import React,{useState,useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Web3Modal from "web3modal";
import {ethers} from 'ethers'
import { connectWallet ,getCurrentWalletConnected } from './utils/interact';
import SCSABI from './utils/SimpleCreditSystem.json'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Link } from 'react-router-dom';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Credit() {

    const [waddress,setWaddress] = useState('');
    const [credits,setCredits] = useState("_");
    const [raddress, setRaddress] = useState("");
    const [amount, setAmount] = useState("");

    const [maddress, setMaddress] = useState("");
    const [mamount, setMamount] = useState("");

    const [open, setOpen] = useState(false);
    const [txn, setTxn] = useState("")

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    useEffect(()=>{
        const getWalletConnected=async()=>{
            const walletResponse = await connectWallet();
            setWaddress(walletResponse.address);
            getCredits()
        }
        if(waddress==''){
            getWalletConnected();
        }
            
    },[])


   const getCredits =async()=>{
        const walletResponse = await connectWallet();
        setWaddress(walletResponse.address);
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        let contract = new ethers.Contract("0x42604eC59D8dB5690D2FA8C78F29De90505f77e4", SCSABI.abi, signer)
        let transaction = await contract.getbalance(walletResponse.address)
        console.log(Number(transaction._hex));
        setCredits(Number(transaction._hex));
    }

    const TransferCredit =async()=>{
        try{
            const web3Modal = new Web3Modal()
            const connection = await web3Modal.connect()
            const provider = new ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner();
            let contract = new ethers.Contract("0x42604eC59D8dB5690D2FA8C78F29De90505f77e4", SCSABI.abi, signer)
            await contract.transferCredits(raddress,amount).then((tx)=>{
                setTxn(tx.hash)
                setOpen(true);
    
            }).catch((error)=>{
                alert(error.error.message)
            })

        }
        catch(err){
            console.log(err);
        }
    }


    const mintCredits =async()=>{
        try{
            const web3Modal = new Web3Modal()
            const connection = await web3Modal.connect()
            const provider = new ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner();
            let contract = new ethers.Contract("0x42604eC59D8dB5690D2FA8C78F29De90505f77e4", SCSABI.abi, signer)
            await contract.mintCredits(maddress,mamount).then((tx)=>{
                setTxn(tx.hash)
                setOpen(true);
    
            }).catch((error)=>{
                alert(error.error.message)
            })

        }
        catch(err){
            console.log(err)
        }
    }

    

    

  return (
    <div>

    <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Transaction is Successful <a href={`https://sepolia.etherscan.io/tx/${txn}`} style={{color:"white",textDecoration:"underline" }}>{txn.substring(0, 20) +
          "......" }</a>
        </Alert>
      </Snackbar>    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        
          <Typography  component="div" sx={{ flexGrow: 1,fontWeight:"bold" }}>
           <Link to ="/home">CREDITSCORE</Link> 
          </Typography>
          <Button sx={{border:"1px solid white", color:"white",fontWeight:"bold"}} >{credits} Credits</Button>
        </Toolbar>
      </AppBar>
    </Box>

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >   
    <p style={{fontSize:"18px"}}>Mint Credits to address</p>
    <TextField id="outlined-basic" label="Address" variant="outlined" value={maddress} onChange={(e)=>setMaddress(e.target.value)} />
        <TextField id="outlined-basic" label="Amount" variant="outlined" value={mamount} onChange={(e)=>setMamount(e.target.value)} />
        <Button variant="outlined" onClick={mintCredits}>MINT</Button>
        </Box>


        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <p style={{fontSize:"18px"}}>Transfer credits to address</p>
    <TextField id="outlined-basic" label="Address" variant="outlined" value={raddress} onChange={(e)=>setRaddress(e.target.value)} />
        <TextField id="outlined-basic" label="Amount" variant="outlined" value={amount} onChange={(e)=>setAmount(e.target.value)} />

        <Button variant="outlined" onClick={TransferCredit}>TRANSFER</Button>
        </Box>
    </div>
  )
}
