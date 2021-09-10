import * as echarts from 'echarts'
import chinaMap from './data/china.json'
import data from './data.js'

// console.log(data)
const myChart = echarts.init(document.getElementById('container'));
echarts.registerMap('china', chinaMap);
const option = {
    color: [
        '#c23531',
        '#2f4554',
        '#61a0a8',
        '#d48265',
        '#91c7ae',
        '#749f83',
        '#ca8622',
        '#bda29a',
        '#6e7074',
        '#546570',
        '#c4ccd3'
    ],
    title: {
        text: '企业地域分布',
        x: "center",
        y: "50px",
        textStyle: {
            fontSize: 22,
            color: "black",
        },
    },
    geo: {
        map: 'china',
        selectedMode: 'single',
    },
    tooltip: {
        trigger: 'item',
        backgroundColor: "skyblue",
        formatter: '地区：{b}<br/>数量：{c}',
    },
    visualMap: {
        bottom: '12%',
        left: 'left',
        min: 0,
        max: 50,
        text: ['最高', '最低'],
        realtime: false,
        calculable: true,
        // inRange: {
        //     color: ['white', 'yellow', 'red'],
        //     symbolSize: [0, 50]
        // }
    },
    series: [
        {
            name: '公司数量',
            type: 'map',
            // colorBy: 'data',
            label: {
                show: true,
                position: 'inside',
            },
            select: {
                itemStyle: {
                    color: 'green'
                }
            },
            map: 'china',
            datasetIndex: 0,
        },
    ],
    dataset: {
        dimensions: ['省份', '公司数', '占比'],
        source: data,
    },
};
myChart.setOption(option);
window.addEventListener('resize', () => {
    myChart.resize()
})