import './App.css';
import Mine from "./Components/Mine";
import {v4 as uuidv4} from "uuid";
import {useState, useContext} from "react";
import {ProductContext} from "./ProductContext/ProductContext";
import Input_Btn from "./Components/Input_Btn"
import {InputeContext} from "./ProductContext/InputeContext"
import moment from 'moment';
import MySnackbar from "./Components/MySnackbar";
import * as React from "react";
import {AlertContext} from "./ProductContext/AlertContext";
import SwipeableEdgeDrawer from "./Components/Swipeable edge";

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

    return (
        <div className="App" style={{}}>

            <div className="App-header">
                <AlertContext.Provider value={{openAlert, setOpenAlert ,ShowAlert}}>
                    <ProductContext.Provider value={{product, setproduct}}>

                        <InputeContext.Provider value={{inpute, setinpute}}>
                            <Mine/>
                            <Input_Btn/>
                            <SwipeableEdgeDrawer/>
                            <MySnackbar msg={[setmsg,msg]}/>
                        </InputeContext.Provider>

                    </ProductContext.Provider>
                </AlertContext.Provider>
            </div>


        </div>
    );
}

export default App;
