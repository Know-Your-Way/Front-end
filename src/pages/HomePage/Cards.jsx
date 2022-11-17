    import React from "react";
    import { FaArrowCircleUp } from "react-icons/fa";
    export default function Cards() {
    return (
    
        <section className=" bg-gray-400" id="hero">
            <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-white pt-20">
                We love to help you - just ask our travelers
            </h2>
            <div className="flex justify-evenly flex-col mt-24 md:flex-row md:space-x-6">
                <div className="flex flex-col justify-center items-center p-6 mb-10 space-y-6 border-2 border-black rounded-lg bg-white md:w-1/3 md:justify-center">
                <img
                    src="../Asset/cards/person1.jpeg"
                    alt="avatar"
                    className="rounded-full"
                />
                <p className="text-sm text-gray-500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit nemo illum, beatae ullam ad ipsa eos doloremque sed hic?
                    Quae, asperiores consequuntur. Vel nemo reiciendis voluptatem!
                    Ipsa repellat vero in?
                </p>
                <h5 className="text-lg font-bold">Dan</h5>
                </div>
                <div className="flex flex-col justify-center items-center p-6 mb-10 space-y-6 border-2 border-black rounded-lg bg-white md:w-1/3 md:justify-center">
                <img
                    src="../Asset/cards/person2.png"
                    alt="avatar"
                    className="rounded-full"
                />
                <p className="text-sm text-gray-500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit nemo illum, beatae ullam ad ipsa eos doloremque sed hic?
                    Quae, asperiores consequuntur. Vel nemo reiciendis repellat vero in?
                </p>
                <h5 className="text-lg font-bold">Antony</h5>
                </div>
                <div className="flex flex-col items-center p-6 mb-10 space-y-6 border-2 border-black rounded-lg bg-white md:w-1/3 md:justify-center">
                    <img className="rounded-full"
                    src="../Asset/cards/person3.jpeg"
                    alt="avatar"
                    
                />
                    
                <p className="text-sm text-gray-500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit nemo illum, beatae ullam ad ipsa eos doloremque sed hic?
                    Quae, asperiores consequuntur. Vel nemo reiciendis voluptatem!
                    Ipsa repellat vero in?
                </p>
                <h5 className="text-lg font-bold">Juliya</h5>
                </div>
            </div>
            <div className="rounded-md border-2 border-black text-center bg-white">
                <p className="px-5">
                <q>
                    Remember that happiness if a way of travel, not a destination
                </q>
                </p>
            </div>
            </div>
            <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-white pt-10">
                Most visited places
            </h2>
            <div className="flex flex-col  mt-10 md:flex-col  md:space-x-3">
                <div className="container flex flex-col items-center mb-10 md:border-2 border-black  md:flex-row justify-evenly ">
                <img
                    src="../Asset/cards/atomium.jpeg"
                    alt="avatar"
                    className="img"
                />
                  <img
                    src="../Asset/cards/grand_place.jpeg"
                    alt="avatar"
                    className="img"
                />
                 <img
                    src="../Asset/cards/king_palace.jpeg"
                    alt="avatar"
                    className="img"
                />
                </div>
                <div className="flex flex-col items-center  mb-10  md:border-2 border-black md:flex-row justify-evenly ">
                <img
                    src="../Asset/cards/maneken.jpeg"
                    alt="avatar"
                    className="img"
                />
                 <img
                    src="../Asset/cards/palace-des-justice.jpeg"
                    alt="avatar"
                    className="img"
                />
                <img
                    src="../Asset/cards/park.jpeg"
                    alt="avatar"
                    className="img"
                />
                </div>
            </div>
            <div className="rounded-md border-2 border-black text-center bg-white">
                <p className="px-5">
                <q>Take only memories, leave only footprints</q>
                </p>
            </div>
            <FaArrowCircleUp className="mt-5" icon="fa-duotone fa-up-to-line" />
            </div>
        </section>
    );
    }
