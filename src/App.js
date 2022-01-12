import React,{useState,useEffect} from "react";
import "./style.css";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import TableItems from './components/tableList.js'


export default function App() {
  const [tableList,setTableList] = useState([])
  const [search,setSearch]= useState('')


  useEffect(() =>{ 
    getAPI() 
    },[])

  //getAPI
  const getAPI = () => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then((res)=>{
      setTableList(res.data)
      console.log(res.data)
    })
  }


  return (
    <div className='container'>
      <header style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'20px'
}}>
      <h1>Search a currency</h1>
      <Form.Control className='searchBar'
        style={{ 
        width:'20%',  
        marginRight:'10px',
        marginBottom:'40px',
       }} 
        type="text"
        id="inputText" 
        placeholder='search'
        onChange={(e)=>{setSearch(e.target.value)}}/>
      </header>
      <TableItems 
      tableList={tableList}
      search={search} 
      />
    </div>
  );
}
