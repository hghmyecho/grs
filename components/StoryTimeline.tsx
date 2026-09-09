"use client";

import { useLayoutEffect, useRef, useState } from "react";

/**
 * The 3 "Our Story" milestones, alternating photo-left/text-right and
 * text-left/photo-right, per the Figma design (GRS-to-send, node 190-6322).
 * imageClass/textClass give each row a different width split so the gap
 * between image and text — where the connecting path anchors — naturally
 * lands at a different x-position per row, echoing the original design's
 * asymmetric weave instead of a straight vertical line.
 */
const MILESTONES = [
  {
    title: "Where it began",
    body: "GRS was founded with a vision to deliver high-quality, multidisciplinary healthcare for the disability sector. Our founding clinicians trained and worked extensively in Australia's public health system, where they saw firsthand the constraints therapists faced and the challenges people with disability encountered accessing services.",
    gradient: "from-navy-700 to-navy-950",
    imageClass: "lg:w-[55%]",
    textClass: "lg:flex-1",
  },
  {
    title: "A different kind of provider",
    body: "During the 2017 NDIS rollout, our founders identified an opportunity to establish a private multidisciplinary service offering therapeutic care that is efficient, individually tailored, and flexible — while maintaining the public health system's standards for quality assurance and evidence-based care.",
    gradient: "from-orange-400 to-orange-600",
    imageClass: "lg:flex-1",
    textClass: "lg:w-[30%]",
  },
  {
    title: "How we've grown",
    body: "In the years since, our team has expanded and the way we deliver care has evolved to meet changing client needs. Every step of that growth has stayed 100% directed and managed by clinicians, in pursuit of a simple goal: to become a benchmark for quality and client satisfaction.",
    gradient: "from-peach-200 to-navy-700",
    imageClass: "lg:w-[60%]",
    textClass: "lg:flex-1",
  },
];

type Point = { x: number; y: number };

export default function StoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const anchorRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [path, setPath] = useState<{ d: string; dots: Point[] } | null>(null);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");

    function measure() {
      const container = containerRef.current;
      const anchors = anchorRefs.current.filter((el): el is HTMLSpanElement => el !== null);
      if (!mq.matches || !container || anchors.length < 3) {
        setPath(null);
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const points = anchors.map((el) => {
        const r = el.getBoundingClientRect();
        return { x: r.left + r.width / 2 - containerRect.left, y: r.top + r.height / 2 - containerRect.top };
      });

      const [p0, p1, p2] = points;
      const d =
        `M ${p0.x} ${p0.y} ` +
        `C ${p0.x} ${(p0.y + p1.y) / 2}, ${p1.x} ${(p0.y + p1.y) / 2}, ${p1.x} ${p1.y} ` +
        `C ${p1.x} ${(p1.y + p2.y) / 2}, ${p2.x} ${(p1.y + p2.y) / 2}, ${p2.x} ${p2.y}`;

      setPath({ d, dots: [p1, p2] });
    }

    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    mq.addEventListener("change", measure);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", measure);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative space-y-12 lg:space-y-16">
      {path && (
        <svg aria-hidden className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block">
          <path
            d={path.d}
            fill="none"
            stroke="#f7941d"
            strokeWidth={2.5}
            strokeDasharray="7 7"
            strokeLinecap="round"
          />
          {path.dots.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={6} fill="#f7941d" />
          ))}
        </svg>
      )}

      {MILESTONES.map(({ title, body, gradient, imageClass, textClass }, i) => {
        const reversed = i % 2 === 1;
        return (
          <div
            key={title}
            className={`flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-0 ${
              reversed ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div
              className={`h-48 w-full shrink-0 rounded-2xl bg-gradient-to-br shadow-sm lg:h-56 ${imageClass} ${gradient} ${
                reversed ? "lg:rotate-1" : "lg:-rotate-1"
              }`}
            />
            <div className="hidden lg:flex lg:w-12 lg:shrink-0 lg:items-center lg:justify-center">
              <span
                ref={(el) => {
                  anchorRefs.current[i] = el;
                }}
                className="h-0 w-0"
              />
            </div>
            <div className={textClass}>
              <h2 className="font-display text-xl font-bold text-charcoal">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/80">{body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
