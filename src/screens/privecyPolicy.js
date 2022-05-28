import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  Linking,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Unorderedlist from 'react-native-unordered-list';

const Privecy = ({navigation}) => {
  const Theme = useTheme();

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#FF5D5D'}}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Privacy Policy!</Text>
      </View>
      <View
        style={[
          styles.footer,
          {backgroundColor: Theme.dark ? '#000' : '#fff'},
        ]}>
        <Text
          style={[
            styles.footer_heading,
            {color: Theme.dark ? '#fff' : '#000'},
          ]}>
          Privacy Policy for Disaster Scans
        </Text>
        <Text
          style={[
            styles.footer_text,
            {color: Theme.dark ? '#fff' : '#5c5b5b'},
          ]}>
          At Disaster Scans, accessible from{'\n'}
          <Text onPress={() => Linking.openURL('https://disasterscans.com')}>
            https://disasterscans.com/
          </Text>{' '}
          and our App, one of our main priorities is the privacy of our
          visitors. This Privacy Policy document contains types of information
          that is collected and recorded by Disaster Scans and how we use it.
          {'\n'}
          {'\n'}If you have additional questions or require more information
          about our Privacy Policy, do not hesitate to{' '}
          <Text onPress={() => navigation.navigate('Contact')}>Contact Us</Text>
          .{'\n'}
          {'\n'}
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our App with regards to the information that they
          shared and/or collect in Disaster Scans. This policy is not applicable
          to any information collected offline or via channels other than this
          App.
        </Text>
        <Text
          style={[
            styles.footer_heading,
            {color: Theme.dark ? '#fff' : '#000'},
          ]}>
          Consent
        </Text>
        <Text
          style={[
            styles.footer_text,
            {color: Theme.dark ? '#fff' : '#5c5b5b'},
          ]}>
          By using our Application, you hereby consent to our Privacy Policy and
          agree to its terms.
        </Text>
        <Text
          style={[
            styles.footer_heading,
            {color: Theme.dark ? '#fff' : '#000'},
          ]}>
          Information we collect
        </Text>
        <Text
          style={[
            styles.footer_text,
            {color: Theme.dark ? '#fff' : '#5c5b5b'},
          ]}>
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information.{'\n'}
          {'\n'}If you contact us directly, we may receive additional
          information about you such as your name, email address, phone number,
          the contents of the message and/or attachments you may send us, and
          any other information you may choose to provide.{'\n'}
          {'\n'}When you register for an Account, we may ask for your contact
          information, including items such as name, company name, address,
          email address, and telephone number.
        </Text>
        <Text
          style={[
            styles.footer_heading,
            {color: Theme.dark ? '#fff' : '#000'},
          ]}>
          How we use your information
        </Text>
        <Text
          style={[
            styles.footer_text,
            {color: Theme.dark ? '#fff' : '#5c5b5b'},
          ]}>
          We use the information we collect in various ways, including to:
        </Text>
        <View style={styles.bullets}>
          <Unorderedlist color={Theme.dark ? '#fff' : '#5c5b5b'}>
            <Text
              style={{fontSize: 15, color: Theme.dark ? '#fff' : '#5c5b5b'}}>
              Provide, operate, and maintain our App.
            </Text>
          </Unorderedlist>
          <Unorderedlist color={Theme.dark ? '#fff' : '#5c5b5b'}>
            <Text
              style={{fontSize: 15, color: Theme.dark ? '#fff' : '#5c5b5b'}}>
              Improve, personalize, and expand our App.
            </Text>
          </Unorderedlist>
          <Unorderedlist color={Theme.dark ? '#fff' : '#5c5b5b'}>
            <Text
              style={{fontSize: 15, color: Theme.dark ? '#fff' : '#5c5b5b'}}>
              Understand and analyze how you use our App.
            </Text>
          </Unorderedlist>
          <Unorderedlist color={Theme.dark ? '#fff' : '#5c5b5b'}>
            <Text
              style={{fontSize: 15, color: Theme.dark ? '#fff' : '#5c5b5b'}}>
              Develop new products, services, features, and functionality.
            </Text>
          </Unorderedlist>
          <Unorderedlist color={Theme.dark ? '#fff' : '#5c5b5b'}>
            <Text
              style={{fontSize: 15, color: Theme.dark ? '#fff' : '#5c5b5b'}}>
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the App, and for
              marketing and promotional purposes
            </Text>
          </Unorderedlist>
          <Unorderedlist color={Theme.dark ? '#fff' : '#5c5b5b'}>
            <Text
              style={{fontSize: 15, color: Theme.dark ? '#fff' : '#5c5b5b'}}>
              Send you emails
            </Text>
          </Unorderedlist>
          <Unorderedlist color={Theme.dark ? '#fff' : '#5c5b5b'}>
            <Text
              style={{fontSize: 15, color: Theme.dark ? '#fff' : '#5c5b5b'}}>
              Find and prevent fraud
            </Text>
          </Unorderedlist>
        </View>
        <Text
          style={[
            styles.footer_heading,
            {color: Theme.dark ? '#fff' : '#000'},
          ]}>
          Log Files
        </Text>
        <Text
          style={[
            styles.footer_text,
            {color: Theme.dark ? '#fff' : '#5c5b5b'},
          ]}>
          Disaster Scans follows a standard procedure of using log files. These
          files log visitors when they visit the App. All hosting companies do
          this and a part of hosting services' analytics. The information
          collected by log files include internet protocol (IP) addresses,
          browser type, Internet Service Provider (ISP), date and time stamp,
          referring/exit pages, and possibly the number of clicks. These are not
          linked to any information that is personally identifiable. The purpose
          of the information is for analyzing trends, administering the site,
          tracking users' movement on the App, and gathering demographic
          information.
        </Text>
        <Text
          style={[
            styles.footer_heading,
            {color: Theme.dark ? '#fff' : '#000'},
          ]}>
          Cookies and Web Beacons
        </Text>
        <Text
          style={[
            styles.footer_text,
            {color: Theme.dark ? '#fff' : '#5c5b5b'},
          ]}>
          Like any other App, Disaster Scans uses 'cookies'. These cookies are
          used to store information including visitors' preferences, and the
          pages on the App that the visitor accessed or visited. The information
          is used to optimize the users' experience by customizing our web page
          content based on visitors' browser type and/or other information.
        </Text>
        <Text
          style={[
            styles.footer_heading,
            {color: Theme.dark ? '#fff' : '#000'},
          ]}>
          Advertising Partners Privacy Policies
        </Text>
        <Text
          style={[
            styles.footer_text,
            {color: Theme.dark ? '#fff' : '#5c5b5b'},
          ]}>
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of Disaster Scans.{'\n'}
          {'\n'}Third-party ad servers or ad networks uses technologies like
          cookies, JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on Disaster Scans, which are sent
          directly to users' browser. They automatically receive your IP address
          when this occurs. These technologies are used to measure the
          effectiveness of their advertising campaigns and/or to personalize the
          advertising content that you see on App that you visit.{'\n'}
          {'\n'}Note that Disaster Scans has no access to or control over these
          cookies that are used by third-party advertisers.
        </Text>
        <Text
          style={[
            styles.footer_heading,
            {color: Theme.dark ? '#fff' : '#000'},
          ]}>
          Third Party Privacy Policies
        </Text>
        <Text
          style={[
            styles.footer_text,
            {color: Theme.dark ? '#fff' : '#5c5b5b'},
          ]}>
          Disaster Scans's Privacy Policy does not apply to other advertisers or
          websites. Thus, we are advising you to consult the respective Privacy
          Policies of these third-party ad servers for more detailed
          information. It may include their practices and instructions about how
          to opt-out of certain options. You may find a complete list of these
          Privacy Policies and their links here: Privacy Policy Links.
        </Text>
        <Text
          style={[
            styles.footer_heading,
            {color: Theme.dark ? '#fff' : '#000'},
          ]}>
          CCPA Privacy Rights (Do Not Sell My Personal Information)
        </Text>
        <Text
          style={[
            styles.footer_text,
            {color: Theme.dark ? '#fff' : '#5c5b5b'},
          ]}>
          Under the CCPA, among other rights, California consumers have the
          right to:{'\n'}
          {'\n'}Request that a business that collects a consumer's personal data
          disclose the categories and specific pieces of personal data that a
          business has collected about consumers.{'\n'}
          {'\n'}Request that a business delete any personal data about the
          consumer that a business has collected.{'\n'}
          {'\n'}Request that a business that sells a consumer's personal data,
          not sell the consumer's personal data.{'\n'}
          {'\n'}If you make a request, we have one month to respond to you. If
          you would like to exercise any of these rights, please{' '}
          <Text onPress={() => navigation.navigate('Contact')}>Contact Us</Text>
          .
        </Text>
        <Text
          style={[
            styles.footer_heading,
            {color: Theme.dark ? '#fff' : '#000'},
          ]}>
          GDPR Data Protection Rights
        </Text>
        <Text
          style={[
            styles.footer_text,
            {color: Theme.dark ? '#fff' : '#5c5b5b'},
          ]}>
          We would like to make sure you are fully aware of all of your data
          protection rights. Every user is entitled to the following:{'\n'}
          {'\n'}The right to access – You have the right to request copies of
          your personal data. We may charge you a small fee for this service.
          {'\n'}
          {'\n'}The right to rectification – You have the right to request that
          we correct any information you believe is inaccurate. You also have
          the right to request that we complete the information you believe is
          incomplete.{'\n'}
          {'\n'}The right to erasure – You have the right to request that we
          erase your personal data, under certain conditions.{'\n'}
          {'\n'}The right to restrict processing – You have the right to request
          that we restrict the processing of your personal data, under certain
          conditions.{'\n'}
          {'\n'} The right to object to processing – You have the right to
          object to our processing of your personal data, under certain
          conditions.{'\n'}
          {'\n'}The right to data portability – You have the right to request
          that we transfer the data that we have collected to another
          organization, or directly to you, under certain conditions.{'\n'}
          {'\n'}If you make a request, we have one month to respond to you. If
          you would like to exercise any of these rights, please contact us.
        </Text>
        <Text
          style={[
            styles.footer_heading,
            {color: Theme.dark ? '#fff' : '#000'},
          ]}>
          Children's Information
        </Text>
        <Text
          style={[
            styles.footer_text,
            {color: Theme.dark ? '#fff' : '#5c5b5b'},
          ]}>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.{'\n'}
          {'\n'}Disaster Scans does not knowingly collect any Personal
          Identifiable Information from children under the age of 13. If you
          think that your child provided this kind of information on our
          website, we strongly encourage you to contact us immediately and we
          will do our best efforts to promptly remove such information from our
          records.
        </Text>
      </View>
    </ScrollView>
  );
};

const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 10,
  },
  footer: {
    flex: 9,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  footer_text: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  footer_heading: {
    fontSize: 25,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 20,
    fontWeight: '800',
  },
  bullets: {
    justifyContent: 'center',
    width: 270,
    margin: 30,
  },
});

export default Privecy;
