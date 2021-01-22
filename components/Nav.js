import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { getResource} from "../api/apiConnection";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Menu = ({ navigation }) => (
    <TouchableOpacity style={styles.button} onPress={() => navigation.openDrawer()}>
        <MaterialIcons name="menu" style={styles.menu} />
    </TouchableOpacity>
);

class Nav extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => {alert("Menu")}}>
                    <MaterialIcons name="menu" style={styles.menu} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.titleButton} onPress={()=>{alert("Retour à l'accueil")}}>
                    <Text style={styles.title}>
                        Jouets en Bois
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                    <MaterialIcons name="person" style={styles.login} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                    <MaterialIcons name="shopping-cart" style={styles.cart} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection:'row',
        backgroundColor: 'white',
        textAlign: "center",
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        width: 55
    },
    titleButton: {
        backgroundColor: 'white',
        padding: 10,
        width: 195,
        justifyContent: "center"
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        justifyContent: "center"
    },
    menu: {
        fontSize: 35,
        justifyContent: 'flex-start'
    },
    login: {
        fontSize: 35,
        justifyContent: 'flex-end'
    },
    cart: {
        fontSize: 35,
        justifyContent: 'flex-end'
    }
});

export default Nav;