import { IsValueAlreadyRegistered } from "./actions";

export const useForgetPassword = () => {
  const activeStep = 0;
  const email = "any@any.com";

  const nextStep = (): void => {
    let isThereError: boolean = false;

    switch (activeStep) {
      case 0:
        if (!isThereError) {
          IsValueAlreadyRegistered(email, "isEmailRegistered");
        }
        break;
    }
  };

  return { nextStep };
};