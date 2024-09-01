import axios from "axios";
import { ALL_ADFDATA_FAIL, ALL_ADFDATA_GET_FAIL, ALL_ADFDATA_GET_REQUEST, ALL_ADFDATA_GET_SUCESS, ALL_ADFDATA_REQUEST, ALL_ADFDATA_SUCESS } from "../constants/adfFomeConstatnts"


export const admissionFomeDetail = (admissionClass, firstName, lastName, dob, gender, email, mobileNo, mother_name, father_name, address, description) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ALL_ADFDATA_REQUEST });

            const config = { headers: { "content-type": "application/json" } };

            const { data } = await axios.post(`/api/v1/adf/new`, { admissionClass, firstName, lastName, dob, gender, email, mobileNo, mother_name, father_name, address, description }, config);

            dispatch({ type: ALL_ADFDATA_SUCESS, payload: data });

        } catch (error) {
            dispatch({ type: ALL_ADFDATA_FAIL, payload: error.message });
        }
    }
}

//Get admission fome data 

export const admissionFomeDetailGet = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: ALL_ADFDATA_GET_REQUEST });

            const { data } = await axios.get(`/api/v1/adf/fome/details`);
            dispatch({ type: ALL_ADFDATA_GET_SUCESS, payload: data });
        } catch (error) {
            dispatch({ type: ALL_ADFDATA_GET_FAIL, payload: error.message });
        }
    };
}