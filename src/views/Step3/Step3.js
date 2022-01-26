import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {resolveRejectTC} from "../../store/appReducer";
import ModalWindow from "./modalWindow";
import style from "./modalWindow.module.css"
import {CircularProgress} from "@mui/material";

const Step3 = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(resolveRejectTC())
    }, []);

    // непонятное именование переменной
    const flagModel = useSelector(state => state.appReducer.flagModel)

    return (
        <div className={style.modal}>
            {!flagModel && <CircularProgress/>}
            {/* в чем смісл проверки на значения? */}
            {(flagModel === 'good' || flagModel === 'bad') &&
                <ModalWindow
                    flagModel={flagModel}/>}
        </div>
    );
};

export default Step3;
