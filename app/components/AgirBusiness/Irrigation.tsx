"use client";

import Link from "next/link";
import React, { useState } from "react";
import Button from "../reusable/Button";

const IrrigatedAgriculture = () => {
  const [showContent, setShowContent] = useState(false);

  const content = `
Adamawa State offers one of Nigeria's most promising environments for irrigated agriculture. Bordered by rivers Benue, Gongola, Yedzaram, and others, the state's geography and climate—characterized by seasonal rainfall variability—have historically supported and continue to sustain a thriving irrigation system.
With an estimated 250,900 hectares of irrigable land identified across five major sub-basins by the Upper Benue River Basin Development Authority (UBRBDA), the State is well-positioned for year-round crop production. Major irrigation projects like Lake Gerio, Kiri Dam, Tallum, and Mayo Ine demonstrate significant investment potential, especially in rice, sugarcane, maize, and vegetable farming.
Government agencies such as UBRBDA, Adamawa State Agricultural Development Programme (ADADP), and the Adamawa State Fadama Coordination Office (ADSFCO) are actively supporting the sector through land development, extension services, improved inputs, and farmer cooperatives. Over 185,000 farmers are already engaged in irrigated agriculture, supported with infrastructure, water pumps, technical guidance, and cooperative networks.
Notable investment-ready opportunities include:
• Gerio Irrigation Project (120 ha developed, 1,200 participating farmers)
• Kiri Dam Project (7,000 ha developed for commercial sugarcane)
• Tallum Irrigation (400 ha potential, underutilized)
• Minor Schemes at Dasin Hausa and Ganye with high per-hectare productivity
• Fadama Clusters in Fufore, Numan, Yola South, Mayo Belwa, and Lamurde supporting dual-season rice production
The State Government is also advancing large-scale projects such as proposed dams in Dasin Hausa (30,000 ha potential) and Guyuk (19,000 ha)—ideal for public-private partnerships.
In addition to public projects, a growing number of private irrigators are successfully cultivating high-value crops, proving the commercial viability of irrigated agriculture across Adamawa.
Why Invest?
• Extensive, underutilized fertile land
• Supportive state and federal policies (e.g., Anchor Borrowers Scheme)
• Available water resources and infrastructure
• High farmer participation and established cooperatives
• Strong demand for irrigated crops locally and across the region
Adamawa State is ripe for investment in irrigated agriculture. Partner with us to scale food production, unlock export potential, and transform rural economies.`;

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
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
        Irrigated Agriculture in Adamawa State
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

export default IrrigatedAgriculture;
