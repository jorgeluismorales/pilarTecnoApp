import React from 'react';
import {
  ImageBackground,
  View,
  Dimensions,
  Alert
} from 'react-native';
import Btn from '../components/Btn';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const image = { uri: "https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" };
const height = Dimensions.get('window').height

const Home = ({navigation}) => {

  const alertHome = () =>{
    Alert.alert("ALERTA",
    "Ya estas en Home screen!!")
  }
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={image}
    >
      <View style={{ flexDirection: 'column', height, justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <Btn
            text={<FontAwesome name="home" size={100} />}
            color="rgba(60, 179, 113, 0.5)"
            onPress={alertHome}
          />
          <Btn
            text={<FontAwesome name="address-card" size={100} />}
            color="rgba(238, 0, 238, 0.5)"
            onPress={() =>{navigation.navigate('ProfileStack')}}
          />
        </View>

        <View style={{ flexDirection: 'row', }}>
          <Btn
            text={<FontAwesome name="edit" size={100} />}
            color="rgba(255, 165, 0, 0.5)"
            onPress={() =>{navigation.navigate('PostsStack')}}
          />
          <Btn
            text={<FontAwesome name="map" size={100} />}
            color="rgba(0, 165, 188, 0.8)"
            onPress={() =>{navigation.navigate('MapStack')}}
          />
        </View>
      </View>
    </ImageBackground>
  )
}


export default Home;