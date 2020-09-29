/* eslint-disable prettier/prettier */
import React from 'react'
import { AreaChart, Grid, XAxis } from 'react-native-svg-charts'
import { View } from 'react-native'
import * as shape from 'd3-shape'

class Areagph extends React.PureComponent {
    render() {
        const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

        return (
            <View>
                <AreaChart
                    showGrid={true}
                    style={{ height: 200 }}
                    data={data}
                    contentInset={{ top: 30, bottom: 30 }}
                    curve={shape.curveNatural}
                    svg={{ fill: 'blue' }}
                >
                    <Grid />
                </AreaChart>
                <XAxis
                    style={{ marginTop: 10, }}
                    data={data}
                    formatLabel={(value, index) => index}
                    labelStyle={{ color: 'black' }}
                    svg={{ fontSize: 10, fill: 'black' }}
                />
            </View>
        );
    }
}

export default Areagph;
