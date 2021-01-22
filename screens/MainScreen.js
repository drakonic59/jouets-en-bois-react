import 'react-native-gesture-handler';
import React, {Component} from 'react'
import CommonCarousel from "../components/CommonCarousel"
import Nav from "../components/Nav"
import Products from "../components/Products";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar
} from "react-native";

class MainScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Nav/>
                <CommonCarousel />
                <Products />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CAC9C8',
        flex: 1
    }
});

export default MainScreen;