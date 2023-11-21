import {useContext} from "react";
import {ProductContext} from "../ProductContext/ProductContext";
import moment from 'moment';
//icons
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function WhatsappSendData() {
    const {product, setproduct} = useContext(ProductContext)
    const calendar = moment().format('ll')+" | " + moment().format('LT');

    const handleWhatsAppClick = () => {
        const phone = +79625600668;

        // تحويل بيانات product إلى سلسلة نصية
        const productText = product.map((item) => {
            return `✅${item.title}:${item.pric}₽ ${item.cash ?"💰":""} |${item.moment}`;
        }).join('\n');
        const total = product.reduce((acc, p) => Number(acc) + Number(p.pric),0)

        // إعداد رسالة تحتوي على بيانات الـ product
        const message = ` 🔮Sales today:\n${productText}\n \n🔁 Total:≃${total}₽ \n📅Calendar: ${calendar}  `;

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