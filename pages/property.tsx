import Link from 'next/link';
<<<<<<< HEAD
import React, {useState} from 'react';
import PersonalFooter from '../components/PersonalFooter';
import {db} from '../lib/firebase';

function spiner({ isTrue }: { isTrue: Boolean; }) {
    if (isTrue) {
        return (
            <>
                loading...
            </>
        );
    }
}

=======
import {useState} from 'react';
import {db} from '../lib/firebase';

>>>>>>> parent of 55fed35 (Some Updations for Server Side Rendering)
const Property = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [size, setSize] = useState(0);
    const [spinerstate, setSpinerState] = useState(false);
    


    function addItems(name: string, description: string, size: number) {
        var items = {
            name: name,
            description: description,
            size: size
        };
        db.ref('/properties').push(items);
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addItems(name, description, size);
        setName("");
        setDescription("");
        setSize(0);
    } 

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const handleDescriptionChange = (e: any) => {
        setDescription(e.target.value);
    }
    const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSize(parseInt(e.target.value));
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">

            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
            <h1 className="text-6xl font-bold">
                Welcome to{' '}
                <a className="text-blue-600" href="https://www.quickreply.ai/">
                Quick Reply!
                </a>
            </h1>

<<<<<<< HEAD
            <div className="mt-6 p-6 flex max-w-4xl flex-wrap rounded-xl bordered items-center justify-around flex max-w-4xl sm:w-full border">
=======
            <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around flex max-w-4xl sm:w-full border">
                {/* TODO: To add new property */}
>>>>>>> parent of 55fed35 (Some Updations for Server Side Rendering)
                <div>
                <form onSubmit={handleSubmit}>
                    <div className="mt-8 flex flex-col items-center justify-center">
                        <label className="text-2xl font-bold">
                            Name
                        </label>
                        <input
                        type="text" 
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                         placeholder="Enter name"
                         className="rounded border block w-full px-4 py-2 mt-2 text-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring hover:ring" />
                    </div>
                    <div className="mt-8 flex flex-col items-center justify-center">
                        <label className="text-2xl font-bold">
                            Description
                        </label>
                        <textarea name="description" id="description"
                        value={description}
                        onChange={handleDescriptionChange}
                        placeholder="Description" 
                        className="rounded border block w-full px-4 py-2 mt-2 text-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring
                        hover:ring"
                        required></textarea>
                    </div>
                    <div className="mt-8 flex flex-col items-center justify-center">
                        <label className="text-2xl font-bold">
                            Size
                        </label>
                        <input 
                        type="number"
                        placeholder="Enter size (100)" 
                        name="size" 
                        value={size}
                        onChange={handleSizeChange}
                        className="rounded border block w-full px-4 py-2 mt-2 text-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring hover:ring"/>
                    </div>
                    {/* <spiner isTrue={spinerstate}/> */}
                    <div className='flex justify-center'>
                        <div className="m-2 mt-8 mb-8 flex flex-col items-center justify-center">
                            <button type="submit" className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add</button>
                        </div>
                        <Link href="/">
                            <div className="m-2 mt-8 mb-8 flex flex-col items-center justify-center">
                                <div className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">HOME</div>
                            </div>
                        </Link>
                    </div>

                </form>
                </div>
            </div>
            </main>

            <PersonalFooter />
        </div>
    )
}

export default Property;