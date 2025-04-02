import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import Cabecalho from './src/Componentes/Cabecalho';
import Pesquisa from './src/Componentes/Pesquisa';
import Banner from './src/Componentes/Banner';

export default function App() {
const imagem = Math.floor(Math.random() * 4 +1);

  return (
    <View style={styles.container}>

      <Cabecalho/>
      <Pesquisa/>
      <Banner/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#141a29',
    alignItems: "center"
  },
})