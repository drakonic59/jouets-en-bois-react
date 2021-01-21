import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

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
    title: {
        fontSize: 25,
        marginTop: 60,
        fontWeight: "bold",
        textAlign: "center"
    }
});

const datas = [
    {
        id: 5,
        name: "test",
    },
    {
        id: 6,
        name: "tefst",
    },
];

const getData = () => {
    const imageUrl = "http://jouetenbois.mathieu-boucher.fr/api/images/products/";
    const key = "ws_key=3MJFI6WYD6GWDGJ8QECM6TZAZ6V65VUE";
    let url = "http://jouetenbois.mathieu-boucher.fr/api/products/?" + key + "&output_format=JSON&display=[id,name,price,id_default_image]";
    var infos = "{ \"products\": [";

    return fetch(url)
        .then(function (response) {
            if (response.ok) console.log("ok");
            else console.log("ko");
            return response.json();
        })
        .then(function (data) {

            data.products.forEach(function (product) {
                infos = infos + " { "
                    + "\"name\": \"" + product.name.shift().value + "\", "
                    + "\"price\": \"" + product.price + "\", "
                    + "\"image\": \"" + imageUrl + product.id + "/" + product.id_default_image + "?" + key + "\" "
                    + "},";
            });
            infos = infos.substring(0, infos.length - 1) + " ] }";

            console.log(infos);

            return JSON.parse(infos);
        });
}

const Products = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                POPULAR PRODUCTS
            </Text>
            <FlatList
                data={getData()}
                renderItem={({item}) => {
                    <Text>{item.name}</Text>
                }}
            />
        </View>
    )
}

export default Products;