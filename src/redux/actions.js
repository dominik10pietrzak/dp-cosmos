import axios from 'axios';

export const getData =
  (type = 'capsules') =>
  async (dispatch) => {
    try {
      dispatch({ type: 'DATA_GET_REQUEST' });

      const { data } = await axios.get(`https://api.spacexdata.com/v4/${type}`);
      console.log(data);
      setTimeout(() => {
        dispatch({
          type: 'DATA_GET_SUCCESS',
          payload: data,
        });
      }, 500);
    } catch (error) {
      dispatch({
        type: 'DATA_GET_FAILURE',
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
