import Link from "next/link";
import React from "react";

const highlights = [
  "Flagship agricultural transformation initiative",
  "Built through evidence-based planning and stakeholder engagement",
  "Focused on value chains, investment, and job creation",
  "Designed as a 10-year roadmap for inclusive growth",
];

const HistoricalBackground = () => {
  return (
    <section className="wrapper px-5 py-16 md:py-24">
      <div className="rounded-[2rem] border border-green-100 bg-gradient-to-br from-[#f7fff8] via-white to-[#effcf3] p-6 shadow-[0_20px_60px_-25px_rgba(11,102,35,0.25)] md:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0B6623]/80">
              About ADAS-P
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Historical Background
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              The Adamawa Agribusiness Support Programme (ADAS-P) is a flagship
              agricultural transformation initiative of the Adamawa State
              Government, established under the visionary leadership of His
              Excellency, Rt. Hon. Ahmadu Umaru Fintiri. Conceived as a
              strategic response to the State&apos;s untapped agricultural
              potential, ADAS-P was created to transform agriculture into a
              modern, private sector-driven engine for economic growth,
              employment generation, food security, and sustainable prosperity.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Its foundation can be traced to the work of the Arewa Research and
              Development Project (ARDP), a Nigerian non-profit organisation
              that helped shape the programme&apos;s strategy, implementation
              model, financing architecture, stakeholder engagement approach,
              and institutional arrangements. This laid the groundwork for one
              of Nigeria&apos;s most ambitious state-led agribusiness
              development programmes.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#dff5e7] bg-white/80 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-[#0B6623] p-6 text-white md:p-8">
            <h3 className="text-2xl font-semibold">Why this history matters</h3>
            <p className="mt-4 text-base leading-7 text-green-50">
              ADAS-P was designed after an extensive baseline survey across
              Adamawa State, using evidence to identify comparative advantages
              in crop production, livestock, aggregation, processing, and
              agribusiness-based industries.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-green-50">
              <li>• A 10-year roadmap from 2021 to 2030</li>
              <li>
                • Strong partnerships across government, finance, investors, and
                farmer groups
              </li>
              <li>• A commitment to climate-smart, market-driven growth</li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#our-impact"
                className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0B6623] transition hover:bg-green-50"
              >
                Explore Our Impact
              </Link>
              <Link
                href="/media-briefing"
                className="inline-flex rounded-full border border-white/70 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Media Briefing
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-green-100 bg-white/80 p-6 text-slate-700 md:p-8">
          <p className="text-lg leading-8">
            Following approval by the Adamawa State Executive Council in May
            2021, ADAS-P was established alongside complementary institutions to
            strengthen investment promotion, infrastructure development, land
            management, and project coordination. Today, the programme serves as
            the State&apos;s flagship platform for catalysing sustainable
            agribusiness development and building an inclusive, globally
            competitive agricultural economy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistoricalBackground;
