import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

 const Chart7 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
  }, []);

  return (
    <div className="age-group-1">7
      <div ref={divRef} className="chart">

      </div>
    </div>
  );
};

export default Chart7
