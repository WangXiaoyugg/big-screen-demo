import React, { useRef, useEffect  } from 'react'
import * as echarts from 'echarts'
import {createEchartsOptions} from '../shared/create-echarts-options';

const chart1 = () => {
  const chartRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(chartRef.current)
    myChart.setOption(createEchartsOptions({
        xAxis: {
            data: ["兰州新区",'城关区',"七里河区","西固区","安宁区","红古区",'榆中县', '永登县', '皋兰县'],
            axisTick: { show: false },
            axisLine: {
              lineStyle: { color: '#083b70'}
            },
            axisLabel: {
              interval: 0,
              formatter(val) {
                if (val.length > 2) {
                  const array = val.split('')
                  array.splice(2, 0, '\n')
                  return array.join('')
                } else {
                  return val
                }
              }
            },
            splitLine: {show: false},
        },
        yAxis: {
          axisLine: {
            show: true,
            lineStyle: { color: '#083b70'}
          },
          splitLine: {show: false},
        },
        series: [{
            type: 'bar',
            data: [10, 20, 36, 41, 26, 28, 33, 18, 29]
        }]
    }))
  }, [])
  return (
    <div className="bordered jurisdiction-statistic">
      <h2>案发派出所管辖统计</h2>
      <div className="chart" ref={chartRef}></div>
    </div>
  )
}

export default chart1