import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {

    const {theme} = useTheme();

    return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0x 20px',
        backgroundColor: theme?.colors.gray900.value
    }}>
        <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt='icono de la app' width={80} height={80}/>
            <Text color="white" h2>P</Text>
        <Link href='/'>
            <a>
                <Text color="white" h3>okemon</Text>
            </a>
        </Link>

        <Spacer css={{flex: 1}}/>

        <Text color="white" h3>Favoritos</Text>
    </div>
  )
}
