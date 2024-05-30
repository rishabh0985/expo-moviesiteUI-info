import { ScrollView, View, Text, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import obj from "../../assets/teri";
import Free from "../../components/free";
import top from "../../components/Top";
import Top from "../../components/Top";
import { Link } from "expo-router";
import axios from "axios";

const Home = () => {
  const [popular, setpopular] = useState([]);
  const [top, settop] = useState([]);
  const [upcoming, setupcoming] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=8a67b0b749bbbedd752319839dcb6775`
      )
      .then((response) => {
        console.log("====================================");
        console.log(response.data.results);
        console.log("====================================");
        setpopular(response.data.results);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=8a67b0b749bbbedd752319839dcb6775`
      )
      .then((response) => {
        settop(response.data.results);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=8a67b0b749bbbedd752319839dcb6775`
      )
      .then((response) => {
        console.log("====================================");
        console.log(response.data.results);
        console.log("====================================");
        setupcoming(response.data.results);
      });
  }, []);

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
          {popular?.map((item, index) => (
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
                      uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`,
                    }}
                  />
                </Pressable>
              </Link>
            </View>
          ))}
        </View>
      </ScrollView>
      <Free data={upcoming} />
      <Top data={top} />
    </>
  );
};

export default Home;
// export default Free;
