import { All_VIDATA_FAIL, All_VIDATA_REQUEST, All_VIDATA_SUCESS, CLEAR_ERROR } from "../constants/VIdataConstatans";

//Get all video image data from DB
const initialState = {
    vidata: [],
    loading: false,
    error: null
};
export const VIDataGetReducer = (state = initialState, action) => {
    switch (action.type) {
        case All_VIDATA_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case All_VIDATA_SUCESS:
            return {
                loading: false,
                vidata: action.payload.gvic,
                error: null
            };
        case All_VIDATA_FAIL:
            return {
                loading: false,
                vidata:[],
                error: action.payload
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