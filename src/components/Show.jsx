import React from 'react'
  import Clock from 'react-clock';
import { useState ,useEffect} from 'react';

 const Show = ({data}) => {    
  const [value, setValue] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

    
   if(JSON.stringify(data) !== '{}'){ 
    return (
      <div className='p-5 text-center'>
          <h3 className='text-secondary w-10'>     <Clock value={value} /></h3> 
          <h5 className='text-secondary'>  {data.name} ,{data.sys.country} </h5>
          <h3 className='text-secondary'> <img  src={`https://openweathermap.org//img/w/${data.weather[0].icon}.png`} alt="" /> {data.main.temp}°C</h3>
           <p className='text-secondary'>Humidity :  {data.main.humidity}   %</p>
           <p className='text-secondary'>Visibility : {data.visibility /1000}km</p>
       </div>
    )
  }
}

export default Show 
 