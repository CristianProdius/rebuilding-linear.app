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

export const BusinessCourseFeatures = () => {
  return (
    <Features color="194,97,254" colorDark="53,42,79">
      <Features.Main
        title={
          <>
            Strategic Courses
            <br />
            That Grow Your Business
          </>
        }
        video={
          <iframe
            src="https://player.vimeo.com/video/1075478881?h=9cf359e10a"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        }
        text="From planning and production to delivery and scaling — we create premium online courses that help your business educate, convert, and grow."
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Strategic Planning & Curriculum Design",
            text: "We collaborate with you to map out your course's goals, content structure, and outcomes.",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Full Production – Shooting & Editing",
            text: "From scripting to editing, we ensure your course is visually engaging and professionally polished.",
          },
          {
            icon: WorkflowsIcon,
            title: "Hosting & Delivery",
            text: "We help you choose the best platform and create a frictionless student experience.",
          },
          {
            icon: CustomViewsIcon,
            title: "Marketing & Scaling",
            text: "We'll help you build a marketing system that actually gets results.",
          },
          {
            icon: DiscussionIcon,
            title: "Build Industry Authority",
            text: "Position your brand as a thought leader with professionally produced course content.",
          },
          {
            icon: IssuesIcon,
            title: "Increase Product Adoption",
            text: "Onboard users, reduce friction, and help them realize your product's value faster.",
          },
        ]}
      />
      <Features.Cards
        features={[
          {
            image: "/1.svg",
            imageClassName: "top-[55%] md:top-[40%] w-[200%]",
            title: "Done-For-You Solution",
            text: "Our team of strategists, writers, videographers, editors, and marketers handle every aspect of course creation.",
          },
          {
            image: "/2.svg",
            imageClassName:
              "top-[45%] left-[12px] md:top-[34%] md:left-[24px] w-[110%]",
            title: "Proven Results",
            text: "We've built over 30+ online courses, enrolling more than 112,000 students in 168 countries, across 23 different niches.",
          },
        ]}
      />
    </Features>
  );
};
