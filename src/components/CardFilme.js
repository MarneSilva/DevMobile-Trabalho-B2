import { Link } from "@react-navigation/native";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const baseUrl = "https://api.otaviolube.com";
const MAX_WIDTH = Dimensions.get('window').width * 0.91;
const MAX_HEIGHT = Dimensions.get('window').height * 0.95;

export default function CardFilme({ filme }){
    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Image style={styles.image} source= {{uri: baseUrl + filme.poster.data.attributes.formats.thumbnail.url}}/>
                <Text style={styles.title}>{filme.titulo}</Text>
                <Text style={styles.sinopse}>{filme.sinopse.length > 200 ? filme.sinopse.substring(0,200) + "..." : filme.sinopse}</Text>
                <TouchableOpacity style={styles.detalhes}>
                <Link to={{screen:'MovieDetailsPage', params: {filme: filme}}}><Text style={styles.saibaMais}>Saiba mais ...</Text></Link>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>Comprar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'black'
    },
    container: {
        backgroundColor: '#80BFFF',
        margin: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: MAX_HEIGHT,
        width: MAX_WIDTH,
        marginLeft: '4.7%'
    },
    image: {
      height: '200px',
      width: '150px',
      resizeMode: 'cover',
      marginBottom: 10,
      borderColor: '#658ad3',
      borderWidth: '4px',
      borderRadius: '5px'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10
    },
    sinopse: {
      marginBottom: 10,
      textAlign: 'justify',
      fontSize: 16,
    },
    button: {
        height: 40,
        width: '50%',
        backgroundColor: '#658ad3',
        borderColor: 'black',
        borderWidth: '3px',
        borderRadius: '10px',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 20
    },
    btnText: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    saibaMais: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#2879c9'
    }
})