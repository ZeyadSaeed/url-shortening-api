import Features from "./Features";

const SiteFeatures = () => {
  return (
    <section className="px-[24px]">
      <div className="max-w-[515px] mx-auto py-[0.5rem] md:py-[2.9rem]">
        <h2 className="text-[1.60rem] md:text-[2.3rem] font-bold text-[hsl(255,11%,22%)] text-center my-4">
          Advanced Statistics
        </h2>
        <p className="text-[#A4A3A6]  text-center md:text-[18px]">
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <Features />
    </section>
  );
};

export default SiteFeatures;
