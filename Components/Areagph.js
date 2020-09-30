/* eslint-disable prettier/prettier */
import React from 'react'
import { AreaChart, Grid, XAxis } from 'react-native-svg-charts'
import { View } from 'react-native'
import * as shape from 'd3-shape'
import * as scale from 'd3-scale';

function Areagph() {

    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]


    return (
        <View style={{ marginVertical: 40, marginHorizontal: 20 }}>
            <AreaChart
                showGrid={true}
                style={{ height: 500 }}
                data={data}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill: '#63b6d6' }}
            >
                <Grid />
            </AreaChart>
            <XAxis
                style={{ marginTop: 10 }}
                scale={scale.scaleBand}
                data={data}
                contentInset={{ top: 30, bottom: 30 }}
                formatLabel={(value, index) => index}
                labelStyle={{ color: 'black' }}
                svg={{ fontSize: 10, fill: 'black' }}
            />
        </View>
    );

}

export default Areagph;
