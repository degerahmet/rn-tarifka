import React from 'react'
import { View, Text,ActivityIndicator,FlatList } from 'react-native';
import MealCard from '../../components/MealCard';
import useFetch from '../../hooks/useFetch';

import styles from "./Meals.style";


const URL =  "https://www.themealdb.com/api/json/v1/1/filter.php?c="

export default function Meals(props) {
    const category = props.route.params.strCategory;
    const {data,loading,error} = useFetch(URL+category)

    const handleSelectMeal = (idMeal) => {
        props.navigation.navigate("Detail", { idMeal })
    };
      const renderMeal = ({item})=> {
          return(
          <MealCard 
            meal={item}
            onSelect={() => handleSelectMeal(item.idMeal)}
          />)
        }


    if (loading) {

        return <ActivityIndicator size="large" color="#FCA311" />;
    }

    if (error) {

        return <Text>{error}</Text>
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data.meals}
                renderItem={renderMeal}
                keyExtractor={(item) => item.idMeal}
                />
        </View>
    )
}
