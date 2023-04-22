import { Provider } from 'react-redux';
import {legacy_createStore } from 'redux';
import PokemonsReducers from './PokedexReducers/PokemonsReducers';
import PokemonsList from './Components/PokemonsList';
import Search from './Components/Search';
import InformationsPokemons from './Components/InformationsPokemons';
import {Routes, Route } from 'react-router-dom';

const store =  legacy_createStore(PokemonsReducers);

function App() {
  return (
    <Provider store={store}>
        <Routes>
          <Route path={`/pokemon/:id`} element={<InformationsPokemons />} />
          <Route exact path="/"element={[<PokemonsLit />, <Search />]}/>
        </Routes>
    </Provider>
  );
}

export default App;
