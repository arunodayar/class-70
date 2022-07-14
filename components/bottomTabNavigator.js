import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchScreen from "../screens/search";
import TransactionScreen from "../screens/transaction";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import react from "react";
const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Transaction") {
                iconName = "book";
              } else if (route.name === "Search") {
                iconName = "search";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "#FFFFFF",
            inactiveTintColor: "black",
            style: {
              height: 200,
              borderTopWidth: 0,
              backgroundColor: "#5653d4",
            },
            labelStyle: { fontSize: 25, fontFamily: "Rajdhani_600SemiBold" },
            labelPosition: "beside-icon",
            tabStyle: {
              marginTop: 5,
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 30,
              borderWidth: 2,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#5653d4",
            },
          }}
        >
          <Tab.Screen name="Transcation" component={TransactionScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
