import { ScrollView, View, Text, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomView from "../../components/CustomView.jsx";

const Home = () => {
  console.log("fgghfghfhf");
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
    console.log("====================================");
    console.log("response.data.results");
    console.log("====================================");
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
      <ScrollView showsHorizontalScrollIndicator={false}>
        <CustomView title="POPULAR MOVIES" data={popular} />
        <CustomView title="UPCOMING MOVIES" data={upcoming} />
        <CustomView title="TOP MOVIES" data={top} />
      </ScrollView>
    </>
  );
};

export default Home;
// export default Free;
