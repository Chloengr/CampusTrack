import * as React from 'react';
import { useState } from 'react';
import { Image, StyleSheet, Text, View, Picker, Button, Alert } from 'react-native';

export default function HomeScreen() {
  const [selectedValue, setSelectedValue] = useState("Bretagne");
  return (
    <View style={styles.container}>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      </View>
      <View style={{flex:1, flexDirection: 'column'}}>
        <View style={{marginLeft: 20 }}>
          <Text style={styles.getStartedText}>Sélectionner une région ou lieu emblématique</Text>
          <Picker selectedValue={selectedValue} style={{ width: 250 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} >
            <Picker.Item label="Bretagne" value="Bretagne" />
            <Picker.Item label="L'île de Sein" value="Ile" />
            <Picker.Item label="La Camargue" value="Camargue" />
          </Picker>
        </View>
        <View style={{color: 'red', alignSelf: 'flex-start', marginLeft: 100}}>
          <Button onPress={onPressButton} title="Valider" />
        </View>
      </View>
      <View style={styles.containerMap}>
        <Image source={require('../assets/images/carte.png')} style={styles.mapImage}/>
      </View>
    </View>
  );
}
HomeScreen.navigationOptions = {
  header : null
}

function onPressButton() {
    Alert.alert('You clicked the button!')
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerMap:{
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
  },
  mapImage: {
    width: 650,
    height: 530,
    resizeMode: 'contain',
  },
  getStartedText: {
    fontSize: 25,
    color: 'black'
  }
});
