import axios from "axios";
import { All_VIDATA_FAIL, All_VIDATA_REQUEST, All_VIDATA_SUCESS } from "../constants/VIdataConstatans";

export const ViDataGetAction = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: All_VIDATA_REQUEST });
            
            const { data } = await axios.get(`/api/v1/VI/get`);
            dispatch({ type: All_VIDATA_SUCESS, payload: data });
        } catch (error) {
            dispatch({ type: All_VIDATA_FAIL, payload: error.message });
        }
    };
};
