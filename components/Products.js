import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { getApiConnection } from "../api/api";

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const Products = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={getApiConnection()}
        renderItem={({item}) => <Text>{item.name}</Text>}
      /> 
    </View>
  );
}

export default Products;