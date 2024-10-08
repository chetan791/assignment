"use client";

import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

const getData = gql`
  query {
    getLocations {
      _id
      name
      image
    }
  }
`;
export default function Hostels() {
  const { loading, error, data } = useQuery(getData);
  console.log(data);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-[#00b386] animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-[#00b386] animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-[#00b386] animate-bounce [animation-delay:-.5s]"></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {data?.getLocations?.map((location: any) => {
            return (
              <div>
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
                  <Image
                    width={200}
                    height={200}
                    src={location.image}
                    alt="University of Southern California"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>

                  <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                    {location.name}
                  </h3>
                  <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"></div>
                  <Link
                    href={`/hostels/${location._id}`}
                    className="z-10 mt-8 inline-flex items-center gap-x-2 rounded-full bg-gray-900 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 justify-end"
                  >
                    <p className="flex items-center gap-x-2">
                      View{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </p>
                  </Link>
                </article>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
