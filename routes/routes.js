import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import AuthenticatedRoutes from "./authenticated";
import { UnauthenticatedRoutes } from "./unAuthenticated";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Routes = () => {
  const { isUser } = useAuth();
  const [registerLater, setRegisterLater] = useState(false);

  const getRegisterLater = async () => {
    const res = await AsyncStorage.getItem("registerLater");
    if (res.length > 0) {
      setRegisterLater(!registerLater);
    }
    // console.log("res:", res);
    // console.log("check user exist (token):", registerLater);
  };

  useEffect(() => {
    getRegisterLater();
  }, []);

  return (
    <>
      {registerLater ? (
        <AuthenticatedRoutes />
      ) : (
        <>
          {isUser && <AuthenticatedRoutes />}
          {!isUser && <UnauthenticatedRoutes />}
        </>
      )}
    </>
  );
};
