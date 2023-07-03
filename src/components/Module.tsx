import { ChevronDown } from "lucide-react";
import React from "react";
import Lesson from "./Lesson";

interface moduleProp {
  title: string;
  classNumber: string;
  module: number;
}

const Module = ({ title, classNumber, module }: moduleProp) => {
  return (
    <>
      <div>
        <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
          <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
            {module}
          </div>
          <div className="flex flex-col gap-1 text-left">
            <strong className="text-sm">{title}</strong>
            <span className="text-xs text-zinc-400">{classNumber}</span>
          </div>
          <ChevronDown className="w-5 h-5 ml-auto text-zinc-400" />
        </button>
      </div>
      <div>
        <nav className="relative flex flex-col gap-4 p-6">
          <Lesson title="fundamentos do zustand" duration="09:12" />
          <Lesson title="fundamentos do redux" duration="09:12" />
          <Lesson title="fundamentos do redux" duration="09:12" />
          <Lesson title="fundamentos do redux" duration="09:12" />
        </nav>
      </div>
    </>
  );
};

export default Module;
