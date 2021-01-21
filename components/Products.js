import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        justifyContent: 'center'
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
    },
    items: {
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    }
});

class Products extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataSource: []
        }
    }

    componentDidMount() {
        const imageUrl = "http://jouetenbois.mathieu-boucher.fr/api/images/products/";
        const key = "ws_key=3MJFI6WYD6GWDGJ8QECM6TZAZ6V65VUE";
        let url = "http://jouetenbois.mathieu-boucher.fr/api/products/?" + key + "&output_format=JSON&display=[id,name,price,id_default_image]";
        var infos = "{ \"products\": [";

        fetch(url)
        .then( function(response) {
			if(response.ok) {
				console.log("ok");
			} else
				console.log("ko");
			return response.json();
		})
		.then( function(data) {
									
			data.products.forEach(function (product) {
                infos += " { "
                            + "\"id\": " + product.id + ", "
                            + "\"name\": \"" + product.name.shift().value + "\", "
							+ "\"price\": \"" + product.price + "\", "
							+ "\"image\": \"" + imageUrl + product.id + "/" + product.id_default_image + "?" + key + "\" "
						+ "},";		
			});
            infos = infos.substring(0, infos.length - 1) + " ] }";
            let json = JSON.parse(infos);
            console.log(json);
            console.log(data);
			this.setState({
                isLoading: false,
                dataSource: json.products
            });
		});
    }

    _renderItem = ({item, index}) => {
        return (
            <View style={styles.items}>
                <Text>{item}note</Text>
            </View>
        )
    }

    render() {
        let {dataSource, isLoading} = this.state
        if (isLoading) {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>
                        POPULAR PRODUCTS
                    </Text>
                    <Text>Aucun produit !</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>
                        POPULAR PRODUCTS
                    </Text>
                    <FlatList
                        data={dataSource}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            )
        }
    }
}

export default Products;