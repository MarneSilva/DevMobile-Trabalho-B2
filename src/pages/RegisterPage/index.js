import { Link } from "@react-navigation/native";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import styles from "./styles";

export default function RegisterPage() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/Logo.png')} style={styles.logo}/>
            <TextInput style={styles.input} placeholder="username"/>
            <TextInput style={styles.input} placeholder="email"/>
            <TextInput style={styles.input} placeholder="password"/>   
            <TouchableOpacity style={styles.btnLogin}>
                <Text>Registre-se!</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'LoginPage'}}>Voltar para o login</Link>
                <Link to={{screen: 'ForgetPasswordPage'}}>Esqueceu a senha?</Link>
            </View>
        </View>
    );
}

