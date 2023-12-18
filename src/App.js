import './App.css';
import Mine from "./Components/Mine";
import {v4 as uuidv4} from "uuid";
import {useState, useContext} from "react";
import {ProductContext} from "./ProductContext/ProductContext";
import Input_Btn from "./Components/Input_Btn"
import {InputeContext} from "./ProductContext/InputeContext"
import MySnackbar from "./Components/MySnackbar";
import * as React from "react";
import {AlertContext} from "./ProductContext/AlertContext";
import SwipeableEdgeDrawer from "./Components/Swipeable edge";
//mui
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
// InitialProduct

const InitialProduct = [{
    id: uuidv4(),
    title: "",
    pric: null,
    cash: false,
    card: false,
    moment: null

}]

const InitiaInpute = [{
    inputeTitle: "",
    inputePric: ""
}]


function App() {
    //alert
    const [openAlert, setOpenAlert] = useState(false);
    const [inpute, setinpute] = useState(InitiaInpute)
    const [product, setproduct] = useState(InitialProduct)
    const [msg,setmsg]=useState("")

    function ShowAlert(msg) {
        setOpenAlert(true)
        setmsg(msg)
        setTimeout(() => {
            setOpenAlert(false)
        }, 2000)
    }
    const StyledFab = styled(Fab)({
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    });

    return (
        <div className="App" style={{}}>

            <div className="App-header">
                <AlertContext.Provider value={{openAlert, setOpenAlert ,ShowAlert}}>
                    <ProductContext.Provider value={{product, setproduct}}>

                        <InputeContext.Provider value={{inpute, setinpute}}>
                            <Mine/>
                            <Input_Btn/>
                            {/*<SwipeableEdgeDrawer/>*/}
                            <MySnackbar msg={[setmsg,msg]}/>
                            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                                <Toolbar>
                                    <IconButton color="inherit" aria-label="open drawer">
                                        <MenuIcon />
                                    </IconButton>
                                    <StyledFab color="secondary" aria-label="add">
                                        <AddIcon />
                                    </StyledFab>
                                    <Box sx={{ flexGrow: 1 }} />
                                    <IconButton color="inherit">
                                        <SearchIcon />
                                    </IconButton>
                                    <IconButton color="inherit">
                                        <MoreIcon />
                                    </IconButton>
                                </Toolbar>
                            </AppBar>
                        </InputeContext.Provider>

                    </ProductContext.Provider>
                </AlertContext.Provider>
            </div>


        </div>
    );
}

export default App;


