import React, { useState } from 'react';
import { View, Button } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const RecorderExample = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRecorderPlayer = new AudioRecorderPlayer();

  const startRecording = async () => {
    const result = await audioRecorderPlayer.startRecorder();
    setIsRecording(true);
    console.log(result);
  };

  const stopRecording = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    setIsRecording(false);
    console.log(result);
  };

  const startPlaying = async () => {
    const result = await audioRecorderPlayer.startPlayer();
    setIsPlaying(true);
    console.log(result);
  };

  const stopPlaying = async () => {
    const result = await audioRecorderPlayer.stopPlayer();
    setIsPlaying(false);
    console.log(result);
  };

  return (
    <View>
      <Button title={isRecording ? 'Stop Recording' : 'Start Recording'} onPress={isRecording ? stopRecording : startRecording} />
      <Button title={isPlaying ? 'Stop Playing' : 'Start Playing'} onPress={isPlaying ? stopPlaying : startPlaying} />
    </View>
  );
};

export default RecorderExample;