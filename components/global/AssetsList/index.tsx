import { useState, useEffect, useCallback } from "react";
import { useSupabase } from "../SupabaseProvider";
import Image from "next/image";
import LdrsAnimation from "../LdrsAnimation";
import { DialogHeader } from "@/components/ui/dialog";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { PiMagnifyingGlassBold } from "react-icons/pi";

const AssetsList = () => {
    const supabase = useSupabase();

    const perPage = 50;
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    let componentLoaded = false;

    const [assets, setAssets] = useState<any[]>();
    const getAssets = useCallback(async () => {
        if (isLoading || componentLoaded) {
            return;
        }
        componentLoaded = true;
        setIsLoading(true);
        const { data, error } = await supabase.rpc('native_assets')
            // .order('priority', { ascending: false })
            .range((page - 1) * perPage, (((page - 1) * perPage) + perPage - 1));
        console.log('data:', data);

        if (error) {
            console.error(error);
        }
        setAssets(prev => prev ? prev.concat(data) : data);
        setPage(prev => prev + 1);
        setIsLoading(false);
    }, [page, isLoading]);

    useEffect(() => {
        getAssets();
    }, []);

    return (
        <>
            <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                    <PiMagnifyingGlassBold size={28} />
                    <input type="text" placeholder="Search for an asset" className="bg-transparent text-lg focus:outline-none font-bold" />
                </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-2 h-full overflow-y-scroll">
                {assets?.map((asset, i) =>
                    <button
                        key={i}
                        onClick={() => { }}
                        className="rounded-lg bg-white shadow-sm hover:shadow-md p-2 transition-all text-slate-700 flex items-center justify-between"
                    >
                        <div className="flex items-center h-full gap-2 font-semibold">
                            {asset.logo_uri &&
                                <Image src={asset.logo_uri} alt="" width={100} height={100} className="h-10 w-auto" />
                            }
                            <div>{asset.recommended_symbol}</div>
                        </div>
                    </button>
                )
                }
                {isLoading ?
                    <div className="self-center">
                        <LdrsAnimation />
                    </div>
                    :
                    <button onClick={getAssets} className="mx-4 my-2 text-sky-700 hover:text-sky-500 font-bold text-sm">Load More</button>
                }
            </div >
        </>
    );
}

export default AssetsList;