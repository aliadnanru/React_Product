import './App.css';
import Mine from "./Components/Mine";
import {v4 as uuidv4} from "uuid";
import {useContext, useState} from "react";
import {ProductContext} from "./ProductContext/ProductContext";
import Input_Btn from "./Components/Input_Btn"
import {InputeContext} from "./ProductContext/InputeContext"
import moment from 'moment';
import SwipeableEdgeDrawer from "./Components/Swipeable edge";

// InitialProduct

const InitialProduct = [{
    id: uuidv4(),
    title: "",
    pric: null,
    cash:false,
    card:false,
    moment:null

}]

const InitiaInpute = [{
    inputeTitle: "",
    inputePric: ""
}]



function App() {
    const [inpute, setinpute] = useState(InitiaInpute)
    const [product, setproduct] = useState(InitialProduct)
    return (
        <div className="App" style={{
        }}>
            <div className="App-header">

                <ProductContext.Provider value={{product, setproduct}}>

                    <InputeContext.Provider value={{inpute, setinpute}}>
                        <Mine/>
                        <SwipeableEdgeDrawer/>

                        <Input_Btn/>
                    </InputeContext.Provider>

                </ProductContext.Provider>
            </div>


        </div>
    );
}

export default App;
