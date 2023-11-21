import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ProductContext} from "../ProductContext/ProductContext";
import {useContext, useState} from "react";
import {InputeContext} from "../ProductContext/InputeContext";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
//icons
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export default function CardContext({value}) {
    // const [Cash,setCash]=useState(false)
    const [open, setOpen] = React.useState(false);
    const {product, setproduct} = useContext(ProductContext)
    // const {inpute, setinpute} = useContext(InputeContext)
    const [updatedProduct, setUpdatedProduct] = useState({
        title: value.title,
        pric: value.pric,
    });
    // Dialog
    const handleDone = () => {
        const ProductEdite = product.map((t) => {
            if (t.id === value.id) {
                // alert("t")
                return {...t, title: updatedProduct.title, pric: updatedProduct.pric}
            } else {
                // alert("f")
                return t
            }

        })
        localStorage.setItem("product", JSON.stringify(ProductEdite))

        setproduct(ProductEdite)
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // --Dialog

    function HandelDeleteClick() {
        const DeleteProduct = product.filter((Delete) => {
            return Delete.id !== value.id
        })
        localStorage.setItem("product", JSON.stringify(DeleteProduct))

        setproduct(DeleteProduct)
    }

    // const HandelEditClick = () => {
    //     // تحديث حالة الإدخال لتعكس القيم الحالية للكارت
    //     setinpute({
    //         inputeTitle: value.title,
    //         inputePrice: value.pric,
    //     });
    // };

//HandelCashClick
//     function HandelCashClick() {
//         const Data_Up =product.map((Cash)=>{
//             if(Cash.id===value.id){
//                 Cash.cash=!Cash.cash
//             }
//         })
//         setproduct(Data_Up)
//     }

        return (
            <>
                {/*Dialog*/}
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We
                            will send updates occasionally.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Title"
                            type="email"
                            fullWidth
                            variant="standard"
                            value={updatedProduct.title}
                            onChange={(e) => {
                                setUpdatedProduct({...updatedProduct, title: e.target.value})
                            }}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Pric"
                            type="number"
                            fullWidth
                            variant="standard"
                            value={updatedProduct.pric}
                            onChange={(e) => {
                                setUpdatedProduct({...updatedProduct, pric: e.target.value})
                            }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleDone}>Done</Button>
                    </DialogActions>
                </Dialog>
                {/*---Dialog*/}
                <Card sx={{minWidth: 300}} style={{margin: "10px"}}>
                    <CardContent style={{background: "gray"}}>
                        <Typography style={{fontSize: "20px", fontWeight: "bolder"}}>
                            {value.title}
                        </Typography>

                        <Typography style={{fontSize: "20px", fontWeight: "bolder",color:"white"}}>

                            {value.pric + "₽"}
                        </Typography>
                        <Typography style={{fontSize: "15px",color:"brown"}}>
                            {value.moment}

                        </Typography>
                    </CardContent>
                    <CardActions style={{display: "flex", justifyContent: "space-between"}}>
                        <Button onClick={HandelDeleteClick} size="small"><DeleteSweepIcon/></Button>
                        {/*<Button style={{color: product.cash ? "red" : "black"}} onClick={HandelCashClick}*/}
                        {/*        size="small"><MonetizationOnIcon/></Button>*/}
                        <Button onClick={(handleOpen)} size="small"><AutoFixHighIcon/></Button>

                    </CardActions>
                </Card>
            </>

        );
    }