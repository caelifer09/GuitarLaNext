import Layout from "../../components/layout"
import styles from '../../styles/blog.module.css'
import Image from 'next/image'
import {formatearFecha} from '../../utils/helpers'


export default function PaginaPost({post}) {
  const { contenido, imagen, titulo, publishedAt } = post.data[0].attributes
  return (
    <Layout>
        <article className={`${styles.post} ${styles['mt-3']}`}>
            <Image src={imagen.data.attributes.url} width={600} height={400} alt={titulo} />

            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.texto}>{contenido}</p>
                
            </div>
        </article>
    </Layout>
  )
}
 export async function getServerSideProps({query: {url}}) {
     const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
     const post = await respuesta.json()
    
     return {
      props: {post}
     }
   }
