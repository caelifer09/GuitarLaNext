import Link from "next/link"
import styles from '../styles/blog.module.css'
import Image from 'next/image'
import { formatearFecha } from '../utils/helpers'

export default function Post({post}) {
   const { contenido, imagen, titulo, url, publishedAt } = post
  return (

      <article className={styles.post}>
          <Image src={imagen.data.attributes.formats.medium.url} width={200} height={200} alt={titulo} />

          <div className={styles.contenido}>
              <h3>{titulo}</h3>
              <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
              <p className={styles.resumen}>{contenido}</p>              
              <Link className={styles.enlace} href={`/posts/${url}`}>Leer post</Link>
          </div>
    </article>
  )
}
