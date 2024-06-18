import { server } from "../store";
import axios from "axios";
import { toast } from "react-hot-toast";

export const getCategories = () => async (dispatch) => {
  try {
    dispatch({ type: "categoryRequest" });

    const { data } = await axios.get(
      `${server}/category/get-category`,{
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      }
    );

    if(data){
        dispatch({ type: "categorySuccess", payload: data.category });
    }
  } catch (error) {
    dispatch({ type: "categoryFail", payload: error });
    toast.error(error);
  }
};
