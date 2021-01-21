import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getResource} from "../api/apiConnection";

class Nav extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image source={require("../assets/menu.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleButton} onPress={()=>{alert("Retour à l'accueil")}}>
          <Text style={styles.title}>
              Jouets en Bois
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image source={require("../assets/profile.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image source={require("../assets/cart.png")}/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
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
    fontWeight: "bold"
  }
});

export default Nav;