import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.titel}>Miniräknare</Text>
      <View style={styles.numpad}>
        <TouchableOpacity
          style={styles.numknapp}
        >
          <Text>1</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numknapp}
        >
          <Text>2</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numknapp}
        >
          <Text>3</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.numknapp}
        >
          <Text>4</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numknapp}
        >
          <Text>5</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numknapp}
        >
          <Text>6</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.numknapp}
        >
          <Text>7</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numknapp}
        >
          <Text>8</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numknapp}
        >
          <Text>9</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.numknapp}
        >
          <Text>0</Text>

        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'#b36868',
        margin: '10%',
        padding: '10%',
        alignContent:'center',
        justifyContent:'center'
        
    },    
    numpad:{
      backgroundColor:'#5d1fc2',
      justifyContent:'center',
      flexDirection: 'row',
      flexWrap:'wrap',    // Lägger knapparna horisontellt istället för vertikalt
      padding:10,
      width:'100%'

    },
    titel:{
      fontSize:50,
      color:'#150725',
      fontWeight:'bold',
    },
    Text:{
        fontSize:20,
        color:'#150725',
        fontWeight:'bold',
    },
    numknapp:{
        backgroundColor:'#f0ece5',
        paddingVertical:10,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        margin:5,
        width:'30%',
        height:50,
    }
});