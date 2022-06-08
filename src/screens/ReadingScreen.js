import {ScrollView, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React, {useEffect} from 'react';

const ReadingScreen = () => {
  useEffect(() => {
    let {width, height} = Dimensions.get('screen');
    console.log({width: width, height: height});
  }, []);

  return (
    <ScrollView style={styles.mainContainer}>
      <Image
        source={require('../../assets/images/Chapter/0000.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
      <Image
        source={require('../../assets/images/Chapter/0002.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
    </ScrollView>
  );
};

let {width} = Dimensions.get('screen');
let imageWidth = width - 5;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width: width,
    height: 530,
    alignSelf: 'center',
  },
});

export default ReadingScreen;
