const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			info: {}
	
		},
		actions: {
			getPlanets: async () => {
				const response = await fetch("https://www.swapi.tech/api/planets");
				const data = await response.json();
				setStore({planets: data.results})
			},

			getOnePlanet: async () => {
				const response = await fetch("https://www.swapi.tech/api/planets/");
				const data = await response.json();
				console.log(data);
				setStore({info: data.result.properties})
			}

			}
		}
	};

export default getState;
