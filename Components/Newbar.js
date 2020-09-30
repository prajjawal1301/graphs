/* eslint-disable prettier/prettier */
import React from 'react';
import { BarChart, XAxis, YAxis, Grid } from 'react-native-svg-charts';
import { View } from 'react-native';
import * as scale from 'd3-scale';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient, Stop, Defs } from 'react-native-svg';


class Newbar extends React.PureComponent {

    render() {
        const data = [
            { number: 10, key: 'Mon' },
            { number: 13, key: 'Tue' },
            { number: 15, key: 'Wed' },
            { number: 12, key: 'Thur' },
            { number: 45, key: 'Fri' },
            { number: 50, key: 'Sat' },
            { number: 55, key: 'Sun' },
        ];

        const gradientColor = [
            '#63b6d6',
            '#bbecff',
            '#0C5672',
            '#9FD8F9',
            '#008AC7',
            '#BDD8D4',
        ];

        const Gradient = () => (
            <React.Fragment>
                <Defs key={'gradient0'}>
                    <LinearGradient id={'gradient0'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
                        <Stop offset={'0%'} stopColor={gradientColor[0]} />
                        <Stop offset={'100%'} stopColor={gradientColor[1]} />
                    </LinearGradient>
                </Defs>
                <Defs key={'gradient1'}>
                    <LinearGradient id={'gradient1'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
                        <Stop offset={'0%'} stopColor={gradientColor[2]} />
                        <Stop offset={'100%'} stopColor={gradientColor[3]} />
                    </LinearGradient>
                </Defs>
            </React.Fragment>
        );

        return (
            <View >
                <View style={{ height: 700, padding: 20, marginHorizontal: 2 }}>
                    <BarChart
                        style={{ flex: 1, justifycontent: 'center', marginTop: 60 }}
                        spacingInner={0.2}
                        data={data}
                        svg={{ fill: 'url(#gradient0)' }}
                        yAccessor={({ item }) => item.number}
                        gridMin={0}
                    >
                        <Gradient />
                        <Grid />

                    </BarChart>
                    <XAxis
                        style={{ marginTop: 10 }}
                        // spacingInner={0.3}
                        scale={scale.scaleBand}
                        data={data}
                        formatLabel={(_, index) => data[index].key}
                        labelStyle={{ color: 'black' }}
                        svg={{ fontSize: 10, fill: 'black', fontWeight: 'bold' }}
                    />
                </View>
                {/* <YAxis
                    style={{ marginTop: 10 }}
                    scale={scale.scaleBand}
                    // data={data}
                    labelStyle={{ color: 'black' }}
                    svg={{ fontSize: 10, fill: 'black' }}
                    contentInset={{ top: 10, bottom: 10 }}
                /> */}
            </View>
        );
    }

}

export default Newbar;
