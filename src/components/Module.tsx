import { ChevronDown } from "lucide-react";
import Lesson from "./Lesson";
import * as Collapsible from "@radix-ui/react-collapsible";
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { play } from "../store/slicers/player";

interface moduleProp {
  title: string;
  classNumber: number;
  module: number;
}

const Module = ({ title, classNumber, module }: moduleProp) => {
  const { currentLessonIndex, currentModuleIndex } = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player;

    return { currentLessonIndex, currentModuleIndex };
  });
  const dispatch = useDispatch();
  const lessons = useAppSelector(
    (state) => state.player.course.modules[module].lessons
  );
  return (
    <Collapsible.Root className="group">
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {module + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{classNumber}</span>
        </div>
        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsible.Trigger>
      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons.map((item, lessonIndex) => {
            const isCurrent =
              currentModuleIndex === module &&
              currentLessonIndex === lessonIndex;
            return (
              <Lesson
                title={item.title}
                duration={item.duration}
                key={item.id}
                onPlay={() => dispatch(play([module, lessonIndex]))}
                isCurrent={isCurrent}
              />
            );
          })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export default Module;
