import { useRouter } from "next/router"
import { Layout } from "../../components/layouts"

interface Props {
  pokemon: any
}

const PokemonPage = () => {
  const {id} = useRouter().query;

  return (
    <Layout title="Algun pokemon">
        <h1>{id}</h1>
    </Layout>
  )
}

export default PokemonPage