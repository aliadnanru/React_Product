import * as React from 'react';
import PropTypes from 'prop-types';
import {Global} from '@emotion/react';
import {styled} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {grey} from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {useContext} from "react";
import {ProductContext} from "../ProductContext/ProductContext"
import TotalCash from "./TotalCash";
import CardTotal from "./CardTotal"
import TotalAll from "./TotalAll"

const drawerBleeding = 50;

const Root = styled('div')(({theme}) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({theme}) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

function SwipeableEdgeDrawer(props) {
    const {window} = props;
    const [open, setOpen] = React.useState(true);
    const {product, setproduct} = useContext(ProductContext)
    const ProductLength = product.length
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    // This is used only for the example
    const container = window !== undefined ? () => window().document.body : undefined;
    const newCash = product.filter((t) => {
        return t.cash
    })
    const totalCash = newCash.reduce((acc, p) => Number(acc) + Number(p.pric), 0)
    const LengthCash = product.filter((p) => {
        return p.cash
    })
    const LengthCard = product.filter((p) => {
        return p.card
    })
    const TotalCardLength = LengthCard.length
     const TotalCashLength = LengthCash.length
//totalCard
    const newCard = product.filter((t) => {
        return t.card
    })
    const totleCard = newCard.reduce((acc, p) => Number(acc) + Number(p.pric), 0)
    const total = product.reduce((acc, p) => Number(acc) + Number(p.pric), 0)

    return (
        <Root>
            <CssBaseline/>
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                }}
            />

            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <StyledBox
                    sx={{
                        position: 'absolute',
                        top: -drawerBleeding,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: 'visible',
                        right: 0,
                        left: 0,
                    }}
                >
                    <Puller/>
                    <Typography sx={{p: 2, color: 'text.secondary'}}>информация </Typography>

                </StyledBox>
                <div style={{
                    overflow: "scroll",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        margin: "20px"
                    }}>
                        <TotalAll total={total} ProductLength={ProductLength}/>
                        <TotalCash totalCash={totalCash} TotalCashLength={TotalCashLength} />
                        <CardTotal totleCard={totleCard} TotalCardLength={TotalCardLength}/>
                    </div>


                </div>

            </SwipeableDrawer>
        </Root>
    );
}

SwipeableEdgeDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
