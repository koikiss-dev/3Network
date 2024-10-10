"use client";

import { useLocalStorage } from '@uidotdev/usehooks'
import { DonationCard, type InfoDonationCard } from "~~/components/DonationCard";


export default function Page({ params }: { params: { id: number } }) {
  const [donation, setDonation] = useLocalStorage<InfoDonationCard[]>("donations")

  const { description, donate, id, max_donation, n_donation, name } = donation[params.id]
  return (
    <main className="m-6 space-y-6">
      <div className=" bg-base-100 rounded-md border">
        <div className='card'>
          
          <div className='card-body'>
            <h2 className='card-title'>{name} </h2>
            <span className='text-wrap'>{description} </span>
          </div>
        </div>
      </div>
        <div className='btn btn-primary shadow-none w-full'>Donate now</div>
    </main>
  )
}
