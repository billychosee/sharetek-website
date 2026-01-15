"use client";

interface CtaSectionProps {
  heading: string;
  description: string;
  primaryButton: {
    text: string;
    url: string;
  };
  secondaryButton: {
    text: string;
    url: string;
  };
}

export function CtaSection({
  heading,
  description,
  primaryButton,
  secondaryButton,
}: CtaSectionProps) {
  return (
    <section className="bg-[#A00927] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-6 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">{heading}</h2>
        <p className="text-lg md:text-xl">{description}</p>
        <div className="flex flex-col justify-center gap-4 mt-6 sm:flex-row">
          <a
            href={primaryButton.url}
            className="bg-white text-[#A00927] hover:bg-[#A00927] hover:text-white font-semibold py-3 px-6 transition duration-300 border border-[#A00927]"
          >
            {primaryButton.text}
          </a>
          <a
            href={secondaryButton.url}
            className="border border-white hover:bg-white hover:text-[#A00927] font-semibold py-3 px-6 transition duration-300"
          >
            {secondaryButton.text}
          </a>
        </div>
      </div>
    </section>
  );
}
