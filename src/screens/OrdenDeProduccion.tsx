import React, { } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../themes/ProduccionTheme';
import { BotonesFinal } from '../components/BotonesFinal';


export const OrdenDeProduccion = () => {
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.cabecera} />
          <Text style={styles.texto}>Orden de Producción</Text>
          <Text style={styles.linea}>__________________________________________</Text>
          <Text style={styles.nombre}>Nombre</Text>
          <TextInput style={styles.infoDocumento}>Production</TextInput>
          <Text style={styles.atributos}>Atributos</Text>
          <View style={styles.cuadroAtributos} >
            <Text style={styles.textoAtributos}>Nombre                 Descripcion                 Cantidad</Text>
          </View>
          <Text style={styles.descripcion}>Descripción</Text>
          <TextInput style={styles.infoDocumento}>Production</TextInput>
          <Text style={styles.nombreTabla}>Nombre de la tabla</Text>
          <TextInput style={styles.infoDocumento}>Production</TextInput>
          <Text style={styles.generarServer}>Generar servidor</Text>
          <TouchableOpacity>
            <View style={styles.generarBot}>
              <Text style={styles.generarBotText}>GENERAR SERVIDOR</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.fila}>
            <BotonesFinal texto="Guardar" color="#0A8EBC" />
            <BotonesFinal texto="Cancelar" color="#000000" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
