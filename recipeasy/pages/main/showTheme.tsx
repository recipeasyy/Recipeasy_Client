import Link from 'next/link'
import Top_navigation from './top_navigation';
import styled from '@emotion/styled';
import NavBar from '../navBar/navBar';

export default function showTheme() {

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

        </Padding>
        </MainBox>
        <NavBar></NavBar>
        
        </>

    )
}
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
    width:375px;
    overflow: hidden;
`

const MainBox= styled.div`
    width:375px;
    height:729px;
    background-color: white;
    padding-left:24px;
    padding-right:24px;
`
