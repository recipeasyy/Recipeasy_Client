import Link from 'next/link';
import styled from '@emotion/styled';
import { loadAllTheme } from '../../redux/allThemeSlice';
import {useEffect, useState} from "react";
import { useDispatch,useSelector } from 'react-redux';
import {ThunkDispatch} from '@reduxjs/toolkit';
import { useRouter } from 'next/router';
import { RootState } from '../../state/store';
import { initialState } from '../../interface';


export default function allTheme(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const recipesList = useSelector<RootState,any>(state => state.allThemeSlice);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch<ThunkDispatch<any,any,any>>();

    const {query:{id},
    isReady,
// eslint-disable-next-line react-hooks/rules-of-hooks
}=useRouter();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        if(!isReady) return
        console.log(id)
        dispatch(loadAllTheme(id));
        console.log(recipesList);
    },[])

    const theme = recipesList.list;
    return(
        <>
        <MainBox>
        <Top_Navigation>
            <Header>
                <Link href={'/main/showAll'} >
                <Img src={`/assets/arrowBlack.svg`} alt={"no image"}/>
                </Link>
            </Header>
        </Top_Navigation>
        <>
            <Heading>theme.Title</Heading>
            <Description>theme.description</Description>
            <Emoticon>{theme}</Emoticon>
            <AllRecipes>
            <Recipes>
            <ImgBox>
            </ImgBox>
            <RecipeTitle>Middle</RecipeTitle>
            <Time>small</Time>
            <Ingredients>small</Ingredients>
            </Recipes>
            <Recipes>
            <ImgBox>
            </ImgBox>
            <RecipeTitle>Middle</RecipeTitle>
            <Time>small</Time>
            <Ingredients>small</Ingredients>
            </Recipes>
            <Recipes>
            <ImgBox>
            </ImgBox>
            <RecipeTitle>Middle</RecipeTitle>
            <Time>small</Time>
            <Ingredients>small</Ingredients>

            </Recipes>
            </AllRecipes>


        <Padding></Padding>
        </>
        </MainBox>
        
        </>
    )
}
const Recipes =styled.div`
    display:flex;
    flex-direction: column;
    color:black;
`
const ImgBox=styled.div`
margin-bottom:4px;
border:1px solid black;
width:150px;
height:290px;
margin-right:12px;
background-color: black;
border-radius:20px;
`
const RecipeTitle=styled.div`
margin-bottom: 4px;
`
const Time=styled.div`margin-bottom:4px; font-size:10px`

const Ingredients=styled.div`font-size:10px`

const AllRecipes=styled.div`
overflow-y:hidden;
&::-webkit-scrollbar{
        display:none;
}
//overflow-y:scroll;
display:flex;
flex-direction: row;
padding-bottom:54px;
`


const Heading=styled.div`
margin-bottom:8px;
border:1px solid black;
color:black;
`
const Description=styled.div`
margin-bottom: 40px;
border:1px solid black;
color:grey;
`
const Emoticon=styled.div`
border:1px solid black;
margin-bottom:8px;
color:black;
`

const Padding=styled.div`
border:1px solid black;
background-color:black;
width:327px;
height:400px;
`

const Img =styled.img`
    size:24px;
`

const MainBox= styled.div`
    width:375px;
    height:812px;
    background-color: white;
    padding-left:24px;
    padding-right:24px;
    overflow-x:hidden;
    &::-webkit-scrollbar{
        display:none;
    }
`
const Top_Navigation =styled.div`
    width:375px;
    height:100px;
`
const Header =styled.div`
    display: flex;
    padding-bottom:21px;
    padding-top:57px;
    flex-direction: row;
`

