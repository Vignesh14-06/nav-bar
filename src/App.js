import './App.css';
import MiniDrawer from './Component/Navbar/Navbar';
// import { useState,useEffect } from 'react';

function App() {
  // const [count,setCount] = useState(0)
  // const [run,setRun] = useState(true)
  // const [count, setCount] = useState(0);
  // const [isCounting, setIsCounting] = useState(true);


  // const handleClick = () =>{
  //   setRun(!run)
  // }
  //     useEffect (()=>{
  //       let interval;
  //       if( run){
  //         interval = setInterval(()=>setCount((prev)=>prev + 1),1000)
  //       }
  //       return ()=>clearInterval(interval)
  //     },[run])
  // useEffect(() => {
  //   let interval;

  //   if (isCounting) {
  //     interval = setInterval(() => {
  //       setCount((prevCount) => prevCount + 1);
  //     }, 1000);
  //   }

  //   return () => clearInterval(interval);
  // }, [isCounting]);

  // const stopCounting = () => {
  //   setIsCounting(false);
  // };

  return (
    <div className="App">
    <MiniDrawer/>
    {/* count:{count}<br></br>
    <button onClick={handleClick}>Stop</button> */}
      {/* <h1>{count}</h1>
      <button onClick={stopCounting}>Stop</button> */}
    </div>
  );
}

export default App;
