import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "../Css_Components/Informations.css";
import {BsArrowLeftCircle} from 'react-icons/bs'

function InformationsPokemons() {
  const { id } = useParams();
  const pokemonGlobal = useSelector((state) => state.Pokemons);
  const pokemonSelect = pokemonGlobal.find((poke) => poke.ID === parseInt(id));

  if (pokemonSelect) {
    localStorage.setItem("pokemon", JSON.stringify(pokemonSelect));
  }

  const pokes = JSON.parse(localStorage.getItem("pokemon"));
  const imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"

  return (
    <div>

        <div className='image'>
            <img className='image_one' src={imgUrl} alt="" />
        </div>

        <div className="content">

         
            <div className="btn">
              <Link to="/">
                <span className="return">{<BsArrowLeftCircle />}</span>
              </Link>
            </div>
          

            <div className="pokemonIMG">
                <img  className="pokes" src={pokes.IMG} alt={pokes.Name} />
            </div>

            <h2>Informações Base</h2>

            <div className="block">
        
                <div className="data">
                  <h3>Nome</h3>
                  <p>{pokes.Name}</p>
                </div>
        
                <div className="data">
                  <h3>Base de Experiência</h3>
                  <p>{pokes.XP}</p>
                </div>
        
                <div className="data">
                  <h3>Altura</h3>
                  <p>{pokes.Altura} dm</p>
                </div>

                <div className="data">
                  <h3>Peso</h3>
                  <p>{pokes.Peso} hg</p>
                </div>
        
            </div>

            <h2>Habilidades</h2>

            <div className="block">
              
                <div className="data">
                  <h3>Habilidade 1</h3>
                  <p>{pokes.Habilidades[0]}</p>
                </div>

                <div className="data">
                  <h3>Habilidade 2</h3>
                  <p>{pokes.Habilidades[1]}</p>
                </div>

                <div className="data">
                  <h3>Tipo</h3>
                  <p>{pokes.Tipos}</p>
                </div>
            </div>
    
            <h2>Estatísticas</h2>
    
          <div className="block">

                <div className="data">
                  <h3><span>Nome:</span> {pokes.Stats[0].name}</h3>
                  <p>Valor: {pokes.Stats[0].value}</p>
                </div>
        
                <div className="data">
                  <h3><span>Nome:</span> {pokes.Stats[1].name}</h3>
                  <p>Valor: {pokes.Stats[1].value}</p>
                 </div>
        
                <div className="data">
                  <h3><span>Nome:</span> {pokes.Stats[2].name}</h3>
                  <p>Valor: {pokes.Stats[2].value}</p>
                </div>
        
                <div className="data">
                  <h3><span>Nome:</span> {pokes.Stats[3].name}</h3>
                  <p>Valor: {pokes.Stats[3].value}</p>
                </div>
        
                <div className="data">
                  <h3><span>Nome:</span> {pokes.Stats[4].name}</h3>
                  <p>Valor: {pokes.Stats[4].value}</p>
                </div>
        
                <div className="data">
                  <h3><span>Nome:</span> {pokes.Stats[5].name}</h3>
                  <p>Valor: {pokes.Stats[5].value}</p>
                </div>
          </div>
        </div>

    </div>
  );
}

export default InformationsPokemons;
