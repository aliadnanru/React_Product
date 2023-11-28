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
import AddCardIcon from '@mui/icons-material/AddCard';

export default function CardContext({value, index, arr}) {
    const [open, setOpen] = React.useState(false);
    const {product, setproduct} = useContext(ProductContext)
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

    function HandelCashClick() {
        const CashClick = product.map((t) => {
            if (t.id === value.id) {
                t.cash = !t.cash
            }
            return t
        })
        console.log(arr)

        localStorage.setItem("product", JSON.stringify(CashClick))
        setproduct(CashClick)
    }

    function HandelCardClick() {
        const CardClick = product.map((t) => {
            if (t.id === value.id) {
                t.card = !t.card
            }
            return t

        })
        console.log(CardClick)
        localStorage.setItem("product", JSON.stringify(CardClick))
        setproduct(CardClick)
    }

    return (
        <>
            {/*Dialog*/}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Изменить данные</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Изменить название и цену
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="товара"
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
                        label="Цена"
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
                    <Button onClick={handleClose}>Отмена</Button>
                    <Button onClick={handleDone}>Сделанный</Button>
                </DialogActions>
            </Dialog>
            {/*---Dialog*/}
            <Card sx={{minWidth: 300}} style={{margin: "7px"}}>
                <CardContent style={{background: "dimgray"}}>
                    <Typography style={{fontSize: "20px", fontWeight: "bolder"}}>
                        {index + 1}
                    </Typography>
                    <Typography style={{fontSize: "20px", fontWeight: "bolder"}}>
                        {value.title}
                    </Typography>

                    <Typography style={{fontSize: "20px", fontWeight: "bolder", color: "white"}}>

                        {value.pric + "₽"}
                    </Typography>
                    <Typography style={{fontSize: "15px", color: "brown"}}>
                        {value.moment}

                    </Typography>
                </CardContent>
                <CardActions style={{display: "flex", justifyContent: "space-between"}}>
                    <Button onClick={HandelDeleteClick} size="small"><DeleteSweepIcon/></Button>
                    <Button style={{background: value.cash ? "gold" : "white", color: value.cash ? "black" : "red"}}
                            onClick={HandelCashClick}
                            size="small"><MonetizationOnIcon/></Button>
                    <Button style={{background: value.card ? "green" : "white", color: value.card ? "white" : "green"}}
                            onClick={HandelCardClick}
                            size="small"><AddCardIcon/></Button>
                    <Button onClick={(handleOpen)} size="small"><AutoFixHighIcon/></Button>

                </CardActions>
            </Card>
        </>

    );
}