
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function pp() {  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/android-icon-foreground.png')} style={styles.icon}/>
        <Text style={styles.htitle}>ReelLife</Text>
      </View>
      <View style={styles.centcont}> 
        <Text style={styles.title}>Profile name</Text>
        <Text>Account name</Text>
        <TouchableOpacity 
        style={styles.knapp}
        >
          <Text>trycker här kanske du magiskt tas till fp eller camp</Text> 
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0d7a1',
  },
  centcont:{
    alignSelf:'center',
    paddingVertical:'30%',
    paddingHorizontal:'15%',
    backgroundColor:'#ffffff'
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
  },
  icon:{
    width:100,
    height:100,
  },
  header:{
    width:'100%',
    paddingVertical:10,
    backgroundColor:'#123',
    flexDirection:'row'
  },
  htitle:{
    fontSize:20,
    fontWeight:'bold',
    alignSelf:'center',
    color:'#fff'
  },
  knapp:{
    padding:5,
    borderRadius:10,
    backgroundColor:'#c72626'
  }
});
