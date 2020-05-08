import {
  SEARCH_CHARACTERS,
  SEARCH_EPISODES,
  SEARCH_LOCATIONS,
  GET_CHARACTER,
  GET_EPISODE,
  GET_LOCATION,
  SET_LOADING,
  SET_ERROR,
  SET_CHARACTER_EPISODES,
  SET_EPISODE_CHARACTERS,
  SET_LOCATION_RESIDENTS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_CHARACTERS:
      return {
        ...state,
        error: false,
        characters: action.payload,
        loading: false,
      };
    case SEARCH_EPISODES:
      return {
        ...state,
        error: false,
        episodes: action.payload,
        loading: false,
      };
    case SEARCH_LOCATIONS:
      return {
        ...state,
        error: false,
        locations: action.payload,
        loading: false,
      };
    case GET_CHARACTER:
      return {
        ...state,
        character: action.payload,
        loading: false,
      };
    case GET_EPISODE:
      return {
        ...state,
        episode: action.payload,
        loading: false,
      };
    case GET_LOCATION:
      return {
        ...state,
        location: action.payload,
        loading: false,
      };
    case SET_CHARACTER_EPISODES:
      return {
        ...state,
        loading: false,
        CharacterEpisodes: action.payload,
      };
    case SET_EPISODE_CHARACTERS:
      return {
        ...state,
        loading: false,
        EpisodeCharacters: action.payload,
      };
    case SET_LOCATION_RESIDENTS:
      return {
        ...state,
        loading: false,
        LocationResidents: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
