import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

function pris(kgp:number,vikt:number){
  return(kgp*vikt)
}

export default function App(){
    const[kgp,setKgp]=useState(0);
    const[vikt,setVikt]=useState(0);
    return(
        <View style={styles.container}>
            <Text style={styles.Text}>Priset för {vikt} kilogram på {kgp} kr/kg är {pris(kgp,vikt)} kr</Text>
            <TouchableOpacity 
            //ökar kilopris
              style={styles.knapp}
              onPress={() => setKgp(kgp+1)}
            >
              <Text style={styles.Text}>öka kilopris</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            //minskar kilopris
              style={styles.knapp}
              onPress={() => setKgp(kgp-1)}
            >
              <Text style={styles.Text}>minska kilopris</Text>
            </TouchableOpacity>
              
            <TouchableOpacity
            //ökar antal kg
              style={styles.knapp}
              onPress={() => setVikt(vikt+1)}
            >
              <Text style={styles.Text}>öka antal kg</Text>
            
            </TouchableOpacity>
            <TouchableOpacity
            //minskar antal kg
              style={styles.knapp}
              onPress={() => setVikt(vikt-1)}
            >
              <Text style={styles.Text}>minska antal kg</Text>
            
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#b36868',
        alignItems: 'center',
        justifyContent: 'space-between', // Skjuter isär innehållet: topp och botten!
        padding: 100, // Valfritt: ger lite luft till kanterna 
    },
    Text:{
        fontSize:20,
        color:'#150725',
        fontWeight:'bold',
    },
    knapp:{
        backgroundColor:'#f0ece5',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:10,
    }
});