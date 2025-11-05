import React from 'react';
import { Leaf, Shield, Heart } from 'lucide-react';

const items = [
  {
    icon: Leaf,
    title: "A collection created from a child's imagination and a parent's eye for design.",
    desc: "Playful forms meet elevated aesthetics to fit naturally into the modern home.",
  },
  {
    icon: Shield,
    title: 'Crafted exclusively from robinia hardwood — natural, toxin-free, and built to last over 40 years.',
    desc: 'Responsibly sourced materials, finished to endure play, weather, and time.',
  },
  {
    icon: Heart,
    title: 'Every piece is thoughtfully designed with child development at its heart.',
    desc: 'Encouraging balance, creativity, and sensory exploration at every age.',
  },
];

const Benefits = () => {
  return (
    <section>
      <div className="grid gap-6 sm:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }, idx) => (
          <div key={idx} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-white">
              <Icon size={20} />
            </div>
            <h3 className="text-lg font-medium text-neutral-900">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
