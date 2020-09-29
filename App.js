/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import GroupedBarChartExample from './Components/GroupedBarChartExample';
import Newbar from './Components/Newbar';
import Linegraph from './Components/Linegraph';
import Areagph from './Components/Areagph';

export default class App extends React.Component {
  render() {
    return (
      <View>
        {/* <GroupedBarChartExample /> */}
        <Newbar />
        <Linegraph />
        <Areagph />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })
