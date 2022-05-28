import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import {useTheme} from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
  const {colors} = useTheme();

  const onPressHandler = () => {
    navigation.replace('LogIn');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#F24C4C" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode={'stretch'}
        />
        <Text style={styles.headerText}>Welcome!</Text>
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
        animation="fadeInUpBig">
        <Text style={styles.title}>
          Stay Connected With The Manhua Community!
        </Text>
        <Text style={styles.text}>Sign in with account</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPressHandler}>
            <LinearGradient
              colors={['#F47C7C', '#FAD4D4']}
              style={styles.signIn}>
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcon name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
};

const {height} = Dimensions.get('screen');
const height_logo = height * 0.1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5D5D',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {width: height_logo, height: height_logo},
  headerText: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Pacifico-Regular',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 50,
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FF5D5D',
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    marginTop: 10,
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SplashScreen;
