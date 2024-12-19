import axios from "axios";
import { toast } from "react-hot-toast";
const server = process.env.REACT_APP_SERVER;

// var socket;
export const searchChatUser = (search = "") => async (dispatch) => {
    try {
      dispatch({ type: "searchChatRequest" });

      const { data } = await axios.get(
        `${server}/chat/searchUser?search=${search}`,{
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch({ type: "searchChatSuccess", payload: data.users });
      // toast.success("show");
    } catch (error) {
      dispatch({ type: "searchChatFail", payload: error });
      toast.error(error.response.data.message);
    }
};

export const accessChatUser = (userId = "") => async (dispatch) => {
    try {
      dispatch({ type: "accessChatRequest" });

      const { data } = await axios.post(
        `${server}/chat/chat`, {
            userId
        },{
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(data)
      dispatch({ type: "accessChatSuccess", payload: data });
      // toast.success("show");
    } catch (error) {
      dispatch({ type: "accessChatFail", payload: error });
      toast.error(error);
    }
};

export const fetchChatUser =() => async (dispatch) => {
    try {
      dispatch({ type: "fetchChatRequest" });

      const { data } = await axios.get(
        `${server}/chat/getchat`,{
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(data);
      dispatch({ type: "fetchChatSuccess", payload: data });
      // toast.success("show");
    } catch (error) {
      dispatch({ type: "fetchChatFail", payload: error });
      toast.error(error);
    }
};

export const sendMsgUser = (selectedData, newMessage) => async (dispatch) => {
    try {
      dispatch({ type: "sendMsgRequest" });
      const { data } = await axios.post(
        `${server}/chat/sendMsg`, {
          chatId: selectedData,
          content: newMessage 
        },{
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch({ type: "sendMsgSuccess", payload: data });
      // socket.emit("new message", data);
    } catch (error) {
      dispatch({ type: "sendMsgFail", payload: error });
      toast.error(error);
    }
};
  
export const fetchMsgUser = (chatId) => async(dispatch) => {
  console.log(chatId)
  try{
    dispatch({type: "fetchMsgRequest"})
    const {data} = await axios.get(`${server}/chat/getMsg/${chatId}`,{
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({type: "fetchMsgSuccess", payload: data});
    return data

  }catch(error){
    dispatch({type:"fetchMsgFail", payload: error});
    toast.error(error);
  }
} 

export const removeSelectedData = (dispatch) =>{
  try{
    dispatch({type: "removeChatData"})
  }catch(error){
    toast.error(error);
  }

}
