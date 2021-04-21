export default function Home(props) {
  return (
    <div>
      <p>Michel, meu gato</p>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 5, //60 seg x 60 min x 5 = a cada 5 horas ele carrega os dados do json dnv
  }
}
