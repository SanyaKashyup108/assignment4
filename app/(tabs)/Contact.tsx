import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router';
import { Button } from 'react-native';
const Contact = () => {
      const router = useRouter();

  return (
   <SafeAreaView style={{backgroundColor:"white",width:"100%",flex:1,alignItems:"center",justifyContent:"center"}}>
         <Text style={{color:"black",}}>Contact</Text>
        <Button title="Go to About" onPress={() => router.navigate('/')} />;
       </SafeAreaView>
  )
}

export default Contact