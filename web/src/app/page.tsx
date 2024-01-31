"use client";
import { Footer } from "@/app/components/footer";
import { Logo } from "@/app/components/logo";
import { PresetQuery } from "@/app/components/preset-query";
import { Search } from "@/app/components/search";
import React from "react";

export default function Home() {
  return (
    <div className="absolute inset-0 min-h-[500px] flex items-center justify-center">
      <div className="relative flex flex-col gap-8 px-4 -mt-24">
        <Logo></Logo>
        <div className="flex gap-2 flex-wrap justify-center">
          <span className="border border-green-200/50 text-ellipsis overflow-hidden text-nowrap items-center rounded-lg bg-green-100 hover:bg-green-200/80 hover:text-green-950 px-2 py-1 text-xs font-medium text-green-600">
            Math
          </span>
          <span className="border border-violet-200/50 text-ellipsis overflow-hidden text-nowrap items-center rounded-lg bg-violet-100 hover:bg-violet-200/80 hover:text-violet-950 px-2 py-1 text-xs font-medium text-violet-600">
            Chinese Writing
          </span>
          <span className="border border-amber-200/50 text-ellipsis overflow-hidden text-nowrap items-center rounded-lg bg-amber-100 hover:bg-amber-200/80 hover:text-amber-950 px-2 py-1 text-xs font-medium text-amber-600">
            English Writing
          </span>
        </div>
        <Search></Search>
        <div className="flex gap-2 flex-wrap justify-center">
          <PresetQuery query="What are the three forms of linear equations?"></PresetQuery>
          <PresetQuery query="Why do we only see one side of the moon?"></PresetQuery>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
