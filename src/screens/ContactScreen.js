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
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';

const ContactScreen = ({navigation}) => {
  const Theme = useTheme();

  const uploadImage = async () => {
    // Declaring Options
    const options = {
      mediaType: 'photo',
      selectionLimit: 1,
      includeBase64: false,
    };

    // Opening The Gallary
    const Image = await launchImageLibrary(options);
    console.log(Image);
  };

  // Handling Submit

  const HandleSubmit = async () => {};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#F24C4C" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Contact Us!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {backgroundColor: Theme.dark ? '#000' : '#fff'},
        ]}>
        <Text
          style={[
            styles.text_footer,
            {marginTop: 10, color: Theme.dark ? '#fff' : '#000'},
          ]}>
          Name
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={'#FF5D5D'} size={20} />
          <TextInput
            placeholder="Your Name"
            placeholderTextColor={Theme.dark ? '#fff' : '#000'}
            style={[styles.textInput, {color: Theme.dark ? '#fff' : '#05375a'}]}
            autoCapitalize="words"
          />
        </View>
        <Text
          style={[
            styles.text_footer,
            {marginTop: 10, color: Theme.dark ? '#fff' : '#000'},
          ]}>
          Email
        </Text>
        <View style={styles.action}>
          <MaterialCommunity name="email" color={'#FF5D5D'} size={20} />
          <TextInput
            placeholder="Your Email"
            autoComplete="email"
            keyboardType="email-address"
            placeholderTextColor={Theme.dark ? '#fff' : '#000'}
            style={[styles.textInput, {color: Theme.dark ? '#fff' : '#05375a'}]}
            autoCapitalize="none"
          />
        </View>
        <Text
          style={[
            styles.text_footer,
            {marginTop: 10, color: Theme.dark ? '#fff' : '#000'},
          ]}>
          Type Your Message Here:
        </Text>
        <View style={styles.actionMulti}>
          <TextInput
            placeholder="Type Your Message Here"
            placeholderTextColor={Theme.dark ? '#fff' : '#000'}
            style={[
              styles.textInputMulti,
              {color: Theme.dark ? '#fff' : '#05375a', height: 150},
            ]}
            autoCapitalize="sentences"
            multiline={true}
          />
        </View>
        <Text
          style={[
            styles.text_footer,
            {marginTop: 10, color: Theme.dark ? '#fff' : '#000'},
          ]}>
          Upload Image <Text style={{fontSize: 13}}>(Optional)</Text>
        </Text>
        <View style={styles.uploadView}>
          <TouchableOpacity
            onPress={uploadImage}
            style={[styles.signIn, {marginTop: 15}]}>
            <LinearGradient
              colors={['#F47C7C', '#FF4949']}
              style={styles.signIn}>
              <Text style={[styles.textSign, {color: '#fff'}]}>Upload</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.signIn, {marginTop: 15}]}>
          <LinearGradient colors={['#F47C7C', '#FF4949']} style={styles.signIn}>
            <Text style={[styles.textSign, {color: '#fff'}]}>Submit</Text>
          </LinearGradient>
        </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 9,
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
  actionMulti: {
    height: 150,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
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
  textInputMulti: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    textAlignVertical: 'top',
    marginTop: 1,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  uploadView: {
    width: '50%',
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

export default ContactScreen;
