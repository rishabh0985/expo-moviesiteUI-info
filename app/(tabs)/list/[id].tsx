import React from "react";
import { useLocalSearchParams } from "expo-router";

const dynamic = () => {
  const { id } = useLocalSearchParams();
  return <div>{id}</div>;
};

export default dynamic;
