import { Card, Grid } from '@nextui-org/react';
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
        {favoritePokemons[0] ?
        (<Grid.Container gap={2} direction='row' justify='flex-start'>
          {
            favoritePokemons.map(id => (
              <Grid key={id} xs={6} md={2} xl={1}>
                <Card hoverable clickable css={{padding: 10}}>
                  <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} width={'100%'} height={140}/>
                </Card>
              </Grid>
            ))
          }
        </Grid.Container>) : (<NoFavorites/>)}
    </Layout>
  )
}

export default Favorites