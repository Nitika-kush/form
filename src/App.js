import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Formlist from "./Components/Formlist";

function App() {
  const [dataList, setDataList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
 const [currentData,setCurrentData]=useState({});
 const [sortOrder, setSortOrder]=useState("asc");

  const addData = (data) => {
   
    if(editIndex!==null){
      const updatedDataList =[...dataList];
      updatedDataList[editIndex]=data;
       setDataList(updatedDataList);
       setEditIndex(null);
       setCurrentData({});
       
    }
    else{
      setDataList([...dataList, data]);
    }
  };
  const handleDelete = (index) => {
    const newDataList = dataList.filter((_, i) => i !== index);
    setDataList(newDataList);
    console.log(newDataList);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setCurrentData(dataList[index]);
  
  };

  const sortByFullName=(data)=>{
    const sortedList=[...dataList].sort((a,b)=>{
      const aFullName=a[data];
      const bFullName=b[data];
      if(aFullName<bFullName) return sortOrder==="asc"?-1:1;
      if(aFullName>bFullName) return sortOrder==="asc"?1:-1;
      return 0;

    });
    setDataList(sortedList);
    setSortOrder(sortOrder==="asc"?"desc":"asc")
  }

  return (
    <div>
      <Form addData={addData} currentData={currentData}/>
      <Formlist list={dataList} handleDelete={handleDelete} handleEdit={handleEdit} sortByFullName={sortByFullName}/>
    </div>
  );
}

export default App;
