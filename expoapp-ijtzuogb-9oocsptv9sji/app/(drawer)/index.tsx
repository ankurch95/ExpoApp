import { View, Text, Pressable,Button, StyleSheet } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';

const IndexScreen = () => {

  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });



  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //  <Pressable style={{ padding: 10, backgroundColor: 'black' }}
    //  onPress={() => router.push('/(tabs)')}>
    //     <Text style={{ color: 'white' }}>Tab</Text>
    //  </Pressable>
    // </View>

    <View style={styles.container}>
    <Animated.View style={[styles.box, style]} />
    <Button
      title="toggle"
      onPress={() => {
        randomWidth.value = Math.random() * 350;
      }}
    />
  </View>

  )
}

export default IndexScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 80,
    backgroundColor: 'black',
    margin: 30,
  },
});