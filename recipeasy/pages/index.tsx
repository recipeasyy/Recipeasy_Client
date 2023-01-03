import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import styled from '@emotion/styled'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <LinkColor>
    <Link href='/main/showAll'>
    하이</Link>
    </LinkColor>
    </>
  )
}

const LinkColor =styled.div`
  color:white;
`