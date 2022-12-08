import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout>
        <main className='contenedor'>
            <h2 className='heading'> Nosotros</h2>
            <div className={styles.contenido}>
                  <Image src="/img/nosotros.jpg" width={1000} height={800} alt="texto para rellenar " />
                <div>
                    <p>Cras tristique purus at dui lobortis, quis bibendum purus dignissim. 
                      Suspendisse in luctus mi. Ut in sapien vel diam sodales malesuada eu ut ante. 
                      Phasellus consequat imperdiet turpis, sed bibendum nisi elementum vel. Proin at 
                      incidunt lorem. Nulla facilisi. Morbi augue neque, vestibulum a ante ullamcorper, 
                      finibus accumsan orci. Orci varius natoque penatibus et magnis dis parturient montes, 
                      nascetur ridiculus mus.</p>  
                      <p>Mauris lobortis dolor eu leo sollicitudin malesuada. Aenean bibendum nibh mi, a venenatis risus dignissim id. 
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc tempus at est eget congue. Morbi ac urna risus. 
                        Donec aliquet est leo, ac porttitor leo porttitor in. Nunc sollicitudin mollis accumsan. Praesent turpis dolor, 
                        pulvinar sit amet lobortis quis, laoreet tincidunt est. </p>
                </div>
            </div>
        </main>
    </Layout>
  )
}
