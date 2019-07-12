import getData from '../data/ferries';

export const updateFerryData = () => ({
  type: 'UPDATE_FERRY_DATA',
  data: getData()
});

export const addFavourite = (ferry) => ({
  type: 'ADD_FAVOURITE',
  ferry
});

export const removeFavourite = (ferry) => ({
  type: 'REMOVE_FAVOURITE',
  ferry
});
