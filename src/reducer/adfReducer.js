import { ALL_ADFDATA_FAIL, ALL_ADFDATA_GET_FAIL, ALL_ADFDATA_GET_REQUEST, ALL_ADFDATA_GET_SUCESS, ALL_ADFDATA_REQUEST, ALL_ADFDATA_SUCESS, CLEAR_ERROR } from "../constants/adfFomeConstatnts";


const initialState = {
    adfdata: [],
    loading: true,
    error: null
};
export const adfDataPostReducer = (state = { adfFome: [] }, action) => {
    switch (action.type) {
        case ALL_ADFDATA_REQUEST:
            return {
                ...state,
                loading: true
            };
        case ALL_ADFDATA_SUCESS:
            return {
                loading: false,
                adfFome: action.payload
            };
        case ALL_ADFDATA_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

export const AFDataGetReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_ADFDATA_GET_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ALL_ADFDATA_GET_SUCESS:
            return {
                loading: false,
                adfdata: action.payload.orders,
                error:null
                
            };
        case ALL_ADFDATA_GET_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}