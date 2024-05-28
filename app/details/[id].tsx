import React from "react";
import { useLocalSearchParams } from "expo-router";
import obj from "../../assets/teri";
import { Image, Pressable, Text, View } from "react-native";

const details = () => {
  const { id } = useLocalSearchParams();
  let val: any = {};
  if (id) {
    val = obj.filter((e) => e.id === Number(id));
  }
  console.log(val[0].id);
  return (
    <>
      {val && (
        <View
          key={val[0].id}
          style={{
            // backgroundColor: "pink",
            padding: 2,
            margin: 2,
            flex: 1,
            overflow: "hidden",
          }}
        >
          <Image
            style={{
              flex: 1,
              borderRadius: 10,
              objectFit: "contain",
              shadowRadius: 10,
              shadowOpacity: 0.3,
            }}
            source={{
              uri: `https://image.tmdb.org/t/p/w185/${val[0].backdrop_path}`,
            }}
          />
          <View style={{ margin: 10, flexDirection: "row", gap: 5 }}>
            {val[0].genre_ids.map((genre) => (
              <Text
                style={{
                  lineHeight: 30,
                  textAlign: "center",
                  backgroundColor: "#5869eb",
                  color: "white",
                  width: 80,
                  height: 30,
                  bottom: 50,
                  borderRadius: 40,
                }}
              >
                {" "}
                {genre}
              </Text>
            ))}
          </View>
          <View>
            <View
              style={{
                flex: 1,
              }}
            >
              <Text style={{ fontWeight: "500", fontSize: 20 }}>
                {val[0].title}
              </Text>
            </View>
            <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
              <View
                style={{
                  //  backgroundColor: "red",
                  width: 60,
                  alignItems: "center",
                  borderRadius: 10,
                  marginHorizontal: 10,
                  borderColor: "#5869eb",
                  borderWidth: 1,
                }}
              >
                <Text style={{ color: "#5869eb", fontSize: 12 }}>Full HD</Text>
              </View>
              <Text
                style={{
                  fontSize: 12,
                }}
              >
                116 minutes
              </Text>
              <Text
                style={{
                  fontSize: 12,
                }}
              >
                👍 456
              </Text>
              <Text
                style={{
                  fontSize: 12,
                }}
              >
                👎 67
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "200", fontSize: 15 }}>
                {val[0].overview}
              </Text>
              <View
                style={{
                  backgroundColor: "#5869eb",
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  marginBottom: 5,
                  marginTop: 10,
                }}
              >
                <Text style={{ color: "white" }}>Play</Text>
              </View>
              <View
                style={{
                  //  / backgroundColor: "pink",
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  borderColor: "#5869eb",
                  borderWidth: 2,
                }}
              >
                <Text style={{ color: "#5869eb" }}>Download</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default details;
