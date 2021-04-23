import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, marginTop, 
  Button, Image, TextInput, ScrollView, Alert} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React, { Component, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Assets, createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { render } from 'react-dom';
import Home1 from './src/screens/Home1';
import Home2 from './src/screens/Home2';
import Home3 from './src/screens/Home3';
import Home4 from './src/screens/Home4';
import Home5 from './src/screens/Home5';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


function Selectclass( {navigation} ) {
  return (
    
    
    <View style={styles.container}>
           <View style = {styles.main_bar}>

    <View style={styles.edubar}> 
<Button title ="물리" onPress= {() => navigation.navigate('Main bar')}/>

<Button title ="지구과학" onPress= {() => navigation.navigate('Main bar')}/>

<Button title ="윤리" onPress= {() =>{ 
  navigation.navigate('Main bar')}}
    />
</View>

</View>
</View>

    
  );
}

function Selectdate( { route , navigation} ) {

  return (
    
    
    <View style={styles.container}>
    
     <View style = {styles.main_bar}>
<View style={styles.edubar}> 
<Button title ="2021년 3월" onPress= {() => navigation.navigate('1번문제')}/>

<Button title ="2021년 6월" onPress= {() => navigation.navigate('1번문제')}/>

<Button title ="2021년 3월" onPress= {() => navigation.navigate('1번문제')}/>

<Button title ="2021년 12월" onPress= {() => navigation.navigate('1번문제')}/>

</View>
<Text></Text>
     </View>
    

    </View>

    
  );
}


function TotalNavigation() {

  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="1번문제">
        <Stack.Screen name="select" component={Selectclass}/>
        <Stack.Screen name="Main bar" component={Selectdate}/>
        <Stack.Screen name="1번문제" component={Home1}/>
        <Stack.Screen name="2번문제" component={Home2}/>
        <Stack.Screen name="3번문제" component={Home3}/>
        <Stack.Screen name="4번문제" component={Home4}/>
        <Stack.Screen name="5번문제" component={Home5}/>
      </Stack.Navigator>
    </NavigationContainer>
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

export default TotalNavigation;

































// const logo = {
//   uri: 'https://reactnative.dev/img/tiny_logo.png',
//   width: 64,
//   height: 64
// };

// const Storage = {
//   power: "20",
//   Brain: "200",
//   Body: "30",
//   Hair: "25",
// }

// const FlatListBasics = ( {name, age} ) => {
  
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={[
//           {key: 'Devin'},
//           {key: 'Dan'},
//           {key: 'Dominic'},
//           {key: 'Jackson'},
//           {key: 'James'},
//           {key: 'Joel'},
//           {key: 'John'},
//           {key: 'Jillian'},
//           {key: 'Jimmy'},
//           {key: 'Julie'},
//           {key: name },
//           {key: age }
//         ]}
//         renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//       />
//     </View>
//   );
// }

// const FlatInput = () => {
//   return (
//     <TextInput placeholder="Input! "></TextInput>
//   )
// }

// class TestC extends Component {
//   render(){
//     return(
//       <>
// <FlatListBasics name="taeheon" age="20"></FlatListBasics>
// <FlatInput></FlatInput>
// </>
//     );
//   }
// }

// export default TestC;

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// });




// {
//   itemId: 86,
//   aa: 'HiHi',
//   bb: [100,200,300]

//   const { itemId , aa , bb} = route.params;
// let b2 = JSON.stringify(bb[0]);

// <Text>{JSON.stringify(itemId)}</Text>
// <Text>{typeof(itemId)}</Text>
// <Text>{JSON.stringify(aa)}</Text>
// <Text>{typeof(aa)}</Text>
// {b2} , {typeof(b2)}
//   }