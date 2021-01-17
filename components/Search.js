import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image, TextInput, Button } from 'react-native';

class Search extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image source={require("../assets/menu.png")}/>
        </TouchableOpacity>
        <TextInput placeholder='Titre du film'/>
        <Button title='Rechercher' onPress={() => {}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#859a9b',
    padding: 10,
    width: 30
  }
});

export default Search;