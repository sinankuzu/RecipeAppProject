

// const APP_ID = "4e9f05eb";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import {useState} from "react"
import axios from "axios";
import RecipeCard from "./RecipeCard";
// const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
  
/****buraya kendi id ve key imizi yaziyoruz**********/

const Home = () => {
  const [yemekler, setYemekler] = useState([])
  const [query, setQuery] = useState("Breakfast")
  const appId = "701ae603";
  const appKey = "049067520a425ffc971152f1b6cbbde4"
  const ogunler = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [ogun, setOgun] = useState(ogunler[0].toLowerCase())
  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&mealType=${ogun}`;
  
  const getData = (e)=> {
    
    e.preventDefault()
    axios.get(url).then((res)=> setYemekler([res.data.hits]))
      // axios.get(url).then((res)=> {for(let i=0; i<10;i++){setYemekler([...yemekler,[res.data.hits[i]]])}})
    console.log(yemekler)
  }
  console.log(query)

  


 

  // query=yazdığımız sorgu kelimesi, meal=breakfast vs
  // const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${ögün}`;

 

  return (
    <div>
      <Navbar/>
      <Header query = {query} setQuery={setQuery} getData = {getData}/>
      <RecipeCard yemekler = {yemekler}/>
     <Footer/>
    </div>
  );
};

export default Home;
