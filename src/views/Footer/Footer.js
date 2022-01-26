import React from 'react';
import {Button} from "@mui/material";
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {FlagModelAC, UpdateCurrentStepAC} from "../../store/appReducer";


const Footer = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const currentStep = useSelector(state => state.appReducer.currentStep)
    // непонятное название
    const toCancelRegistrationHandler = () => {
        navigate('/')
        dispatch(UpdateCurrentStepAC(1))
        dispatch(FlagModelAC(''))
    }
    // слишком длинное название
    const changeCurrentPageWithHorizontalStepper = () => {
        // лишнее условие
        if (currentStep < 3) {
            dispatch(UpdateCurrentStepAC(currentStep + 1))
            navigate(`/step${currentStep + 1}`)
        }
    }
    return (
        <>
            <Button
                size="large"
                variant="text"
                sx={{
                    textTransform: "none",
                    color: "#002B45",
                    fontWeight: "bold",
                    fontSize: "16px"
            }}
                onClick={toCancelRegistrationHandler}>
                Cancelar
            </Button>
            {currentStep !== 3 && <Button
                size='large'
                variant="contained"
                sx={{
                    textTransform: "none",
                    color: "#FFFFFF",
                    fontWeight: "bold",
                    backgroundColor: "#122B44",
                    border: "1px solid transparent",
                    borderRadius: "2px"
                }}
                onClick={changeCurrentPageWithHorizontalStepper}>
                {/* лучше не использовать в html спецсимволі напрямую, а заменять их (в твоем случае &gt;) */}
                Suguente >
            </Button>}
        </>
    );
};

export default Footer;
