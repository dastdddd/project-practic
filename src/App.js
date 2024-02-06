import React from "react";
import './App.css';
import Profile from "./components/Profile";
import Admin from "./components/Admin";
import Product from "./components/Product";
import products from "./products (2).json"
import { Messege } from "./components/Messege";
import data1 from "./data.json"
import DataProduct from "./components/DataProduct";




//class component
//funtion component - основном пользуются тут

console.log(data1);

let profiles = [
  'Asan', 'Uson', 'Batma', 'Zuura'
]
let admins = [
  { id: 1, name: 'Hasan', age: 23 },
  { id: 2, name: 'Husan', age: 22 },
  { id: 3, name: 'Murat', age: 25 },
  { id: 4, name: 'Maral', age: 21 },

]

const App = () => {
  //props - вернет object
  let name = 'Asan props'
  return (
    <div className="app">
      <Messege message="hello worl" name="Dastan" color="#efff5a" fontSize="17px" />
      <hr />
      {/* -------------------------------props------------------------------------------------ */}
      {
        //profiles && profiles.map((item, index) => (
          <Profile name={name}/>
        //    key={index}//задаем ключ (не обьязательно)
        //    index={index}
        //    name={item} />
        //))
        //&& - проверяет массив ли эта, если да то выводит map как столбец
      }
      <hr />
      {/* ---------------------------------props-без map--------------------------------------------- */}
      {
        admins && admins.map((item) => {
          return <Admin key={item.id} id={item.id} name={item.name} age={item.age} />
        })
      }
      <hr />
      {/* ---------------------------------props-c map--------------------------------------------- */}
      {
        admins && admins.map((item) => {
          return <Admin key={item.id} {...item} />
        })
      }
      <hr />
      {/* ------------------------------Product JSON------------------------------------------ */}
      {/*<Product data={products} />*/}
      <hr />
      {/* ------------------------practic--data1-JSON------------------------------------------ */}
      <div className="data1">
        {
          data1.map((item, index) => {
            return <DataProduct key={index} {...item} />
          })
        }
      </div>
      {/* ----------------------------------------------------------------------------------- */}

    </div>
  )
}



export default App;//default-по умолчанию один раз обьязательно