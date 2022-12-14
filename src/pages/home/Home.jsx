import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import home from "../../assets/home.svg";
import { Route, Routes } from "react-router-dom";
import Login from "../login/Login";

const Home = () => {
  const [yemekler, setYemekler] = useState([]);
  const [query, setQuery] = useState("Breakfast");
  const appId = "701ae603";
  const appKey = "049067520a425ffc971152f1b6cbbde4";
  const ogunler = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [ogun, setOgun] = useState("Breakfast");
  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&mealType=${ogun}`;
  const [inputValue, setInputValue] = useState("");
  const [recipe1, setRecipe1] = useState([]);
  const getData = (e) => {
    e.preventDefault();
    axios.get(url).then((res) => setYemekler(res.data.hits));
    
  };
  

  return (
    <div>
      <Header
        query={query}
        setQuery={setQuery}
        getData={getData}
        setInputValue={setInputValue}
        setOgun={setOgun}
      />

      {(yemekler.length >= 1 && (
        <RecipeCard
          yemekler={yemekler}
          inputValue={inputValue}
          recipe1={recipe1}
          setOgun={setOgun}
        />
      )) || <img src={home} alt="" />}
    </div>
  );
};

export default Home;
