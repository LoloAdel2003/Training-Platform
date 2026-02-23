"use client";

export default function HighlightSection() {
  return (
    <section className="py-10 radial-primary-bg text-white px-4 md:px-10 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Unlock Your Potential Today
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Join thousands of learners and instructors transforming their future with our all-in-one educational platform.
        </p>
        <a
          href="#"
          className="inline-block bg-primary/50 text-primary-foreground font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
}