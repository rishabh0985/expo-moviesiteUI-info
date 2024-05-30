import { ScrollView, View, Text, Image, Pressable } from "react-native";
import React from "react";
import obj from "../assets/teri";
import { Link } from "expo-router";

const Free = ({ data }) => {
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
          Favourite Movie
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
          {data?.map((item, index) => (
            <View
              key={index}
              style={{
                //   backgroundColor: "pink",
                padding: 2,
                margin: 2,
              }}
            >
              {/* <Text>{item.title}</Text> */}
              <Link href={`/details/${item.id}`}>
                <Pressable
                  style={{
                    width: 120,
                    //  backgroundColor: "red",
                    height: 160,
                    borderRadius: 7,
                    // overflow: "hidden",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      shadowRadius: 10,
                      shadowOpacity: 0.1,
                      borderRadius: 10,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      style={{
                        flex: 1,
                        width: 120,
                      }}
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`,
                      }}
                    />
                  </View>
                </Pressable>
              </Link>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

// export default Home;
export default Free;
