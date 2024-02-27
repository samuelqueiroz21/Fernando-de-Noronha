import {Text, SafeAreaView, StyleSheet } from 'react-native';

import {Title} from './components/Title'
import {Subtitulo} from './components/Subtitle'
import {Button} from './components/Button'
import {Footer} from './components/Footer'
export default function App() {
  return (
    <SafeAreaView>
      <Title/>
      
      <Subtitulo/>

      <Button/>

      <Footer/>
    </SafeAreaView>
  );
}

