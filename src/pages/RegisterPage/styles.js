import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FFFA'
    },
    input: {
        borderColor: 'black',
        borderWidth: '2px',
        padding: 5,
        marginBottom: '10px',
        height: 40,
        width: '70%',
        backgroundColor: 'gray',
        borderRadius: 5
    },
    logo: {
        width: '150px',
        height: '150px',
        marginBottom: '10px'
    },
    btnLogin: {
        border: '2px solid black',
        width: '30%',
        height: '4%',
        backgroundColor: 'violet',
        textAlign: 'center'
    },
    viewLinks: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%'
    }
})

export default styles;