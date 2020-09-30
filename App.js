/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Button, Modal } from 'react-native';
// import GroupedBarChartExample from './Components/GroupedBarChartExample';
import Newbar from './Components/Newbar';
import Linegraph from './Components/Linegraph';
import Areagph from './Components/Areagph';
import Modals from './Components/Modals';

export default class App extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      graph: "Bar Chart",
      show: false,
    };
  }

  Graph = (type) => {
    this.setState({
      graph: type,
    });
  }
  render() {
    return (
      <View>

        <Modals />


        {/* <View style={{ flexDirection: 'row', marginHorizontal: 28, marginTop: 10 }}>
          <View style={{ marginHorizontal: 10 }}>
            <Button title={"Bar chart"} style={{ marginLeft: 10 }} color='#63b6d6' onPress={() => this.Graph("Bar Chart")} />
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Button title={"Area chart"} style={{ marginLeft: 10 }} color='#63b6d6' onPress={() => this.Graph("Area Chart")} />
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Button title={"Line chart"} style={{ marginLeft: 10 }} color='#63b6d6' onPress={() => this.Graph("Line Chart")} />
          </View>
        </View>
        <View>
          {this.state.graph === "Bar Chart" && <Newbar />}
          {this.state.graph === "Area Chart" && <Areagph />}
          {this.state.graph === "Line Chart" && <Linegraph />}
        </View> */}
      </View>
    );
  }
}
