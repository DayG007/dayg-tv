import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TVCardProps {
  title: string;
  icon: LucideIcon;
  focused: boolean;
}

export default function TVCard({
  title,
  icon: Icon,
  focused,
}: TVCardProps) {
  return (
    <motion.div
      animate={{
        scale: focused ? 1.08 : 1,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        w-72
        h-44
        rounded-3xl
        flex
        flex-col
        items-center
        justify-center
        cursor-pointer
        transition-all
        ${
          focused
            ? "bg-blue-600 shadow-[0_0_35px_rgba(59,130,246,.8)]"
            : "bg-zinc-800"
        }
      `}
    >
      <Icon size={60} color="white" />

      <div className="mt-5 text-2xl font-semibold text-white">
        {title}
      </div>
    </motion.div>
  );
}