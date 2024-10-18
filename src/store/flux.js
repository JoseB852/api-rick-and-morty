const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      info: {},
      characters: [],
      characterInfo: {},
      favorites: [],
      deleteFavorites: [],
    },
    actions: {
      getCharacters: async () => {
        try {
          const response = await
            fetch("https://rickandmortyapi.com/api/character/", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            })
          const data = await response.json();
          setStore({
            info: data.info,
            characters: data.results,

          });
        } catch (error) {
          console.log(error);
        }
      },
      todosCharcaters: async (id) => {
        try {
          const response = await
            fetch("https://rickandmortyapi.com/api/character/" + id, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              }
            })
          const data = await response.json();
          console.log(data)
          setStore({
            characterInfo: data,
          });
        } catch (error) {
          console.log(error);
        }
      },
      setFavorites: (user) => {
        const character = getStore()
        let data = character["favorites"];
        data.push(user);
        setStore({
          favorites: data,
        });
      },
      deleteFavorites: (index) => {
        const store = getStore();
        let eliminar = store.favorites.filter((t, i) => i !== index);
        setStore({ ...store, favorites: eliminar });
      },
    }
  }
}

export default getState