import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

export const routes = ()=>{
  return [
  {
    path: "/",
    element: Home,
  },
  {
    path: "signUp",
    element: SignUp ,
  },
  {
    path: "signIn",
    element: SignIn ,
  },
];

}