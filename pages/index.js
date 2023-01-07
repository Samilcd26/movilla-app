import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import ApiLogin from './Components/Pages/ApiLogin'
import 'alertifyjs/build/css/alertify.css';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='bg-home '>
        <div className='max-w-7xl m-auto'>
          <ApiLogin />
        </div>
      </div>

    </>
  )
}
