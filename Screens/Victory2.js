import React from 'react';
import { StyleSheet, View } from "react-native";
import { VictoryBar, 
    VictoryChart, 
    VictoryTheme, 
    VictoryArea, 
    VictoryScatter, 
    VictoryAxis,
    VictoryTooltip,
    VictoryVoronoiContainer } from "victory-native";
import { Defs, LinearGradient, Stop } from "react-native-svg";

const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
  ];

  const LinearGrad = () => {
    return (
        <LinearGradient
          colors={['purple', 'white']}
          style={styles.container}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
        </LinearGradient>
      )
}

export default class Victory2 extends React.Component {

 
    

    constructor(props) {
      super(props);
    //   this.state = {
    //     data: this.getData()
    //   };
    }
  
    componentDidMount() {
      this.setStateInterval = window.setInterval(() => {
        // this.setState({
        //   data: this.getData()
        // });
      }, 3000);
    }
  
    componentWillUnmount() {
      window.clearInterval(this.setStateInterval);
    }
  
    render() {
      return (
 


        <VictoryChart
        theme={VictoryTheme.material}
        animate={{duration: 500}}
        containerComponent={
            <VictoryVoronoiContainer
              labels={() => "malAB"}
              labelComponent={
                <VictoryTooltip  dy={-7} constrainToVisibleArea />
              }
            />
          }
        >
            <VictoryAxis
            
            tickValues={['Mar', 'Apr', 'May', 'Jun', 'Jul']}
            style={{ axis: {stroke: "#1E93FA"} }}
            />

        <LinearGradient id="gradientStrokeBlue"
              x1="0%"
              x2="0%"
              y1="0%"
              y2="100%"
            >
              <Stop offset="0%" stopColor="#1E93FA" stopOpacity="1" />
              <Stop offset="90%" stopColor="#1E93FA" stopOpacity="0" />
            </LinearGradient>

            <LinearGradient id="gradientStrokeGray"
              x1="0%"
              x2="0%"
              y1="0%"
              y2="100%"
            >
              <Stop offset="0%" stopColor="#b1b1b1" stopOpacity="1" />
              <Stop offset="70%" stopColor="#b1b1b1" stopOpacity="0" />
            </LinearGradient>
        
         <VictoryArea
            style={{ data: { 
                fill: 'url(#gradientStrokeGray)', 
                stroke: "#c43a31", 
                strokeWidth: 3,

            } }}
            data={[
                { x: 1, y: 1, y0: 0 },
                { x: 2, y: 3, y0: 0 },
                { x: 3, y: 5, y0: 0 },
                { x: 4, y: 4, y0: 0 },
                { x: 5, y: 6, y0: 0 }
              ]}

               
        />

           

        <VictoryArea
            style={{ data: { fill: 'url(#gradientStrokeBlue)', stroke: "#c43a31", strokeWidth: 3 } }}
            data={[
                { x: 1, y: 0.5, y0: 0 },
                { x: 2.5, y: 2, y0: 0 },
                { x: 3, y: 2, y0: 0 },
                { x: 4, y: 1, y0: 0 },
                { x: 5, y: 2.5, y0: 0 }
              ]}
        />

        <VictoryScatter
            style={{ data: { fill: "#ffffff", stroke: "#c43a31", strokeWidth: 3  } }}
            size={5}
            data={[
                { x: 1, y: 1, y0: 0},
                { x: 2, y: 3, y0: 0},
                { x: 3, y: 5, y0: 0 },
                { x: 4, y: 4, y0: 0 },
                { x: 5, y: 6, y0: 0 }
            ]}
            
        />

        <VictoryScatter
            style={{ data: { fill: "#ffffff", stroke: "#1E93FA", strokeWidth: 3  } }}
            size={5}
            data={[
                { x: 1, y: 0.5, y0: 0 },
                { x: 2.5, y: 2, y0: 0 },
                { x: 3, y: 2, y0: 0 },
                { x: 4, y: 1, y0: 0 },
                { x: 5, y: 2.5, y0: 0 }
            ]}
            
        />

        </VictoryChart>

      );
    }
  }
  
