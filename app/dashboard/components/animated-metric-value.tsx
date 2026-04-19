"use client";

import SlotCounter from "react-slot-counter";

type AnimatedMetricValueProps = {
  value: string;
};

export function AnimatedMetricValue({
  value,
}: Readonly<AnimatedMetricValueProps>) {
  return (
    <span className="inline-flex items-center tabular-nums">
      <SlotCounter
        animateOnVisible={{ triggerOnce: true, rootMargin: "0px 0px -12% 0px" }}
        charClassName="tabular-nums"
        containerClassName="inline-flex items-center tabular-nums"
        delay={0.08}
        dummyCharacterCount={4}
        duration={1}
        sequentialAnimationMode
        startValue="0"
        startValueOnce
        useMonospaceWidth
        value={value}
      />
    </span>
  );
}
