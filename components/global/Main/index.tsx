'use client';

import { DialogAsset } from "@/components/global/DialogAsset";
import SplineScene from "@/components/global/SplineScene";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PiSwapBold } from "react-icons/pi";

export default function Main() {
  const [sourceChain, setSourceChain] = useState<string>();
  const [destChain, setDestChain] = useState<string>();

  return (
    <div className="flex-1 py-10">
      <div className="max-w-[480px] mx-auto flex flex-col items-center">
        <div className="text-4xl font-bold">SKIP API - Demo</div>
        <div className="mt-2 text-sm font-medium text-gray-500">An example applications built with Skip Go API.</div>
        <hr className="w-full my-8" />
        <DialogAsset
          chain={sourceChain}
          onChainSelected={(val) => setSourceChain(val)}
        />

        <Button variant="neumorphism" size={"icon"} className="h-10 w-10 group -my-3 bg-teal-500 hover:bg-teal-400 text-teal-100 p-0">
          <PiSwapBold className="group-hover:rotate-180 transition-transform duration-500 h-6 w-6" />
        </Button>

        <DialogAsset
          chain={destChain}
          onChainSelected={(val) => setDestChain(val)}
        />
        <Button variant="neumorphism" className="mt-8 py-6 hover:scale-105 w-full text-sky-100 bg-sky-500 hover:bg-sky-400">connect wallet</Button>
      </div>
    </div>
  );
}
