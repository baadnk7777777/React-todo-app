import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Form from '../components/form';
import Todolist from '../components/todolist';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="">
      <h1>TodoList Firebase</h1>
      <Form />
      <Todolist />
    </div>
  )
}
