import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const list = () => {
  return (
    <View>
      <Text>list</Text>
      <Link href="list/2">1</Link>
      <Link href="list/3">1</Link>
      <Link href="list/4">1</Link>
    </View>
  );
};

export default list;
