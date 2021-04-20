import { toast } from "react-toastify";
import "react-toastify/dist/inject-style";
import "react-toastify/dist/ReactToastify.css";
import { respBody, respErr, respWrn } from "../../response";

const toastHandler = (resp: respBody) => {
  const temp = (r) => (Object.values(r).find((t) => t===resp.response));
  if(temp(respErr)){
      toast.error(resp.message?resp.message:resp.response)
  } else if(temp(respWrn)){

      toast.warn(resp.response)
  }else{
      toast.info(resp.response)
  }
  
  return resp.response;
};

export default toastHandler;
