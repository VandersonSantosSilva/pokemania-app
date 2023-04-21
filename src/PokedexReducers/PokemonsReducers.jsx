import produce from "immer";

function PokemonsReducers(state = {Pokemons: [], loading: true, busca: ""}, action){

    return produce(state, draftState => {

        switch (action.type){
            case "LOADING":
                draftState.loading = false
                break;
            case "ADD_POKEMON":
                draftState.Pokemons = [...state.Pokemons, action.payload]
                break;
            case "SEARCH":
                draftState.busca = action.payload
                break;
            default:
                return state;
        }

    })

}

export default PokemonsReducers