import {useContext} from "react";
import {ProductContext} from "../ProductContext/ProductContext";
import moment from 'moment';
//icons
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function WhatsappSendData() {
    const {product, setproduct} = useContext(ProductContext)
    const calendar = moment().format('ll') + " | " + moment().format('LT');
    // const totalCash =newCash.reduce((acc, p) => Number(acc) + Number(p.pric), 0)
    //totalCash
    const newCash = product.filter((t) => {
        return t.cash
    })
    const totalCash = newCash.reduce((acc, p) => Number(acc) + Number(p.pric), 0)
    const handleWhatsAppClick = () => {
        const phone = +79625600668;
//index of elmimt

        // تحويل بيانات product إلى سلسلة نصية
        const productText = product.map((item, index) => {
            return `${index + 1}- ${item.title}:${item.pric}₽ ${item.cash ? "💰" : ""}|${item.moment}`;
        }).join('\n');
        const total = product.reduce((acc, p) => Number(acc) + Number(p.pric), 0)

        // إعداد رسالة تحتوي على بيانات الـ product
        const message = ` 🔮Sales today:\n${productText}\n \n🔁 Total:≃${total}₽\n💰Totol Cash:${totalCash}₽\n📅Calendar: ${calendar}`;

        const url = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`;
        console.log(moment().subtract(10, 'days').calendar()
        )
        window.location.href = url;
    };
    return (
        <>
            <button style={{
                width: "50px",
                height: "50px",
                padding: "10px",
                color: "white",
                background: "green",
                fontWeight: "bold",
                borderRadius: "2000px"
            }}
                    onClick={handleWhatsAppClick}><WhatsAppIcon/></button>

        </>
    )
}