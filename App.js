import { Text, View, TextInput, TouchableOpacity, Image, ImageBackground }
from "react-native-web";
 
import styles from './estilos/styles.js';
import { use, useState } from "react";
 
export default function App() {
  const [numero1, setnumero1] = useState([]);
  const [numero2, setnumero2] = useState([]);
  const [resultado, setResultado] = useState([]);

  function somar() {
    setResultado(Number(numero1) + Number(numero2));
  };




  return(
    <View style ={styles.container}>
      <View style={styles.ViewCabecalho}></View>
      <View style={styles.ViewCentro}>
 
      <Text style={styles.titulo}>Pica Cálculo</Text>
        <Image resizeMode='center' style={styles.Image}
         source={{
          uri: 'https://th.bing.com/th/id/R.83c7a080178e5d49758b902fd8be1e1d?rik=yClfMP8tAyL27A&riu=http%3a%2f%2f3.bp.blogspot.com%2f-xIHSxVtOMIo%2fVG_-c5UnyrI%2fAAAAAAAAiCw%2f0IcEFZwLwlM%2fw680%2fPica-pau-em-png-queroimagem-cei%C3%A7a-crispim-04.png&ehk=mjuDxi9mAVbBGicWeJH9g9tN3G6RexY%2fmDuui1MB66s%3d&risl=&pid=ImgRaw&r=0'}}>
        </Image>
        <TextInput style={styles.entradasDados} placeholder='Digite o valor 1' onChangeText={(texto)=> setnumero1(texto)}></TextInput>
        <TextInput style={styles.entradasDados} placeholder='Digite o valor 2' onChangeText={(texto)=> setnumero2(texto)}></TextInput>
        
        <TouchableOpacity style = { styles.botao} onPress={()=>{somar()}}>
          <Text style ={styles.textoBotao}> Somar </Text>
        </TouchableOpacity>
        
        <Text style={{fontSize:12,fontWeight:"bold", color: "white"}}>{resultado}</Text>

      </View>
    </View>
 
  );
 
}