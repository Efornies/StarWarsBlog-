const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      singlecharacter: [],
      favourites: [],
    },

    actions: {
      addToFavs: (name) => {
        const store = getStore();
        if (!store.favourites.includes(name)) {
          setStore({ favourites: [...store.favourites, name] });
        } else {
          setStore({
            favourites: store.favourites.filter((item) => item != name),
          });
        }
      },

      getCharacters: async () => {
        const response = await fetch("https://www.swapi.tech/api/people");
        const data = await response.json();
        setStore({ characters: data.results });
      },

      getSingleCharacter: async (uid) => {
        const response = await fetch(
          `https://www.swapi.tech/api/people/${uid}`
        );
        const gettedcharacter = await response.json();
        setStore({ singlecharacter: gettedcharacter.result.properties });
      },
    },
  };
};

export default getState;
