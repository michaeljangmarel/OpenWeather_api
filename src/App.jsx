/* eslint-disable react-hooks/exhaustive-deps */
 import './App.css';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form';
import Show from './components/Show';
import { api, api_key } from './Api/Weather';
import { useEffect, useState } from 'react';
import 'react-clock/dist/Clock.css';

 
function App() {  

  const [city , setcity ] = useState({}); 
  const [one , setone] = useState('Bhamo') 

  

  const apiWeather = async(name_cu) => {  
     // rander underfined  
   if(name_cu !== undefined){ 
       setone(name_cu) 

       name_cu = ''    
   }

      try {
       const res = await api.get(`weather?q=${one}&appid=${api_key}`) 
       setcity(res.data);
      } catch (error) {
          console.log('erroe');
      }
  }

  useEffect(() => { 
        apiWeather() 
  },[one]);
  
  return (
  <div  className='w-full min-vh-70 d-flex justify-content-center align-item-center '> 
     <div className='shadow-lg card border-none mt-5'>
      <Form search={apiWeather}/>

     <Show  data={city}/>  

      </div>
   </div>
  );
}

 
export default App;
 