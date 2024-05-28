import { ScrollView, View, Text, Image, Pressable } from "react-native";
import React from "react";
import obj from "../../assets/teri";
import Free from "../../components/free";
import top from "../../components/Top";
import Top from "../../components/Top";
import { Link } from "expo-router";

const Home = () => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "baseline",
          //  backgroundColor: "red",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold", padding: 10 }}>
          Top Movies
        </Text>

        <Text
          style={{
            padding: 10,
            fontWeight: "500",
            color: "#7d8aef",
            textDecorationLine: "underline",
          }}
        >
          View all
        </Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          maxHeight: 180,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          {obj.map((item, index) => (
            <View
              key={index}
              style={{
                //   backgroundColor: "pink",
                padding: 2,
                margin: 2,
              }}
            >
              <Link href={`/details/${item.id}`}>
                <Pressable
                  style={{
                    width: 120,
                    //  backgroundColor: "red",
                    height: 160,
                    borderRadius: 7,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    style={{ flex: 1, width: 120, borderRadius: 10 }}
                    source={{
                      uri: `https://image.tmdb.org/t/p/w185/${item.backdrop_path}`,
                    }}
                  />
                </Pressable>
              </Link>
            </View>
          ))}
        </View>
      </ScrollView>
      <Free />
      <Top />
    </>
  );
};

export default Home;
// export default Free;
