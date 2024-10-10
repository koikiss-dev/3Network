"use client";

import { useCallback, useState } from "react";
import { faker } from "@faker-js/faker";
import type { NextPage } from "next";
import { parseEther } from "viem";
import { useAccount } from "wagmi";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

interface InfoDonation {
  name: string;
  n_donation: number;
  donate: number;
}

const infor: InfoDonation[] = [
  {
    name: "Netflix",
    n_donation: 100,
    donate: 0.1,
  },
  {
    name: "Netflix2",
    n_donation: 50,
    donate: 0.1,
  },
  {
    name: "Netflix3",
    n_donation: 100,
    donate: 0.6,
  },
  {
    name: "Netfli4",
    n_donation: 100,
    donate: 0.5,
  },
];

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("Donation");

  const [info, setInfo] = useState<InfoDonation[]>(infor);

  return (
    <>
      <div className="grid grid-cols-2 gap-5 m-6 ">
        {info.map((v, i) => {
          return (
            <div key={i} className="card shadow-none border card-compact w-full bg-base-100">
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
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
