import { Text, View ,StyleSheet,Image} from 'react-native';
import { useSession } from '../../hooks/ctx';
import { useEffect } from 'react';
import * as AppleAuthentication from 'expo-apple-authentication';


export default function HomeScreen() {
  const { signOut,session } = useSession();
  useEffect(() => {
    console.log(session);
  }, [session]);
  return (
    <View style={style.container}>
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={5}
        style={style.button}
        onPress={async () => {
          try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            });
            console.log(credential);
          } catch (e) {
            if (e.code === 'ERR_REQUEST_CANCELED') {
             console.log('user cancel the sign in');
            } else {
              console.log(e);
            }
          }
        }}
      />

      <Text>Logged is as: {session}</Text>
      <Text onPress={() => {signOut()}}>Sign Out</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
  button: {
    width: 200,
    height: 44,
  },

})