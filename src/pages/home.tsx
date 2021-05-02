import React, { useEffect, useRef } from 'react';
import './home.scss';
import HeaderBg from '../images/header.png'
import * as echarts from 'echarts'

const px = (n: number): number => {
  return n / 2420 * (window as any).pageWidth
}

export const Home = () => {
  const chartRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(chartRef.current)
    myChart.setOption({
        textStyle: {
          color: '#79839e',
          fontSize: px(12),
        },
        title: {
          show: false,
        },
        legend: {
          show: false
        },
        grid: {
          x: px(40),
          x2: px(40),
          y: px(40),
          y2: px(40),
        },
        xAxis: {
            data: ["兰州新区",'城关区',"七里河区","西固区","安宁区","红古区",'榆中县', '永登县', '皋兰县'],
            axisTick: { show: false },
            axisLine: {
              lineStyle: { color: '#083b70'}
            },
            axisLabel: {
              interval: 0,
              fontSize: px(12),
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
          axisLabel: {
            fontSize: px(12),
          },
          splitLine: {show: false},
        },
        series: [{
            type: 'bar',
            data: [10, 20, 36, 41, 26, 28, 33, 18, 29]
        }]
    })
  }, [])
  return (
    <div className="home">
      <header className="header" style={{backgroundImage: `url(${HeaderBg})`}}></header>
      <main>
        <section className="section1">
          <div className="bordered jurisdiction-statistic">
            <h2>案发派出所管辖统计</h2>
            <div className="chart" ref={chartRef}></div>
          </div>
        </section>
        <section className="bordered section2"></section>
        <section className="bordered section3"></section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
    </div>
  );
};
