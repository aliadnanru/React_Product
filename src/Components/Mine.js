import CardContext from "./CardContext";
import {useContext, useEffect} from "react";
import {ProductContext} from "../ProductContext/ProductContext";
import {Container} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import WhatsappSendData from "./WhatsappSendData";


export default function Mine() {
    const {product, setproduct} = useContext(ProductContext)
    const ReturnProduct = product.map((t) => {
        return <CardContext key={t.id} value={t}/>;
    });

    const total = product.reduce((acc, p) => Number(acc) + Number(p.pric), 0)
    useEffect(() => {
        const storageProduct = JSON.parse(localStorage.getItem("product")) ?? [];
        setproduct(storageProduct)
    }, []);

    //totalCash
    const newCash = product.filter((t) => {
        return t.cash
    })
    const totalCash = newCash.reduce((acc, p) => Number(acc) + Number(p.pric), 0)
    console.log(totalCash)
    return (

        <Container style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column"
        }}>
            {/*Title*/}
            {/*<Typography style={{margin: "10px",color:"white",fontWeight:"bolder"}}>*/}
            {/*    POS*/}
            {/*</Typography>*/}
            <Typography style={{margin: "10px", color: "white", fontWeight: "bold"}}>
                {`Тотол: ${total}₽ | 💰:${totalCash}₽ `}
            </Typography>
            {/* --Title*/}
            <Card>
                <div style={{
                    display: "flex",
                    justifyContent: "stretch",
                    alignItems: "center",
                    flexDirection: "column",
                    overflow: "scroll",
                    maxHeight: "390px",
                    maxWidth: "330px",


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
