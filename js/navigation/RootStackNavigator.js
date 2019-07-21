import { createAppContainer, createStackNavigator } from "react-navigation";
import Navigation from "./NavigationLayout";

export default createAppContainer(
  createStackNavigator(
    {
      Layout: Navigation
    },
    {
      headerMode: "none",
      mode: "modal"
    }
  )
);
