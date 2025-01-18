import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/search.css";

const Search=()=>{

  const [pokemonData,setPokemonData] = useState([]);

  //An async Function to fetch the given url and await the response and return the fetched data.
  async function fetchrequest(url){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return(data);
  }

  const randomnumber=(num)=>{
    let RandomNum = ((Math.random() * (num-1))+1).toFixed(0);
    console.log(RandomNum);
    return RandomNum;
  }

  useEffect(()=>{
      let num = randomnumber(1032);
      fetchrequest('https://pokeapi.co/api/v2/pokemon/'+num).then((res)=>{
        setPokemonData(res);
      });
  },[]);

  const getPokemon=()=>{
    let searchValue = document.getElementById("searchbar").value;
    fetchrequest("https://pokeapi.co/api/v2/pokemon/"+searchValue.toLowerCase()).then((res)=>{
      if(searchValue==""){
        setPokemonData(res.results);
      }
      else{
        setPokemonData(res);
      }
      
    })
  }

  return (
    <div>
        <div id="searchDiv">
          <input id="searchbar" onKeyDown={(e)=>{if(e.key==="Enter"){getPokemon();}}} className="searchbar" type="text" placeholder='Search by Name and Dex number'></input>
          
          <button id="Searchbtn"  onClick={()=>{getPokemon()}}>Search</button>
          
          {/* <select id="typeSelect">
              <option>Select Type</option>
          </select> */}

        </div>

        <div id="displayDiv">
            
        {pokemonData && <Card key={pokemonData.id} img={pokemonData.sprites?.front_default} img_behind={pokemonData.sprites?.back_default} shiny={pokemonData.sprites?.front_shiny} shiny_behind={pokemonData.sprites?.back_shiny} name={pokemonData.name} type1={pokemonData.types?.[0].type.name} type2={pokemonData.types?.[1]?.type.name}  number={pokemonData.id}/>}            
        </div>
    </div>
  )
}

export default Search;