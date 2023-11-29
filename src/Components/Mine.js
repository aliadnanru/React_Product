import CardContext from "./CardContext";
import {useContext, useEffect} from "react";
import {ProductContext} from "../ProductContext/ProductContext";
import {Container} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import WhatsappSendData from "./WhatsappSendData";
import BasicSwitches from "./Switch";
import SwipeableEdgeDrawer from "./Swipeable edge";
//BasicSwitches


export default function Mine() {
    const {product, setproduct} = useContext(ProductContext)
    const ReturnProduct = product.map((t, index, arr) => {
        return <CardContext key={t.id} value={t} index={index} arr={arr}/>;
    });

    // const total = product.reduce((acc, p) => Number(acc) + Number(p.pric), 0)
    useEffect(() => {
        const storageProduct = JSON.parse(localStorage.getItem("product")) ?? [];
        setproduct(storageProduct)
    }, []);

    //totalCash


    return (

        <Container style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",

        }}>
            {/*Title*/}
            {/*<Typography style={{margin: "10px",color:"white",fontWeight:"bolder"}}>*/}
            {/*    POS*/}
            {/*</Typography>*/}
            {/*<Typography style={{margin: "10px", color: "white", fontWeight: "bold"}}>*/}
            {/*    {`Тотол: ${total}₽ | 💰:${totalCash}₽ | 💳:${totleCard}₽ `}*/}
            {/*</Typography>*/}
            {/* --Title*/}
            <Card>
                <div style={{
                    display: "flex",
                    justifyContent: "stretch",
                    alignItems: "center",
                    flexDirection: "column",
                    overflow: "scroll",
                    maxHeight: "330px",
                    maxWidth: "380px",


                }}>

                    <CardContent style={{}}>

                        {/*All product */}
                        {ReturnProduct}
                        {/* --All product */}

                    </CardContent>
                </div>


            </Card>


        </Container>
    );
}
