import React from 'react'
import { View, Text, ActivityIndicator,FlatList } from 'react-native'
import CategoryCard from '../../components/CategoryCard';
import useFetch from '../../hooks/useFetch';
import styles from './Categories.style';

const URL = "https://www.themealdb.com/api/json/v1/1/categories.php"

export default function Categories(props) {
    const {data,loading,error} = useFetch(URL)

    const handleSelectCategory = (strCategory) => {
      props.navigation.navigate("Meals", { strCategory })
  };
    const renderCategory = ({item})=> {
        return(
        <CategoryCard 
          category={item}
          onSelect={() => handleSelectCategory(item.strCategory)}
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
                data={data.categories}
                renderItem={renderCategory}
                keyExtractor={(item) => item.idCategory}
                />
        </View>
    )
}
