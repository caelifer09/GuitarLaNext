import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'


export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
          <Link href="/"><Image src="/img/logo.svg" width={300} height={300} alt="imagen de portada" /></Link>
          <nav className={styles.navegacion}>
            <Link href="/" className={ router.pathname === '/' ? styles.active : ''} >inicio</Link>
            <Link href="/nosotros" className={ router.pathname === '/nosotros' ? styles.active : ''} >nosotros</Link>
            <Link href="/tienda" className={ router.pathname === '/tienda' ? styles.active : ''}>tienda</Link>
            <Link href="/blog" className={ router.pathname === '/blog' ? styles.active : ''}>blog</Link>
            <Link href="/carrito"><Image src="/img/carrito.png" width={30} height={25} alt="carrito" /></Link>
          </nav>
        </div>
    </header>
  )
}
