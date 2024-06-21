import axios from "axios";
import { toast } from "react-hot-toast";
const server = process.env.REACT_APP_SERVER;

export const searchUser = (keyword = "") => async (dispatch) => {
    try {
      dispatch({ type: "searchRequest" });

      const { data } = await axios.get(
        `${server}/users/allusers?keyword=${keyword}`
      );
      dispatch({ type: "searchSuccess", payload: data.user });
    } catch (error) {
      dispatch({ type: "searchFail"});
      toast.error(error?.response?.data?.message);
    }
};
