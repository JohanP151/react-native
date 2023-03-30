import React from 'react';
import { SafeAreaView } from 'react-native';
//import { Text, View } from 'react-native';
import { OrdenDeProduccion } from './src/screens/OrdenDeProduccion';
import { styles } from './src/themes/ProduccionTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <OrdenDeProduccion />
    </SafeAreaView>
  );
};


export default App;
