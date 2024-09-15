"use client";

import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://cdn.prod.website-files.com/5feb57bd489ca957f6561095/60b9967859eb4136629095ef_600845a75f5256ec3273b537_eva-darron-oCdVtGFeDC0-unsplash.jpeg",
        backgroundSize: "cover",
      }}
      className="flex min-h-screen flex-col items-center justify-center py-2"
    >
      <h1 className="text-3xl font-bold ">
        Welcome to Travigo assignment project
      </h1>
      <Link href="/hostels">
        <p style={{ color: "#00b386" }} className="text-2xl font-bold">
          View Trip Locations{" "}
        </p>
      </Link>
    </div>
  );
}
