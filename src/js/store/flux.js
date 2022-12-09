const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			vehicles:[],
			characters:[],
			planets:[],
			favorites:[],
			singlecharacter:[]


		},
	
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getCharacterData: () =>{
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  
				  fetch("https://www.swapi.tech/api/people", requestOptions)
					.then(response => response.json())
					.then(result => setStore({characters:result}))
					.catch(error => console.log('error', error));
					
			},
			getSingleCharacterData: (index) =>{
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  
				  fetch(`https://www.swapi.tech/api/people/${index}`, requestOptions)
					.then(response => response.json())
					.then(result => setStore({singlecharacter:result}))
					.catch(error => console.log('error', error));
			},
			getVehiclesData: () =>{
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  
				  fetch("https://www.swapi.tech/api/vehicles", requestOptions)
					.then(response => response.json())
					.then(result => setStore({vehicles:result}))
					.catch(error => console.log('error', error));
			},
			getPlanetsData: () =>{
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  
				  fetch("https://www.swapi.tech/api/planets", requestOptions)
					.then(response => response.json())
					.then(result => setStore({planets:result}))
					.catch(error => console.log('error', error));
			},
			addToFavorites: (item)=>{
				const store=getStore()
				setStore({favorites: [...store.favorites,item]})
			},
			removeFromFavorites: (item)=>{
				const store=getStore()
				console.log('hi')
				setStore({favorites: store.favorites.filter((name)=>name!=item)})
			},



			
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
