import { ScrollView, View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";

const CustomView = ({ data, title }) => {
  return (
    <>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          padding: 10,
          backgroundColor: Colors.dark.bg,
        }}
      >
        {title}
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ backgroundColor: Colors.dark.bg }}
      >
        {data?.map((item) => (
          <Link href={`/details/${item.id}`}>
            <Image
              style={{
                borderRadius: 12,
                width: 200,
                height: 350,
                marginHorizontal: 10,
              }}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`,
              }}
            />
          </Link>
        ))}
      </ScrollView>
    </>
  );
};

export default CustomView;
