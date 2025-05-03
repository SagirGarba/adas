"use client";

import Link from "next/link";
import React, { useState } from "react";
import Button from "../reusable/Button";

const Climate = () => {
  const [showContent, setShowContent] = useState(false);

  const content = `
Adamawa State experiences a tropical savannah climate, characterized by distinct wet and dry seasons, with significant seasonal and spatial variations in key climatic elements such as sunshine, temperature, rainfall, evaporation, and humidity.
Sunshine in the state varies throughout the year. Between January and April, the state records an average of 7.5 hours of sunshine per day, which decreases to about 6.3 hours during the rainy season (June to September) due to cloud cover. Sunshine increases again from October to December, reaching about 8.8 hours daily.
Temperatures are high year-round due to consistent solar radiation. The hottest period is from March to April, with maximum temperatures reaching 40°C. After the onset of rains, temperatures drop slightly due to increased cloudiness. The coolest period is during the harmattan season (December to January), with minimum temperatures dropping to around 18°C. Mean monthly temperatures range from 26°C in the southern highlands to 29°C in central areas, influenced by elevation. Long-term climate data indicate a gradual rise in both maximum and minimum temperatures over the past 40 years, suggesting a warming trend linked to climate change.
Evaporation rates are generally high due to strong solar radiation, peaking between February and April and declining during the rainy season when cloud cover reduces radiation levels. Relative humidity follows an inverse pattern: it is lowest between January and March (20–30%), begins to rise in April, and peaks in August at about 83%, coinciding with the rainy season.
Rainfall is the most variable climatic element. Controlled by the movement of the Inter-Tropical Discontinuity (ITD), rainfall begins in March and increases steadily, peaking in August when the ITD reaches its northernmost position. By October, rainfall declines sharply. Mean annual rainfall varies with elevation and is highest in areas like Sugu. Yola receives an average of 200.8 mm in August, while Mubi and Gyawana record similar peak values. The rainy season lasts an average of 152 to 161 days, with onset typically in early to mid-May and cessation by early October.
Despite some reduction in annual rainfall in recent decades, climatic conditions in Adamawa generally support agricultural activities, as temperature, sunshine, and humidity remain within ranges conducive for crop growth.

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
        Adamawa State Climate Overview
      </h1>

      {showContent && (
        <><p
          style={{
            whiteSpace: "pre-line",
            fontSize: "1.1rem",
            lineHeight: "1.7",
            color: "#333",
          }}
        >
          {content}

        </p><div className="mt-6">
            <Link href="/forms/partnership">
              <Button text="Join our partnership Community" />
            </Link>
          </div></>
      )}
    </div>
  );
};

export default Climate;
