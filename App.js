import * as Font from "expo-font";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SearchScreen from "./screens/transaction";
import TransactionScreen from "./screens/transaction";
import BottomTabNavigator from "./components/bottomTabNavigator";
import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    };
  }
  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold,
    });
    this.setState({
      fontLoaded: true,
    });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return <BottomTabNavigator />;
    }
    return null;
  }
}
