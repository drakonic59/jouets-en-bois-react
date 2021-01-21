import React, {Component} from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import FadingSlides from 'react-native-fading-slides';

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

class CommonCarousel extends Component {
  render() {
    return (
        <View style={styles.carou}>
          <FadingSlides
            slides={slides}
            fadeDuration={3000}
            stillDuration={100}
            height={500}
            startAnimation={true}
          />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  carou: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default CommonCarousel;