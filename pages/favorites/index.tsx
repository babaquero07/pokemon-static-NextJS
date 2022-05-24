import { Card, Grid } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { Layout } from '../../components/layouts'
import { FavoritePokemons } from '../../components/pokemon';
import {NoFavorites} from '../../components/ui'
import { localFavorites } from '../../utils';


const Favorites = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())

  }, [])


  return (
    <Layout title='Pokemons - Favoritos'>
        {favoritePokemons[0] ?
        (<FavoritePokemons pokemons={favoritePokemons}/>) : (<NoFavorites/>)}
    </Layout>
  )
}

export default Favorites