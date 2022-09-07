
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { styles } from './src/theme/GlobalTheme';

const App = () => {
  
  return (
    <SafeAreaView style={ styles.fondo }>
      <StatusBar 
        barStyle= 'light-content'
        backgroundColor= 'black'
      />
      <CalculatorScreen/>
    </SafeAreaView>
  );
};

export default App;
