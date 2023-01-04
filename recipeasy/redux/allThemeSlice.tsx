import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const initialState ={
    list:[],
    id:"",
    error:"",
    loading:false,
}

//show페이지에서 allThemeid로 넘겨주고 useEffect나 SSR해서 dispatch하기
export const loadAllTheme =createAsyncThunk(
    //action이름,
    "get/idTheme",
    //처리할 비동기함수
    async(id:any)=>{
        console.log(id);
        try{
            const res = await axios.get(`https://recipeasy.link/theme/${id}`,
            {headers:{
                "Content-type": `application/json`,
                Authorization :`Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcyODMyNTAyLCJpYXQiOjE2NzI4MzIyMDIsImp0aSI6ImQzZjhhMDk0ZTgxNjRmYzc4NWE4OTNjMDFiZWZkNjhjIiwidXNlcl9pZCI6NH0.KyCtpCyXgpzwAUSI-u9iv8KqZ-BgmjFCEK5-amus__I"}`},});
            console.log(res);
            return res;
        }
        catch(error:any){//error타입은 무엇인지?
            console.log(error.code);
            return error.code;
        }
    }
    //서버에서 데이터 불러오기
    //action의 payload리턴
);

const allThemeSlice = createSlice({
    name:"themeRecipes",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
       builder.addCase(loadAllTheme.pending,(state)=>{
        state.loading = true;
       });
       builder.addCase(loadAllTheme.fulfilled,(state,action)=>{
        state.loading=false;
        state.list=action.payload;
        console.log(state.list);
        state.error="";
       });
       builder.addCase(loadAllTheme.rejected,(state,action)=>{
        state.loading =false;
        state.list=[];
        //state.error= action.error.message;
       })

    }
})

export {allThemeSlice};
export const allThemeReducer = allThemeSlice.reducer;