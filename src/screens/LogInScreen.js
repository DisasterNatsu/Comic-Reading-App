import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  TextInput,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@react-navigation/native';

const LogIn = ({navigation}) => {
  const Theme = useTheme();

  const [data, setData] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#F24C4C" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {backgroundColor: Theme.dark ? '#000' : '#fff'},
        ]}>
        <Text
          style={[styles.text_footer, {color: Theme.dark ? '#fff' : '#000'}]}>
          Email
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={'#FF5D5D'} size={20} />
          <TextInput
            placeholder="Your Email"
            placeholderTextColor={Theme.dark ? '#fff' : '#000'}
            style={[styles.textInput, {color: Theme.dark ? '#fff' : '#05375a'}]}
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color={'green'} size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text
          style={[
            styles.text_footer,
            {marginTop: 35, color: Theme.dark ? '#fff' : '#000'},
          ]}>
          Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color={'#FF5D5D'} size={20} />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor={Theme.dark ? '#fff' : '#000'}
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[styles.textInput, {color: Theme.dark ? '#fff' : '#05375a'}]}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color={'gray'} size={20} />
            ) : (
              <Feather name="eye" color={'gray'} size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <LinearGradient colors={['#F47C7C', '#FF4949']} style={styles.signIn}>
            <Text style={[styles.textSign, {color: '#fff'}]}>Sign In </Text>
          </LinearGradient>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={[
              styles.signIn,
              {borderColor: '#F24C4C', borderWidth: 1, marginTop: 15},
            ]}>
            <Text style={[styles.textSign, {color: '#FF4949'}]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5D5D',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LogIn;
