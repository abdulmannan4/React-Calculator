import React, { useState } from "react";

const Calculator = () => {
    
const [input,setInput]=useState('');
const[e,d]=useState([]);

const val=(e)=>{
console.log(e.target.value)
setInput(input.concat(e.target.value))


}
const calc=()=>{
    const cal=eval(input.toString());
    setInput(cal.toString());
}
const back =()=>{
    setInput(input.slice(0,-1));
    }


  return (



    <div className="h-screen bg-slate-900">
     
      <div className="flex justify-center pt-[4vh]">
        <input value={input} onChange={(e)=>setInput(e.target.value)}
          className="w-[50vh] h-[6vh] p-[0.3vh] text-lg text-black rounded"
          type="text"
          placeholder="Enter to calculate"
        /> <div className="ml-3 border rounded p-2 text-zinc-200"> <button onClick={calc}>Enter</button></div>
      </div>

     
      <div className="flex justify-center pt-[4vh]">
        <div className="grid grid-rows-4 grid-flow-col gap-4">
     
          {[
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "0",
            "*",
            "/",
            "+",
            "-",
            "%",
           
            "Back",
           
          ].map((value, index) => (
           
            <div
              key={index}
              className="border border-gray-500 rounded hover:bg-gray-700"
            >
                
                {value === 'Back' ? (
  <button
    onClick={back}
    value={value}
    className="w-full h-full p-4 text-white bg-gray-800 hover:bg-gray-700"
  >
    {value}
  </button>
) : (
  <button
    onClick={val}
    value={value}
    className="w-full h-full p-4 text-white bg-gray-800 hover:bg-gray-700"
  >
    {value}
  </button>
)}

            </div>
          ))}
          
        </div>
        
      </div>
    </div>
  );
};

export default Calculator;
