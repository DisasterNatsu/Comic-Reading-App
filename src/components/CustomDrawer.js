import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  TextInput,
  Switch,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ThemeContext} from '../Context/ThemeContext';
import {useTheme} from '@react-navigation/native';

const CustromDrawer = props => {
  const [loggedIn, setLoggedIn] = useState(false);

  const {toggleTheme} = useContext(ThemeContext);

  const navigation = props.navigation;
  const Theme = useTheme();

  return (
    <View
      style={[{flex: 1}, {backgroundColor: Theme.dark ? '#000' : '#E3E2E2'}]}>
      <DrawerContentScrollView
        contentContainerStyle={{
          flexDirection: 'column',
        }}
        {...props}>
        <ImageBackground
          source={require('../../assets/images/bg.png')}
          style={styles.backgroundImage}>
          <SafeAreaView style={styles.searchContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Search"
              placeholderTextColor="#000"
            />
            <Pressable onPress={() => console.log(Theme)}>
              <FontAwesome name="search" size={20} color="black" />
            </Pressable>
          </SafeAreaView>
          <Pressable
            onPress={() =>
              props.navigation.navigate('AuthStack', {screen: 'Splash'})
            }>
            <Icons
              name="md-person-circle-sharp"
              size={45}
              style={styles.userIcon}
            />
            <Text style={styles.userText}>Guest</Text>
          </Pressable>
        </ImageBackground>
        <View style={styles.listBackground}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomView}>
        <View style={styles.touchable}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={[
                styles.bottomText,
                {color: Theme.dark ? '#fff' : '#000'},
              ]}>
              Dark Mode
            </Text>
            <Switch
              value={Theme.dark}
              onValueChange={() => {
                toggleTheme();
              }}
              trackColor={{false: '#63EA79', true: '#FF4949'}}
            />
          </View>
        </View>
        {loggedIn ? (
          <TouchableOpacity
            onPress={() => navigation.navigate('AuthStack', {screen: 'LogIn'})}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Icons name="log-in" size={22} color="black" />
              <Text
                style={[
                  styles.bottomText,
                  {color: Theme.dark ? '#fff' : '#000'},
                ]}>
                Log Out!
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('AuthStack', {screen: 'Splash'})
            }>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Icons
                name="log-in"
                size={22}
                style={{color: Theme.dark ? '#fff' : '#000'}}
              />
              <Text
                style={[
                  styles.bottomText,
                  {color: Theme.dark ? '#fff' : '#000'},
                ]}>
                Log in!
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: '90%',
    backgroundColor: '#fff',
    margin: 3,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 7,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    flexWrap: 'wrap',
    position: 'absolute',
    alignSelf: 'center',
    top: 5,
    left: 0,
  },
  textInput: {
    width: '90%',
  },
  backgroundImage: {
    padding: 20,
    marginRight: -65,
    height: 250,
    marginTop: -5,
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  userIcon: {
    color: '#FF4949',
  },
  userText: {
    color: '#FF4949',
    fontSize: 15,
    fontWeight: 'bold',
  },
  listBackground: {
    flex: 1,

    paddingTop: 10,
  },
  bottomView: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  touchable: {
    paddingVertical: 5,
  },
  bottomText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default CustromDrawer;
