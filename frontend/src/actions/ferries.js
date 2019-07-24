import fetch from 'cross-fetch';

export const updateFerryData = (data) => ({
  type: 'UPDATE_FERRY_DATA',
  data
});

export const fetchFerryData = () => {
	return (dispatch) => {
		fetch("https://8ez6nw2nak.execute-api.ap-southeast-2.amazonaws.com/api")
			.then((res) => res.json())
			.then((data) => {
				dispatch(updateFerryData(data.data))
			})
	}
}

export const addFavourite = (ferry) => ({
  type: 'ADD_FAVOURITE',
  ferry
});

export const removeFavourite = (ferry) => ({
  type: 'REMOVE_FAVOURITE',
  ferry
});
