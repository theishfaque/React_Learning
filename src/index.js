import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './Counter';
import './index.css';
import StudentData from './StudentData';
import BGChanger from './BGChanger';
import Movie from './MoviesData/Movie';
import UseState from './Hooks/UseState';
import RecordKeeping from './Hooks/RecordKeeping';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <RecordKeeping />
    {/* <UseState /> */}

    {/* <Movie/> */}
    
    {/* <StudentData name="Alex" age={19}/>
    <StudentData /> */}
    
  </React.StrictMode>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
