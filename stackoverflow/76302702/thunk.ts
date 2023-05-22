import { Api } from "./api";
import { registrationFormSlice } from "./registration";

type AppDispatch = any;

export const logIn =
  (email: string, password: string) =>
    async (dispatch: AppDispatch) => {
      try {
        const { status } = await Api.auth.logIn({ email, password });
        if (status === 200) {
          dispatch(registrationFormSlice.actions.reset());
        }
      } catch (error: any) {
        console.error(error);
      }
    };