import type { NextPage } from 'next'
import Head from 'next/head'
import PropertyCard from "../components/PropertyCard";
import Link from "next/link";
import {db} from "../lib/firebase";
import { useEffect, useState } from 'react';
// Visit https://firebase.google.com/docs/database/security to learn more about security rules.

const Home: NextPage = () => {

  const [post, setPost] = useState();

  useEffect(() => {
   async function fetchData() {
     try {
        const snapshot = await db.ref('/properties').once('value');
        setPost(snapshot.val());
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  // TODO: To create new property

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Quick Reply</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://www.quickreply.ai/">
            Quick Reply!
          </a>
        </h1>
        <Link href={"/property"}>
          <div className="mt-6 w-96 rounded-xl border p-6 text-left">
            <h2 className="text-2xl font-bold">
              Add New Property
            </h2>
          </div>
        </Link>
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {
            
          }
        </div>
      </main>

      <footer className="mt-8 flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://github.com/Dipendra-creator"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Dipendra Bhardwaj
        </a>
      </footer>
    </div>
  )
}

export default Home
