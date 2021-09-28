import React from "react";
import { ScrollView, Text, ActivityIndicator, Image, TouchableOpacity,Linking } from "react-native";
import useFetch from "../../hooks/useFetch";

import styles from "./Detail.style";

export default function Detail(props) {
  const mealId = props.route.params.idMeal;

  const mealURL =
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId;

  const { data, loading, error } = useFetch(mealURL);


  if (loading) {
    return <ActivityIndicator size="large" color="#FCA311" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <ScrollView style={styles.container}>
        <Image 
            style={styles.image} 
            source={{ uri: data.meals[0].strMealThumb }}
        
        />
        
        <Text style={styles.title}>{data.meals[0].strMeal}</Text>
        <Text style={styles.area}>{data.meals[0].strArea}</Text>


        <Text style={styles.description}>{data.meals[0].strInstructions}</Text>
        <TouchableOpacity style={styles.button} onPress={() => {Linking.openURL(data.meals[0].strYoutube)}}>
            <Text style={styles.button_text}>Watch on Youtube</Text>
        </TouchableOpacity>
    </ScrollView>
  );
}
