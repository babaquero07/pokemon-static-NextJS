import { FC, PropsWithChildren } from "react"
import Head from "next/head"

export const Layout: FC<PropsWithChildren<{title:string}>> = ({ children, title}) => {
  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name="author" content='Brayan Baquero'/>
            <meta name="description" content='Informacion sobre el pokemon XXXX'/>
            <meta name="keywords" content='XXX, pokemon, pokedex'/>
        </Head>

        <main>
            { children }
        </main>
    </>
  )
}