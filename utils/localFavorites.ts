const toggleFavorite = (id: number) => {
    console.log('toggleFavorite llamado');

    let favorites : number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites.includes(id)) {
        favorites = favorites.filter(pokeID => pokeID !== id) //Lo elimina de favs
    } else {
        favorites.push(id)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
}

const existInFavorites = (id: number): boolean => {
    if(typeof window === 'undefined') return false

    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

    return favorites.includes(id);
}

export default {
    toggleFavorite,
    existInFavorites
}