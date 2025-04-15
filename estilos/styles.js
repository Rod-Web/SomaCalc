import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#071973',
        alignItems: 'center',
        justifyContent: 'center'
    },

    ViewCabecalho: {
        backgroundColor: 'yellow',
        flex: 0.4,
        width: '100%',
        shadowOffset: {width:0, height: 2 },
    },

    ViewCentro:{
        flex: 3,
        alignItems:"center",
        justifyContent: "center",
        width: '100%',
        marginTop:-160
    },

    titulo:{
        color: 'white',
        fontSize: '20px',
        fontFamily: 'Arial Narrow Bold',
        fontWeight:  '200',
    },

    Image:{
        width: 200,
        height: 180,
        marginBottom: 20,
    },
    
    entradasDados: {
        width: '80%',
        height:40,
        color: 'yellow',
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        margin: 7,
        borderRadius: 4,
        padding: 7
    },
    
    textoBotao: {
        color: 'white',
        fontWeight: 'bold'
    },

    botao:{
        backgroundColor: "red",
        width: '80%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginTop: 10
    },
 
})
 
export default styles;