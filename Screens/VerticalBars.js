
// colors
// blue bar: 009fde


import React from 'react';
import { StyleSheet, View, ImageBackground } from "react-native";
import { 
  VictoryBar, 
  VictoryChart, 
  VictoryTheme, 
  VictoryTooltip,
  VictoryLabel,
  VictoryAxis,
  VictoryLine } from "victory-native";


const chartTheme = {
  axis: {
    style: {
      tickLabels: {
        // this changed the color of my numbers to white
        fill: 'white',
      },
    },
  },
};

const data = [
  { quarter: 1, earnings: 208 },
  { quarter: 2, earnings: 182 },
  { quarter: 3, earnings: 125 },
  { quarter: 4, earnings: 120 },
  { quarter: 5, earnings: 183 }

];

const image = require('../Images/bgndDark/bgGradient.png');


export default class VerticalBars extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <ImageBackground source={require('../Images/bgndDark/bgGradient.png')} style={styles.container}>

          <View style={styles.chartViewBgnd}>
            <VictoryChart
              width={400}
              height={200}
              animate={{ duration: 500 }}
              domainPadding={40}
              style={{
                parent: {
                  border: "1px solid #00ff00"
                } 
              }}
             >

              <VictoryLine 
                style={{ data: { stroke: "#585858", strokeWidth: 1 } }}
                y={() => 100} />

              <VictoryLine 
                style={{ data: { stroke: "#585858", strokeWidth: 1 } }}
                y={() => 200} />

              {/* x axis */}
              <VictoryAxis
                tickValues={['Mar', 'Apr', 'May', 'Jun', 'Jul']}
                style={{ 
                  axis: { stroke: "white" }, 
                  ticks: { fill: "#fff" }, 
                  tickLabels: { fill: "#fff" } 
                }}
              />

              {/* y axis */}
              <VictoryAxis 
                dependentAxis
                tickFormat={t => `$${t}`}
                fixLabelOverlap={true}
                tickCount={3}
                style={{ 
                  axis: { stroke: "white" }, 
                  ticks: { fill: "#fff" }, 
                  tickLabels: { fill: "#fff" } 
                }} 
                ixLabelOverlap={true} 
                crossAxis={false}
              />

              <VictoryBar
                  cornerRadius={{top:7}}
                  data={data} x="quarter" y="earnings"
                  style={{ data: { fill: "#009fde" } }}
                  labels={() => "$123"}
                  barWidth={44}
                  labelComponent={<VictoryLabel dy={30} style={{  fill: "white" }}/>} 
              />

            </VictoryChart>
          </View>
        </ImageBackground >

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5fcff"
  },

  image: {
    resizeMode: "cover",
    justifyContent: "center"
  }
});

