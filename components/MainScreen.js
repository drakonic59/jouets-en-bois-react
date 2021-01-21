import React, {Component} from 'react'
import { View, StyleSheet } from 'react-native';
import CommonCarousel from "./CommonCarousel"
import Nav from "./Nav"
import Products from "./Products";

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