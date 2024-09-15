"use client";
import { removeReservations } from "@/Redux/HostelReducer/Actions";
import { RootState } from "@/Redux/Store";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

export default function cart() {
  const { locations } = useSelector((state: RootState) => state.hostel);
  console.log(locations);
  const dispatch = useDispatch();

  const RemoveHostelReservation = (payload: any) => {
    alert("Removed from cart");
    dispatch(removeReservations(payload));
  };
  return (
    <div className="w-full p-9 flex justify-center items-center">
      {locations?.length === 0 ? (
        <div className="w-full p-9 flex justify-center items-center text-3xl">
          Empty Cart
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  p-4 w-full">
          {locations?.map((location: any, index: any) => {
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
                    style={{ backgroundColor: "red" }}
                    className=" text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => RemoveHostelReservation(location)}
                  >
                    Remove Reservation
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
