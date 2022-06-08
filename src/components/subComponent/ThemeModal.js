import {
  Modal,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const ThemeModal = () => {
  const [showModal, setShowModal] = useState(true);

  const closeRequest = () => setShowModal(false);
  const Theme = useTheme();

  return (
    <Modal visible={showModal} onRequestClose={closeRequest}>
      <View style={Styles.centerView}>
        <View
          style={[
            Styles.mainContainer,
            {backgroundColor: Theme.dark ? '#ccc' : '#fff'},
          ]}>
          <View style={Styles.header}>
            <Text
              style={[
                Styles.headingText,
                {color: Theme.dark ? '#000' : '#000'},
              ]}>
              Select The Theme For {'\n'} Your App
            </Text>
          </View>
          <View style={Styles.body}>
            <Image
              source={require('../../../assets/images/mode.gif')}
              style={Styles.gif}
            />
          </View>
          <View style={Styles.footer}>
            <LinearGradient
              colors={['#404040', '#000000']}
              style={Styles.gradientButton}>
              <TouchableOpacity>
                <Text style={[Styles.buttontext, {color: '#fff'}]}>
                  Dark Mode
                </Text>
              </TouchableOpacity>
            </LinearGradient>
            <TouchableOpacity
              style={[
                Styles.gradientButton,
                {borderColor: '#000000', borderWidth: 1},
              ]}>
              <Text style={[Styles.buttontext, {color: '#000000'}]}>
                Light Mode
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const {width, height} = Dimensions.get('screen');

const Styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000055',
  },
  mainContainer: {
    width: width - 100,
    height: height / 2,
    borderRadius: 15,
  },
  header: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#9e9e9e',
  },
  headingText: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Lato-Bold',
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  gif: {
    width: width - 130,
    height: height / 4,
    padding: 20,
  },
  footer: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttontext: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  gradientButton: {
    width: '40%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default ThemeModal;
