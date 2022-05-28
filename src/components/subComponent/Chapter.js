import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

const Chapter = props => {
  const Theme = useTheme();
  return (
    <View
      style={[
        styles.chapters,
        {borderBottomColor: Theme.dark ? '#fff' : '#000'},
      ]}>
      <TouchableOpacity
        onPress={() => props.navigation.push('ComicReadingScreen')}>
        <View>
          <Text
            style={{
              color: Theme.dark ? '#fff' : '#000',
            }}>{`Chapter ${props.index}`}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  chapters: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    padding: 20,
    borderBottomWidth: 1,
  },
});

export default Chapter;
