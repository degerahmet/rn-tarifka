import React from 'react'
import { TouchableWithoutFeedback, Image ,View,Text} from 'react-native';

import  styles from './CategoryCard.style';

export default function CategoryCard({category,onSelect}) {
    return (
        <TouchableWithoutFeedback  onPress={onSelect}>
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.image}
                        source={{ uri: category.strCategoryThumb }}
                    />
                </View>

                <View style={styles.title_container}>
                    <Text style={styles.title}>{category.strCategory}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
