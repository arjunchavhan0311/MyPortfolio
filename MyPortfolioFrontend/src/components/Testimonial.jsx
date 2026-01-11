import React from "react";

const HappyClients = () => {
  return (
    <section className="relative w-full overflow-hidden">

      {/* BACKGROUND (exact like image) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f6ecff] via-white to-[#e8fbf7]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center">

        {/* HAPPY CLIENTS */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] mb-4">
          Happy Clients
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-14">
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration.
        </p>

        {/* LOGOS */}
        <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-8 mb-28 opacity-60">
          <span className="text-2xl font-semibold text-gray-400">Google</span>
          <span className="text-2xl font-semibold text-gray-400">dribbble</span>
          <span className="text-2xl font-semibold text-[#0f172a]">Linked<span className="text-blue-600">in</span></span>
          <span className="text-2xl font-semibold text-gray-400">amazon</span>
          <span className="text-2xl font-semibold text-gray-400">Medium</span>
          <span className="text-2xl font-semibold text-gray-400">Spotify</span>
        </div>

        {/* TESTIMONIAL */}
        <h3 className="text-3xl md:text-4xl font-semibold text-[#0f172a] mb-4">
          Testimonial
        </h3>

        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration.
        </p>

        {/* QUOTE */}
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
          “Nulla efficitur nisl sit amet velit malesuada dapibus.
          Duis mollis felis turpis, nec semper odio convallis at.
          Curabitur imperdiet semper arcu, a finibus arcu suscipit in.
          Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed,
          tincidunt ut sapien. Morbi ornare elit at libero suscipit porta.”
        </p>

        {/* AUTHOR */}
        <p className="font-semibold text-[#0f172a]">
          Esther Howard
        </p>
        <p className="text-gray-400 text-sm mt-1">
          Managing Director, ABC company
        </p>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-12">
          <span className="w-6 h-2 rounded-full bg-purple-600" />
          <span className="w-2 h-2 rounded-full bg-gray-300" />
          <span className="w-2 h-2 rounded-full bg-gray-300" />
        </div>

      </div>
    </section>
  );
};

export default HappyClients;
