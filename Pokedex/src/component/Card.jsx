import React, { useEffect } from "react";
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

    const returnColor=(color)=>{
        switch(color){
            default:
                return "noType";
            
            case "normal":
                return "#bbbcaa";

            case "fighting":
                return "#a75545";
            
            case "flying":
                return "#79a4ff";
            
            case "poison":
                return "#a85da0";
            
            case "ground":
                return "#e9ce59";
            
            case "rock":
                return "#cfbd74";

            case "bug":
                return "#c2d120";
            
            case "ghost":
                return "#7a76d7";
            
            case "steel":
                return "#c4c2da";

            case "fire":
                return "#f05242";

            case "water":
                return "#55aefe";

            case "grass":
                return "#8cd852";

            case "electric":
                return "#fde53d";

            case "psychic":
                return "#fa66b5";

            case "ice":
                return "#96f2ff";
        
            case "dragon":
                return "#8978fa";

            case "dark":
                return "#8d6955";

            case "fairy":
                return "#fbaeff";

            case "stellar":
                return "#40b5a5";
        }
    }

    const typeColor=(id,type)=>{
        let typeEle = document.getElementById(id);
        let color = returnColor(type);
        if(color==="noType"){
            typeEle.style.background = "white";
            typeEle.style.outline = "3px solid gray";
        }
        else{
            typeEle.style.background = color;
        }
        
    }

    const cry=(id)=>{
        let ele = document.getElementById(id);
        ele.play();
    }

    useEffect(()=>{
        if(pokemon){
            typeColor(`${pokemon.number}`+"type1",pokemon.type1);
            typeColor(`${pokemon.number}`+"type2",pokemon.type2);
            if(pokemon.img_behind==null){
                document.getElementById("turnBtn").disabled=true;
            }
        }

    },[pokemon]);

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
                    <div className="buttonDiv">
                        <div className="shinyBtn cryBtn" onClick={()=>{cry("audio")}}>Cry</div>
                        <audio id="audio" type="audio/ogg" src={pokemon.cries}></audio>
                    </div>

                    <div className="imageInnerDiv">
                        <img className="pokemonImage" id={pokemon.number+"img"} src={pokemon.img}></img>        
                    </div>

                    <div className="buttonDiv">
                        <button className="shinyBtn" id="shinyBtn" onClick={()=>changeShiny(`${pokemon.number}`+"img")}>Shiny</button>
                        <button className="shinyBtn" id="turnBtn" onClick={()=>turnAround(`${pokemon.number}`+"img")} >Turn</button>
                    </div>
                </div>
                
                <div className="pokemonType" >
                    <p className="pokemonType1" id={pokemon.number+"type1"} >{(pokemon.type1)?.toUpperCase()}</p>
                    
                    <p className="pokemonType2" id={pokemon.number+"type2"} >{(pokemon.type2)?.toUpperCase()}</p>
                    
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