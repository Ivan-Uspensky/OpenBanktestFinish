import {submitForm} from "../api/api";


const initialState = {
    finishPassword: '',
    modalPage: false,
    flagModel: '',
    currentStep: 1
}

export const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'passwordReducer/FINISH-PASSWORD' : {
            return {...state, finishPassword: action.finishPassword}
        }
        case 'passwordReducer/RESOLVE-REJECT-TOGGLE' : {
            return {...state, modalPage: action.response}
        }
        case 'passwordReducer/TOGGLE-FLAG': {
            return {...state, flagModel: action.flag}
        }
        case 'passwordReducer/UPDATE-CURRENT-STEP': {
            return {...state, currentStep: action.currentStep}
        }
        default:
            return state
    }
}

// єкшені не должні лежать в одном файле с редьюсерами. разделяй єти сущности
// все єкшені должні иметь одинаковую структуру, type и payload. и в payload ті 
// должен записівать нужную информацию, а не создавать уникальніе ключи для каждого случая

export const finishPasswordAC = (finishPassword) => {
    return {type: 'passwordReducer/FINISH-PASSWORD', finishPassword}
}
export const resolveRejectToggleAC = (response) => {
    return {type: 'passwordReducer/RESOLVE-REJECT-TOGGLE', response}
}
// неконсистенное именование. почему здесь с большой букві. префикс АС лишний
export const FlagModelAC = (flag) => {
    return {type: 'passwordReducer/TOGGLE-FLAG', flag}
}

export const UpdateCurrentStepAC = (currentStep) => {
    return {type: 'passwordReducer/UPDATE-CURRENT-STEP', currentStep}
}

// непонятное название
export const resolveRejectTC = () => (dispatch, getState) => {
    const state = getState()
    submitForm(state.appReducer.finishPassword)
        .then(res => {
            dispatch(resolveRejectToggleAC(res.status))
            // зачем тут использовать текстовое значение
            dispatch(FlagModelAC('good'))

        })
        .catch(() => {
            dispatch(FlagModelAC('bad'))
        })
}


