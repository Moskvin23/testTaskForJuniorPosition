import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import MainBlock from './components/pages/JobListFirstPage/MainBlock';
import JobDetails from './components/pages/JobDetails/JobDetails';
import dataBase from './API/dataBase';
import getJobList from './API/api';


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
		getJobList()
			.then((data) => {
				console.log(data);
				setData(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainBlock list={data} />}></Route>
        <Route exact path="/jobs" element={<MainBlock list={data}/>}></Route>
      <Route path="/jobDetails/:id" element={<JobDetails list={data} />}></Route>
        </Routes>
      </Router>
    
  )
}

export default App;