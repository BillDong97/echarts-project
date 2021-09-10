import rawData from './data/map.csv'

const data = rawData.slice(1).map((item) => {
    return [item[0], parseInt(item[1]), parseFloat(item[2].replace("%", ""))]
})
const zero = [
    ["内蒙古自治区", 0, 0],
    ["山西省", 0, 0],
    ["甘肃省", 0, 0],
    ["青海省", 0, 0],
    ["西藏自治区", 0, 0],
    ["贵州省", 0, 0],
    ["天津市", 0, 0],
    ["台湾省", 0, 0],
    ["南海诸岛", 0, 0],
    ["澳门特别行政区", 0, 0],
]

export default [...data, ...zero]