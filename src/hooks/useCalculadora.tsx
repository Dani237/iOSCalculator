import { useRef, useState } from "react";

enum Operadores {
    suma, resta, multi, divide
}

export const useCalculadora = () => {
    const [ numero, setNumero] = useState('0');
    const [ numeroAnterior, setnumeroAnterior] = useState('0');

    const ultimaOperacion = useRef<Operadores>()

    const limpiar = () => {
        setNumero('0')
        setnumeroAnterior('0')
    }

    const armarNumero = ( numeroTexto: string ) => {
        if (numero.includes('.') && numeroTexto === '.') return;

        if ( numero.startsWith('0') || numero.startsWith('-0') ) {
            if( numeroTexto === '.' ) {
                setNumero(numero + numeroTexto);
            } else if ( numeroTexto === '0' && numero.includes('.') ) {
                setNumero(numero + numeroTexto);
            } else if ( numeroTexto !== '0' && !numero.includes('.') ) {
                setNumero( numeroTexto );
            } else if ( numeroTexto === '0' && !numero.includes('.') ) {
                setNumero( numero );
            } else {
                setNumero(numero + numeroTexto);
            }
        } else {
            setNumero(numero + numeroTexto);
        }

        // if ( Operadores.divide && numeroTexto.endsWith('0') ) {
        //     setNumero('ERROR!')
        // }
    }

    const posiNega = () => {
        if ( numero.includes('-') ) {
            setNumero( numero.replace('-', '') )
        } else {
            setNumero( '-' + numero )
        }
    }

    const btnDelete = () => {
        let nega = '';
        let numeroTemp = numero;
        if ( numero.includes('-') ) {
            nega = '-';
            numeroTemp = numero.substring(1);
        }

        if ( numeroTemp.length > 1 ) {
            setNumero( nega + numeroTemp.slice(0, -1) );
        } else {
            setNumero('0');
        }
    }

    const pasarAlAnterior = () => {
        if ( numero.endsWith('.') ) {
            setnumeroAnterior( numero.slice(0, -1) )
        } else {
            setnumeroAnterior( numero )
        }

        setNumero('0');
    }

    const btnDivide = () => {
        pasarAlAnterior();
        ultimaOperacion.current = Operadores.divide;
    }

    const btnMulti = () => {
        pasarAlAnterior();
        ultimaOperacion.current = Operadores.multi;
    }

    const btnResta = () => {
        pasarAlAnterior();
        ultimaOperacion.current = Operadores.resta;
    }

    const btnSuma = () => {
        pasarAlAnterior();
        ultimaOperacion.current = Operadores.suma;
    }

    const calcular = () => {
        const n1 = Number( numero );
        const n2 = Number( numeroAnterior );

        switch (ultimaOperacion.current) {
            case Operadores.suma:
                setNumero(`${ n1 + n2 }`)
                break;

            case Operadores.resta:
                setNumero(`${ n2 - n1 }`)
                break;
            
            case Operadores.multi:
                setNumero(`${ n1 * n2 }`)
                break;

            case Operadores.divide:
                if ( n1 === 0 ) {
                    setNumero('ERROR!')
                    setTimeout(() => {
                        setNumero('0');
                    }, 2000);
                    break;
                }
                setNumero(`${ n2 / n1 }`)
                break;
        }
        setnumeroAnterior('0')
    }

    return {
        limpiar,
        armarNumero, 
        posiNega, 
        btnDelete,
        pasarAlAnterior,
        btnDivide,
        btnMulti,
        btnResta,
        btnSuma,
        calcular,
        numero,
        setNumero,
        numeroAnterior,
        setnumeroAnterior
    }
}