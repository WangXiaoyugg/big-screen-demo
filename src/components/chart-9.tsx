import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

 const Chart9 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
  }, []);

  return (
    <div className="age-group-3">9
      <div ref={divRef} className="chart">

      </div>
    </div>
  );
};

export default Chart9