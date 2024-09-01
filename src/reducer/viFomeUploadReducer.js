import { ALL_VIFOMEDATAUPLOAD_FAIL, ALL_VIFOMEDATAUPLOAD_REQUEST, ALL_VIFOMEDATAUPLOAD_SUCESS, CLEAR_ERROR } from "../constants/VidataUploadconstants";



export const VIFOMEDATAUPLOADPostReducer = (state = { VIFomeData: [] }, action) => {
    switch (action.type) {
        case ALL_VIFOMEDATAUPLOAD_REQUEST:
            return {
                ...state,
                loading: true
            };
        case ALL_VIFOMEDATAUPLOAD_SUCESS:
            return {
                loading: false,
                adfFome: action.payload
            };
        case ALL_VIFOMEDATAUPLOAD_FAIL:
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