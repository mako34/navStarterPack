
// colors
// blue bar: 009fde


import React from 'react';
import { StyleSheet, View, ImageBackground } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryTooltip } from "victory-native";
 

    const data = [
        { quarter: 1, earnings: 208 },
        { quarter: 2, earnings: 182 },
        { quarter: 3, earnings: 125 },
        { quarter: 4, earnings: 120 },
        { quarter: 5, earnings: 183 }

      ];

      const image =  require('../Images/bgndDark/bgGradient.png') ;

      
      export default class Victory1 extends React.Component {
        render() {
          return (

            <View style={styles.container}>
              {/* <Image style={{zIndex: 5}} source={require('../Images/bgndDark/bgGradient.png')}   /> */}


              <ImageBackground source={require('../Images/bgndDark/bgGradient.png')} style={styles.container}>

              {/* <View style={{width: 50, height: 50, backgroundColor: 'powderblue' }} /> */}


                <View style={styles.chartViewBgnd}>
                    <VictoryChart 
                    width={350} 
                    theme={VictoryTheme.material}
                    animate={{duration: 500}}
                    domainPadding={20}
                    >
                        <VictoryBar 
                        data={data} x="quarter" y="earnings"
                        style={{ data: { fill: "#009fde" } }}
                        labels={() => "HELLO"}
                        labelComponent={
                        <VictoryTooltip
                            center={{ x: 225, y: 30 }}
                            pointerOrientation="bottom"
                            flyoutWidth={150}
                            flyoutHeight={50}
                            pointerWidth={150}
                            cornerRadius={0}
                        />
                        }
                         
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
  
