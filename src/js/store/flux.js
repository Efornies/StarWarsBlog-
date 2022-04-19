const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			onestarship:[],
			vehicles:[],
			favourites:[]
		},
		actions: {

			getVehicles: async ()=>{
				const response = await fetch( "https://www.swapi.tech/api/starships")
				const gettedstarships = await response.json()
				setStore({vehicles: gettedstarships.results})
			},

			},
			getOneStarship: async (key)=>{
				const response = await fetch("https://www.swapi.tech/api/starships/"+key)
				const gettedstarship = await response.json(); 
				setStore({onestarship:gettedstarship.result.properties})
			}
			
		}
	};

export default getState;
