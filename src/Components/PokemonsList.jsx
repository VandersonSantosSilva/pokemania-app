import axios from 'axios'
import { useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import Loading from './Loading'
import "../Css_Components/Pokemons.css";
import "../Css_Components/Pagination.css";
import { Link } from 'react-router-dom';
import Pagination from './Pagination';


function PokemonsList() {
  const ListaPokemons = useSelector((state) => state.Pokemons)
  const loading = useSelector((state) => state.loading)
  const search = useSelector((state)=> state.busca)
  const dispatch = useDispatch()
  const LIMIT = 10
  const [offset, setOffset] = useState(0)
 
 

  useEffect(()=>{
    if(ListaPokemons.length === 0){
      const axiosPokemons = async ()=>{
        try{
          for(let id = 1; id <= 150; id++){
            const response = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/${id}`
            )
            
            const pokemon = {
              ID: response.data.id,
              Name: response.data.name,
              IMG: response.data.sprites.front_default,
              XP: response.data.base_experience,
              Altura: response.data.height,
              Peso: response.data.weight,
              Habilidades: response.data.abilities.map((ability) => ability.ability.name),
              Tipos: response.data.types.map((type) => type.type.name),
              Stats: response.data.stats.map((stat) => ({ name: stat.stat.name, value: stat.base_stat }))
            }

            dispatch({
              type: "ADD_POKEMON",
              payload: pokemon
            })
          }
        } catch (error){
          console.log(error)
        }
      }
      axiosPokemons()
    }

  },[ListaPokemons.length, dispatch])


  useEffect(()=>{

    if(ListaPokemons.length === 150 && loading === true){
      dispatch({type: "LOADING"})

    }
  }, [ListaPokemons, loading, dispatch])

  const filterPokemons = ListaPokemons.filter((pokemon)=>{
      return pokemon.Name.toLowerCase().includes(search.toLowerCase())
  })
  
  
  const visiblePokes = filterPokemons.slice(offset, offset + LIMIT).map((Pokemon)=>{
    
    return(
      <li className='poke' key={Pokemon.ID}>
        <Link to={`/pokemon/${Pokemon.ID}`}>
          <img className='pokeItens' src={Pokemon.IMG} alt={Pokemon.Name} />
          <h3>{Pokemon.Name}</h3>
          <p>Mais detalhes...</p>
        </Link> 
      </li>
    )

  })


  return (
    <div className='pokemons'>
      {loading ? (
        <Loading />
      ) : (
        <>
          {search ? (
            <ul>{visiblePokes}</ul>
          ) : (
            <>
              <ul>{visiblePokes}</ul>
              <Pagination total={ListaPokemons.length} limit={LIMIT} offset={offset} setOffset={setOffset} />
            </>
          )}
        </>
      )}
    </div>
  )

}



export default PokemonsList