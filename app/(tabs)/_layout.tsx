import { Colors } from "@/constants/Colors";
import { Tabs } from "expo-router";

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: Colors.dark.bgbg },
        tabBarLabelStyle: { fontSize: 20, color: "black" },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{ headerShown: false, title: "Home" }}
      />
      <Tabs.Screen
        name="details/[id]"
        options={{ headerShown: false, title: "Details" }}
      />

      <Tabs.Screen
        name="search"
        options={{ headerShown: false, title: "Search" }}
      />
    </Tabs>
  );
};
