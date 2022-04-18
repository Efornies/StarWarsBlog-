const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters:[],
			singlecharacter:[],
		},

		actions: {
			getCharacters: async () => {
				const response = await fetch ("https://www.swapi.tech/api/people");
				const data = await response.json()
				setStore({characters: data.results})
				
			},
			
			getSingleCharacter: async (uid)=>{
				const response = await  fetch(`https://www.swapi.tech/api/people/${uid}`)
				const gettedcharacter = await response.json();
				setStore({singlecharacter: gettedcharacter.result.properties})				
			}


		}
	};
};

export default getState;
