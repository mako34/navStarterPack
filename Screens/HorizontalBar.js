 

import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground } from "react-native";
import {
    VictoryBar,
    VictoryChart,
    VictoryTheme,
    VictoryTooltip,
    VictoryLabel,
    VictoryAxis,
    VictoryGroup,
    VictoryStack,
    VictoryScatter,
    VictoryLegend
} from "victory-native";

import Colors from "./config/Colors";

const radiusBar = 5;
const barWidth = 8;


const Charter = (props) => {

    console.log ("props :", props);

    const fontColor = props.isDarkMode ? Colors.white : Colors.black;
    const tipBarColor = props.isDarkMode ? Colors.darkBarGray : Colors.lightBarGray;

    return (
        <View style={styles.chartViewBgnd}>

            <VictoryChart
                animate={{ duration: 500 }}
                width={420}
                height={120}
            >

                {/* x axis */}
                <VictoryAxis
                    style={{
                        axis: { stroke: "transparent" },
                        ticks: { fill: "transparent" },
                        tickLabels: { fill: "transparent" }
                    }}
                />

                {/* y axis */}
                <VictoryAxis
                    dependentAxis
                    style={{
                        axis: { stroke: "transparent" },
                        ticks: { fill: "transparent" },
                        tickLabels: { fill: "transparent" }
                    }}
                    ixLabelOverlap={true}
                    crossAxis={false}
                />

                <VictoryGroup
                >

                    <VictoryStack  >
                        <VictoryBar
                            horizontal
                            style={{
                                data: {
                                    fill: ({ datum }) => datum.fill,
                                }
                            }}
                            cornerRadius={{ bottom: radiusBar, top: radiusBar }}
                            barWidth={barWidth}
                            data={[
                                { x: "a", y: 2, y0: 1.25, fill: "#ff6f00" },
                                { x: "b", y: 3, y0: 1.25, fill: "#009fde" }]}
                        />

                        <VictoryBar

                            style={{
                                data: {
                                    fill: ({ datum }) => datum.fill,
                                }
                            }}
                            cornerRadius={{ top: radiusBar }}
                            barWidth={barWidth}
                            data={[{ x: "a", y: 3, fill: tipBarColor }, { x: "b", y: 2, fill: tipBarColor }]}
                        />
                    </VictoryStack>


                </VictoryGroup>


                <VictoryScatter
                    style={{ data: { fill: "transparent" } }}
                    size={1}
                    data={[
                        { x: 1.5, y: 1.5 },
                        { x: 1.5, y: 4.5 },
                        { x: -1.5, y: 1.5 },
                        { x: -1.5, y: 4.6 },

                    ]}
                    labels={[() => "IN", () => "$17,345.67", () => "OUT", () => "$8,000.00"]}
                    labelComponent={
                        <VictoryLabel
                            dy={-30}
                            dx={-20}
                            style={{ fill: fontColor }}
                        />
                    }
                />

            </VictoryChart>

        </View>
    )
}


function HorizontalBar(props) {

    const [isDarkMode, setDarkMode] = useState(props.isDarkMode);



    return (

        <View style={styles.container}>

            {isDarkMode ? <ImageBackground source={require('../Images/bgndDark/bgGradient.png')} style={styles.container}>
                          <Charter isDarkMode/>
                          </ImageBackground > : <Charter isDarkMode={false}/>
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


export default HorizontalBar;