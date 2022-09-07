import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "../theme/GlobalTheme"

interface Props {
    texto: string,
    color?: string,
    ancho?: boolean,
    action: ( numeroTexto: string ) => void
}

export const BotonCalc = ({ texto, color = '#2D2D2D', ancho = false, action }: Props) => {
    return (
        <TouchableOpacity onPress={ () => action( texto ) }>
            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: (ancho) ? 150 : 65
            }}> 
                <Text style={{
                    ...styles.botonTexto,
                    color: (color === '#9B9B9B') ? 'black' : 'white'
                }}> { texto } </Text>
            </View>
        </TouchableOpacity>
        
    )
} 