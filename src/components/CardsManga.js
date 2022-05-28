import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';

const CardManga = () => {
  const Theme = useTheme();
  return (
    <View style={styles.topContainer}>
      <View style={styles.main}>
        <Image
          source={require('../../assets/images/mp.jpg')}
          style={styles.cardImage}
          resizeMode="contain"
        />
        <Text style={[styles.title, {color: Theme.dark ? '#fff' : '#000'}]}>
          Martial Peak
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
  main: {
    margin: 10,

    alignItems: 'center',
  },
  cardImage: {
    height: 200,
    width: 145,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'transparent',
  },
  title: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: '500',
  },
});

export default CardManga;
