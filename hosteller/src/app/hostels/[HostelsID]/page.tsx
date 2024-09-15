"use client";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { RootState } from "@/Redux/Store";
import { addReservations } from "@/Redux/HostelReducer/Actions";
import { gql, useQuery } from "@apollo/client";

export default function HostelsID({ params }: { params: any }) {
  const dispatch = useDispatch();

  const gethostels = gql`
    query GetHostelsByLocation($locationId: ID!) {
      gethostelbylocation(location_id: $locationId) {
        name
        image
      }
    }
  `;

  const { loading, error, data } = useQuery(gethostels, {
    variables: { locationId: params.HostelsID },
  });
  // console.log(data);
  const addHostelReservation = (payload: any) => {
    alert("Added to cart");
    dispatch(addReservations(payload));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center p-4">Available Hostels</h1>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-[#00b386] animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-[#00b386] animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-[#00b386] animate-bounce [animation-delay:-.5s]"></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4  p-4 w-full">
          {data?.gethostelbylocation?.map((location: any, index: any) => {
            return (
              <div
                key={index}
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
                className="max-w-sm rounded-lg overflow-hidden shadow-lg w-full border-2"
              >
                <Image
                  className="w-full"
                  src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
                  alt="Sunset in the mountains"
                  height={200}
                  width={200}
                />
                <div className="px-3 py-4">
                  <div className="font-bold text-xl mb-2">{location.name}</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. .
                  </p>
                </div>
                <div className="flex items-center justify-between px-3 py-4">
                  <div className=" pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #photography
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #travel
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #winter
                    </span>
                  </div>
                  <button
                    style={{ backgroundColor: "#00b386" }}
                    className=" text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => addHostelReservation(location)}
                  >
                    Make Bookings
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
