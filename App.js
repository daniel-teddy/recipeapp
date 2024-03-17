// import { Provider } from "react-redux";
import "react-native-gesture-handler";
import { AuthProvider } from "./auth/AuthContext";
import { Routes } from "./routes/routes";
import { store } from "./store";
export default function App() {
  return (
    // <Provider store={store}>
    <AuthProvider>
      <Routes />
    </AuthProvider>
    // </Provider>
  );
}
