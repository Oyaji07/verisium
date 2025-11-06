"use client";

import { useEffect, useState } from "react";
import { getTechLogos, cn } from "@/lib/utils";

type TechIconProps = {
  techStack: string[];
};

const DisplayTechIcons = ({ techStack }: TechIconProps) => {
  const [techIcons, setTechIcons] = useState<
    { tech: string; url: string }[] | null
  >(null);

  useEffect(() => {
    (async () => {
      const logos = await getTechLogos(techStack);
      setTechIcons(logos);
    })();
  }, [techStack]);

  if (!techIcons) return null; // or loader

  return (
    <div className="flex flex-row">
      {techIcons.slice(0, 3).map(({ tech, url }, index) => (
        <div
          key={tech}
          className={cn(
            "relative group bg-dark-300 rounded-full p-2 flex-center",
            index >= 1 && "-ml-3"
          )}
        >
          <span className="tech-tooltip">{tech}</span>
          <img src={url} className="size-5" />
        </div>
      ))}
    </div>
  );
};

export default DisplayTechIcons;
