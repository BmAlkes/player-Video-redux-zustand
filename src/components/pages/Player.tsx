import { ChevronDown, MessageCircle, Video } from "lucide-react";
import ReactPlayer from "react-player";
import Header from "../Header";
import PlayerVideo from "../PlayerVideo";
import Module from "../Module";
import { useAppSelector } from "../../store";
const Player = () => {
  const modules = useAppSelector((state) => state.player.course.modules);
  return (
    <>
      <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
        <div className="flex w-[1100px] flex-col gap-6">
          <div className="flex items-center justify-between">
            <Header />
          </div>
          <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
            <PlayerVideo />
            <aside className="w-80 absolute  top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc ">
              {modules.map((module, index) => {
                return (
                  <Module
                    key={module.id}
                    classNumber={module.lessons.length}
                    module={index}
                    title={module.title}
                  />
                );
              })}
            </aside>
          </main>
        </div>
      </div>
    </>
  );
};

export default Player;
