"use client";

import Link from "next/link";
import React, { useState } from "react";
import Button from "../reusable/Button";

const VegetationAndForestResources = () => {
  const [showContent, setShowContent] = useState(false);

  const content = `
VEGETATION AND FOREST RESOURCES IN ADAMAWA STATE
Unlocking Green Wealth for Sustainable Investment
Adamawa State is endowed with diverse vegetation zones—Southern Guinea Savannah, Northern Guinea Savannah, and Sudan Savannah—each offering immense untapped potential for sustainable forestry, eco-tourism, non-timber products, and agroforestry investments. Despite environmental challenges, these landscapes continue to host a wide variety of indigenous and economic plant species, valuable wood resources, and high-potential non-wood forest products.

High-Value Vegetation Zones
Each vegetation belt in the state presents unique opportunities for green enterprise development:

• Southern Guinea Savannah (Toungo LGA): Receives 1100–1600 mm annual rainfall over 6–7 months. Rich in high-value timber and medicinal trees like Daniellia oliveri, Parkia biglobosa, and Vitex doniana, as well as fodder grasses such as Andropogon and Hyparrhenia. Ideal for eco-forestry, tree crop production, and forest-based pharmaceuticals.
• Northern Guinea Savannah (Ganye, Jada, Mayo Belwa, Yola, Girei, Song, Fufore LGAs): Annual rainfall of 900–1100 mm with 4–5 months of rains. Features high-yielding hardwoods (Vitellaria paradoxa, Afzelia africana, Khaya senegalensis) and economic fruits (Tamarindus indica, Annona senegalensis). Excellent for shea butter processing, timber industries, and carbon sequestration projects.
• Sudan Savannah (Mubi, Michika, Hong, Shelleng, Numan, etc.): Receives 700–900 mm of rain. Dominated by drought-resilient species like Acacia spp, Adansonia digitata, and Ziziphus spina-christi. This belt supports dryland agroforestry, gum Arabic plantations, and livestock-feed development.

Untapped Economic Forest Resources

Non-Wood Forest Products (NWFPs)
• Gum Arabic: With 7 out of Nigeria’s 19 Acacia species found in Adamawa, commercial gum Arabic production has strong export potential.
• Edible Fruits & Seeds: Native trees like Vitellaria paradoxa (shea butter), Parkia biglobosa (local spice “Dadawa”), and Tamarindus indica are in high demand across food, cosmetics, and nutraceutical industries.
• Medicinal Plants & Extracts: Wild plants like Khaya senegalensis and Gardenia imperialis provide raw materials for herbal medicine and essential oil production.
• Fibre & Bio-products: Plants such as Piliostigma spp and Hibiscus spp offer scalable inputs for biodegradable packaging and textiles.

Commercial Wood Species
• Species like Anogeissus leocarpus and Afzelia africana provide superior-quality timber and charcoal, ideal for sustainable wood-based industries, artisanal products, and export markets.

Wildlife Resources & Eco-Tourism Potential
Adamawa’s forests host rare and majestic species including elephants, ostriches, lions, hyenas, and antelopes. Over 10% of the land is already under conservation—anchored by the globally significant Gashaka Gumti National Park.

Investment opportunities include:
• Game reserves and safari tourism
• Wildlife ranching and breeding centers
• Conservation-linked community enterprises

Current Challenges—Opportunities for Green Investors
Adamawa’s forests face pressure from deforestation, outdated legislation (Forest Law of 1963), weak enforcement, and limited public awareness. However, these gaps present major entry points for public-private partnerships and climate-smart investments:
• Energy alternatives to firewood use (e.g., biomass briquettes)
• Forest restoration through tree planting and reforestation
• Sustainable land use models integrating livestock, trees, and crops
• Modern eco-governance frameworks to update forest laws and enforce sustainable use

Proposed Green Investment Action Plan

For Plant and Timber Resources
• Comprehensive vegetation and biodiversity inventory to support green certification and carbon credit schemes.
• Establishment of community-managed forest reserves and tree farms with co-investment from local and international partners.
• Promotion of agroforestry and fodder corridors along traditional grazing routes to reduce conflict and restore tree cover.
• Development of woodlots and fuel alternatives to combat deforestation and reduce rural energy poverty.
• Public-private partnerships for value addition in plant-based products such as oils, extracts, spices, and herbal treatments.

For Wildlife & Eco-Tourism
• Identification and upgrading of high-value biodiversity hotspots and eco-tourism zones.
• Conversion of some game reserves into sustainable hunting reserves for controlled tourism and revenue generation.
• Establishment of wildlife domestication and ranching centers for meat, hides, and live exports.
• Implementation of statewide awareness campaigns and inclusion of conservation in formal education curricula.

Why Invest in Adamawa’s Forest Economy?
• Abundant biodiversity and natural capital
• Untapped value chains in timber, non-wood products, and eco-tourism
• Strategic location along trans-border trade corridors with Cameroon
• Strong potential for climate-smart, socially inclusive green growth
• Growing demand for natural-based solutions and sustainable supply chains

Adamawa State’s Forest wealth is ready to be unlocked. With the right partnerships, this sector can fuel a green investment revolution, generate jobs, protect biodiversity, and uplift rural livelihoods.
Join us in transforming nature’s abundance into sustainable prosperity.
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
        Vegetation and Forest Resources in Adamawa State
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

export default VegetationAndForestResources;
