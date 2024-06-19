import { server } from "../store";
import axios from "axios";
import { toast } from "sonner";

export const admingetallUser = () => async (dispatch) => {
  try {
    dispatch({ type: "getalluserRequest" });
    const { data } = await axios.get(`${server}/users/admin/all`,{
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({ type: "getalluserSuccess", payload: data.users });
  } catch (error) {
    dispatch({
      type: "getalluserFail",
      payload: error.response.data.message,
    });
    toast.error(error.response.data.message);
  }
};

export const admingetapprovedUser = () => async (dispatch) => {
  try {
    dispatch({ type: "getapproveuserRequest" });

    const { data } = await axios.get(`${server}/users/admin/approved`,{
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({ type: "getapproveuserSuccess", payload: data.user });
  } catch (error) {
    dispatch({
      type: "getapproveuserFail",
      payload: error.response.data.message,
    });
    toast.error(error.response.data.message);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteuserRequest" });

    const { data } = await axios.delete(`${server}/users/admin/${id}`,{
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({ type: "deleteuserSuccess", payload: data.message });
    toast.success("User Deleted sucessfully!");
    admingetallUser();
  } catch (error) {
    dispatch({
      type: "deleteuserFail",
      payload: error.response.data.message,
    });
    toast.error(error.response.data.message);
    return false
  }
};

export const updateUserRole = (id) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "updateuserstatusRequest" });

    const { data } = await axios.put(`${server}/users/admin/${id}`, {}, config,{
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({ type: "updateuserstatusSuccess", payload: data.message });
    toast.success(data.message);
  } catch (error) {
    dispatch({
      type: "updateuserstatusFail",
      payload: error.response.data.message,
    });
    toast.error(error.response.data.message);
  }
};
