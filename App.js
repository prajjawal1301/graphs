/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
// import GroupedBarChartExample from './Components/GroupedBarChartExample';
import Newbar from './Components/Newbar';
import Linegraph from './Components/Linegraph';
import Areagph from './Components/Areagph';

export default class App extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      graph: <View><Newbar /></View>,
    };
  }

  Bar = () => {
    this.setState({
      graph: <View><Newbar /></View>,
    });
  }

  Line = () => {
    this.setState({
      graph: <View><Linegraph /></View>,
    });
  }

  Area = () => {
    this.setState({
      graph: <View><Areagph /></View>,
    });
  }


  render() {
    return (
      <View >
        <View style={{ flexDirection: 'row', marginHorizontal: 28, marginTop: 10 }}>
          <View style={{ marginHorizontal: 10 }}>
            <Button title={"Bar chart"} style={{ marginLeft: 10 }} color='#63b6d6' onPress={this.Bar} />
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Button title={"Area chart"} style={{ marginLeft: 10 }} color='#63b6d6' onPress={this.Area} />
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Button title={"Line chart"} style={{ marginLeft: 10 }} color='#63b6d6' onPress={this.Line} />
          </View>
        </View>
        <View>
          {this.state.graph}
        </View>


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
