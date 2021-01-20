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

const getApiConnection = async () => {
		
  const imageUrl = "http://jouetenbois.mathieu-boucher.fr/api/images/products/";
  const key = "ws_key=3MJFI6WYD6GWDGJ8QECM6TZAZ6V65VUE";
  let url = "http://jouetenbois.mathieu-boucher.fr/api/products/?" + key + "&output_format=JSON&display=[id,name,price,id_default_image]";
  var infos = "[";				

  await fetch(url)
  .then( function(response) {
    if(response.ok) console.log("ok");
    else console.log("ko");
    return response.json();
  })
  .then( function(data) {

    data.products.forEach(function (product) {
      infos += " { "
            + "\"name\": \"" + product.name.shift().value + "\", "
            + "\"price\": \"" + product.price + "\", "
            + "\"image\": \"" + imageUrl + product.id + "/" + product.id_default_image + "?" + key + "\" "
          + "},";		
    });
    infos = infos.substring(0, infos.length - 1) + " ]";

  });

  console.log(infos + "\"");
  var obj = JSON.parse(infos);

  console.log("Product \"" + obj[0].name + "\" :\n"
			+	"\t- Price : " + obj[0].price + "\n"
      +	"\t- Image : " + obj[0].image + "\n");
      
  return obj; 
 
}

const Products = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={getApiConnection()}  
        renderItem={{(product)} => <Text>{product.name}</Text>}
      /> 
    </View>
  );
}

export default Products;