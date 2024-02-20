import { Mails } from "lucide-react";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="text-center flex flex-col items-center text-xs text-zinc-700 gap-1">
      <div className="text-zinc-400">三顿出品，更懂你的搜索</div>
      <div className="text-zinc-400">三顿半+大模型赋能</div>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 mt-2 text-zinc-400">
        <a className="hover:text-zinc-950" href="https://ai.sandunppt.com/">
          三顿AI
        <a className="hover:text-zinc-950" href="https://www.sandunppt.com/">
          三顿导航
        </a>
      </div>
    </div>
  );
};
