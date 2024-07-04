import { Text, View ,StyleSheet} from 'react-native';
import { useSession } from '../../hooks/ctx';
import { useEffect } from 'react';

export default function HomeScreen() {
  const { signOut,session } = useSession();
  useEffect(() => {
    console.log(session);
  }, [session]);
  return (
    <View style={style.container}>
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
  }
})