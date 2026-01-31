import { Redirect } from "expo-router";

export default function App() {
  const userData = null;

  // {
  //   token: "UIHuashd",
  //   name: "Marcelo",
  // };

  if (userData) {
    return <Redirect href={"/(private)/home"} />;
  }
  return <Redirect href={"/login"} />;
}
