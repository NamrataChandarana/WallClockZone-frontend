import axios from "axios";
import {toast} from 'sonner'
const server = process.env.REACT_APP_SERVER;

export const login = (email, password) => async (dispatch) => {

  try {
    dispatch({ type: "loginRequest" });

    const { data } = await axios.post(
      `${server}/users/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({ type: "loginSuccess", payload: data });
    toast.success(data.message, {position: "top-center"});
  } catch (error) {
    dispatch({ type: "loginFail", payload: error });
    if(error?.response?.data?.message){
      toast.error(error?.response?.data?.message);
    }else{
      toast.error("Something went wrong!");
    }
    
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });

    const { data } = await axios.get(`${server}/users/me`,{
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    });

    if (data.user) {
      dispatch({ type: "loadUserSuccess", payload: data.user });
    }

  } catch (error) {
    dispatch({ type: "loadUserFail", payload: error });
  }
};

export const registeration =
  (
    firstname,
    lastname,
    companyname,
    phoneNo,
    username,
    password,
    category,
    city,
    state,
    address,
    email,
    website
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: "registerRequest" });

      const {data} = await axios.post(
        `${server}/users/new`,
        {
          firstname,
          lastname,
          companyname,
          phoneNo,
          username,
          password,
          category,
          city,
          state,
          address,
          email,
          website,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch({ type: "registerSuccess", payload: data });
      toast.success("Successfully Register");
    } catch (error) {
      toast.error(error?.response?.data?.message);
      if (error.response && error.response.data && error.response.data.errors) {
        return error.response.data.errors;
      }
    }
  };

export const updateprofile =
  (
    firstname,
    lastname,
    companyname,
    phoneNo,
    username,
    category,
    city,
    state,
    address,
    email,
    website
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: "updateprofileRequest" });

      const { data } = await axios.put(
        `${server}/users/me/update`,
        {
          firstname,
          lastname,
          companyname,
          phoneNo,
          username,
          category,
          city,
          state,
          address,
          email,
          website,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch({ type: "updateprofileSuccess", payload: data.message });
      toast.success("update successfully");
      return true
    } catch (error) {
      dispatch({ type: "updateprofileFail", payload: error });
      return false
      toast.error(error.response.data.message);
    }
  };

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "loagoutRequest" });

    const { data } = await axios.get(`${server}/users/logout`, {
      withCredentials: true,
    });
    dispatch({ type: "logoutSuccess", payload: "Logout successfully" });
    toast.success("Logout successfully");
  } catch (error) {
    dispatch({ type: "logoutFail", payload: error });
    toast.error(error.response.data.message);
  }
};
export const forgetPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: "forgetPasswordRequest" });

    const { data } = await axios.post(
      `${server}/users/forgetPassword`,
      {
        email,
      },
      {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "forgetPasswordSuccess", payload: data.message });
    toast.success("mail send ");
  } catch (error) {
    dispatch({ type: "forgetPasswordFail", payload: error });
    toast.error(error.response.data.message);
  }
};

export const resetPassword = (token, password) => async (dispatch) => {
  try {
    dispatch({ type: "resetPasswordRequest" });

    const { data } = await axios.put(
      `${server}/users/resetPassword/${token}`,
      {
        password,
      },
      {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "resetPasswordSuccess", payload: data.message });
    toast.success("Reset successfully");
  } catch (error) {
    dispatch({ type: "resetPasswordFail", payload: error });
    toast.error(error.response.data.message);
  }
};
