import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';


const Customers = () => {
  const [countries,setCoutries]=useState([]);

  const getcountries=async()=>{
 try{
 const responce=await axios.get('https://restcountries.com/v2/all') ;
 setCoutries(responce.data);
 } catch(error){
console.log(error);
 }
  }
 const colums=[
  {name:"Country Name",
  selector:(row)=> row.name,
},
{
  name:"Country Native Name",
  selector:(row)=> row.nativename,
},
{
  name:"Countery Capital",
  selector:(row)=> row.capital,
},
{
  name:"Countery flag",
  selector:(row)=> <img width={50} height={50} src={row.flag} />,
}

 ]  

  useEffect(()=>{
    getcountries();
  },[]);
  return (
    <div>
      <DataTable columns={colums} data={countries}  pagination 
       fixedHeader 
       fixedHeaderScrollHeight='450px'
      selectableRows />
    </div>
  )
}

export default Customers
