"use client";

import Link from "next/link";
import React, { useState } from "react";
import Button from "../reusable/Button";

const FoodAndCashCrops = () => {
  const [showContent, setShowContent] = useState(false);

  const content = `
Adamawa State boasts diverse agro-climatic and edaphic (soil-related) conditions, making it one of the most agriculturally endowed regions in Nigeria. Its varied topography, soil types, and rainfall patterns support the cultivation of a wide range of high-value food and cash crops. Additionally, strong cultural farming traditions and evolving market dynamics further shape the agricultural landscape, offering investors a compelling opportunity for commercial engagement.

Diverse Crop Portfolio
Food Crops
The State’s major food crops include:
• Cereals: Maize, sorghum, rice, millet
• Legumes: Groundnut, cowpea, bambara groundnut, soybean
• Oil Seeds: Sesame, cotton, groundnut
• Roots and Tubers: Yam, cassava, sweet potatoes, Irish potatoes, cocoyam

Cash Crops
The leading cash crops with strong market and industrial value include:
• Cotton
• Groundnut
• Cowpea
• Sugar cane
These crops are not only crucial for food security but also present significant opportunities for agro-processing, value addition, and export.

Agro-Ecological Zones and Crop Distribution
Based on a combination of climate, soil, and vegetation, Adamawa State is divided into four Agricultural Zones, each with unique production strengths:

Zone I (Gombi, Hong, Maiha, Mubi North, Mubi South, Michika, Madagali)
• Average annual rainfall: ~1000mm
• High altitudes with acidic soils
• Key crops: Rice, maize, sorghum, groundnut, cowpea, sesame
• Notably, bambara groundnut is gaining momentum as a commercial crop due to increasing local demand and favorable pricing.

Zone II (Yola North, Yola South, Girei, Fufore, Song)
• Average annual rainfall: ~900mm
• Features extensive floodplains and fadama lands
• Crops thrive both in uplands and irrigated lowlands
• Key crops: Rice, maize (in floodplains); bambara groundnut, cowpea, sorghum, sesame (in uplands)
• Strategic infrastructure: Lake Geriyo irrigation scheme boosts year-round rice and vegetable production.

Zone III (Ganye, Toungo, Jada, Mayo-Belwa)
• Highest rainfall zone (up to 1400mm)
• Ideal for root and tuber crops: Yam, cassava, Irish and sweet potatoes
• Also produces maize, rice, sugar cane, and groundnut
• Consistent rain-fed yields position this zone as a vital food basket for the State.

Zone IV (Numan, Demsa, Lamurde, Guyuk, Shelleng)
• Low-lying floodplains with fertile vertisol soils
• Key crops: Sorghum, sugar cane, maize, rice, vegetables
• This is the principal sugar cane and cotton belt of the State, with significant commercial potential.

Investment Opportunities in Cash Crops
Cotton (Zones I & IV)
• Vertisol-rich soils in Zone IV support large-scale cotton cultivation.
• Afcott Plc, a major cotton processing firm, has catalyzed local cotton production through improved seeds, input financing, and assured offtake.
• Cotton farming presents opportunities in ginning, textile manufacturing, and oil extraction.

Sugar Cane (Zones III & IV)
• High rainfall and floodplains support sugar cane in Ganye, Toungo, and Numan.
• The Savannah Sugar Company in Numan has created an industrial backbone for sugar production with high-yield varieties ideal for processing.
• Mechanized and irrigated sugar farming is feasible and scalable, particularly in Zone IV’s Gongola river plains.

Groundnut (Zone I)
• Light sandy loam soils and reliable rainfall promote large-scale groundnut farming.
• Strong market demand for groundnut oil, paste, and industrial products.
• Processing and export potential is high due to established infrastructure and market networks.

Cowpea & Bambara Groundnut
• Cowpea now cultivated as a sole crop with high-yielding varieties.
• Bambara groundnut is evolving from a subsistence crop to a niche cash crop, offering nutritional benefits and high market value, especially in Hong, Gombi, Maiha, and Michika.

Enabling Infrastructure and Market Drivers
• The presence of agro-processing firms (Afcott Plc, Savannah Sugar) has spurred increased cultivation and market integration.
• Government and donor-supported irrigation schemes like Lake Geriyo and the proposed Chochi Project are enhancing year-round crop production.
• Growing consumer demand and evolving diets support local processing, packaging, and distribution ventures.

Why Invest in Adamawa’s Crop Sector?
• Rich Natural Endowments: Suitable soils and varied rainfall for multiple crop types
• Expanding Agribusiness Infrastructure: Processing, input supply, and market access supported by public-private partnerships
• Proven Local Capacity: Skilled farmers and growing cooperatives across zones
• High Market Demand: For raw and processed food products, both locally and internationally
• Government Support: Favorable policies, extension services, and access to land and financing mechanisms
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
        Food and Cash Crops in Adamawa State: Unlocking Agribusiness Potential
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

export default FoodAndCashCrops;
