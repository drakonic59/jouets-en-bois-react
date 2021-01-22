import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';

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
        };
    }

    componentDidMount = async () => {
        const imageUrl = "http://jouetenbois.mathieu-boucher.fr/api/images/products/";
        const key = "ws_key=3MJFI6WYD6GWDGJ8QECM6TZAZ6V65VUE";
        const url = "http://jouetenbois.mathieu-boucher.fr/api/products/?" + key + "&output_format=JSON&display=[id,name,price,id_default_image]";

        let json = await fetch(url)
        .then( function(response) { 
			if(response.ok) {
				console.log("ok");
			} else
				console.log("ko");
			return response.json();
		})
		.then( function(data) {
                            
            let infos = "[";
			data.products.forEach( function (product) {
                infos += " { "
                            + "\"id\": " + product.id + ", "
                            + "\"name\": \"" + product.name.shift().value + "\", "
							+ "\"price\": \"" + product.price + "\", "
							+ "\"image\": \"" + imageUrl + product.id + "/" + product.id_default_image + "?" + key + "\""
						+ "},";		
			});
            infos = infos.substring(0, infos.length - 1) + " ]";
            let json = JSON.parse(infos);
            return json;
        });
        console.log(json);
        console.log("JSON OK");

        this.setState({
            isLoading: false,
            dataSource: json,
        });
    }

    _renderItem = ({item}) => {
        return (
            <View style={styles.items}>
                <Text>{item.name} {console.log(item.image)}</Text>
                <Image source={item.image} />
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
                    <Text style={styles.title}>
                        Aucun produit !
                    </Text>
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
                        keyExtractor={item => item.id}
                    />
                </View>
            )
        }
    }
}

export default Products;