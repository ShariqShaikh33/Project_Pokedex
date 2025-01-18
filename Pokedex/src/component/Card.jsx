import React from "react";
import "../styles/card.css";

const Card=(pokemon)=>{
    let shinyOn=false;
    let backside=false;
    const changeShiny=(id)=>{
        if(!shinyOn && !backside){
            let imageEle = document.getElementById(id);
            imageEle.src = `${pokemon.shiny}`;
            shinyOn=true;
        }
        else if(shinyOn && !backside){
            let imageEle = document.getElementById(id);
            imageEle.src = `${pokemon.img}`;
            shinyOn=false;
        }
        if(!shinyOn && backside){
            let imageEle = document.getElementById(id);
            imageEle.src = `${pokemon.shiny_behind}`;
            shinyOn=true;
        }
        else if(shinyOn && backside){
            let imageEle = document.getElementById(id);
            imageEle.src = `${pokemon.img_behind}`;
            shinyOn=false;
        }

    }

    
    const turnAround=(id)=>{
        if(!backside && !shinyOn){
            let imageEle = document.getElementById(id);
            imageEle.src = `${pokemon.img_behind}`;
            backside=true;
        }
        else if(backside && !shinyOn){
            let imageEle = document.getElementById(id);
            imageEle.src = `${pokemon.img}`;
            backside=false;
        }
        if(!backside && shinyOn){
            let imageEle = document.getElementById(id);
            imageEle.src = `${pokemon.shiny_behind}`;
            backside=true;
        }
        else if(backside && shinyOn){
            let imageEle = document.getElementById(id);
            imageEle.src = `${pokemon.shiny}`;
            backside=false;
        }
    }

    // const typeColor=(id)=>{
    //     let typeEle = document.getElementById(id);
    //     console.log(typeEle);
    //     console.log(id);
    //     if(typeEle?.innerHTML=="poison"){
    //         typeEle.style.background="purple";
    //     }
    // }
    // window.onload = typeColor(`${pokemon.number}`+"type1");
    // window.onload = typeColor(`${pokemon.number}`+"type2");
    
    return (
        <div className="pokemonMainDiv">
        <div className="pokemonDiv" id={pokemon.number}>
            <div className="pokemonInnerDiv">
                <div className="pokemonNumberUpperDiv">
                    <div className="pokemonNumberDiv">
                        <p className="pokemonNumber">{pokemon.number}</p>
                    </div>
                    <div className="pokemonNameDiv">
                        <p className="pokemonName">{(pokemon.name)?.toUpperCase()}</p>
                    </div>
                </div>
                
                <div className="imagediv">
                    <div className="circleDiv">
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>

                    <div className="imageInnerDiv">
                        <img className="pokemonImage" id={pokemon.number+"img"} src={pokemon.img}></img>        
                    </div>

                    <div className="buttonDiv">
                        <button className="shinyBtn" onClick={()=>changeShiny(`${pokemon.number}`+"img")}>Shiny</button>
                        <button className="shinyBtn" onClick={()=>turnAround(`${pokemon.number}`+"img")} >Turn</button>
                    </div>
                </div>
                
                <div className="pokemonType" >
                    <p className="pokemonType1" id={pokemon.number+"type1"} onLoad={()=>{typeColor(`${pokemon.number}`+"type1")}}>{(pokemon.type1)?.toUpperCase()}</p>
                    <p className="pokemonType2" id={pokemon.number+"type2"} onLoad={()=>{typeColor(`${pokemon.number}`+"type2")}}>{(pokemon.type2)?.toUpperCase()}</p>
                </div>

            </div>
            
        </div>
        {/* <div className="pokedexConnector">
            <div className="connectorHighlight">

            </div>
        </div> */}
        {/* <div className="pokemonDiv">
            <div className="pokemonInnerDiv">
                <div className="pokemonEntryDiv">
                    <div className="pokemonEntryInnerDiv"></div>
                </div>
            </div>
            <div className="pokemonType">
                <div className="pokemonType1"></div>
                <div className="pokemonType1"></div>
            </div>
        </div> */}
        </div>
        
    )
}

export default Card;