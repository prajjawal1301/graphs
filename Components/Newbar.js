/* eslint-disable prettier/prettier */
import React from 'react';
import { BarChart, XAxis, YAxis, Grid } from 'react-native-svg-charts';
import { View } from 'react-native';

class Newbar extends React.PureComponent {

    render() {

        const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24]

        return (
            <View style={{ height: 200, padding: 20 }}>
                <BarChart
                    style={{ flex: 1 }}
                    data={data}
                    // showGrid={true}
                    gridMin={0}
                    svg={{ fill: 'blue' }}
                />
                <XAxis
                    style={{ marginTop: 10 }}
                    data={data}
                    formatLabel={(value, index) => index}
                    labelStyle={{ color: 'black' }}
                    svg={{ fontSize: 10, fill: 'black' }}
                />
            </View>
        );
    }

}

export default Newbar;
