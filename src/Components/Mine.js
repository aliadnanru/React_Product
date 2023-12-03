import CardContext from "./CardContext";
import {useContext, useEffect} from "react";
import {ProductContext} from "../ProductContext/ProductContext";
import {Container} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {AlertContext} from "../ProductContext/AlertContext";



export default function Mine() {
    const {openAlert, setOpenAlert, ShowAlert} = useContext(AlertContext);

    const {product, setproduct} = useContext(ProductContext)
    const ReturnProduct = product.map((t, index, arr) => {
        return <CardContext key={t.id} value={t} index={index} arr={arr}/>;
    });

    // const total = product.reduce((acc, p) => Number(acc) + Number(p.pric), 0)
    useEffect(() => {
        const storageProduct = JSON.parse(localStorage.getItem("product")) ?? [];
        ShowAlert("تم التحديث الصفحة")
        setproduct(storageProduct)
    }, []);

    //totalCash


    return (

        <Container style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "25px"

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
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "column",
                    overflow: "scroll",
                    maxHeight: "450px",
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
