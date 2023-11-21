import { useContext,useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {InputeContext} from "../ProductContext/InputeContext";
import {ProductContext} from "../ProductContext/ProductContext";
// icons
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import WhatsappSendData from "./WhatsappSendData";
import moment from "moment/moment";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
export default function Input_Btn() {
    const {product, setproduct} = useContext(ProductContext)
   const {inpute, setinpute}=useContext(InputeContext)

    const [open, setOpen] =useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // HandelClickAdd

    function HandelClickAdd() {
        if (inpute.inputePric && inpute.inputeTitle !== ""){
            const newProduct = {
                id: uuidv4(),
                title: inpute.inputeTitle,
                pric: inpute.inputePric,
                cash:false,
                moment:moment().format('LT')
            }
            const updatedProduct = [...product, newProduct];
            localStorage.setItem("product",JSON.stringify(updatedProduct))
            setproduct(updatedProduct)
        }else {
            alert('الادخال فارغ33')
            alert('الادخال فارغ33')

        }



        setinpute({
            inputeTitle: "",
            inputePric: "",
        });
    }

    // HandelClickAdd ---
    //HandelDelletAll
    function HandelDelletAll(){
        const DelletAll = product.filter((t)=>{
            return !t
        })
        localStorage.setItem("product",JSON.stringify(DelletAll))

        setproduct(DelletAll)
        setOpen(false);

    }
    //---HandelDelletAll

    return (
        <>
            {/* Dialog*/}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={HandelDelletAll}>Delete all</Button>
                    <Button onClick={handleClose} >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            {/* --- Dialog*/}
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",margin:"5px"}}>
                <label>The Product: </label>
                <input style={{fontWeight:"bold" ,margin:"5px"}} value={inpute.inputeTitle} onChange={(e) => {
                    setinpute({...inpute, inputeTitle: e.target.value})
                }}/>
                <label> pric:</label>
                <input style={{fontWeight:"bold",margin:"5px"}} type={"number"} value={inpute.inputePric} onChange={(e) => {
                    setinpute({...inpute, inputePric: e.target.value})
                }}/>
                <div style={{display:"flex",
                    justifyContent:"space-between",
                    alignItems:"center"
                }}>

                   <WhatsappSendData/>
                    <button onClick={HandelClickAdd} style={{
                        padding: "10px",
                        margin: "5px",
                        width: "70px",
                        height:"70px",
                        cursor: "pointer",
                        borderRadius:"100px",
                        display:"flex",
                        justifyContent:"center",
                        textAlign:"center",
                        alignItems:"center"

                    }}><ControlPointIcon style={{fontSize:"40px"}}/>

                    </button>
                    <DeleteForeverIcon onClick={handleClickOpen} style={{
                        width: "30px",
                        height: "30px",
                        padding: "10px",
                        color: "white",
                        background: "red",
                        fontWeight: "bold",
                        borderRadius: "2000px",
                        cursor:"pointer"
                    }}/>
                </div>

            </div>
        </>
    )
}