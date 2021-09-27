import React from 'react'
import { View,TouchableWithoutFeedback,ImageBackground,Text } from 'react-native'

import styles from './MealCard.style';

export default function MealCard({meal,onSelect}) {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <ImageBackground
                        style={styles.image}
                        imageStyle={{ borderRadius: 15 }}
                        source={{ uri: meal.strMealThumb }}
                    >
                <View style={styles.title_container}>
                    <Text numberOfLines={1} style={styles.title}>{meal.strMeal}</Text>
                </View>
            </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}
