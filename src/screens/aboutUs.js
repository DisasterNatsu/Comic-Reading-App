import React from 'react';
import {View, ScrollView, Text, StyleSheet, Dimensions} from 'react-native';
import {useTheme} from '@react-navigation/native';

const About = ({navigation}) => {
  const Theme = useTheme();

  return (
    <View style={{flex: 1, backgroundColor: '#FF5D5D'}}>
      <View style={styles.header}>
        <Text style={styles.text_header}>About Us!</Text>
      </View>
      <View
        style={[
          styles.footer,
          {backgroundColor: Theme.dark ? '#000' : '#fff'},
        ]}>
        <Text
          style={[styles.footer_text, {color: Theme.dark ? '#fff' : '#000'}]}>
          Disaster Scans is a group originally formed by Disaster as the sole
          member, a one man army, to provide quality scanlations for the Manhua
          he enjoyed. From the original founding, Disaster Scans, quickly became
          a group with multiple people joining in to help out and donate their
          time to improve on the quality of the releases made by the group,
          whether that would be by gaining experienced editors or seasoned proof
          readers to ensure the translations themselves are smooth in the
          English tongue.{'\n'}
          {'\n'}Disaster Scans provides English versions of Manhua which have
          been properly translated, proof read, cleaned and redrawn all to go
          through a final stage of Quality Checking to ensure that the reader
          receives the best possible releases.
        </Text>
      </View>
    </View>
  );
};

const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 10,
  },
  footer: {
    flex: 9,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    height: height,
  },
  footer_text: {
    fontSize: 20,
  },
});

export default About;
