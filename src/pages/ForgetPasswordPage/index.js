import { Link } from "@react-navigation/native";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import styles from "./styles";

export default function ForgetPasswordPage() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/Logo.png')} style={styles.logo}/>
            <TextInput style={styles.input} placeholder="email"/>   
            <TouchableOpacity style={styles.btnLogin}>
                <Text>Enviar</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'LoginPage'}}>Voltar para o login</Link>
                <Link to={{screen: 'RegisterPage'}}>Registre-se!</Link>
            </View>
        </View>
    );
}

