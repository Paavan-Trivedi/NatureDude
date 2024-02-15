import { toast } from "react-toastify";
import { Icon } from "../components/Component";

const CloseButton = () => {
  return (
    <span className="btn-trigger toast-close-button" role="button">
      <Icon name="cross"></Icon>
    </span>
  );
};

function popMsg(message, type) {
  const toastOptions = {
    position: "top-right",
    autoClose: 2000, // 2 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: false,
    closeButton: <CloseButton />,
  };

  switch (type) {
    case "success":
      return toast.success(message, toastOptions);
    case "warning":
      return toast.warning(message, toastOptions);
    case "info":
      return toast.info(message, toastOptions);
    case "error":
      return toast.error(message, toastOptions);
    default:
      return;
  }
}

export default popMsg;
