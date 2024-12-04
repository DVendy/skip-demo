import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useCallback, useState } from "react"
import { BsCaretDownFill } from "react-icons/bs"
import AssetsList from "../AssetsList"

interface Props {
    chain?: string
    onChainSelected(value: string): void
}

export function DialogAsset(props: Props) {
    const [open, setOpen] = useState(false);

    const onChainSelected = useCallback((chain: Chain) => {
        console.log(chain);
        props.onChainSelected(chain.pretty_name);
        setOpen(false);
    }, []);

    return (
        <div className="w-full flex flex-col appearance-none leading-5 nm-inset-gray-200 px-8 py-4 rounded-xl">
            <div className="w-full flex items-center">
                <input type="text" placeholder="0" className="bg-transparent text-4xl font-semibold focus:outline-none w-full" />
                <Dialog open={open} onOpenChange={(val) => setOpen(val)}>
                    <DialogTrigger asChild>
                        <div className="flex gap-2">
                            <div className="flex items-center font-bold px-4 border border-slate-300 rounded-lg">ATOM</div>
                            <Button variant="neumorphism" size={"icon"}>
                                <BsCaretDownFill className={`${open && 'rotate-180'} transition-transform`} />
                            </Button>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[480px] max-h-[80vh] flex flex-col p-4 bg-background">
                        <AssetsList />
                    </DialogContent>
                </Dialog>
            </div>
            {props.chain &&
                <div className="text-end text-sm font-semibold mt-4 text-gray-400">on {props.chain}</div>
            }
        </div>
    )
}
