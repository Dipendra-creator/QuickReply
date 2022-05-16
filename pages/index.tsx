import type { NextPage } from 'next'
import Head from 'next/head'
import PropertyCard from "../components/PropertyCard";
import Link from "next/link";
import {db} from "../lib/firebase";
<<<<<<< HEAD
<<<<<<< HEAD
import PersonalFooter from '../components/PersonalFooter';
import { useState } from 'react';
=======
import { useEffect, useState } from 'react';
// Visit https://firebase.google.com/docs/database/security to learn more about security rules.
>>>>>>> parent of 55fed35 (Some Updations for Server Side Rendering)

const Home: NextPage = () => {

  const [post, setPost] = useState<any []>([]);

=======
import { useEffect, useState } from 'react';
// Visit https://firebase.google.com/docs/database/security to learn more about security rules.

const Home: NextPage = () => {

  const [post, setPost] = useState<any []>([]);

>>>>>>> parent of 55fed35 (Some Updations for Server Side Rendering)
  useEffect(() => {
   async function fetchData() {
      try {
        const snapshot = await db.ref('/properties').once('value', (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();
            // @ts-ignore
            setPost(post => [...post, childData]);
          });
        });
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

function sleep(ms:number) {
  return new Promise((a,b) => {
  setTimeout(a,ms);
  });
}

// async function print() {
//   var date = new Date();
//   console.log(date, 1);
//   await sleep(2000);
//   date = new Date();
//   console.log(date, 2);
// }

<<<<<<< HEAD
<<<<<<< HEAD
function Home({ posts }: { posts: Post[] }) {  
  const [sorted, setSorted] = useState(false);

  function handleSort() {
    (sorted)?setSorted(false):setSorted(true);
  }

=======
>>>>>>> parent of 55fed35 (Some Updations for Server Side Rendering)
=======
>>>>>>> parent of 55fed35 (Some Updations for Server Side Rendering)
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Quick Reply</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold mb-8">
          Welcome to{' '}
          <a className="text-blue-600" href="https://www.quickreply.ai/">
            Quick Reply!
          </a>
        </h1>
        <Link href={"/property"}>
          <div className="animate-bounce mt-8 w-96 rounded-xl border p-6 text-left hover:text-blue-600">
            <h2 className="text-2xl font-bold">
              Add New Property
            </h2>
          </div>
        </Link>
<<<<<<< HEAD
        <div className="p-2 mt-6 mb-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {
            posts.sort((a, b) => {
              if (sorted) {
                return parseInt(a.size) - parseInt(b.size);
              } else {
                return 0;
              }
            }).map((item, index) => {
              return <PropertyCard
                key={index}
                name={item.name || "name"}
                description={item.description || "description"}
                size={item.size || "size"} />;
            }) 
          }
        </div>
        <div className="m-2 mt-8 mb-8 flex flex-col items-center justify-center">
          <button 
          className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleSort}
          >Sort</button>
=======
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {
            post.map((item, index) => {
              return <PropertyCard name={item?.name || "name"} description={item?.description || "description"} size={item?.size || "size"} />
            })
          }
<<<<<<< HEAD
>>>>>>> parent of 55fed35 (Some Updations for Server Side Rendering)
=======
>>>>>>> parent of 55fed35 (Some Updations for Server Side Rendering)
        </div>
      </main>

      <PersonalFooter />
    </div>
  )
}

export default Home



