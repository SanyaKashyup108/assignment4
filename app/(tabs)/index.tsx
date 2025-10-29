import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../../Screens/Home'

const index = () => {
  return (
    <View style={styles.mainContainer}>
      <Home/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
mainContainer:{
    flex:1,
    width:"100%",
   
    
}
})