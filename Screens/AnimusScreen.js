import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { BarChart } from "react-native-svg-charts";

import Colors from "./config/Colors";

function AnimusScreen  ()  {

    const [lineChartData, setLineChartData] = useState([
        {
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          svg: { stroke: Colors.cosmic, strokeWidth: 1, },
        }
      ])


      const changea = ()=>{

        setLineChartData([
            {
              data: [50, 10, 40, 95, 12, 24, 85, 50, 20, 80],
              svg: { stroke: Colors.cosmic, strokeWidth: 1, },
            }
          ])

      }

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch"
          }}
        >

            
        <BarChart
            style={{
              flex: 1,
              alignSelf: "stretch",
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.5)",
              margin: 10
            }}
            data={lineChartData}
            svg={{
              strokeWidth: 2,
              stroke: Colors.cosmic
            }}
            animate
          />


        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch"
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch"
            }}
          >
            <Text>My  Chart :D ex</Text>
          </View>
        </View>
        <TouchableOpacity
        onPress={() => changea()}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
      </View>
    );
  
}

export default AnimusScreen;





// const [lineChartData, setLineChartData] = useState([
//     {
//       data: [0, 0, 0, 5, -4, -4, 5, 5, -2, -8],
//       svg: { stroke: Colors.cosmic, strokeWidth: 1, },
//     },
//     {
//       data: [-8, 6, -6, 2, 0, 7, -9, -4, 8],
//       svg: { stroke: Colors.ypsLight, strokeWidth: 1, },
//     },
//   ])


//   const changea = ()=>{

//     setLineChartData([
//         {
//           data: [50, 10, 40, 95, -4, -24, 85, 50, -20, -80],
//           svg: { stroke: Colors.cosmic, strokeWidth: 1, },
//         },
//         {
//           data: [-87, 66, -69, 92, -40, 47, -89, -44, 18],
//           svg: { stroke: Colors.ypsLight, strokeWidth: 1, },
//         },
//       ])

//   }