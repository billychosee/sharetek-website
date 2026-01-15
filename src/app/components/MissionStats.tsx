"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function MissionStats() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref}>
      <div
        className="px-5 md:px-24 bg-[#010626] min-h-screen flex flex-col items-center justify-center text-center py-20 space-y-6 md:space-y-20"
        style={{
          backgroundImage: "url('/our-mission-home-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl mx-auto space-y-14">
          <p className="text-sm font-bold text-[#A00927] xl:text-lg lg:text-sm">
            OUR MISSION
          </p>
          <h1 className="text-white text-3xl xl:text-[53px] font-bold lg:text-4xl">
            Join us in embracing <br />
            technology's possibilities.
          </h1>
          <p className="text-gray-400">
            At Sharetek, we envision a future where seamless connectivity and
            <br />
            innovative technology empower businesses to transcend boundaries and
            <br />
            achieve their full potential.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between w-full max-w-6xl pt-6 space-y-14 md:flex-row md:space-y-0 md:pt-0">
          <StatItem
            value={3}
            suffix="hrs"
            label="Average time to resolve a technical bug."
          />
          <StatItem
            value={10}
            suffix="min"
            label="Average time to read and respond to an email"
          />
          <StatItem
            value={80}
            suffix="%"
            label="Calls answered within 15 seconds of calling"
          />
        </div>
      </div>
    </section>
  );
}

function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center w-full gap-5 md:w-auto"
    >
      <h1 className="text-6xl font-bold text-[#A00927] lg:text-4xl xl:text-6xl">
        {inView ? <CountUp end={value} duration={2} /> : 0}
        {suffix}
      </h1>
      <p className="text-sm text-white lg:text-xs xl:text-sm max-w-[200px] text-center md:text-center">
        {label}
      </p>
    </div>
  );
}
