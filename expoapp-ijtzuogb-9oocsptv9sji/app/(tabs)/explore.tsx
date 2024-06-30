import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <Text>
          Explore
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
