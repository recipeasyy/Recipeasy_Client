import {useRouter} from 'next/router';
import Link from 'next/link';
import styled from '@emotion/styled'
//import home_o from 'pu'


const navMenu=[
    {id:'menu01', name:'home', path: '/main/showAll', discernName:'/main'},
    {id:'menu02', name:'search', path:'/searchAll', discernName:'/search'},
    {id:'menu03', name:'save', path:'/save', discernName:'/save'},
]
interface Container{
    pathName:string;
    href:string;
    imgName:string;
}

export default function NavBar(){
const router=useRouter();

return(
    <>
    <Back>
    <NavBox>
        {navMenu.map((menu)=>{
            return(
                <div key={menu.id}>
                    <Link href={menu.path} passHref>
                        <LinkText href={menu.path} pathName={router.pathname} imgName={menu.name}>
                        { router.pathname.includes(menu.discernName) ?
                        <Img  src={`/assets/${menu.name}_orange.png`} alt={"no image"}/>
                        :
                        <Img src={`/assets/${menu.name}_grey.png`} alt={"no image"} />
            }
                        </LinkText>
                    </Link>
                </div>
            )
        })}
    </NavBox>
</Back>
    </>
)
}

const Img=styled.img`
    size:28px;
`
const Back=styled.div`
    background-color:white;
    width:375px;
    height:83px;
`
const NavBox = styled.div`
    width:375px;
    height:83px;
    display:flex;
    flex-direction:row;
    padding-left: 49px;
    padding-right:49px;
    background-color: #F7F5F2;
    border-top-left-radius:24px;
    border-top-right-radius:24px;
    padding-top:16px;
`
const LinkText =styled.div<Container>`
    //color:${(props)=>(props.pathName.includes(props.href)  ? 'orange':'gray')};
    background-image:url(${(props)=>(props.pathName.includes(props.href)  ? '/assets/${props.imgName}_orange.png)': '/assets/${props.imgName}_grey.png') });
    font-size: 20px;
    font-weight: bold;
    margin-right:93px;
`