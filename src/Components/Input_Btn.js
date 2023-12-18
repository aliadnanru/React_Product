import {useContext, useState} from "react";
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
import {AlertContext} from "../ProductContext/AlertContext";
//useSound
import useSound from 'use-sound';
import boopSfx from '../add.mp3';
import boopSfx2 from '../g.mp3';
import AHSHITK from '../AHSHITK.mp3';



export default function Input_Btn() {
    const {openAlert, setOpenAlert, ShowAlert} = useContext(AlertContext);
    const {product, setproduct} = useContext(ProductContext)
    const {inpute, setinpute} = useContext(InputeContext)

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
//alert
    const [open1, setOpen1] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose1 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    // HandelClickAdd

    const [playAdd] = useSound(boopSfx);
    const [playAHSHITK] = useSound(AHSHITK);

    const [playFirst] = useSound(boopSfx2);



    function HandelClickAdd() {
        if (inpute.inputePric && inpute.inputeTitle !== "") {
            const newProduct = {
                id: uuidv4(),
                title: inpute.inputeTitle,
                pric: inpute.inputePric,
                cash: false,
                card: false,
                moment: moment().format('h:mm')
            }
            const updatedProduct = [...product, newProduct];
            localStorage.setItem("product", JSON.stringify(updatedProduct))
            if (product.length == 0) {
                playFirst()
                ShowAlert("مبروك اول تفارffffffffffffffffff")
            } else {
                playAdd()
            }
            setproduct(updatedProduct)


            ShowAlert("Товар добавлен ✅")
        } else {

            ShowAlert("الحقووول فارغة يعود🤬! شتريد اضيف!!!")


        }


        setinpute({
            inputeTitle: "",
            inputePric: "",
        });
    }

    // HandelClickAdd ---
    //HandelDelletAll
    function HandelDelletAll() {
        const DelletAll = product.filter((t) => {
            return !t
        })
        localStorage.setItem("product", JSON.stringify(DelletAll))

        setproduct(DelletAll)
        ShowAlert("Все товары удалены ✅")
        setOpen(false);
        playAHSHITK()
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
                    {"Удалить данные?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Внимание!: все данные будут удалены.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose}>
                        Отмена
                    </Button>
                    <Button onClick={HandelDelletAll}>Удалить все</Button>
                </DialogActions>
            </Dialog>
            {/* --- Dialog*/}
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: "5px"
            }}>

                <input placeholder={"товара:"} style={{fontWeight: "bold", margin: "5px"}} value={inpute.inputeTitle}
                       onChange={(e) => {
                           setinpute({...inpute, inputeTitle: e.target.value})
                       }}/>
                <input placeholder={"Цена:"} style={{fontWeight: "bold", margin: "5px"}} type={"number"}
                       value={inpute.inputePric}
                       onChange={(e) => {
                           setinpute({...inpute, inputePric: e.target.value})
                       }}/>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <WhatsappSendData/>
                    <button onClick={() => {
                        {
                            HandelClickAdd()
                        }
                    }} style={{
                        padding: "10px",
                        margin: "5px",
                        width: "70px",
                        height: "70px",
                        cursor: "pointer",
                        borderRadius: "100px",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        alignItems: "center",


                    }}><ControlPointIcon style={{fontSize: "50px"}}/>

                    </button>
                    <DeleteForeverIcon onClick={handleClickOpen} style={{
                        width: "45px",
                        height: "45px",
                        padding: "10px",
                        color: "white",
                        background: "red",
                        fontWeight: "bold",
                        borderRadius: "2000px",
                        cursor: "pointer"
                    }}/>
                </div>

            </div>
            <div>

            </div>
        </>
    )
}