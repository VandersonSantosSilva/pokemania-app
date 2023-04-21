import "../Css_Components/Loading.css"
import Pokebola from "../Image/tumblr_oaldzpLZhl1ux1dn3o1_500.gif"

function Loading(){
    return(
        <div className="Loading">
            <img className="imgLoading" src={Pokebola} alt="Pokebola"/>
            <h1 className="Carregar">Carregando....</h1>
        </div>
    )
}


export default Loading