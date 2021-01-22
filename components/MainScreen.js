import React, {Component} from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import CommonCarousel from "./CommonCarousel"
import Nav from "./Nav"
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Products from "./Products";
import NavigationDrawer from "../screens/NavigationDrawer";
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function Categories() {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Catégories</Text>
      </View>
  );
}

function CustomDrawerContent(props) {
  return (
      <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
              label="Close drawer"
              onPress={() => props.navigation.closeDrawer()}
          />
          <DrawerItem
              label="Toggle drawer"
              onPress={() => props.navigation.toggleDrawer()}
          />
      </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

class MainScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
        isList: true,
        isMenu: false,
        isCart: false,
        isProfile: false
    };
  }

  _changeStateMenu = () => {
    this.setState({
      isList: false,
      isMenu: true,
      isCart: false,
      isProfile: false
    });
  }

  render() {
    let { isList, isMenu, isCart, isProfile} = this.state
    if (isList) {
      return (
        <View style={styles.container}>
          <View style={styles.container_nav}>
              <TouchableOpacity style={styles.button} onPress={this._changeStateMenu}>
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
          <CommonCarousel />
          <Products />
        </View>
      )
    } else if (isMenu) {
      return (
        <View style={styles.container}>
          <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
              <Drawer.Screen name="Accueil" component={MainScreen} />
              <Drawer.Screen name="Catégories" component={Categories} />
            </Drawer.Navigator>
          </NavigationContainer>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CAC9C8',
    flex: 1
  },
  container_nav: {
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

export default MainScreen;