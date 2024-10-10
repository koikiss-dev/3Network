"use client";
import { useLocalStorage } from '@uidotdev/usehooks';
import { SubmitHandler, useForm } from 'react-hook-form';


type Inputs = {
    id: number | string;
    name: string;
    n_donation: number | null;
    max_donation: number
    description: string;
    donate: number | null;
}

export default function Page({ params }: { params: { id: number } }) {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const [donation, setDonation] = useLocalStorage<Inputs[]>("donations")
    const createDonation: SubmitHandler<Inputs> = (data) => {
        const donation:Inputs = {
            name: data.name,
            description: data.description,
            donate: null,
            id: 20,
            max_donation: data.max_donation,
            n_donation: null
        }
        /* setDonation(data) */
        console.log(data)
    }

    return (
        <main className="m-6 space-y-6">
            <div className="bg-base-100 rounded-md border p-6">
                <form className='flex flex-col gap-5' onSubmit={handleSubmit(createDonation)}>
                    <div className='flex gap-5'>

                        <input className="input input-bordered w-full" placeholder='Donation Name' type='text' {...register("name", { required: true })} />
                        <input defaultValue={0} className='input input-bordered w-full max-w-xs' type='number' min={0} {...register("max_donation", { required: true })} />
                    </div>
                    <textarea className='input input-bordered w-full h-52' placeholder='Description' {...register("description")} rows={5} />


                    <input className='btn btn-primary' type="submit" />
                </form>

            </div>

        </main>
    )
}
