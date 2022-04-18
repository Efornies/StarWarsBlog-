const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			info: {},
			favorite: []
	
		},
		actions: {
			getPlanets: async () => {
				const response = await fetch("https://www.swapi.tech/api/planets");
				const data = await response.json();
				setStore({planets: data.results})
			},

			getOnePlanet: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
				const data = await response.json();
				console.log(data);
				setStore({info: data.result.properties})
			},

			addFav: (item) => {
				const store = getStore();
				const newFav = store.favorite.concat(item)
				setStore({favorite : newFav})

			}
			
			}
		}
	};

export default getState;
