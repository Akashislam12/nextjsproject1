import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  
  return (
    
    <>
    <nav>
      <ul className='navul'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>about</li></Link>
        <Link href="/blog"><li>blog</li></Link>
        <Link href="/contack"><li>contack</li></Link>
      </ul>
    </nav>
 
      <Head>
        <title>First-app</title>
        <h2>Home</h2>
        
        
        
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <h1>My First app</h1>
          
        </div>

      
       
      </main>
    </>
  )
}
