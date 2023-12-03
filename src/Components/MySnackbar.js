import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {Alert} from "@mui/joy";
import {useContext,useState} from "react";
import {AlertContext} from "../ProductContext/AlertContext";

export default function MySnackbar({msg}) {
    const {openAlert, setOpenAlert} = useContext(AlertContext);



    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
            >
                <CloseIcon fontSize="small"/>
            </IconButton>
        </React.Fragment>
    );

    return (
        <div>
            <Snackbar
                open={openAlert}
                autoHideDuration={1000}
                message="Note archived"
                action={action}
            >
                <Alert style={{background:"green",color:"white",fontWeight:"bold"}} variant="filled" severity="success">
                    {msg}
                </Alert>
            </Snackbar>
        </div>
    );
}