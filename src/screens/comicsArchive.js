import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import CardManga from '../components/CardsManga';
import * as Animatable from 'react-native-animatable';
import {useTheme} from '@react-navigation/native';

const ComicArchive = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);

  const Theme = useTheme();

  const onPressHandler = () => {
    navigation.navigate('ComicDetails');
  };

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} />}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Comics</Text>
        </View>
        <View
          style={[
            styles.footer,
            {backgroundColor: Theme.dark ? '#000' : '#E3E2E2'},
          ]}>
          <Animatable.View animation="fadeInUpBig" style={styles.main}>
            <TouchableOpacity onPress={onPressHandler}>
              <CardManga />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressHandler}>
              <CardManga />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressHandler}>
              <CardManga />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressHandler}>
              <CardManga />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressHandler}>
              <CardManga />
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </SafeAreaView>
    </ScrollView>
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
  headerText: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Pacifico-Regular',
    marginTop: 30,
  },
  footer: {
    flex: 4,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  main: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
});

export default ComicArchive;
