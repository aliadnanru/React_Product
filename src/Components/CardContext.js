import * as React from 'react';

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
import {AlertContext} from "../ProductContext/AlertContext";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

//jou
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';
import {Grid} from "@mui/joy";

export default function CardContext({value, index, arr}) {
    const {openAlert, setOpenAlert, ShowAlert} = useContext(AlertContext);

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
        ShowAlert("Изменено успешно")
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
        ShowAlert("Товар удален")
        setproduct(DeleteProduct)
    }

    function HandelCashClick() {
        const CashClick = product.map((t) => {
            if (t.id === value.id) {
                t.cash = !t.cash
                if (t.cash === true) {
                    ShowAlert("Добавлено в кэш")
                } else {
                    ShowAlert("Удален из кеша")
                }
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
                if (t.card === true) {
                    ShowAlert("Изменено на перевод")
                } else {
                    ShowAlert("Изменено на карту")
                }
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
            {/*00000*/}
            <Card variant="solid" color="primary" invertedColors style={{width: "300px", margin: "5px"}}>
                <CardContent orientation="horizontal">
                    <CardContent>
                        <Grid
                            container
                            rowSpacing={1}
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                            sx={{ width: '100%' }}
                            style={{textAlign:"center"}}
                        >
                            <Grid style={{fontWeight:"bold",display:"flex",alignItems:"center"}} xs={10}>
                                {value.title}
                            </Grid>
                            <Grid style={{fontWeight:"bold",fontSize:"17px"}}  xs={2}>
                                {value.pric + "₽"}
                            </Grid>
                            <Grid style={{fontWeight:"bold",display:"flex",alignItems:"center"}} xs={10}>
                                <AccessTimeIcon/> {value.moment}
                            </Grid>
                            <Grid xs={2}>
                                ID:{index + 1}
                            </Grid>
                        </Grid>
                        {/*<Typography style={{fontSize: "20px", fontWeight: "bolder"}}>*/}
                        {/*    {index + 1}*/}
                        {/*</Typography>*/}
                        {/*<Typography style={{fontSize: "20px", fontWeight: "bolder"}}>{value.title}</Typography>*/}
                        {/*<Typography level="h2">{value.pric + "₽"}</Typography>*/}
                        {/*<Typography style={{fontSize: "15px", color: "brown"}}>*/}
                        {/*    {value.moment}*/}

                        {/*</Typography>*/}
                    </CardContent>
                </CardContent>
                <CardActions style={{
                    display: "flex",
                    justifyContent: "space-between",
                    background: "gray",
                    padding: "5px",
                    borderRadius: "5px"
                }}>
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
            {/*---000*/}
            {/*<Card sx={{minWidth: 300}} style={{margin: "7px"}}>*/}
            {/*    <CardContent style={{background: "dimgray"}}>*/}
            {/*        <Typography style={{fontSize: "20px", fontWeight: "bolder"}}>*/}
            {/*            {index + 1}*/}
            {/*        </Typography>*/}
            {/*        <Typography style={{fontSize: "20px", fontWeight: "bolder"}}>*/}
            {/*            {value.title}*/}
            {/*        </Typography>*/}

            {/*        <Typography style={{fontSize: "20px", fontWeight: "bolder", color: "white"}}>*/}

            {/*            {value.pric + "₽"}*/}
            {/*        </Typography>*/}
            {/*        <Typography style={{fontSize: "15px", color: "brown"}}>*/}
            {/*            {value.moment}*/}

            {/*        </Typography>*/}
            {/*    </CardContent>*/}
            {/*    <CardActions style={{display: "flex", justifyContent: "space-between"}}>*/}
            {/*        <Button onClick={HandelDeleteClick} size="small"><DeleteSweepIcon/></Button>*/}
            {/*        <Button style={{background: value.cash ? "gold" : "white", color: value.cash ? "black" : "red"}}*/}
            {/*                onClick={HandelCashClick}*/}
            {/*                size="small"><MonetizationOnIcon/></Button>*/}
            {/*        <Button style={{background: value.card ? "green" : "white", color: value.card ? "white" : "green"}}*/}
            {/*                onClick={HandelCardClick}*/}
            {/*                size="small"><AddCardIcon/></Button>*/}
            {/*        <Button onClick={(handleOpen)} size="small"><AutoFixHighIcon/></Button>*/}

            {/*    </CardActions>*/}
            {/*</Card>*/}
        </>

    );
}