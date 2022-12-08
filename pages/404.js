import Layout from "../components/layout"
import Link from "next/link"

export default function Pagina404() {
  return (
    <Layout>
            <p className="error">pagina no encontrada</p>
            <Link href="/" className="error-enlace">Volver</Link>
    </Layout>
  )
}
