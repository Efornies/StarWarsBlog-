const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			gender: [],
			haircolor: [],
			eyecolor: [],
			
		},

		actions: {
			getCharacters: async () => {
				const response = await fetch ("https://www.swapi.tech/api/people");
				const data = await response.json()
				setStore({characters: data.results})
				
			}

		}
	};
};

export default getState;
