import { useState, useEffect } from "react";
import authService from '../containers/authenticate-app/services/login';

function useCheckValidUserToken(token?: string) {
  const [isValidToken, setIsVaildToken] = useState(true);

  const checkVaildToken = async (token: string) => {
    const isVaildToken = await authService.checkVaildToken(token);
    setIsVaildToken(isVaildToken);
  };

  useEffect(() => {
    if (token) {
      checkVaildToken(token);
    } else {
      setIsVaildToken(false);
    }
  }, [token]);

  return isValidToken;
}

export default useCheckValidUserToken;