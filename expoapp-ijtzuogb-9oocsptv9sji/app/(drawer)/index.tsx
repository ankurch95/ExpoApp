import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const IndexScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Pressable style={{ padding: 10, backgroundColor: 'black' }}
     onPress={() => router.push('/(tabs)')}>
        <Text style={{ color: 'white' }}>Tab</Text>
     </Pressable>
    </View>
  )
}

export default IndexScreen