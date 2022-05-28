import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Rating = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.container}>
        {[...Array(5)].map((item, i) => {
          return (
            <FontAwesome
              name="star"
              size={15}
              key={i}
              color={'gold'}
              style={{margin: 3}}
            />
          );
        })}
      </View>
      <Text style={styles.rating}>1593 Ratings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  rating: {
    color: '#fff',
    fontWeight: '900',
  },
});

export default Rating;
