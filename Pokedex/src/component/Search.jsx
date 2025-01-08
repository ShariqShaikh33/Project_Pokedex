import React from "react";
import Card from "./Card";

const Search=()=>{
    async function fetchrequest(url){
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return(data);
    
      }
    
      const populate=(typedata,id)=>{
        document.getElementById(`${id}`).innerHTML="";
        typedata.results.map((item)=>{
          document.getElementById(`${id}`).innerHTML+=`<option id="${item.name}">${item.name}</option>`
        })
      }

      const displayCard=(typedata,id)=>{

        document.getElementById(`${id}`).innerHTML=`<option id="${typedata.name}">${typedata.name}</option>`
        console.log(typedata.name);
      }


      
    
      React.useEffect(()=>{
        fetchrequest("https://pokeapi.co/api/v2/pokemon").then((res)=>{
          populate(res,"displayDiv");
        })

        fetchrequest("https://pokeapi.co/api/v2/type").then((res)=>{
        populate(res,"typeSelect");

        // fetchrequest("https://pokeapi.co/api/v2/ability").then((res)=>{
        //   populate(res,"abilitySelect")
        // })
        })
      },[]);

      const displayPokemon=(id)=>{
        const searchvalue = document.getElementById(`${id}`);
        if(searchvalue.value==""){
          console.log("hiii");
          fetchrequest("https://pokeapi.co/api/v2/pokemon/").then((res)=>{
            populate(res,"displayDiv");
          })
        }
        else{
          fetchrequest("https://pokeapi.co/api/v2/pokemon/"+searchvalue.value).then((res)=>{
            displayCard(res,"displayDiv");
          })
        }

      }

      return (
        <div>
            <div id="searchDiv">
            <input id="searchbar" className="searchbar" type="text" placeholder='Search by Name and Dex number'></input>
            
            <button id="Searchbtn" onClick={()=>{displayPokemon("searchbar")}}>Search</button>
            
            <select id="typeSelect">
                <option>Select Type</option>
            </select>

            {/* <select id="abilitySelect" >
                <option>Select Ability</option>
            </select> */}
            </div>

            <div id="displayDiv">
                
            </div>
        </div>
      )
}

export default Search;