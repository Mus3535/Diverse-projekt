import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default function App(){
  const[disp,setDisp]=useState(0);
  const[cache,setCache]=useState(0);
  const[mode,setMode]=useState(0);
  return(
    <View style={styles.container}>
      <Text style={styles.titel}>Miniräknare</Text>
      <View style={styles.display}>
        <Text style={styles.displaytext}> {disp} </Text>
      </View>
      <View style={styles.numpad}>
        <TouchableOpacity
          style={styles.numknapp}
          onPress={() => setDisp(disp*10+1)}            
        >
          <Text>1</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numknapp}
          onPress={() => setDisp(disp*10+2)}
        >
          <Text>2</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numknapp}
          onPress={() => setDisp(disp*10+3)}
        >
          <Text>3</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.numknapp}
          onPress={() => setDisp(disp*10+4)}
        >
          <Text>4</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numknapp}
          onPress={() => setDisp(disp*10+5)}
        >
          <Text>5</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numknapp}
          onPress={() => setDisp(disp*10+6)}
        >
          <Text>6</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.numknapp}
          onPress={() => setDisp(disp*10+7)}
        >
          <Text>7</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numknapp}
          onPress={() => setDisp(disp*10+8)}
        >
          <Text>8</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numknapp}
          onPress={() => setDisp(disp*10+9)}
        >
          <Text>9</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.numknapp}
          onPress={() => setDisp(disp*10)}
        >
          <Text>0</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.numknapp}
          onPress={() => {
            setCache(cache+disp)
            setDisp(0)
            setMode(1)
          }}
        >
          <Text>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.numknapp}
          onPress={() => {
            setCache(disp-cache)
            setDisp(0)
            setMode(2)
          }}
        >
          <Text>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.numknapp}
          onPress={() => {
            setCache(cache*disp)
            setDisp(0)
            setMode(3)
          }}
        >
          <Text>x</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.numknapp}
          onPress={() => {
            setCache(cache/disp)
            setDisp(0)
            setMode(4)
          }}
        >
          <Text>/</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.numknapp}
          onPress={() => {
            if(mode==1){
            setDisp(cache+disp)
            }
            else if(mode==2){
            setDisp(cache-disp)
            }
            else if(mode==3){
            setDisp(cache*disp)
            }
            else if(mode==4){
            setDisp(cache/disp)
            }
            setCache(0)
          }}
        >
          <Text>=</Text>

        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.numknapp}
        onPress={() => {
          setDisp(0)
          setCache(0)
        }}
      >
        <Text>ac</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.numknapp}
        onPress={() => {
          console.log('mode är:'+mode)
          console.log('cache är:'+cache)
        }}
      >
        <Text>md/ch</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'#b36868',
        margin: '10%',
        padding: '1%',
        alignContent:'center',
        justifyContent:'center'
        
    },
    display:{
      width: '90%',
      height:'30%',
      
      backgroundColor:'#FFF',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      
    },
    displaytext:{

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