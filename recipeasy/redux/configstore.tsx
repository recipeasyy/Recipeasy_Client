import {allThemeSlice} from './allThemeSlice'
import {combineReducers, configureStore} from '@reduxjs/toolkit';



const reducer=combineReducers({
    allThemeSlice:allThemeSlice.reducer
})

export default reducer;
