import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";


const Home = () => {
  const [yemekler, setYemekler] = useState([]);
  const [query, setQuery] = useState("Breakfast");
  const appId = "701ae603";
  const appKey = "049067520a425ffc971152f1b6cbbde4";
  const ogunler = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [ogun, setOgun] = useState(ogunler[0].toLowerCase());
  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&mealType=${ogun}`;

  const getData = (e) => {
    e.preventDefault();
    axios.get(url).then((res) => setYemekler(res.data.hits));

    console.log(yemekler);
  };
  console.log(query);


  return (
    <div>
      <Navbar />
      <Header query={query} setQuery={setQuery} getData={getData} />
      <RecipeCard yemekler={yemekler} />
      <Footer />
    </div>
  );
};

export default Home;
