import { GET_DATA, IS_LOADING, IS_FAILURE, SORT_DATA, FILTER_DATA } from "./actionTypes";
import data from '../../mainData.json';

export const getData = (data) => ({
    type: GET_DATA,
    payload:data,
});

export const isLoading = () => ({
    type: IS_LOADING,
});  
export const isFaliure = () => ({
type: IS_FAILURE,
});

export const sortProducts = (payload) => ({
type: SORT_DATA,
payload,
});

export const filterProducts = (payload) => ({
type: FILTER_DATA,
payload,
});