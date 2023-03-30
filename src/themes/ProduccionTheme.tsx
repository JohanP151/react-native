import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'white',
    },
    cabecera: {
        width: 400,
        height: 50,
        backgroundColor: '#0A8EBC',
    },
    texto: {
        color: 'black',
        fontSize: 20,
        paddingHorizontal: 30,
        marginTop: 20,
    },
    linea: {
        color: '#6D746C',
        fontSize: 20,
        paddingHorizontal: 30,
        marginTop: 2,
    },
    nombre: {
        color: 'black',
        fontSize: 20,
        paddingHorizontal: 30,
        marginTop: 5,
    },
    infoDocumento: {
        color: 'black',
        fontSize: 18,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        fontWeight: '600',
        paddingLeft: 20,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: '#085A86',
        paddingRight: 12,
    },
    descripcion: {
        color: 'black',
        fontSize: 20,
        paddingHorizontal: 30,
        marginTop: 20,
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    boton: {
        height: 60,
        width: 90,
        backgroundColor: '#0A8EBC',
        borderRadius: 10,
        justifyContent: 'center',
        marginHorizontal: 5,
        marginTop: 30,
        marginRight: 15,
        //marginTop:20,
        //paddingHorizontal:10,

    },
    botonTexto: {
        textAlign: 'center',
        color: '#000000',
        padding: 10,
        fontWeight: '600',
    },
});

