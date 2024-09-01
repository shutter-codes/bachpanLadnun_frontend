import axios from "axios";
import { All_VIFOMEDATAUPLOAD_FAIL, All_VIFOMEDATAUPLOAD_REQUEST,All_VIFOMEDATAUPLOAD_SUCESS } from "../constants/VidataUploadconstants";

export const viFomeDataUploadAction = (image,description,year) => {
    return async (dispatch) => {
        try {
            dispatch({type:All_VIFOMEDATAUPLOAD_REQUEST});

            const config ={headers:{"content-type":"application/json"}};

            const {data} = await axios.post(`/api/v1/video/upload`, {image,description,year},config);

            dispatch({type:All_VIFOMEDATAUPLOAD_SUCESS, payload:data});

        } catch (error) {
            dispatch({type:All_VIFOMEDATAUPLOAD_FAIL, payload: error.message });
        }
    }
}

