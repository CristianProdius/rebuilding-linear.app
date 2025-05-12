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

export const WhyWorkWithUs = () => {
  return (
    <Features color="0,225,244" colorDark="31,49,64">
      <Features.Main
        title={
          <>
            Why Work
            <br />
            With Us?
          </>
        }
        image="/img/map.png"
        imageSize="large"
        text="We Don't Just Teach Course Creation — We've Done It Ourselves (Over and Over Again)."
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "30+ Online Courses",
            text: "We've built and launched over 30 courses in-house.",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "112,000+ Students",
            text: "Our courses have enrolled students from around the world.",
          },
          {
            icon: WorkflowsIcon,
            title: "168 Countries",
            text: "We've reached students across the globe with our content.",
          },
          {
            icon: CustomViewsIcon,
            title: "23 Different Niches",
            text: "We have experience across diverse industries and topics.",
          },
          {
            icon: DiscussionIcon,
            title: "360+ Businesses Supported",
            text: "We've helped hundreds of creators build their own course-based products.",
          },
          {
            icon: IssuesIcon,
            title: "Full-Time Expertise",
            text: "You'll be working with people who do this full-time — not just talk about it.",
          },
        ]}
      />
      <Features.Cards
        features={[
          {
            title: "Ready to Create a Course That Grows Your Business?",
            text: "We'll help you build a strategic course that aligns with your business goals and drives real results.",
            ctaText: "Let's talk about what's possible",
            ctaLink: "/contact",
            fullWidth: true,
          },
        ]}
      />
    </Features>
  );
};
