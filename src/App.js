 import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Formlist from './Components/Formlist';
import Header from './Components/Header';

function App() {
  const [dataList,setDataList]=useState([]);

  const addData=(data)=>{
    setDataList([...dataList,data]);
  }
  return (
    <div >
     <Header/>
     <Form addData={addData}/>
     <Formlist list={dataList}/>
    </div>
  );
}

export default App;
