import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'

const Categories = () => {
       const router = useRouter();
  return (
    <SafeAreaView style={{backgroundColor:"white",width:"100%",flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text style={{color:"black",}}>Categories</Text>
      <Button title="Go to About" onPress={() => router.navigate('/')} />;
    </SafeAreaView>
  )
}

export default Categories

const styles = StyleSheet.create({})