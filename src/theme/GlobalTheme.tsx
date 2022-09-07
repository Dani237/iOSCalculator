import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    fondo: {
        flex: 1,
        backgroundColor: 'black'
    },
    calContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    result: {
        fontSize: 60,
        color: 'white',
        textAlign: 'right',
        marginBottom: 10
    },
    resultPeque: {
        fontSize: 30,
        color: 'rgba(255, 255, 255, 0.6)',
        textAlign: 'right'
    },
    fila: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginBottom: 18,
        justifyContent: 'center'
    },
    boton: {
        height: 65,
        width: 65,
        justifyContent: 'center',
        marginHorizontal: 10,
        borderRadius: 100,
        backgroundColor: '#2D2D2D',
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 25,
        color: 'white',
        fontWeight: '300',
    }
})