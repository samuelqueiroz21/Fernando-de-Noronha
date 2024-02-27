
import { Text, View, StyleSheet } from 'react-native';

export function Button() {
  return (
    <View style={styles.container}>
      <Text style={styles.botao}>Reserve sua Viagem</Text>
      <Text style={styles.texto}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  texto:{
    marginLeft: 10,
    fontSize: 14,
  },
  botao:{
    backgroundColor: '#ADD8E6',
    color: 'blue',
    textAlign: 'center',
    fontWeight:'bold',
    fontSize: 22,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 25,
    paddingBottom: 25,
  },
});
