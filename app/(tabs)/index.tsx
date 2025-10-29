import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../../Screens/Home'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Home/>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
mainContainer:{
    flex:1,
    width:"100%",
   
    
}
})