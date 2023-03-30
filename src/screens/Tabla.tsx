import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet } from 'react-native';

const Tabla = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        <Picker
            style={styles.select}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue) =>
                setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="" value="" />
            <Picker.Item label="" value="" />
            <Picker.Item label="" value="" />
        </Picker>
    );
};

const styles = StyleSheet.create({
    select: {
        width: '93%',
        alignSelf: 'center',
        color: 'black',
        backgroundColor: '#0A8EBC',
    },
});


export default Tabla;
