import { Link } from "@react-navigation/native";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
const MAX_WIDTH = Dimensions.get('window').width * 0.91;
const MAX_HEIGHT = Dimensions.get('window').height * 0.95;
export default function MovieDetailsPage({route}){
    
    const {filme} = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Image source={require('../../assets/imgs/Info.png')} style={styles.img}/>
                <Text style= {styles.title}>Detalhes do filme</Text>
                <Text style={styles.subtitle}>{filme.titulo}</Text>
                <Text>{filme.sinopse}</Text>
                <View style={styles.viewLinks}>
                    <Link to={{screen: 'MoviesPage'}}>
                        <Text style={styles.voltar}>Voltar</Text>
                    </Link>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginLeft: '4%'
    },
    infoContainer: {
        flexDirection: 'column',
        borderWidth: '5px',
        borderColor: 'black',
        padding: '10px',
        width: MAX_WIDTH,
        height: MAX_HEIGHT,
        alignItems: 'center',
        backgroundColor: '#80BFFF'
    },
    voltar: {
        fontSize: 24,
        alignItems: 'flex-start',
        margin: '25px',
    },
    viewLinks: {
        marginTop: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderWidth: '3px',
        borderColor: 'black',
        backgroundColor: '#658ad3'
    },
    img: {
        width: '200px',
        height: '200px'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: '50px'
    },
    subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: '20px'
    },
  });