import React, { useState } from 'react'
import ApexCharts from 'apexcharts'
import Chart from "react-apexcharts"

const Pie = () => {
    const [pieData , setPieData] = useState({
        series :[10,20,30,40,50],
        options: {
            chart: {
              width: 380,
              type: 'pie',
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }],
        }
    })
  return (
    <div style={{textAlign:"center"}}>
   <h1>Pie Chart</h1>  
   {/* <Chart options={pieData.options} series={pieData.series} type="pie" width={380} /> */}
    </div>
  )
}

export default Pie
