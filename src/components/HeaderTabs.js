import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {useTheme} from '@react-navigation/native';

const HeaderTabs = ({text, activeTab, setActiveTab}) => {
  const Theme = useTheme();
  return (
    <Animatable.View style={styles.container}>
      <LinearGradient
        colors={
          activeTab === text
            ? ['#F47C7C', '#FF4949']
            : Theme.dark
            ? ['#000', '#000']
            : ['#F9F5F5', '#F9F5F5']
        }
        style={styles.gradiant}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setActiveTab(text);
          }}>
          <Text
            style={[
              styles.buttonText,
              {color: activeTab === text ? '#fff' : '#FF4949'},
            ]}>
            {text}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 15,
  },
  gradiant: {
    marginTop: 5,
    borderRadius: 30,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 18,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '800',
  },
});

export default HeaderTabs;
