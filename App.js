/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Recorder from './src/components/recorder'
// const options = {
//   sampleRate: 16000,  // default 44100
//   channels: 1,        // 1 or 2, default 1
//   bitsPerSample: 16,  // 8 or 16, default 16
//   audioSource: 6,     // android only (see below)
//   wavFile: 'test.wav' // default 'audio.wav'
// };
// export const checkMicrophone = async () => {
//   const result = await PermissionsAndroid.check(
//     PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
//   );
//   return result;
// };

// useEffect(()=>{

//},[])


function Section({ children, title }) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>

        </View>



        <Button title='Click me' onPress={console.log('clicked')} />


        {/* <View><TouchableOpacity onPress={() => {
          PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
          )
          // AudioRecord.start();

        }}><Text>start recording</Text></TouchableOpacity></View>
        <View><TouchableOpacity onPress={async () => {
          audioFile = await AudioRecord.stop();

          AudioRecord.on('data', data => {
            console.log(data)
          });
        }}><Text>stop recording</Text></TouchableOpacity></View>
     */}
     <Recorder />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
