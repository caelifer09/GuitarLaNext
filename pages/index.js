import Layout from '../components/layout'
import stylesgrid from '../styles/grid.module.css'
import Guitarra from '../components/guitarra'
import Post from '../components/post'
import Curso from '../components/curso'

export default function Home({guitarras, posts, curso}) {

  return (
    <>
      <Layout>
          <main className='contenedor'>
            <h1 className='heading'>Nuestra coleccion</h1>
              <div className={stylesgrid.grid}>
                  {guitarras?.map( guitarra => (
                      <Guitarra 
                          key={guitarra.id}
                          guitarra ={guitarra.attributes}
                      />
                  ))}
              </div>
          </main>
<Curso 
curso={curso}
/>
          <section className='contenedor'>
            <h2 className='heading'>blog</h2>
                <div className={stylesgrid.grid}>
                {posts.map( post => (
                  <Post 
                  key={post.id}
                  post={post.attributes}
                  />
                ))}
                </div>
          </section>
      </Layout>      
    </>
  )
}
export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`
  
  const [resGuitarras, resPosts, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso)
  ])
  const [{data: guitarras},{data: posts},{data: curso}] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json()
  ])
  return {
    props: {
      guitarras,
      posts,
      curso
    }
  }
}