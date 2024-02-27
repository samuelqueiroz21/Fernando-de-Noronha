import { Text, View, StyleSheet } from 'react-native';

export function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.footer}>2024 Fernando de Noronha</Text>
      <Text style={styles.texto}></Text>
    </View>
  );
}
const styles = StyleSheet.create({
    footer:{
    marginTop: 20,
    marginLeft: 100,
    fontSize: 15,
  },
});
