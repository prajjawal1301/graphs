/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View } from 'react-native';
import { BarChart, Grid, XAxis } from 'react-native-svg-charts';

class GroupedBarChartExample extends Component {

    render() {

        const data1 = [14, -1, 100, -95, -94]
            .map((value) => ({ value }));
        const data2 = [24, 28, 93, 77, -42]
            .map((value) => ({ value }));

        const barData = [
            {
                data: data1,
                svg: {
                    fill: 'pink',
                },
            },
            {
                data: data2,
            },
        ];

        return (
            <View>
                <BarChart
                    style={{ height: 200 }}
                    data={barData}
                    yAccessor={({ item }) => item.value}
                    svg={{
                        fill: 'green',
                    }}
                    contentInset={{ top: 30, bottom: 30 }}
                    {...this.props}
                >
                    <Grid />
                </BarChart>
                <XAxis
                    // style={{ marginTop: 10 }}
                    data={barData}
                    formatLabel={(value, index) => index}
                    labelStyle={{ color: 'black' }}
                    svg={{ fontSize: 10, fill: 'black' }}
                />
            </View>
        );
    }

}

export default GroupedBarChartExample;
