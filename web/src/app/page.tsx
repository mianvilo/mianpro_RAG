"use client";
import React, { useEffect, useState } from "react";
import { Footer } from "@/app/components/footer";
import { Logo } from "@/app/components/logo";
import { PresetQuery } from "@/app/components/preset-query";
import { Search } from "@/app/components/search";

export default function Home() {
  const [hotSearches, setHotSearches] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://api.920pdd.com/API/60s/zh.php")
      .then((response) => response.text())
      .then((text) => {
        const titles = text
          .split(/\d+:/)
          .filter((title) => title.trim().length > 0)
          .map((title) => title.replace(/^“|”$/g, "").trim());
        setHotSearches(titles);
      })
      .catch((error) => console.error("Failed to fetch hot searches: ", error));
  }, []);

  return (
    <div className="absolute inset-0 min-h-[500px] flex items-center justify-center">
      <div className="relative flex flex-col gap-8 px-4 -mt-24">
        <Logo></Logo>
        <Search></Search>
        <div className="flex gap-2 flex-wrap justify-center">
          {hotSearches.map((query, index) => (
            <PresetQuery key={index} query={query}></PresetQuery>
          ))}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
