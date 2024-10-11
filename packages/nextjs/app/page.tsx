"use client";

import { useCallback, useEffect, useId, useState } from "react";
import Link from "next/link";
import { useLocalStorage } from "@uidotdev/usehooks";
import type { NextPage } from "next";

import { type InfoDonationCard } from "~~/components/DonationCard";
import { DonationCard } from "~~/components/DonationCard";




const donationStringInfo: string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu turpis eu eros convallis pretium.";

const Home: NextPage = () => {
  const infor: InfoDonationCard[] = [
    {
      id: 0,
      name: "Netflix",
      n_donation: 100,
      donate: 0.1,
      description: donationStringInfo,
      max_donation: 1000,
    },
    {
      id: 1,
      name: "Netflix2",
      n_donation: 50,
      donate: 0.1,
      description: donationStringInfo,
      max_donation: 100,
    },
    {
      id: 2,
      name: "Netflix3",
      n_donation: 100,
      donate: 0.6,
      description: donationStringInfo,
      max_donation: 2050,
    },
    {
      id: 3,
      name: "Netfli4",
      n_donation: 100,
      donate: 0.5,
      description: donationStringInfo,
      max_donation: 1500,
    },
  ];

  const [donation, setDonation] = useLocalStorage<InfoDonationCard[]>("donations", []);

  useEffect(() => {
    if (donation !== infor) {
      setDonation(infor);
    }
  }, [infor]);

  return (
    <main className="m-6 space-y-6">
      <h1 className="text-3xl font-bold ">Recent Donations</h1>
      <div className="grid grid-cols-2 gap-5  ">
        {donation &&
          donation.map((v, i) => {
            return (
              <Link href={`/donation/${v.id}`} key={i}>
                <DonationCard data={v} />
              </Link>
            );
          })}
      </div>
    </main>
  );
};

export default Home;
