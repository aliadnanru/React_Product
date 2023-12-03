import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';
import {useEffect, useState} from "react";

export default function CardTotal({totleCard}) {
    const [V, setV] = useState(null)
    useEffect(()=>{
        if (totleCard >= 100) {
            setV(10)
        }else if(totleCard >= 500){
            setV(15)
        }else if(totleCard >= 2000){
            setV(20)
        }else if(totleCard >= 4000){
            setV(25)
        }else if(totleCard >= 5000){
            setV(30)
        }else if(totleCard >= 7000){
            setV(55)
        }else if(totleCard >= 10000){
            setV(55)
        }else if(totleCard >= 15000){
            setV(60)
        }else if(totleCard >= 20000){
            setV(90)
        }else {
            setV(0)
        }
    },[totleCard])
    return (
        <Card variant="solid" color="primary" invertedColors style={{margin: "5px"}}>
            <CardContent orientation="horizontal">
                <CircularProgress size="lg" determinate value={V}>
                    <SvgIcon>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                            />
                        </svg>
                    </SvgIcon>
                </CircularProgress>
                <CardContent>
                    <Typography level="body-md">Total Card</Typography>
                    <Typography level="h2">{totleCard}₽</Typography>
                </CardContent>
            </CardContent>
            {/*<CardActions>*/}
            {/*    <Button variant="soft" size="sm">*/}
            {/*        Add to Watchlist*/}
            {/*    </Button>*/}
            {/*    <Button variant="solid" size="sm">*/}
            {/*        See breakdown*/}
            {/*    </Button>*/}
            {/*</CardActions>*/}
        </Card>
    );
}
