import React ,{ useState, } from 'react';
import { FlatList, StyleSheet, Text, View, marginTop, 
    Button, Image, TextInput, ScrollView, Alert} from 'react-native';

    function Home2( {navigation} ) {

      const [number2, setnumber2] = useState(0);
    
      const putandnext1 = function(){
        setnumber2(1);
        Alert.alert('동작함');
        navigation.navigate('3번문제')
      }
      
      const putandnext2 = function(){
        setnumber2(2);
        navigation.navigate('3번문제')
    
      }
      
      const putandnext3 = function(){
        setnumber2(3);
        navigation.navigate('3번문제')
      }
      
      const putandnext4 = function(){
        setnumber2(4);
        navigation.navigate('3번문제')
      }
      
      const putandnext5 = function(){
        setnumber2(5);
        navigation.navigate('3번문제')
      }
    
      const putandnext = function(){
        navigation.navigate('3번문제')
      }
      
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          
          <Button title ="next" onPress= {() => navigation.navigate('3번문제')}/>
          <Image 
          source ={require('../../assets/302.png')}
          style={{width:'90%', height:"72%"}}></Image>
          <Button title='1' onPress= {putandnext1}></Button>
          <Button title='2' onPress= {putandnext2}></Button>
          <Button title='3' onPress= {putandnext3}></Button>
          <Button title='4' onPress= {putandnext4}></Button>
          <Button title='5' onPress= {putandnext5}></Button>
          <Text>number : {number2}</Text>
        </View>
    
      );
    }
    

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
        },
        edubar: {
        flex:0.2, 
        backgroundColor:'white',
        flexDirection:'row'
        },
        brain_bar : {
          flexDirection:'row',
          flex: 0.06,
          marginTop: 10,
          width:'100%',
          backgroundColor:'yellow',
        },
        apat_bar: {
          flex:0.06,
          width:'100%',
          backgroundColor:'pink',
        },
        main_bar :{
          flex:0.3,
          width:'100%',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        },
        icon_bar :{
          flex:0.15,
          width:'100%',
          backgroundColor:'skyblue',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between',
        },
        text_bar: {
          flex:0.3,
          width:'100%',
          backgroundColor:'red',
          justifyContent:'center',
          alignItems:'center',
        }
        
      });
      
export default Home2;