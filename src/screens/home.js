import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  RefreshControl,
} from 'react-native';
import CardManga from '../components/CardsManga';
import Carousel from '../components/Carousel';
import {dummyData} from '../Data/data';
import * as Animatable from 'react-native-animatable';
import ThemeModal from '../components/subComponent/ThemeModal';

const Home = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);

  const onPresshandler = () => {
    navigation.navigate('ComicDetails');
  };

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} />}>
      <StatusBar backgroundColor="#F24C4C" barStyle="light-content" />
      <Carousel data={dummyData} navigation={navigation} />
      <Animatable.View animation="fadeInUpBig" style={styles.main}>
        <ThemeModal />
        <TouchableOpacity onPress={onPresshandler}>
          <CardManga />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPresshandler}>
          <CardManga />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPresshandler}>
          <CardManga />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPresshandler}>
          <CardManga />
        </TouchableOpacity>
      </Animatable.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});

export default Home;
