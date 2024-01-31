import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="text-center flex flex-col items-center text-xs text-zinc-700 gap-1">
      <div className="text-zinc-400">
        Answer generated by large language models, plz double check for
        correctness.
      </div>

      <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 mt-2 text-zinc-400">
        <a className="hover:text-zinc-950" href="https://aimate.study/">
          Home
        </a>
        <a
          className="hover:text-zinc-950"
          href="https://twitter.com/aistudymate"
        >
          Twitter
        </a>
        <a
          className="hover:text-zinc-950"
          href="https://aistudymate.medium.com/"
        >
          Blog
        </a>
      </div>
    </div>
  );
};
