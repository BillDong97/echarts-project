import * as echarts from 'echarts'
import chinaMap from './data/china.json'
import data from './data.js'

// console.log(data)
const myChart = echarts.init(document.getElementById('container'));
echarts.registerMap('china', chinaMap);
const option = {
    title: {
        text: '公司数量地域分布',
        x: "center",
        y: "50px",
        textStyle: {
            fontSize: 44,
            color: "black",
        },
    },
    geo: {
        map: 'china',
        selectedMode: 'single',
    },
    tooltip: {
        trigger: 'item',
        backgroundColor: "#FFD700",
        formatter: '地区：{b}<br/>公司数量：{c}',
    },
    visualMap: {
        type: 'continuous',
        hoverLink:true,
        dimension: 1,
        bottom: '12%',
        left: '5%',
        min: 0,
        max: 50,
        text: ['最高', '最低'],
        // realtime: true,
        calculable: true,
        inRange: {
            color: ['white', 'skyblue', 'blue'],
            symbolSize: [0, 50]
        },
        emphasis: {
            focus: 'self',
        },
    },
    series: [
        {
            name: '公司数量',
            type: 'map',
            colorBy: 'data',
            label: {
                show: true,
                position: 'inside',
            },
            color: ['white', 'yellow', 'red'],
            emphasis: {
                itemStyle: {
                    color: 'blue'
                }
            },
            map: 'china',
            // datasetIndex: 0,
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