import Link from 'next/link';
import styled from '@emotion/styled';

export default function allTheme(){
    return(
        <>
        <MainBox>
        <Top_Navigation>
          
            <Header>
                <Link href={'/main/showAll'} >
                <Img src={`/assets/arrowBlack.png`} alt={"no image"}/>
                </Link>
            </Header>
        </Top_Navigation>
        <Padding></Padding>
        </MainBox>
        </>
    )
}

const Padding=styled.div`
       
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

