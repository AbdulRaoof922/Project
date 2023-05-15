import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const {width,height}=Dimensions.get("screen")
const Login = () => {
  return (
    <View style={{height:height ,width:width ,justifyContent:"center",alignItems:"center"}}>
      <Text>Login</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})