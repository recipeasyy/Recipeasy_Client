import Link from 'next/link';
import styled from '@emotion/styled';
import {useRouter} from 'next/router';
import Top_navigation from './top_navigation';
import NavBar from '../navBar/navBar';

const testCase =[1,2,3,4,5];

export default function showAll() {
    return(
        <>
        <MainBox>
        <Top_navigation></Top_navigation>
        <Text>
            오늘의 레시피지
            <div></div> 
            추천테마는?
        </Text>
        <Padding>
            <Test>
            {testCase.map((menu)=>{
                console.log(menu);
                return(
                <Link href={`/allTheme/${menu}`} key={menu}>
                {menu}</Link>
                )
            })
            }
            </Test>
            <ImgBox>
            <HeadText>Themes.title</HeadText> 
            <Detail>
                <SmallText>{"Themes.duration"}일식단{"Themes.recipe_count"}개의레시피</SmallText>
                <Icon>+</Icon>
            </Detail>
            
            </ImgBox>
            <ImgBox>
            <HeadText>Themes.title</HeadText> 
            <Detail>
                <SmallText>{"Themes.duration"}일식단{"Themes.recipe_count"}개의레시피</SmallText>
                <Icon>+</Icon>
            </Detail>
            
            </ImgBox>
            <ImgBox>
            <HeadText>Themes.title</HeadText> 
            <Detail>
                <SmallText>{"Themes.duration"}일식단{"Themes.recipe_count"}개의레시피</SmallText>
                <Icon>+</Icon>
            </Detail>
            
            </ImgBox>
        </Padding>
        </MainBox>
        <NavBar></NavBar>
        
        </>

    )
}
const ImgBox =styled.div`
    border: 1px solid black;
    border-radius: 20px;
    width:327px;
    height:230px;
    margin-bottom: 14px;
    background-color: black;
    display:flex;
    flex-direction: column;
`
const HeadText =styled.div`  
padding-left:22px;
width:216px;
height:54px;
padding-top:150px; 
`
const Detail = styled.div`
padding-left:22px;
display:flex;
flex-direction:row;
font-size:8px;
padding-top:22px;
`
const SmallText=styled.div`
margin-right:150px;
padding-bottom: 22px;
`
const Icon =styled.div`
padding-right:22px;
`




const Test =styled.li`
    color:black;
`
const Text =styled.div`
    color:black;
    font-size:24px;
    white-space: pre;
    height: 70px;
    font-weight: bold;
    margin-bottom: 16px;
`
const Padding=styled.div`
    height:507px;
    width:335px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
        display:none;
    }
    /*
    &::-webkit-scrollbar-track { background-color: white; }
    &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
    
  }
  */
`
const MainBox= styled.div`
    width:100%;
    max-width:375px;
    height:100%;
    background-color: white;
    padding-left:24px;
    padding-right:24px;
`
