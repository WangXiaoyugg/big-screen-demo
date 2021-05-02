import React, { useEffect, useRef } from 'react';
import './home.scss';
import HeaderBg from '../images/header.png'
import Chart1 from '../components/chart-1'
import Chart2 from '../components/chart-2'
import Chart3 from '../components/chart-3'
import Chart4 from '../components/chart-4'
import Chart5 from '../components/chart-5'


export const Home = () => {
  const year = new Date().getFullYear()
  return (
    <div className="home">
      <header className="header" style={{backgroundImage: `url(${HeaderBg})`}}></header>
      <main>
        <section className="section1">
          <Chart1 />
          <Chart2 />
        </section>
        <section className="section2">
          <Chart3 />
          <Chart4 />
        </section>
        <section className="bordered section3">
          <Chart5/>
        </section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
      <div className="footer">
        兰州市公安局技术部@2020-{year}
      </div>
    </div>
  );
};
