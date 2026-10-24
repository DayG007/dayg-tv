import { useState } from "react";
import TVCard from "../components/TVCard";
import { menuItems } from "../data/menu";

export default function Home() {
  const [selected, setSelected] = useState(0);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>
  ) => {
    switch (e.key) {
      case "ArrowRight":
        setSelected((prev) =>
          Math.min(prev + 1, menuItems.length - 1)
        );
        break;

      case "ArrowLeft":
        setSelected((prev) =>
          Math.max(prev - 1, 0)
        );
        break;

      case "Enter":
        alert(menuItems[selected].title);
        break;
    }
  };

  return (
    <div
      tabIndex={0}
      autoFocus
      onKeyDown={handleKeyDown}
      className="h-screen bg-zinc-950 text-white flex flex-col"
    >
      <h1 className="text-6xl font-bold text-center mt-16">
        DayG TV
      </h1>

      <div className="flex flex-wrap justify-center gap-10 mt-20 px-10">
        {menuItems.map((item, index) => (
          <TVCard
            key={item.title}
            title={item.title}
            icon={item.icon}
            focused={selected === index}
          />
        ))}
      </div>

      <p className="text-center text-zinc-400 text-xl mt-auto mb-10">
        ← → Navigate • Enter Select
      </p>
    </div>
  );
}