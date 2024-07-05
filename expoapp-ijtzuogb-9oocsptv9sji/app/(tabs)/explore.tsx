import { StyleSheet, Text, SafeAreaView, View, ScrollView, Dimensions } from 'react-native';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";


const data = [
  { value: 2500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label: 'Jan' },
  { value: 2400, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

  { value: 3500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label: 'Feb' },
  { value: 3000, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

  { value: 4500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label: 'Mar' },
  { value: 4000, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

  { value: 5200, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label: 'Apr' },
  { value: 4900, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

  { value: 3000, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label: 'May' },
  { value: 2800, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },
];



export default function TabTwoScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.titleContainer}>
        <ScrollView>

          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginTop: 20 }}>BarChart</Text>

          <View
            style={styles.chartBackground}>
            <BarChart
              data={data}
              width={Dimensions.get('window').width / 1.4}
              height={300}
              xAxisLabelTextStyle={{ color: 'lightgray', textAlign: 'center' }}
              yAxisTextStyle={{ color: 'lightgray' }}
            />
          </View>


          <View
            style={styles.chartBackground}>
            <Text style={styles.chartTitle}>
              Overview
            </Text>
            <View style={{ padding: 20, alignItems: 'center' }}>
              <BarChart
                data={data}
                barWidth={16}
                initialSpacing={10}
                spacing={14}
                barBorderRadius={4}
                showGradient
                yAxisThickness={0}
                xAxisType={'dashed'}
                xAxisColor={'lightgray'}
                yAxisTextStyle={{ color: 'lightgray' }}
                stepValue={1000}
                maxValue={6000}
                noOfSections={6}
                yAxisLabelTexts={['0', '1k', '2k', '3k', '4k', '5k', '6k']}
                labelWidth={40}
                xAxisLabelTextStyle={{ color: 'lightgray', textAlign: 'center' }}
                showLine
                lineConfig={{
                  color: '#F29C6E',
                  thickness: 3,
                  curved: true,
                  hideDataPoints: true,
                  shiftY: 20,
                  initialSpacing: -30,
                }}
              />
            </View>
          </View>




        </ScrollView>
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
    flex: 1,
    backgroundColor: 'white'
  },
  chartBackground: {
    margin: 10,
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#232B5D',
  },
  chartTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
