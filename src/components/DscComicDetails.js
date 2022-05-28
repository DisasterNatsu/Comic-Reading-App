import React, {useState} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useTheme} from '@react-navigation/native';

const DscComicDetails = () => {
  const [buttonShow, setButtonShow] = useState(true);

  const Theme = useTheme();

  return (
    <Animatable.View
      animation="fadeInUp"
      style={[styles.mid, {backgroundColor: Theme.dark ? '#424242' : '#fff'}]}>
      <Text style={[styles.dscTitle, {color: Theme.dark ? '#fff' : '#000'}]}>
        Description:
      </Text>
      <Text
        numberOfLines={buttonShow ? 3 : 30}
        ellipsizeMode={'tail'}
        style={[styles.dsc, {color: Theme.dark ? '#fff' : '#000'}]}>
        The journey to the Martial Peak is a lonely, solitary and long one. In
        the face of adversity, you must survive and remain unyielding! Only then
        can you break through and continue on your journey to become the
        strongest! {'\n'}
        {'\n'} High Heaven Pavilion tests its disciples in the harshest ways to
        prepare them for this journey. One day the lowly sweeper, Yang Kai,
        managed to obtain a black book, setting him on the road to the peak of
        the Martial World!
      </Text>
      <TouchableOpacity
        onPress={() => setButtonShow(!buttonShow)}
        activeOpacity={0.5}>
        <Text style={styles.readButton}>
          {buttonShow ? 'Read More' : 'Read Less'}
        </Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  mid: {
    flex: 5,
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 10,
  },
  dscTitle: {
    fontSize: 20,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  dsc: {
    marginTop: 5,
  },
  readButton: {
    position: 'absolute',
    right: 10,
  },
});

export default DscComicDetails;
