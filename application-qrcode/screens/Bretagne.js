import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default function Bretagne() {
  return (
    <View style={styles.container}>
        <ScrollView style={styles.container}>

            <View style={styles.main_container}>
                <Text style={styles.title_h1}>Bretagne</Text>
                <Text style={styles.under_title}>Voici l'impact du changement climatique en 2100</Text>

                <Image style={styles.image} source={require('../assets/images/bretagne_2100.webp')}/>
                <View style={styles.icons}>
                    <Image style={styles.icon} source={require('../assets/images/zoom_sup.png')}/>
                    <Image style={styles.icon} source={require('../assets/images/zoom_inf.png')}/>
                </View>

                <Text style={styles.text_info}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</Text>
            
                <View style={styles.date_container}>
                    <Text style={styles.title_h2}>Amusez-vous avec la date</Text>

                    <View style={styles.dates}>
                        <Image style={styles.dates_icon} source={require('../assets/images/calendar.webp')}/>

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
    fontSize: 38,
    fontWeight: "800",
  },
  title_h2: {
    fontSize: 32,
    fontWeight: "800",
  },
  under_title: {
      marginTop: 7,
      fontWeight: "800",
  },
  image: {
      marginTop: 45,
      height: 250,
      width: 380,
  },
  icons: {
    marginTop: 6,
    flex: 1,
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
    width: 35,
    height: 35,
  },
  text_info: {
    marginTop: 20,
    lineHeight: 24,
    fontSize: 18,
  },
  date_container: {
      marginTop: 55,
  },
  dates: {
      marginTop: 15,
  },
  dates_icon: {
      width: 55,
      height: 55,
  }
});
