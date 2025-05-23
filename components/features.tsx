"use client";

import classNames from "classnames";
import { Container } from "./container";
import { useInView } from "react-intersection-observer";

type FeaturesProps = {
  children: React.ReactNode;
  color: string;
  colorDark: string;
};

export const Features = ({ children, color, colorDark }: FeaturesProps) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <section
      ref={ref}
      className={classNames(
        "after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent) relative flex flex-col items-center overflow-x-clip before:pointer-events-none before:absolute before:h-[40rem] before:w-full before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#000212)] before:bg-no-repeat before:transition-[transform,opacity] before:duration-1000 before:ease-in before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)] before:[background-size:50%_100%,50%_100%] before:[background-position:1%_0%,99%_0%] after:pointer-events-none after:absolute after:inset-0",
        inView &&
          "is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]",
        !inView && "before:rotate-180 before:opacity-40"
      )}
      style={
        {
          "--feature-color": color,
          "--feature-color-dark": colorDark,
        } as React.CSSProperties
      }
    >
      <div className="mt-[12.8rem] mb-16 w-full md:mt-[25.2rem] md:mb-[12.8rem]">
        {children}
      </div>
    </section>
  );
};

type MainFeatureProps = {
  image?: string;
  text: string;
  title: React.ReactNode;
  imageSize?: "small" | "large";
  video?: React.ReactNode;
};

const MainFeature = ({
  image,
  text,
  title,
  imageSize = "small",
  video,
}: MainFeatureProps) => {
  return (
    <>
      <div className="relative before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)]">
        <Container
          className={classNames(
            "max-w-[90%] text-center",
            imageSize === "small" ? "w-[78rem]" : "w-[102.4rem]"
          )}
        >
          <h2 className="text-gradient mb-11 translate-y-[40%] pt-[12rem] text-center text-6xl [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] md:pt-0 md:text-8xl [.is-visible_&]:translate-y-0">
            {title}
          </h2>
          <div className="relative z-10 rounded-[14px] backdrop-blur-[6px] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0)_120%)] before:p-[1px] before:[mask:linear-gradient(black,_black)_content-box_content-box,_linear-gradient(black,_black)] before:[mask-composite:xor] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[rgba(255,_255,_255,_0.15)] after:[mask:linear-gradient(black,transparent)]">
            {video ? (
              <div className="w-full h-full aspect-video">{video}</div>
            ) : (
              image && <img src={image} className="h-auto w-full" />
            )}
          </div>
        </Container>
      </div>
      <Container className="w-[78rem] max-w-[90%] text-center">
        <p className="mx-auto my-16 text-2xl leading-tight text-white md:w-[80%] md:text-4xl">
          {text}
        </p>
        <hr className="mb-[7.2rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]" />
      </Container>
    </>
  );
};

type FeatureGridProps = {
  features: {
    icon: React.FC;
    title: string;
    text: string;
  }[];
};

const FeatureGrid = ({ features }: FeatureGridProps) => {
  return (
    <Container>
      <div className="mb-16 grid w-full grid-cols-2 place-items-center gap-y-9 text-sm text-primary-text md:mb-[14rem] md:grid-cols-3 md:text-md">
        {features.map(({ title, text, icon: Icon }) => (
          <div
            className="max-w-[25.6rem] [&_svg]:mb-[4px] [&_svg]:fill-white md:[&_svg]:mr-[6px] md:[&_svg]:mb-[2px] md:[&_svg]:inline"
            key={title}
          >
            <Icon />
            <span className="block text-white md:inline">{title}</span> {text}
          </div>
        ))}
      </div>
    </Container>
  );
};

type FeatureCardsProps = {
  features: {
    image?: string;
    imageClassName?: string;
    title: string;
    text: string;
    ctaText?: string;
    ctaLink?: string;
    fullWidth?: boolean;
  }[];
};

const FeatureCards = ({ features }: FeatureCardsProps) => {
  return (
    <Container>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {features.map(
          ({
            title,
            text,
            image,
            imageClassName,
            ctaText,
            ctaLink,
            fullWidth,
          }) => (
            <div
              key={title}
              className={classNames(
                "relative overflow-hidden rounded-[2.4rem] border border-transparent-white bg-[radial-gradient(ellipse_at_center,rgba(var(--feature-color),0.15),transparent)] py-6 px-8 before:pointer-events-none before:absolute before:inset-0 before:bg-glass-gradient md:rounded-[4.8rem] md:p-14",
                !ctaText ? "aspect-[1.1/1]" : "py-16 md:py-20",
                fullWidth && "md:col-span-2"
              )}
            >
              <h3
                className={classNames(
                  "mb-2 text-2xl text-white",
                  fullWidth && "text-center"
                )}
              >
                {title}
              </h3>
              <p
                className={classNames(
                  "max-w-[31rem] text-md text-primary-text",
                  fullWidth && "mx-auto text-center max-w-[60rem]"
                )}
              >
                {text}
              </p>
              {ctaText && ctaLink ? (
                <div className="mt-10 text-center">
                  <a
                    href={ctaLink}
                    className="inline-block rounded-full bg-[rgba(var(--feature-color),1)] px-8 py-4 text-lg font-semibold text-[#000212] transition-colors hover:bg-[rgba(var(--feature-color),0.8)]"
                  >
                    {ctaText}
                  </a>
                </div>
              ) : (
                image && (
                  <img
                    className={classNames(
                      "absolute max-w-none",
                      imageClassName
                    )}
                    src={image}
                  />
                )
              )}
            </div>
          )
        )}
      </div>
    </Container>
  );
};

Features.Main = MainFeature;
Features.Grid = FeatureGrid;
Features.Cards = FeatureCards;
