import { useState, useEffect } from 'react';
import { Layout } from '../../components/layouts'
import {NoFavorites} from '../../components/ui'
import { localFavorites } from '../../utils';


const Favorites = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())

  }, [])


  return (
    <Layout title='Pokemons - Favoritos'>
        {favoritePokemons[0] ? (<h1>holi</h1>) : (<NoFavorites/>)}
    </Layout>
  )
}

export default Favorites