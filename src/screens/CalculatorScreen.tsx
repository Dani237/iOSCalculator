import React, { useRef, useState } from "react"
import { Text, View } from "react-native";
import { BotonCalc } from "../components/BotonCalc";
import { useCalculadora } from "../hooks/useCalculadora";
import { styles } from "../theme/GlobalTheme";

export const CalculatorScreen = () => {

    const { limpiar, armarNumero, posiNega, btnDelete, btnDivide, 
        btnMulti, btnResta, btnSuma, calcular, numeroAnterior, numero } = useCalculadora();

    return (
        <View style={ styles.calContainer }>
            {
                ( numeroAnterior !== '0' ) && 
                <Text style={ styles.resultPeque }>{ numeroAnterior}</Text>
            }
            <Text style={ styles.result } numberOfLines={1} adjustsFontSizeToFit> { numero } </Text>

            <View style={ styles.fila }>
                <BotonCalc texto='C' color="#9B9B9B" action={ limpiar }/>
                <BotonCalc texto='+/-' color="#9B9B9B" action={ posiNega }/>
                <BotonCalc texto='del' color="#9B9B9B" action={ btnDelete }/>
                <BotonCalc texto='/' color="#FF9427" action={ btnDivide }/>
            </View>

            <View style={ styles.fila }>
                <BotonCalc texto='7' action={ armarNumero }/>
                <BotonCalc texto='8' action={ armarNumero }/>
                <BotonCalc texto='9' action={ armarNumero }/>
                <BotonCalc texto='X' color="#FF9427" action={ btnMulti }/>
            </View>

            <View style={ styles.fila }>
                <BotonCalc texto='4' action={ armarNumero }/>
                <BotonCalc texto='5' action={ armarNumero }/>
                <BotonCalc texto='6' action={ armarNumero }/>
                <BotonCalc texto='-' color="#FF9427" action={ btnResta }/>
            </View>

            <View style={ styles.fila }>
                <BotonCalc texto='1' action={ armarNumero }/>
                <BotonCalc texto='2' action={ armarNumero }/>
                <BotonCalc texto='3' action={ armarNumero }/>
                <BotonCalc texto='+' color="#FF9427" action={ btnSuma }/>
            </View>

            <View style={ styles.fila }>
                <BotonCalc texto='0' action={ armarNumero } ancho />
                <BotonCalc texto='.' action={ armarNumero }/>
                <BotonCalc texto='=' color="#FF9427" action={ calcular }/>
            </View>



        </View>
      );
}

