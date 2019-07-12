import getData from '../ferries/ferries';

const updateFerryData = () => ({
  type: 'UPDATE_FERRY_DATA',
  data: getData()
});

export default updateFerryData;