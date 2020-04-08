import * as React from 'react';
import { useState } from 'react';
import { Image, StyleSheet, Text, View, Picker } from 'react-native';
import { Button } from 'react-native-elements';
import Device from 'react-native-device-detection';

export default function HomeScreen({navigation}) {
  const [selectedValue, setSelectedValue] = useState("Bretagne");
  if(Device.isTablet){
    return (
    <View style={styles.container}>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      </View>
      <View style={{flex:1, flexDirection: 'column'}}>
        <View style={{marginLeft: 20}}>
          <Text style={styles.getStartedText}>Sélectionner une région ou lieu emblématique</Text>
          <Picker selectedValue={selectedValue} style={{ width: 250}} itemStyle={{fontFamily: 'Montserrat-Medium' }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} >
          <Picker.Item label="Bretagne" value="Bretagne" />
          <Picker.Item label="L'île de Sein" value="L'île de Sein" />
          <Picker.Item label="La Camargue" value="Camargue" />
          </Picker>
        </View>
      </View>
      <View style={styles.containerMap}>
        <Button onPress={() => navigation.navigate(selectedValue)} title="Valider"
          titleStyle={{
          color: "white",
          fontSize: 18,
          fontFamily: 'Montserrat-Medium'
          }}
          buttonStyle={{
          backgroundColor: "#FF2AC1",
          borderRadius: 60,
          height: 50,
          width: 100
          }}/>
        <Image source={require('../assets/images/carte.png')} style={styles.mapImage}/>
      </View>
    </View>
    );
  }
  else {
    return (
      <View style={stylesTablet.container}>
        <Text style={stylesTablet.getStartedText}>Sélectionner une région ou lieu emblématique</Text>
        <View style={{alignItems: 'center'}}>
        <Picker selectedValue={selectedValue} style={{ width: 250}} itemStyle={{fontFamily: 'Montserrat-Medium' }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} >
          <Picker.Item label="Bretagne" value="Bretagne" />
          <Picker.Item label="L'île de Sein" value="L'île de Sein" />
          <Picker.Item label="La Camargue" value="Camargue" />
        </Picker>
          <Button onPress={() => navigation.navigate(selectedValue)} title="Valider"
            titleStyle={{
            color: "white",
            fontSize: 18,
            fontFamily: 'Montserrat-Medium'
            }}
            buttonStyle={{
            backgroundColor: "#FF2AC1",
            borderRadius: 60,
            height: 50,
            width: 100
            }}/>
          <Image source={require('../assets/images/carte.png')} style={stylesTablet.mapImage}/>
          </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerMap:{
    flexDirection: "row",
    alignItems: 'center',
    padding: 100,
    fontFamily: 'Montserrat-Medium'
  },
  logo: {
    width: 80,
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
    marginTop: 20,
    color: 'black',
    fontFamily: 'Comfortaa-Light'
  }
});

const stylesTablet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  mapImage: {
    width: 450,
    height: 330,
    resizeMode: 'contain',
    marginTop: 20
  },
  getStartedText: {
    fontSize: 25,
    margin: 20,
    color: 'black',
    fontFamily: 'Comfortaa-Light'
  }
});
