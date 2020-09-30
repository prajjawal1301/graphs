/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Modal, Button } from 'react-native';

export default class Modals extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }

    render() {
        return (
            <View >
                <View>
                    <Text style={{ margin: 10 }}>Modal Closed</Text>
                </View>

                <View style={{ margin: 10 }}>
                    <Button title='Open Pop Up' onPress={() => this.setState({ show: true })}></Button>
                </View>

                <Modal transparent={true} visible={this.state.show} animationType="slide" onRequestClose={() => { this.setState({ show: false }) }}>
                    <View style={{ backgroundColor: "grey", margin: 50, padding: 40, borderRadius: 8, flex: 1 }}>
                        <Text style={{ fontSize: 40, marginVertical: 10 }}>Modal</Text>
                        <Button title="Close Modal" onPress={() => { this.setState({ show: false }) }} />
                    </View>
                </Modal>
            </View>

        );
    }
}


// {/* <Text style={{ fontSize: 20 }}>
//                     Normal Screen
//               </Text> */}
//               <Button title="Open Modal" />

//               {/* <Modal transparent={true} visible={this.state.show}>
//                   <View style={{ backgroundColor: "#fffff", margin: 50, padding: 40, borderRadius: 5, flex: 1 }}>
//                       <Text style={{ fontSize: 40 }}>Modal</Text>
//                       <Button title="Open Modal" onPress={() => { this.setState({ show: false }) }} />
//                   </View>
//               </Modal> */}