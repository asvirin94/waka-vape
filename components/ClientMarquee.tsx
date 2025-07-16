"use client";
import dynamic from "next/dynamic";

const MarqueeComponent = dynamic(() => import("./Marquee").then(mod => mod.MarqueeComponent), { ssr: false });

export default MarqueeComponent; 