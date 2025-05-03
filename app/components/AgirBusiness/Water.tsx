"use client";

import Link from "next/link";
import React, { useState } from "react";
import Button from "../reusable/Button";

const Hydrology = () => {
  const [showContent, setShowContent] = useState(false);

  const content = `damawa State is characterized by three main drainage systems: the Benue, Yadzeram, and Taraba. The Benue River, the most prominent, originates from the Cameroonian highlands and flows southward to join the Niger River at Lokoja. Its major tributaries include the Gongola, Belwa, Inne, Kilange, Loko, and Faro Rivers. These rivers typically flood during the rainy season but become dry with sandy beds in the dry season.

  The Yadzeram River begins in the Hudu Hills east of Mubi and flows northward into Lake Chad. Its key tributaries are the Moda, Dilesimi, Wandu, and Bani Rivers. Meanwhile, the Taraba River rises from the Jombi Mountains in the extreme south and flows westward to merge with the Benue River in neighboring Taraba State. Its tributaries include Yim, Butale, Njuman, and Kam.

  While Adamawa has considerable surface water resources, they are unevenly distributed across regions and seasons. Many rivers and ponds dry up during the dry season, with only deeper water bodies like Lakes Njuwa and Gerio retaining water. Additionally, groundwater levels drop sharply in the dry season due to seepage and high evapotranspiration rates.

  Groundwater remains a crucial water source in the state, especially through wells and boreholes. Most urban centers outside Yola rely heavily on groundwater. The state’s geological structure influences groundwater availability, with about half of it underlain by pre-Cambrian basement complex rocks and the other half by sedimentary formations. Groundwater from basement rocks is less predictable and often has low yields, whereas sedimentary areas typically offer better yields, especially in classic formations that provide reliable aquifers. However, limestone formations should be avoided due to the hardness they impart to water.

Extracted from Adamawa State in Maps (An article by A.A. Adebayo and A. S. Umar, 1999)


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
        Adamawa State Hydrology and Water Resources
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

export default Hydrology;
