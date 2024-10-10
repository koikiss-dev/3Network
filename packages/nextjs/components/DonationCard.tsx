import { ComponentProps, FC, useId } from "react"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export interface InfoDonationCard {
    id: number | string;
    name: string;
    n_donation: number;
    max_donation: number
    description: string;
    donate: number;
    goTo?: string
}

type DonationCardProps = ComponentProps<"div"> & {

    data: InfoDonationCard
}

export const DonationCard: FC<DonationCardProps> = ({ data, ...rest }) => {
    const id = useId()
    return (
        <div {...rest} className="card shadow-none border card-compact w-full bg-base-100 ">
            <div className="card-body gap-6">
                <div className="overflow-hidden">
                    <div className="flex items-center justify-between">

                        <h2 className="card-title">{data.name} </h2>
                        <Link href={`donation/${data.id}`} className="p-3 bg-base-200 rounded-full hover:bg-neutral-900 hover:text-neutral-50 transition-colors">
                            <ArrowUpRightIcon width={15} height={15} />
                        </Link>


                    </div>
                    <span className="truncate text-wrap">{data.description} </span>
                </div>
                <div className="card-actions ">
                    <div className="flex items-center gap-5 justify-between w-full">

                        <progress className="progress " value={data.n_donation} max={1000}></progress>
                        <span className="text-nowrap">{data.n_donation} of {data.max_donation} </span>
                    </div>
                </div>
            </div>
        </div>
    )
}