import * as React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import Device from 'react-native-device-detection';

export default function PlaceScreen() {
  if(Device.isTablet){
    return(
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>Lieu emblématique</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>Session en cours : ... °C</Text>
           </View>
          <Image source={require('../assets/images/logo.png')} style={styles.logo} />
         </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.subtitle}>Ile de Sein | Bretagne</Text>
            <Image style={styles.photo} source={require('../assets/images/ile.jpg')}/>
            <View style={{ flexDirection: 'row'}}>
                <Icon
                raised
                name='search-plus'
                type='font-awesome'
                onPress={() => console.log('Zoom +')} />
                <Icon
                raised
                name='search-minus'
                type='font-awesome'
                onPress={() => console.log('Zoom -')} />
            </View>
          </View>
          <View style={styles.columnRigth}>
            <Text style={styles.text}>L'île de Sein est une île de Bretagne située dans le Sud-Est de la mer Celtique, à 7,20 kilomètres à l'ouest de la pointe du Raz dont elle est séparée par le Raz de Sein.
              S'étendant à l'est de la Chaussée de Sein dont elle constitue le point le plus élevé, elle émerge à peine du niveau de la mer et subit ainsi fréquemment des submersions marines.
              L'habitat y est de ce fait resserré et regroupé autour du port pour faire front aux éléments : les ruelles étroites s'entremêlent pour que s'y perdent les vents et les embruns...
            </Text>
            <View style={styles.cardBottom}>
              <Text style={styles.cardTextBottom}>À savoir :</Text>
              <Text style={styles.cardTextBottom}>L'île est à moins de 2 mêtres du niveau de la mer</Text>
            </View>
           </View>
         </View>
       </View>
    );
  }
  else {
    return (
      <View style={stylesTablet.container}>
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <Text style={stylesTablet.title}>Lieu emblématique</Text>
        <Text style={stylesTablet.subtitle}>Ile de Sein | Bretagne</Text>
        <Image style={stylesTablet.photo} source={require('../assets/images/ile.jpg')}/>
          <View style={{ flexDirection: 'row', alignSelf: 'flex-start'}}>
              <Icon
              raised
              name='search-plus'
              type='font-awesome'
              onPress={() => console.log('Zoom +')} />
              <Icon
              raised
              name='search-minus'
              type='font-awesome'
              onPress={() => console.log('Zoom -')} />
          </View>
          <Text style={stylesTablet.text}>L'île de Sein est une île de Bretagne située dans le Sud-Est de la mer Celtique, à 7,20 kilomètres à l'ouest de la pointe du Raz dont elle est séparée par le Raz de Sein.
            S'étendant à l'est de la Chaussée de Sein dont elle constitue le point le plus élevé, elle émerge à peine du niveau de la mer et subit ainsi fréquemment des submersions marines.
            L'habitat y est de ce fait resserré et regroupé autour du port pour faire front aux éléments : les ruelles étroites s'entremêlent pour que s'y perdent les vents et les embruns...
          </Text>
          </ScrollView>
      </View>
    );
  }
 }

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white'
  },
  photo:{
    height: 470,
    width: 700,
    margin: 20,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginLeft: 50,
    marginRight: 20
  },
  title:{
    flex: 1,
    marginTop: 30,
    marginLeft: 30,
    fontSize: 25,
    fontFamily: 'Comfortaa-Light'
  },
  subtitle:{
    marginLeft: 30,
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold'
  },
  text:{
    width: 320,
    height: 370,
    fontSize: 17,
    textAlign: 'justify',
    fontFamily: 'Montserrat-Medium'
  },
  card:{
    backgroundColor: "#FF2AC1",
    alignItems: 'center',
    width: 290,
    height: 80
  },
  cardBottom:{
    backgroundColor: "#FF2AC1",
    alignItems: 'center',
    width: 290,
    height: 140
  },
  cardText:{
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 30,
    fontSize: 15,
    fontFamily: 'Montserrat-SemiBold'
  },
  cardTextBottom:{
    color: 'white',
    fontWeight: 'bold',
    padding: 20,
    fontSize: 15,
    fontFamily: 'Montserrat-SemiBold'
  },
  columnRigth:{
    flexDirection: 'column',
    alignSelf: 'center'
  }
})

const stylesTablet = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white'
  },
  photo:{
    height: 370,
    width: 400,
    resizeMode: 'contain',
  },
  title:{
    alignSelf: 'flex-start',
    margin: 20,
    fontSize: 25,
    color: 'black',
    fontFamily: 'Comfortaa-Light'
  },
  subtitle:{
    alignSelf: 'flex-start',
    marginLeft: 20,
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold'
  },
  text:{
    width: 360,
    textAlign: 'justify',
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
    paddingTop: 50,
    paddingBottom: 50
  }
})