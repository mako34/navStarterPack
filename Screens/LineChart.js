import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground } from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryArea,
  VictoryScatter,
  VictoryAxis,
  VictoryTooltip,
  VictoryVoronoiContainer,
  VictoryLabel
} from "victory-native";
import Colors from "./config/Colors";


import { Defs, LinearGradient, Stop } from "react-native-svg";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];



const configMainLine = (isSingle) => {
  console.log("lo fue", isSingle)


  if (isSingle) {
    return Colors.lineGreen

  }
  else
    return Colors.lineGray

}

const configAxisColor = (isSingle, isDarkMode) => {
  console.log("lo isSingle", isSingle)
  console.log("lo isDarkMode", isDarkMode)

  if (isSingle && !isDarkMode) {
    return Colors.transparent
  }
  if (isSingle && isDarkMode) {
    return Colors.white
  }
  if (!isSingle && !isDarkMode) {
    return Colors.lightBarGray
  }

}

const configTooltipBackground = (isSingle, isDarkMode) => {

  if (isSingle && !isDarkMode) {
    return Colors.lineGreen
  }
  if (isSingle && isDarkMode) {
    return Colors.lineBlue
  }
  if (!isSingle && !isDarkMode) {
    return Colors.lineBlue
  }
}

const Charter = ({ isSingle, isDarkMode }) => {
  const mainLineColor = configMainLine(isSingle);
  const axisColor = configAxisColor(isSingle, isDarkMode);
  const tooltipBgnd = configTooltipBackground(isSingle, isDarkMode);

  return (
    <VictoryChart
      width={400}
      height={200}
      animate={{ duration: 500 }}
      containerComponent={
        <VictoryVoronoiContainer
          labels={() => "food"}

          labelComponent={

            <VictoryTooltip
              style={{ fontSize: '15px', fill: 'white' }}
              cornerRadius={15}
              pointerLength={10}
              flyoutStyle={{
                stroke: Colors.transparent,
                fill: tooltipBgnd
              }}

              text={"$345,000.34"}
            />

          }
        />
      }
    >


      <VictoryAxis

        tickValues={['Mar', 'Apr', 'May', 'Jun', 'Jul']}
        style={{
          axis: {
            stroke: 'blue'  //CHANGE COLOR OF X-AXIS
          },
          tickLabels: {
            fill: 'orange' //CHANGE COLOR OF x-AXIS LABELS
          },
          grid: {
            stroke: 'red', //CHANGE COLOR OF Y-AXIS GRID LINES
            strokeDasharray: '3',
          }
        }}

      />


      <LinearGradient id="gradientStrokeBlue"
        x1="0%"
        x2="0%"
        y1="0%"
        y2="100%"
      >
        <Stop offset="0%" stopColor={Colors.gradientBlueStart} stopOpacity="1" />
        <Stop offset="90%" stopColor={Colors.gradientBlueStart} stopOpacity="0" />
      </LinearGradient>

      <LinearGradient id="gradientStrokeGray"
        x1="0%"
        x2="0%"
        y1="0%"
        y2="100%"
      >
        <Stop offset="0%" stopColor={Colors.gradientGrayStart} stopOpacity="1" />
        <Stop offset="70%" stopColor={Colors.gradientGrayStart} stopOpacity="0" />
      </LinearGradient>

      <LinearGradient id="gradientStrokeGreen"
        x1="0%"
        x2="0%"
        y1="0%"
        y2="100%"
      >
        <Stop offset="0%" stopColor={Colors.gradientGreenStart} stopOpacity="1" />
        <Stop offset="70%" stopColor={Colors.gradientGreenStart} stopOpacity="0" />
      </LinearGradient>

      <VictoryArea
        style={{
          data: {
            fill: 'url(#gradientStrokeGreen)',
            stroke: mainLineColor,
            strokeWidth: 3,

          }
        }}
        data={[
          { x: 1, y: 1, y0: 0 },
          { x: 2, y: 3, y0: 0 },
          { x: 3, y: 5, y0: 0 },
          { x: 4, y: 4, y0: 0 },
          { x: 5, y: 6, y0: 0 }
        ]}



      />

      {!isSingle && !isDarkMode &&

        <VictoryArea
          style={{ data: { fill: 'url(#gradientStrokeBlue)', stroke: Colors.lineBlue, strokeWidth: 3 } }}
          data={[
            { x: 1, y: 0.5, y0: 0 },
            { x: 2.5, y: 2, y0: 0 },
            { x: 3, y: 2, y0: 0 },
            { x: 4, y: 1, y0: 0 },
            { x: 5, y: 2.5, y0: 0 }
          ]}

        />


      }



      {/* The dots */}
      <VictoryScatter
        style={{ data: { fill: "#ffffff", stroke: mainLineColor, strokeWidth: 3 } }}
        size={5}
        data={[
          { x: 1, y: 1, y0: 0 },
          { x: 2, y: 3, y0: 0 },
          { x: 3, y: 5, y0: 0 },
          { x: 4, y: 4, y0: 0 },
          { x: 5, y: 6, y0: 0 }
        ]}

      />

      {!isSingle && !isDarkMode &&
        <VictoryScatter
          style={{ data: { fill: "#ffffff", stroke: Colors.lineBlue, strokeWidth: 3 } }}
          size={5}
          data={[
            { x: 1, y: 0.5, y0: 0 },
            { x: 2.5, y: 2, y0: 0 },
            { x: 3, y: 2, y0: 0 },
            { x: 4, y: 1, y0: 0 },
            { x: 5, y: 2.5, y0: 0 }
          ]}

        />

      }





    </VictoryChart>
  )


}

const LineChart = (props) => {

  const [isDarkMode, setDarkMode] = useState(props.isDarkMode);
  const [isSingle, sesSingleMode] = useState(props.isSingle);




  return (

    <View style={styles.container}>




      {isDarkMode ? <ImageBackground source={require('../Images/bgndDark/bgGradient.png')} style={styles.container}>
        <Charter isDarkMode />
      </ImageBackground > : <Charter isDarkMode={false} isSingle={isSingle} />
      }


    </View>

  );

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


export default LineChart;