// import logo from './logo.svg';
// import './App.css';
// import Chart from "react-apexcharts"
// import { useState, React, useEffect } from 'react';
// // import ApexCharts from 'apexcharts';
// // import Pie from './Pie';
// import { Link, NavLink } from "react-router-dom"

// const App = () => {

//   const handleClick = () => {
//     // alert("hello click event is fire")
//     <NavLink to={`/home`}>Home</NavLink>
//     console.log("juys")
//   }
//   const [count, setCount] = useState(0)
//   // console.log('count :>> ', count);
//   const [newChartData, setNewChartData] = useState({
//     series: [{
//       name: 'Jatin Sojitra',
//       data: [4, 9, 4, 7],
//       statusid: [1, 3, 4, 5]
//     }, {
//       name: 'Dharmesh Thummer',
//       data: [5, 7, 5, 6],
//       statusid: [1, 3, 4, 5]
//     }, {
//       name: 'Munshi Pokiya',
//       data: [2, 5, 1, 9],
//       statusid: [1, 3, 4, 5]
//     }, {
//       name: 'Naimish Talaviya',
//       data: [9, 7, 5, 8,],
//       statusid: [1, 3, 4, 5]
//     }, {
//       name: 'Naitik Sojitra',
//       data: [5, 12, 5, 1],
//       statusid: [1, 3, 4, 5]
//     }],
//     options: {
//       chart: {
//         id: "chartdata",
//         type: 'bar',
//         height: "100%",
//         stacked: true,
//         events: {
//           click: function (event, chartContext, config) {
//             console.log('config :>> ', config);
//             console.log('event :>> ', event);
//             console.log('chartContext :>> ', chartContext);
//             return (
//               <>
//                 <Link to={"/home"}></Link>
//               </>

//             )
//             // handleClick()
//           }
//         }
//       },
//       plotOptions: {
//         bar: {
//           horizontal: true,
//           dataLabels: {
//             total: {
//               enabled: true,
//               offsetX: 0,
//               style: {
//                 fontSize: '13px',
//                 fontWeight: 900
//               }
//             }
//           }
//         },
//       },
//       stroke: {
//         width: 1,
//         colors: ['#fff']
//       },
//       title: {
//         text: 'Task Books Sales'
//       },
//       xaxis: {
//         categories: [2008, 2009, 2010, 2011],
//         labels: {
//           formatter: function (val) {
//             return val + "K"
//           }
//         }
//       },
//       yaxis: {
//         title: {
//           text: undefined
//         },
//       },
//       tooltip: {
//         y: {
//           formatter: function (val) {
//             return val + "K"
//           }
//         }
//       },
//       fill: {
//         opacity: 1
//       },
//       legend: {
//         position: 'top',
//         horizontalAlign: 'left',
//         offsetX: 40
//       }
//     },
//   })
//   // console.log('newChartData :>> ', newChartData);
//   // const newChartseries =
//   // [{
//   //   name: 'Jatin Sojitra',
//   //   data: [44, 55, 41, 37]
//   // }, {
//   //   name: 'Dharmesh Thummer',
//   //   data: [53, 32, 33, 52]
//   // }, {
//   //   name: 'Mansi Pokiya',
//   //   data: [12, 17, 11, 9]
//   // }, {
//   //   name: 'Naimish Talaviya',
//   //   data: [9, 7, 5, 8, 6,]
//   // }, {
//   //   name: 'Naitik Sojitra',
//   //   data: [25, 12, 19, 32]
//   // }]

//   const [chartData, setChartData] = useState({
//     series: [{
//       name: 'Marine Sprite',
//       data: [44, 55, 41, 37, 22, 43, 21]
//     }, {
//       name: 'Striking Calf',
//       data: [53, 32, 33, 52, 13, 43, 32]
//     }, {
//       name: 'Tank Picture',
//       data: [12, 17, 11, 9, 15, 11, 20]
//     }, {
//       name: 'Bucket Slope',
//       data: [9, 7, 5, 8, 6, 9, 4]
//     }, {
//       name: 'Reborn Kid',
//       data: [25, 12, 19, 32, 25, 24, 10]
//     }],
//     options: {
//       chart: {
//         id: "chartdata",
//         type: 'bar',
//         height: "100%",
//         stacked: true,
//       },
//       plotOptions: {
//         bar: {
//           horizontal: true,
//           dataLabels: {
//             total: {
//               enabled: true,
//               offsetX: 0,
//               style: {
//                 fontSize: '13px',
//                 fontWeight: 900
//               }
//             }
//           }
//         },
//       },
//       stroke: {
//         width: 1,
//         colors: ['#fff']
//       },
//       title: {
//         text: 'Fiction Books Sales'
//       },
//       xaxis: {
//         categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
//         labels: {
//           formatter: function (val) {
//             return val + "K"
//           }
//         }
//       },
//       yaxis: {
//         title: {
//           text: undefined
//         },
//       },
//       tooltip: {
//         y: {
//           formatter: function (val) {
//             return val + "K"
//           }
//         }
//       },
//       fill: {
//         opacity: 1
//       },
//       legend: {
//         position: 'top',
//         horizontalAlign: 'left',
//         offsetX: 40
//       }
//     },
//   });
//   useEffect(() => {
//     let tempObj = newChartData
//     // console.log('tempObj :>> ', tempObj);
//     // console.log('render :>>');
//     setChartData(tempObj)
//     // var chart = new ApexCharts("chartdata" ,"u")
//     // ApexCharts.exec("chartadata" ,"updateSeries" , [{
//     //   data: tempObj.series
//     // }])
//     // chart.updateOptions({
//     //   series:[]
//     // })

//   }, [count == 2])
//   // console.log('chartData :>> ', chartData);
//   //  let tempObj = count === 0  ? chartData  : count === 1 ? newChartData : "" ;
//   return (
//     <>
//       <div className="App">
//         <Chart options={chartData.options} series={chartData.series} type='bar' width={"100%"} height={350} />
//       </div>
//       <div>
//         <button onClick={() => setCount(count + 1)}>Render</button>
//         <button onClick={() => setCount(count - 1)}>Render</button>
//       </div>
//       <Pie />
//     </>
//   );
// }

// export default App;

import React from 'react'
import { Button } from '@chakra-ui/react'
import { Route , Routes } from 'react-router-dom'
import HomeView from './Pages/HomeView'
import ChatView from './Pages/ChatView'
import "./App.css"
import WebCamp from './Pages/WebCamp'

const App = () => {
  return (
    <div className='App'>
      <>
      {/* <WebCamp/> */}
      </>
      <Routes>
      <Route path='/' Component={HomeView}  exact />
      <Route path='/chat' Component={ChatView} />
      </Routes>
    </div>
  )
}

export default App
