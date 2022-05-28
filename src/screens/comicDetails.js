import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  RefreshControl,
} from 'react-native';
import BgComicDetails from '../components/BgComicDetails';
import DscComicDetails from '../components/DscComicDetails';
import HeaderTabs from '../components/HeaderTabs';
import * as Animatable from 'react-native-animatable';
import Chapter from '../components/subComponent/Chapter';
import {useTheme} from '@react-navigation/native';

const ComicDetails = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Description');
  const [showChapters, setShowChapters] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const Theme = useTheme();

  return (
    <ScrollView
      style={{flex: 1}}
      refreshControl={<RefreshControl refreshing={refreshing} />}>
      <SafeAreaView
        // Set Refresh Control
        style={[
          styles.container,
          {backgroundColor: Theme.dark ? '#000' : '#F9F5F5'},
        ]}>
        {/* Background Image, Title and Rating */}
        <BgComicDetails />
        <View style={styles.containerButton}>
          <HeaderTabs
            text="Description"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <HeaderTabs
            text="Chapters"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setShowChapters={setShowChapters}
          />
        </View>
        {/* Description and Chapters Button */}
        {activeTab === 'Description' ? (
          <DscComicDetails />
        ) : (
          <Animatable.View
            animation="fadeInUpBig"
            style={[
              styles.footer,
              {backgroundColor: Theme.dark ? '#170E0E' : '#ccc'},
            ]}>
            <Text
              style={[
                styles.chapterHead,
                {color: Theme.dark ? '#fff' : '#000'},
              ]}>
              Chapters
            </Text>
            {[...Array(15)].map((item, i) => {
              return <Chapter key={i} index={i} navigation={navigation} />;
            })}
          </Animatable.View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerButton: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  footer: {
    flex: 1,
  },
  chapterHead: {
    fontSize: 20,
    margin: 15,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  chapters: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    padding: 20,
    borderBottomWidth: 1,
  },
});

export default ComicDetails;
