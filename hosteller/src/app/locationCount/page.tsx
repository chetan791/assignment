"use client";
import { gql, useQuery } from "@apollo/client";
import { count } from "console";
import Image from "next/image";

export default function locationCount() {
  const getCount = gql`
    query {
      getLocations {
        name
        image
        hostel
      }
    }
  `;
  const { loading, data, error } = useQuery(getCount);
  console.log(data);
  // let data = [
  //   {
  //     name: "Delhi",
  //     image: "https://i.ytimg.com/vi/OUPTGDrXDy4/maxresdefault.jpg",
  //   },
  //   {
  //     name: "Mumbai",
  //     image: "https://images.unsplash.com/photo-1680725779155-456faadefa26",
  //   },
  //   {
  //     name: "Bangalore",
  //     image:
  //       "https://i.ytimg.com/vi/gy7v4NDo1S8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBEhf8fYQGw0OkY5FVukNdaHoWN2A",
  //   },
  //   {
  //     name: "Kashmir",
  //     image:
  //       "https://dynamic.tourtravelworld.com/package-images/photo-big/dir_35/1042797/389672.jpg",
  //   },
  // ];
  return (
    <div>
      <div className="flex flex-wrap px-10">
        {data?.getLocations?.map((location: any, index: any) => {
          return (
            <div key={index} className="relative mx-auto mt-20 w-full">
              <Image
                width={200}
                height={200}
                className="h-64 w-full object-cover rounded-md"
                src={location.image}
                alt="Random image"
              />
              <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
              <div className="flex px-4 items-center justify-between absolute inset-0">
                <h2 className="text-white text-3xl font-bold">
                  {location.name}
                </h2>
                <div className="flex items-center space-x-2 font-bold text-5xl">
                  <p className="text-white text-lg">
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
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
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
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </p>
                  <p>{location.hostel} </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
