import React from 'react'
import View from 'react-native';
import CommonCarousel from "./CommonCarousel"
import Nav from "./Nav"
import FadingSlides from 'react-native-fading-slides';

class MainScreen extends React.Component {
  render() {
    const slides = [
      {
        image: require('../assets/cart.png'),
        imageWidth: 100,
        imageHeight: 100,
        title: 'Hello World',
        subtitle: 'This is a beautiful world',
        titleColor: '#fff',
        subtitleColor: '#fff',
      },
      {
        image: require('../assets/profile.png'),
        imageWidth: 200,
        imageHeight: 100,
        title: 'Bye World',
        subtitle: 'This is a see you soon',
        titleColor: '#fff',
        subtitleColor: '#fff',
      }
    ];
    return (
      <View>
        <Nav/>
        <View>
          <FadingSlides
            slides={slides}
            fadeDuration={1200}
            stillDuration={2000}
            height={500}
            startAnimation={true}
          />
        </View>
      </View>
    )
  }
}

export default MainScreen;