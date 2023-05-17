
const setEmail = (payload) => ({ type: 'SEND_EMAIL', payload });

export const IsValueAlreadyRegistered =
  (value: string, process: string) => async (dispatch) => {
    switch (process) {
      case "isEmailRegistered":
        dispatch(setEmail({ value, error: false, text: "" }));
        break;
    }
  };