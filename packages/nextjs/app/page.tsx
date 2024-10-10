"use client";

import { useCallback, useEffect, useState, useId } from "react";
import { type InfoDonationCard } from "~~/components/DonationCard";
import { DonationCard } from "~~/components/DonationCard";
import type { NextPage } from "next";
import { parseEther } from "viem";
import { useAccount } from "wagmi";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import {useLocalStorage} from '@uidotdev/usehooks'

interface InfoDonation {
  name: string;
  n_donation: number;
  donate: number;
}

const donationStringInfo:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu turpis eu eros convallis pretium."


const Home: NextPage = () => {
  const infor: InfoDonationCard[] = [
    {
      id: 1,
      name: "Netflix",
      n_donation: 100,
      donate: 0.1,
      description: donationStringInfo,
      max_donation: 1000
    },
    {
      id: 2,
      name: "Netflix2",
      n_donation: 50,
      donate: 0.1,
      description: donationStringInfo,
      max_donation: 100
    },
    {
      id: 3,
      name: "Netflix3",
      n_donation: 100,
      donate: 0.6,
      description: donationStringInfo,
      max_donation: 2050
    },
    {
      id: 4,
      name: "Netfli4",
      n_donation: 100,
      donate: 0.5,
      description: donationStringInfo,
      max_donation: 1500
    },
  ];
  const { address: connectedAddress } = useAccount();
  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("Donation");

  const [info, setInfo] = useState<InfoDonationCard[]>(infor);
  const [donation, setDonation] = useLocalStorage<InfoDonationCard[]>("donations")


  useEffect(()=>{
    
    if(donation !== infor){
      setDonation(infor)
    }
  },[infor])


  return (
    <main className="m-6 space-y-6">
      <h1 className="text-3xl font-bold ">Recent Donations</h1>
      <div className="grid grid-cols-2 gap-5  ">
        {donation && donation.map((v, i) => {
          return (
            <DonationCard key={i} data={v}  />
          );
        })}
      </div>
    </main>
  );
};

export default Home;

/* <div key={i} className="card shadow-none border card-compact w-full bg-base-100">
  <div className="card-body gap-6">
    <div>
      <h2 className="card-title">{v.name} </h2>
      <progress className="progress w-full" value={v.n_donation} max={1000}></progress>
    </div>
    <div className="card-actions justify-end">
      <button
        onClick={async () => {
          try {
            await writeYourContractAsync({
              functionName: "donate",

              value: parseEther(v.donate.toString()),
            });
            setInfo(prev => {
              const updateInfo = [...prev];
              updateInfo[i].n_donation += 1;
              return updateInfo;
            });
          } catch (e) {
            console.error("Error setting greeting:", e);
          }
        }}
        className="btn btn-md btn-outline shadow-none"
      >
        Donate Now
      </button>
    </div>
  </div>
</div> */