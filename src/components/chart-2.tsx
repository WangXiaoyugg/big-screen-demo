import React, { useRef, useEffect  } from 'react'
import * as echarts from 'echarts'
import px from '../shared/px'
import { baseEchartsOptions} from '../shared/base-echarts-options'
import { createEchartsOptions } from '../shared/create-echarts-options'
const chart1 = () => {
  const chartRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(chartRef.current)
    myChart.setOption(createEchartsOptions({
      ...baseEchartsOptions,
      grid: {
        x: px(100),
        y: px(40),
        x2: px(40),
        y2: px(40),
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
      },
      yAxis: {
        type: 'category',
        data: ["兰州新区",'城关区',"七里河区","西固区","安宁区","红古区",'榆中县', '永登县', '皋兰县'],
      },
      series: [
        {
          name: '2011年',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
          name: '2012年',
          type: 'bar',
          data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
      ]
    }))
  }, [])
  return (
    <div className="bordered jurisdiction-statistic">
      <h2>案件破获排名</h2>
      <div className="chart" ref={chartRef}></div>
    </div>
  )
}

export default chart1