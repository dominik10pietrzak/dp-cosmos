export const dataGetReducer = (state = {}, action) => {
  switch (action.type) {
    case 'DATA_GET_REQUEST':
      return { loading: true, data: [] };

    case 'DATA_GET_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case 'DATA_GET_FAILURE':
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
