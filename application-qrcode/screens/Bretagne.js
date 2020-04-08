import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

export default function Bretagne() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
      <View style={styles.main_container}>
        <Text style={styles.title_h1}>Bretagne</Text>
        <Text style={styles.under_title}>Voici l'impact du changement climatique en 2100</Text>

        <Image style={styles.image} source={require('../assets/images/bretagne_2100.webp')}/>
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

        <Text style={styles.text_info}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</Text>

        <View style={styles.date_container}>
          <Text style={styles.title_h2}>Amusez-vous avec la date</Text>

          <View style={styles.dates}>
            <Icon
            name='calendar'
            type='font-awesome' />
            <Image style={styles.slider} source={require('../assets/images/slider.png')}/>
            <Text style={styles.text_info}>2100</Text>
          </View>
        </View>
      </View>

      </ScrollView>
      </View>
  );
}

Bretagne.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main_container: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  title_h1: {
    fontSize: 25,
    fontFamily: 'Comfortaa-Light'
  },
  title_h2: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold'
  },
  under_title: {
      marginTop: 7,
      fontSize: 20,
      fontFamily: 'Montserrat-SemiBold'
  },
  image: {
      marginTop: 45,
      height: 250,
      width: 380,
  },
  slider:{
    width: 300,
    height: 35,
    marginLeft: 10,
    marginRight: 10
  },
  text_info: {
    marginTop: 20,
    lineHeight: 24,
    fontSize: 18,
    textAlign: 'justify',
    fontFamily: 'Montserrat-Medium'
  },
  date_container: {
      marginTop: 55,
  },
  dates: {
      marginTop: 15,
      alignSelf: 'flex-start',
      flexDirection: 'row'
  }
});
