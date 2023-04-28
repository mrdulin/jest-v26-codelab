import { useEffect } from "react";

export const useWindowPop = () => {
  useEffect(() => {
    window.onpopstate = (e) => {
      console.log(e.state);
    };
  }, []);
};