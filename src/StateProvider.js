import React ,{ createContext ,useContext,useReducer} from "react";

//Prepare the datalayer
export const StateContext= createContext();

//Wrap out app and provide the Data layer
export const StateProvider=({reducer,initialState,childern})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {childern}
        </StateContext.Provider>
);

//Pull information from the data layer
export const useStateValue= ()  =>useContext(StateContext);
