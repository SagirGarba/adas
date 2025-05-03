"use client";

import Link from "next/link";
import React, { useState } from "react";
import Button from "../reusable/Button";

const Livestock = () => {
  const [showContent, setShowContent] = useState(false);

  const content = `
Adamawa State is one of Nigeria’s top livestock hubs, offering a unique combination of vast grazing land, favorable ecological zones, and diverse animal species. With an estimated 7.5 to 8.3 million animals—comprising cattle, sheep, goats, pigs, and poultry—the state presents immense commercial opportunities in meat, dairy, and livestock value chain development.

Four Ecological Zones, One Livestock Powerhouse
The state is structured into four major pastoral blocks based on ecological and climatic conditions, each offering targeted livestock opportunities:

•	Toungo Block (20.6% landmass): High rainfall, lush pasture, and abundant water—ideal for cattle rearing.
•	Jada-Mayo Belwa Block (18.6%): Open grasslands suited for seasonal grazing and livestock fattening.
•	Benue Trough Block (31.8%): Central grazing corridor with rivers, lakes, and high population of nomads.
•	Hong-Michika Block (29%): Functional grazing reserves (Sorau, Guyaku), with potential for ranching and dairy expansion.
Animal Resources & Market Potential
•	Cattle (2.8–3.5 million): Includes Adamawa Gudali, Sokoto Gudali, White Fulani (Bunaji), and Red Bororo breeds—known for meat and milk quality. Strong demand in local and regional markets.
•	Sheep (2–2.5 million): Yankasa and Uda breeds dominate, supporting a growing mutton and ram market.
•	Goats (2.4 million): Local dwarfs adapted to both highland and lowland environments—ideal for small-scale investors.
•	Pigs (<500,000): Concentrated in culturally-accepting LGAs—opportunities in pork processing and export.
•	Poultry (2.5–3 million): Widespread across the state, with low entry barrier for SME participation.
Competitive Edge for Investors
•	Untapped Grazing Reserves: 37 gazetted, with only 2 currently operational—ripe for revitalization through PPPs.
•	Land Availability: Vast savannah grasslands ideal for ranching, feedlots, and dairy farms.
•	Fattening & Dairy Farms: Private operations like Sebore and Benue Valley Farms demonstrate profitability and scalability.
•	Mixed Farming Systems: Increasing integration of crops and livestock boosts productivity and sustainability.
•	Government Backing: Legacy of public ranches and veterinary infrastructure offers a foundation for private revival.

Risk & Resilience
Security challenges have shifted traditional pastoral routes but also opened new frontiers in less densely populated zones. With proper land use, improved grazing management, and investment in animal health, Adamawa’s fragile ecosystem can sustainably support large-scale livestock production.
The Opportunity

With its rich animal biodiversity, strategic location, available land, and growing domestic demand, Adamawa State is a prime destination for livestock investment. Opportunities exist in:
•	Ranching and fattening programs
•	Dairy production and processing
•	Animal feed manufacturing
•	Breeding and veterinary services
•	Cold chain and meat logistics

Partner with Adamawa to build Nigeria’s livestock future—naturally abundant, commercially viable, and socially transformative.


`;

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1
        onClick={() => setShowContent(!showContent)}
        style={{
          cursor: "pointer",
          color: "#0B6623",
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "0.5rem",
        }}
      >
        Livestock in Adamawa State: A Strategic Investment Frontier
      </h1>

      {showContent && (
        <>
          <p
            style={{
              whiteSpace: "pre-line",
              fontSize: "1.1rem",
              lineHeight: "1.7",
              color: "#333",
            }}
          >
            {content}
          </p>
          <div className="mt-6">
            <Link href="/forms/partnership">
              <Button text="Join our partnership Community" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Livestock;
