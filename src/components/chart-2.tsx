import React, { useRef, useEffect  } from 'react'
import * as echarts from 'echarts'
import px from '../shared/px'
import { baseEchartsOptions} from '../shared/base-echarts-options'
import { createEchartsOptions } from '../shared/create-echarts-options'
const chart2 = () => {
  const chartRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(chartRef.current)
    myChart.setOption(createEchartsOptions({
      grid: {
        x: px(100),
        y: px(40),
        x2: px(40),
        y2: px(40),
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: {show: false},
        axisLabel: { show: false },
      },
      yAxis: {
        type: 'category',
        axisTick: { show: false },
        data: ['城关区公安局', '七里河区公安局', '西固区公安局', '安宁区公安局', '红古区公安局',
          '永登县公安局', '皋兰县公安局', '榆中县公安局', '新区公安局'],
        axisLabel: {
          formatter(val) {
            return val.replace('公安局', '\n公安局')
          }
        }  
      },
      series: [
        {
          name: '2011年',
          type: 'bar',
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1,0, [
                { offset: 0, color: '#2034f9'},
                { offset: 1, color: '#04a1ff'},
              ])
            }
          }
        },
        {
          name: '2012年',
          type: 'bar',
          data: [2, 3, 4, 5, 6, 7, 8, 9, 10],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1,0, [
                { offset: 0, color: '#b92ae8'},
                { offset: 1, color: '#6773e7'},
              ])
            }
          }
        }
      ]
    }))
  }, [])
  return (
    <div className="bordered cracked-rank">
      <h2>案件破获排名</h2>
      <div className="chart" ref={chartRef}></div>
      <div className="legend">
        <span className="first" />刑事案件
        <span className="second" />民事案件
      </div>
    </div>
  )
}

export default chart2