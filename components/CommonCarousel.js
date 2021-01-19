import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import FadingSlides from 'react-native-fading-slides';
import styles from 'react-native-fading-slides/index.styles';
import Nav from "./Nav"
import Products from "./Products"

const slides = [
  {
    image: require('../assets/carousel_one.png'),
    imageWidth: 318,
    imageHeight: 93,
  },
  {
    image: require('../assets/carousel_two.png'),
    imageWidth: 318,
    imageHeight: 93,
  }
];

const data = [
  {
     title:"Star Wars VIII - Les derniers Jedi",
  },
  {
     title:"La Guerre des étoiles",
  }
]

class CommonCarousel extends React.Component {
  render() {
    return (
      <View style={styless.container}>
        <Nav/>
        <View style={styless.carou}>
          <FadingSlides
            slides={slides}
            fadeDuration={3000}
            stillDuration={100}
            height={500}
            startAnimation={true}
          />
        </View>
        <Text style={styless.title}>
          POPULAR PRODUCTS
        </Text>
        <Products/>
      </View>
    )
  }
}

const styless = StyleSheet.create({
  carou: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#CAC9C8',
    flex: 1
  },
  title: {
    fontSize: 25,
    marginTop: 60,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default CommonCarousel;