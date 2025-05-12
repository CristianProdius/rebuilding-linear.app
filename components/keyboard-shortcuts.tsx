"use client";
import { useEffect, useRef } from "react";
import { Button, Highlight } from "./button";

import { CurriculumPlanIllustration } from "./illustrations/curiculum";
import { planningSteps } from "./illustrations/curiculum";

export const KeyboardShortcuts = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const illustrationWrapperRef = useRef<HTMLDivElement>(null);
  const activeStepIndex = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const scheduleTimeout = () => {
    timeoutRef.current = setTimeout(goToNextStep, 2500);
  };

  useEffect(() => {
    scheduleTimeout();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const goToStep = (index: number) => {
    clearTimeout(timeoutRef.current);

    if (!wrapperRef.current) return;

    const step = wrapperRef.current.querySelector<HTMLButtonElement>(
      `button:nth-child(${index + 1})`
    );
    if (!step) return;

    wrapperRef.current.scrollTo({
      left: step.offsetLeft - wrapperRef.current.clientWidth / 2,
      behavior: "smooth",
    });

    if (!illustrationWrapperRef.current) return;

    illustrationWrapperRef.current
      .querySelectorAll(".active")
      .forEach((el) => el.classList.remove("active"));

    const stepKey = step.dataset.keys || "";
    const stepNode = illustrationWrapperRef.current.querySelector(
      `[data-key="${stepKey}"]`
    );

    // Activate the selected node
    stepNode?.classList.add("active");

    // If it's the first or last step, also activate the center
    if (index === 0 || index === planningSteps.length - 1) {
      illustrationWrapperRef.current
        .querySelector(".planning-center")
        ?.classList.add("active");
    }

    activeStepIndex.current = index;
    scheduleTimeout();
  };

  const goToNextStep = () =>
    goToStep((activeStepIndex.current + 1) % planningSteps.length);

  const onStepButtonClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    goToStep(Number(ev.currentTarget.dataset.index));
  };

  return (
    <>
      <div
        ref={illustrationWrapperRef}
        className="absolute top-0 -left-12 h-full max-h-[30rem] w-[200%] md:relative md:left-auto md:w-full "
      >
        <CurriculumPlanIllustration />
      </div>
      <div className="my-7 hidden h-[4rem] min-h-[4rem] w-full overflow-hidden md:block">
        <div
          ref={wrapperRef}
          className="flex h-[6rem] max-w-full snap-x snap-mandatory gap-2 overflow-auto pb-8"
        >
          {planningSteps.map((step, index) => (
            <Button
              className="shrink-0 snap-center first:ml-[50vw] last:mr-[50vw]"
              key={step.text}
              data-index={index}
              data-keys={step.keys}
              onClick={onStepButtonClick}
              variant="secondary"
            >
              <Highlight className="uppercase">{step.keys}</Highlight>
              <span>{step.text}</span>
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
