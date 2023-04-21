import '../Css_Components/Search.css'
import {BiSearchAlt} from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux'


function Search(){
    const imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
    const dispatch = useDispatch()
    const valueInput = useSelector((state) => state.busca)

    function valor(event){
        dispatch({
            type: "SEARCH",
            payload: event.target.value
        })

    }

    return(
        <div>
            <div className='container_img'>
                <img className='img' src={imgUrl} alt="" />
            </div>

            <div className='div_search'>
                <div className="div_container">
                    <label htmlFor="0"><BiSearchAlt /></label>
                    <input type="search" value={valueInput} onChange={valor} name="pokemons" id="0" placeholder='Digite o nome do seu Pokemon'/>
                </div>
            </div>
        </div>
    )

}

export default  Search