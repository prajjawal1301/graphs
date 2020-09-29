/* eslint-disable prettier/prettier */
import React from 'react'
import { View } from 'react-native'
import { LineChart, Grid, XAxis } from 'react-native-svg-charts'

class Linegraph extends React.PureComponent {
    render() {
        const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

        return (
            <View>
                <LineChart
                    style={{ height: 200 }}
                    data={data}
                    svg={{ stroke: 'blue' }}
                    contentInset={{ top: 20, bottom: 20 }}
                >
                    <Grid />
                </LineChart>

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

export default Linegraph;
