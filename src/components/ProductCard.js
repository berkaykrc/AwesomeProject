import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: product.imgURL}}
        style={styles.image}
        resizeMode="contain"
      />
      <Text>{product.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    elevation: 12,
  },
  image: {
    height: Dimensions.get('window').height / 3,
  },
});
export {ProductCard};
