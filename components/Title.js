import { Text, View, StyleSheet } from 'react-native';

export function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.bemVindo}>Bem-Vindo a Fernando de Noronha</Text>
      <Text style={styles.texto}>Descubra o paraíso das praias intocadas e águas cristalinas.</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  bemVindo: {
    backgroundColor: 'green',
    color:'#FFF',
    paddingLeft: 45,   
    paddingRight: 45, 
    paddingBottom: 20,
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center'
  },
  texto:{
    marginLeft: 10,
    fontSize: 14,
  },
  subtitulo:{
    backgroundColor: 'orange',
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 35,
    paddingTop: 15,
    paddingBottom:15,
  },
  botao:{
    backgroundColor: '#ADD8E6',
    color: 'blue',
    textAlign: 'center',
    fontWeight:'bold',
    fontSize: 25,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 25,
    paddingBottom: 25,
  },
  footer:{
    marginTop: 30,
    marginLeft: 80,
  }
});
