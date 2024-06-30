import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const LoginScreen = () => {
  return (
   <SafeAreaView>
    <View>
        <Text>Login</Text>

        <Button 
        color={'#0a7ea4'}
        title='Login' 
        onPress={() => { console.log('Login') }} />

        <Link href={'/signup'}>Signup</Link>
    </View>
   </SafeAreaView>
  )
}

export default LoginScreen