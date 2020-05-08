import React, { useReducer } from "react";
import Axios from "axios";
import rmContext from "./rmContext";
import rmReducer from "./rmReducer";

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

const RMState = (props) => {
  const initialState = {
    characters: {},
    episodes: {},
    locations: {},
    character: {},
    episode: {},
    location: {},
    CharacterEpisodes: [],
    EpisodeCharacters: [],
    LocationResidents: [],
    error: false,
    loading: false,
  };

  const [state, dispatch] = useReducer(rmReducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING });
  const setError = () => dispatch({ type: SET_ERROR });

  //search characters
  const searchCharacters = async (text) => {
    setLoading();
    await Axios.get(`https://rickandmortyapi.com/api/character/?name=${text}`)
      .then((res) => {
        dispatch({ type: SEARCH_CHARACTERS, payload: res.data });
      })
      .catch((res) => {
        setError();
      });
  };

  //search episodes
  const searchEpisodes = async (text) => {
    setLoading();
    await Axios.get(`https://rickandmortyapi.com/api/episode/?episode=${text}`)
      .then((res) => {
        dispatch({ type: SEARCH_EPISODES, payload: res.data });
      })
      .catch((err) => {
        setError();
      });
  };

  //search locations
  const searchLocations = async (text) => {
    setLoading();
    await Axios.get(`https://rickandmortyapi.com/api/location/?name=${text}`)
      .then((res) => {
        dispatch({ type: SEARCH_LOCATIONS, payload: res.data });
      })
      .catch((err) => {
        setError();
      });
  };

  // get a character
  const getCharacter = async (id) => {
    setLoading();
    var Temp = [];
    var Temp2;
    var error2;
    await Axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        error2 = false;
        Temp2 = res.data;
        dispatch({ type: GET_CHARACTER, payload: res.data });
      })
      .catch((err) => {
        error2 = true;
        setError();
        dispatch({ type: GET_CHARACTER, payload: err.response.data });
      });
    !error2 &&
      (await Axios.all(Temp2.episode.map((episode) => Axios.get(episode)))
        .then((res) => {
          for (var i = 0; i < Temp2.episode.length; i++) {
            Temp.push(res[i].data);
          }
        })
        .catch((err) => console.error("Error: ", err)));
    dispatch({ type: SET_CHARACTER_EPISODES, payload: Temp });
  };

  //get an episode
  const getEpisode = async (id) => {
    setLoading();
    var Temp = [];
    var Temp2;
    var error2;
    await Axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((res) => {
        error2 = false;
        Temp2 = res.data;
        dispatch({ type: GET_EPISODE, payload: res.data });
      })
      .catch((err) => {
        error2 = true;
        setError();
        dispatch({ type: GET_EPISODE, payload: err.response.data });
      });

    !error2 &&
      (await Axios.all(Temp2.characters.map((episode) => Axios.get(episode)))
        .then((res) => {
          for (var i = 0; i < Temp2.characters.length; i++) {
            Temp.push(res[i].data);
          }
        })
        .catch((err) => console.error("Error: ", err)));
    dispatch({ type: SET_EPISODE_CHARACTERS, payload: Temp });
  };

  //get a location
  const getLocation = async (id) => {
    setLoading();
    var Temp = [];
    var Temp2;
    var error2;
    await Axios.get(`https://rickandmortyapi.com/api/location/${id}`)
      .then((res) => {
        error2 = false;
        Temp2 = res.data;
        dispatch({ type: GET_LOCATION, payload: res.data });
      })
      .catch((err) => {
        error2 = true;
        setError();
        dispatch({ type: GET_LOCATION, payload: err.response.data });
      });

    !error2 &&
      (await Axios.all(Temp2.residents.map((resident) => Axios.get(resident)))
        .then((res) => {
          for (var i = 0; i < Temp2.residents.length; i++) {
            Temp.push(res[i].data);
          }
        })
        .catch((err) => console.error("Error: ", err)));
    dispatch({ type: SET_LOCATION_RESIDENTS, payload: Temp });
  };

  return (
    <rmContext.Provider
      value={{
        characters: state.characters,
        episodes: state.episodes,
        locations: state.locations,
        character: state.character,
        episode: state.episode,
        location: state.location,
        loading: state.loading,
        error: state.error,
        CharacterEpisodes: state.CharacterEpisodes,
        EpisodeCharacters: state.EpisodeCharacters,
        LocationResidents: state.LocationResidents,
        searchCharacters,
        searchEpisodes,
        searchLocations,
        getCharacter,
        getEpisode,
        getLocation,
      }}
    >
      {props.children}
    </rmContext.Provider>
  );
};

export default RMState;
