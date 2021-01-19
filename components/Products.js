import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

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

async function getListOfPopularProducts() {

  const apiUrl = "http://jouetenbois.mathieu-boucher.fr/api/products?display=[id,description,description_short,name,price,id_default_image]";

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic M01KRkk2V1lENkdXREdKOFFFQ002VFpBWjZWNjVWVUU=");

  var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

  fetch(apiUrl, myInit)
  .then( function(response) {
    if(response.ok) {
        console.log("ok");
    } else
        console.log("ko");
    return response.json();
  })
  .then( function(json) {
    
    json.getElementById("products").forEach(function (product) {
      console.log("test");
    })

    let countElement = document.getElementById("taskCount");
    countElement.innerHTML = "" + countContent();

  });
}

const Products = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
    </View>
  );
}

export default Products;