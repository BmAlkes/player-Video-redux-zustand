import { MessageCircle } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">Fundamnetos do redux</h1>
        <span className="text-sm text-zinc-400">
          Modulos desvedando o redux
        </span>
      </div>
      <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
        <MessageCircle className="w-4 h-4" /> deixar FeedBack
      </button>
    </>
  );
};

export default Header;
