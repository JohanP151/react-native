import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import { styles } from '../themes/ProduccionTheme';
import { BotonesFinal } from '../components/BotonesFinal';
import DatePicker from 'react-native-date-picker';


export const OrdenDeProduccion = () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.cabecera} />
          <Text style={styles.texto}>Orden de Producción</Text>
          <Text style={styles.linea}>__________________________________________</Text>
          <Text style={styles.nombre}>Número del Documento</Text>
          <TextInput style={styles.infoDocumento}>Production</TextInput>
          <Text style={styles.nombre}>Fecha</Text>
          <Button title='Open' onPress={() => setOpen(true)}/>
          <DatePicker 
            modal
            open={open}
            date={date}
            onConfirm={(date) =>{
              setOpen(false)
              setDate(date)
            }}
            onCancel={() => {
              setOpen(false)
            }}
          />
          <Text style={styles.descripcion}>Producto</Text>
          <TextInput style={styles.infoDocumento}>Production</TextInput>
          <Text style={styles.atributos}>Atributos</Text>
          <View style={styles.cuadroAtributos} >
            <Text style={styles.textoAtributos}>Producto                                                    Cantidad</Text>
          </View>
          <View style={styles.fila}>
            <BotonesFinal texto="Guardar" color="#0A8EBC" />
            <BotonesFinal texto="Cancelar" color="#000000" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
