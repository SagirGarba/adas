import React from "react";

const BusinessModels = () => {
  const models = [
    {
      title: "Aggregation Model",
      description: `The ADAS Programme employs an Aggregation Model to streamline the supply of produce from smallholder farmers to meet the standards of modern markets. This model organizes farmers into cohesive groups, enabling them to engage in formal contractual arrangements. By consolidating their output, farmers gain increased bargaining power and improved access to markets.

Supporting this model are strategically located warehouses that function as field storage centers, securing produce and facilitating access to financing and lending opportunities. The state plays a crucial role by providing essential infrastructure, including designated markets and warehouses, which underpins the functionality and success of these aggregation efforts.`,
    },
    {
      title: "Production Model",
      description: `Complementing the aggregation strategy is the Out-Grower Business Model, which establishes direct linkages between farmers and key actors within the agricultural value chain. These actors include processors, off-takers, input suppliers, and various supporting institutions.

Contract farming agreements form the basis of this model, ensuring a structured relationship and mutual benefits for all involved parties. Furthermore, to enhance farmer organization and market access, farmers are grouped into producer clusters. This clustering strengthens their collective voice in the market and improves their overall market integration.

The program's sustainability is also addressed through the development of structured and formalized produce and livestock markets, which generate revenue to support ongoing operations and future investments within the agricultural sector.`,
    },
    {
      title: "ADAS Credit Guarantee Scheme",
      description: `The ADAS Credit Guarantee Scheme (ADAS-CGS) is a key initiative designed to improve access to credit for agricultural stakeholders in Adamawa State, particularly those lacking traditional collateral.

This scheme facilitates warehouse financing for commodities like grains and livestock by providing guarantees to financial institutions, thereby securing loans for eligible agribusinesses. Participating banks disburse loans specifically for procuring and delivering commodities to designated warehouses managed by appointed Collateral Managers.

The scheme operates with a dual financing track, offering both interest-based financing through conventional banks and non-interest/Shariah-compliant financing based on Islamic finance principles like Murabaha and Salam. This dual approach caters to a wider range of participants, including faith-based enterprises.

Collateral coverage ranges from 130% to 150%, with commodities backing 100% and the Guarantee Scheme providing an additional 30% to 50%. Managed by ADAS Programme Limited and implemented through a network of agents, the ADAS-CGS aims to improve collateral-free credit access, reduce lending risks, stimulate value chain offtake, facilitate private investment, and integrate smallholder farmers into broader markets, covering a range of crops, livestock, and aquaculture.`,
    },
  ];

  return (
    <section className="wrapper py-16  bg-[#F9FBF9]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B6623] text-center mb-12">
        ADAS Business Models
      </h2>
      <div className="space-y-12">
        {models.map((model, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 md:p-10 border-l-8 border-[#0B6623] transition duration-300 hover:shadow-xl"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-[#0B6623] mb-4">
              {model.title}
            </h3>
            <p className="text-gray-700 whitespace-pre-line text-lg leading-relaxed">
              {model.description}
            </p>
            <div className="mt-6">
              <button className="bg-[#0B6623] hover:bg-[#095421] text-white px-5 py-3 rounded-lg shadow-md transition-all duration-300">
                Click here to join our Partnership Community
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessModels;
