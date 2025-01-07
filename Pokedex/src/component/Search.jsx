import React from "react";

const Search=()=>{
    async function fetchrequest(url){
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return(data);
    
      }
    
      const populate=(typedata,id)=>{
        typedata.results.map((item)=>{
          document.getElementById(`${id}`).innerHTML+=`<option id="${item.name}">${item.name}</option>`
        })
      }

      
    
      React.useEffect(()=>{
          fetchrequest("https://pokeapi.co/api/v2/type").then((res)=>{
          populate(res,"typeSelect");

          fetchrequest("https://pokeapi.co/api/v2/ability").then((res)=>{
            populate(res,"abilitySelect")
          })
        })
      },[]);


      return (
        <div>
            <div id="searchDiv">
            <input id="searchbar" className="searchbar" type="text" placeholder='Search by Name and Dex number'></input>
            
            <button id="Searchbtn">Search</button>
            
            <select id="typeSelect">
                <option>Select Type</option>
            </select>

            <select id="abilitySelect" >
                <option>Select Ability</option>
            </select>
            </div>

            <div id="displayDiv">
                
            </div>
        </div>
      )
}

export default Search;