import { Text, View, StyleSheet } from 'react-native';

export function Subtitle() {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitulo}>Explore as Maravilhosas Praias</Text>
      <Text style={styles.texto}>Visite as praias de Fernando de Noronha e mergulhe nas águas azul-turquesa.</Text>
    </View>
  );
}

const styles = StyleSheet.create({

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
});
