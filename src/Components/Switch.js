import * as React from 'react';
import {useState} from "react";
import Switch from '@mui/material/Switch';

const label = {inputProps: {'aria-label': 'Switch demo'}};


export default function BasicSwitches() {
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = () => {
        setIsChecked(!isChecked); // تغيير الحالة إلى القيمة المعاكسة
    };
    return (
        <div>
            <  Switch checked={isChecked}
                      onChange={handleChange}
                      inputProps={{'aria-label': 'Switch demo'}} // تسمية ARIA
            />
            {/*<Switch {...label} />*/}
            {/*<Switch {...label} disabled defaultChecked />*/}
            {/*<Switch {...label} disabled />*/}
            
        </div>
    );
}
