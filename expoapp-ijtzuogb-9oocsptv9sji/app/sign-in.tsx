import { router } from 'expo-router';
import { Text, View, StyleSheet, TextInput, SafeAreaView, Button, Pressable } from 'react-native';
import { useSession } from '../hooks/ctx';
import { useState } from 'react';

export default function SignIn() {
  const { signIn } = useSession();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.container}>

        <TextInput
          value={email}
          placeholder='Enter Email'
          onChangeText={(text: string) => setEmail(text)}
          style={style.textInputStyle} />

        <TextInput
          value={password}
          placeholder='Enter Password'
          onChangeText={(text: string) => setPassword(text)}
          style={style.textInputStyle} />

        <Pressable
          style={style.button}
          onPress={() => { signIn(email), router.replace('/') }}>
          <Text style={{ color: 'white' }}>Sign In</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200,
    alignItems: 'center'
  },
  textInputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '90%',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 20
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20
  }
});
