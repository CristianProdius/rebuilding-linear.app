"use client";

import { Features } from "../features";
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "../icons/features";

export const BusinessCourseBenefits = () => {
  return (
    <Features color="40,87,255" colorDark="48,58,117">
      <Features.Main
        title={
          <>
            Why Create a Course
            <br />
            for Your Business?
          </>
        }
        video={
          <iframe
            src="https://player.vimeo.com/video/1075479463?h=9e455b71f2"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        }
        imageSize="large"
        text="Courses Are More Than Just Content — They're a Business Growth Tool"
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Sell High-Ticket Coaching or Consulting.",
            text: "Use a course to build trust and pre-qualify leads for premium 1-on-1 offers.",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Generate Evergreen Leads.",
            text: "Use a free or low-ticket course as part of your sales funnel to attract ideal customers.",
          },
          {
            icon: WorkflowsIcon,
            title: "Train Your Employees Internally.",
            text: "Standardize onboarding, streamline internal processes, and save time with scalable internal training.",
          },
          {
            icon: CustomViewsIcon,
            title: "Build Industry Authority.",
            text: "Position your brand as a thought leader with professionally produced, valuable course content.",
          },
          {
            icon: DiscussionIcon,
            title: "Increase Product Adoption.",
            text: "Use a course to onboard users, reduce in-app friction, and help them realize your product's value faster.",
          },
          {
            icon: IssuesIcon,
            title: "Ensure Customer Success.",
            text: "Provide self-serve learning to proactively solve issues and lighten the load on your support team.",
          },
        ]}
      />
      <Features.Cards
        features={[
          {
            image: "/3.svg",
            imageClassName: "top-[55%] md:top-[40%] w-[200%]",
            title: "Reduce Support Costs",
            text: "Cut down repetitive questions and free up your team for high-level support by educating customers at scale.",
          },
          {
            image: "/4.svg",
            imageClassName:
              "top-[45%] left-[12px] md:top-[34%] md:left-[24px] w-[110%]",
            title: "Result again?",
            text: "Our clients report 40% CTR and 26.8% Conversion Rate when using courses to upsell their products or SaaS solutions.",
          },
        ]}
      />
    </Features>
  );
};
