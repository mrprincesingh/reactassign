import * as types from "./actionTypes";
const initialState = {
  isLoading: false,
  isError: false,
  profile: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
export {reducer}

