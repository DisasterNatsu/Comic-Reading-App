import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Rating from './subComponent/Rating';

const BgComicDetails = () => {
  return (
    <View style={styles.header}>
      <ImageBackground
        source={require('../../assets/images/bgm.jpg')}
        style={styles.imageBackground}
        resizeMode={'cover'}>
        <View style={styles.headerContent}>
          <View style={styles.titleView}>
            <Text style={styles.title}>Martial Peak</Text>
          </View>
          <View style={styles.ratingView}>
            <Rating />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const {width, height} = Dimensions.get('screen');
const bgImageHeight = height / 3;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageBackground: {
    width: width,
    height: bgImageHeight,
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleView: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '700',
  },
  ratingView: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BgComicDetails;
