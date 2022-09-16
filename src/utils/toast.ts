import { AxiosResponse } from "axios";
import { toast } from "react-toastify";

export const errorToast = (errorMessage: String) => {
  toast.error(`${errorMessage}`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const promiseToast = (promise: Promise<void | AxiosResponse>) => {
  toast.promise(
    promise,
    {
      pending: "Searching for pokémon",
      success: "Pokémon species identified 👌",
      error: "Pokémon species cannot be identified 🤯",
    },
    {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
};
