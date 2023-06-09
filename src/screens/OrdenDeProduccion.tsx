import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import { styles } from '../themes/ProduccionTheme';
import { BotonesFinal } from '../components/BotonesFinal';
import DatePicker from 'react-native-date-picker';
import Tabla from './Tabla';

export const OrdenDeProduccion = () => {
  //fecha
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.cabecera} />
          <Text style={styles.texto}>Orden de Producción</Text>
          <Text style={styles.linea}>________________________________________</Text>
          <Text style={styles.nombre}>Número del Documento</Text>
          <TextInput style={styles.infoDocumento}>Production</TextInput>
          {/*fecha*/}
          <Text style={styles.nombre}>Fecha</Text>
          <Button title="Fecha" onPress={() => setOpen(true)} />
          <DatePicker
            style={styles.boton}
            modal
            open={open}
            date={date}
            // eslint-disable-next-line @typescript-eslint/no-shadow
            onConfirm={(date) => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          {/*select */}
          <Text style={styles.descripcion}>Producto</Text>
          <Tabla />
          <Text style={styles.nombre}>Cantidad</Text>
          <View>
            <TextInput style={styles.infoDocumento}>Cantidad</TextInput>
          </View>
          <View>
            <View style={styles.fila}>
              <BotonesFinal texto="Guardar" color="#0A8EBC" />
              <BotonesFinal texto="Cancelar" color="#000000" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};



