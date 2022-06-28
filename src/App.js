import {useState} from "react";
import './App.css';
import {Todos} from "./components/Todos"

function App() {
  // const [age, setAge] = useState(0); //Data

  // const getData = (data) =>{
  //   // console.log(data);
  //   setAge(data);
  // }
  return (
    <div className="App">
      <Todos />
      {/*<First handleData= {getData}/>
  <Second age ={age}/>*/}
    </div>
  );
}

// function First({handleData}){
//   const age = 22;
//   handleData(age);
//   return (
//     <div>First</div>
//   );
// }

// function Second({age}){
//   return (
//     <div>
//       Second
//       <p>Your age is: {age}</p>
//     </div>
//   )
// }

export default App;
