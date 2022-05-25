import { FC, PropsWithChildren } from "react"

import Head from "next/head"
import { NavBar } from '../ui';

const origin = (typeof window === 'undefined') ? "" : window.location.origin;

export const Layout: FC<PropsWithChildren<{title:string}>> = ({ children, title}) => {

  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name="author" content='Brayan Baquero'/>
            <meta name="description" content='Informacion sobre un pokemon'/>
            <meta name="keywords" content='pokeapi, pokemon, pokedex'/>
            <meta property="og:title" content={`Informacion sobre el pokemon ${title}`} />
            <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>

        <NavBar/>

        <main style={{
          padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  )
}