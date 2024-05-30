// SearchMovies.js
import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { Link } from "expo-router";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=8a67b0b749bbbedd752319839dcb6775&query=${query}`
      );
      setMovies(response.data.results);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Movies</Text>
      <TextInput
        style={styles.input}
        placeholder="Type a movie name..."
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={searchMovies}
      />
      <TouchableOpacity style={styles.button} onPress={searchMovies}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}
      <FlatList
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`/details/${item.id}`}>
            <View style={styles.movieContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
              />
              <Text style={styles.movieTitle}>{item.title}</Text>
            </View>
          </Link>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  movieContainer: {
    padding: 41,
    // backgroundColor: "blue",
    marginBottom: 20,
    // alignItems: "center",
    flex: 1,
  },
  image: {
    width: 300,
    height: 450,
  },
  movieTitle: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default Search;
