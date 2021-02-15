

import React from 'react';
import { AreaChart, Grid } from 'react-native-svg-charts';
import { Text, View, Dimensions, StyleSheet, SafeAreaView } from 'react-native';
import moment from 'moment';
import { Circle } from 'react-native-svg';

import { DATA } from './Data';
import Tooltip from './Tooltip';

const { height } = Dimensions.get('window');

class GraphScreen extends React.PureComponent {
  state = {
    data: [],
    tooltipX: null,
    tooltipY: null,
    tooltipIndex: null,
  };

  componentDidMount() {
    this.reorderData();
  }

  reorderData = () => {
    const reorderedData = DATA.sort((a, b) => {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(a.date) - new Date(b.date);
    });

    this.setState({
      data: reorderedData,
    });
  };

  render() {
    const { data, tooltipX, tooltipY, tooltipIndex } = this.state;
    const contentInset = { left: 10, right: 10, top: 10, bottom: 7 };

    const ChartPoints = ({ x, y, color }) =>
      data.map((item, index) => (
        <Circle
          key={index}
          cx={x(moment(item.date))}
          cy={y(item.score)}
          r={6}
          stroke={color}
          fill="green"
          onPress={() =>
            this.setState({
              tooltipX: moment(item.date),
              tooltipY: item.score,
              tooltipIndex: index,
            })
          }
        />
      ));

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          {data.length !== 0 ? (
            <AreaChart
              style={{ height: '70%' }}
              data={data}
              yAccessor={({ item }) => item.score}
              xAccessor={({ item }) => moment(item.date)}
              contentInset={contentInset}
              animate={true}
              svg={{ fill: '#0000FF' }}
              numberOfTicks={10}
              yMin={0}
              yMax={10}
            >
              <Grid svg={{ stroke: 'rgba(255, 0, 0, 0.5)' }} belowChart={false} />
              <ChartPoints color="#FF0000" />
              <Tooltip
                tooltipX={tooltipX}
                tooltipY={tooltipY}
                color="#009fde"
                index={tooltipIndex}
                dataLength={data.length}
              />
            </AreaChart>
          ) : (
            <View
              style={{
                height: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: '#ccc',
                }}
              >
                There are no responses for this month.
              </Text>
            </View>
          )}
          <Text style={styles.heading}>Tooltip Area Chart</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: height / 2,
    flex: 1,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
  },
});

export default GraphScreen;
