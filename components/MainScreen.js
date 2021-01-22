import React, {Component} from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import CommonCarousel from "./CommonCarousel"
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Products from "./Products";
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function Categories() {
  return (
    <View style={styles.container}>
      <Nav navig={navigation} />
      <CommonCarousel />
      <Text>
        Catégories !
      </Text>
    </View>
  );
}

function Nav(props) {
  return (
    <View style={styles.container_nav}>
        <TouchableOpacity style={styles.button} onPress={() => props.navig.toggleDrawer()}>
            <MaterialIcons name="menu" style={styles.menu} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleButton} onPress={()=>{alert("Retour à l'accueil")}}>
            <Text style={styles.title}>
                Jouets en Bois
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{props.navig.login()}}>
            <MaterialIcons name="person" style={styles.login} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
            <MaterialIcons name="shopping-cart" style={styles.cart} />
        </TouchableOpacity>
    </View>
  );
}

function Accueil({ navigation }) {
  return (
    <View style={styles.container}>
      <Nav navig={navigation} />
      <CommonCarousel />
      <Products />
    </View>
  )
}

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Nav navig={navigation} />
      <CommonCarousel />
      <Login />
    </View>
  )
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
      return (
        <View style={styles.container}>
          <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
              <Drawer.Screen name="Accueil" component={Accueil} />
              <Drawer.Screen name="Catégories" component={Categories} />
              <Drawer.Screen name="Login" component={Login} />
            </Drawer.Navigator>
          </NavigationContainer>  
        </View>
      )
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