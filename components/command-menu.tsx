"use client";
import classNames from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  // We'll reuse some icons but rename them to better match marketing context
  AssignToIcon as AudienceIcon,
  BacklogIcon as OrganicIcon,
  NoPriorityIcon as AnalyticsIcon,
  ChangePriorityIcon as ChannelIcon,
  ChangeStatusIcon as FunnelIcon,
  DoneIcon as ConversionIcon,
  InProgressIcon as AutomationIcon,
  LabelIcon as ContentIcon,
  PersonIcon as LeadIcon,
  TodoIcon as EmailIcon,
  UrgentIcon as SocialIcon,
  HighIcon as RetentionIcon,
  MediumIcon as SalesIcon,
  LowIcon as EnrollmentIcon,
  AddLabels as CreativeIcon,
} from "./icons/command-bar";

// Customized marketing options instead of task management options
const marketingOptions = [
  {
    label: "Target audience...",
    icon: AudienceIcon,
    subOptions: [
      { label: "Course graduates", icon: LeadIcon },
      { label: "New leads", icon: LeadIcon },
      { label: "Cold traffic", icon: LeadIcon },
    ],
  },
  {
    label: "Marketing channel...",
    icon: ChannelIcon,
    subOptions: [
      { label: "Organic content", icon: OrganicIcon },
      { label: "Email sequences", icon: EmailIcon },
      { label: "Social media", icon: SocialIcon },
      { label: "Paid advertising", icon: ConversionIcon },
    ],
  },
  {
    label: "Funnel stage...",
    icon: FunnelIcon,
    subOptions: [
      { label: "Awareness", icon: AnalyticsIcon },
      { label: "Consideration", icon: RetentionIcon },
      { label: "Conversion", icon: SalesIcon },
      { label: "Retention", icon: EnrollmentIcon },
    ],
  },
  {
    label: "Content type...",
    icon: CreativeIcon,
    subOptions: [
      { label: "Lead magnet", icon: () => <ContentIcon type="bug" /> },
      { label: "Case study", icon: () => <ContentIcon type="feature" /> },
      { label: "Testimonial", icon: () => <ContentIcon type="improvement" /> },
      { label: "Email automation", icon: AutomationIcon },
    ],
  },
] as const;

export const CommandMenu = () => {
  const [opened, setOpened] = useState(false);
  const [selectedOption, setSetSelectedOption] = useState<number | null>(null);
  const commandMenuRef = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const toggleCommandMenu = (e: MouseEvent) => {
      if (!commandMenuRef.current) return;
      const isMenuButton =
        e.target instanceof Element &&
        e.target.classList.contains("command-menu-button");
      const clickedOutside =
        !isMenuButton && !commandMenuRef.current?.contains(e.target as Node);

      setOpened(clickedOutside ? false : true);
      if (clickedOutside) setSearchValue("");
    };

    window.addEventListener("click", toggleCommandMenu);

    return () => {
      window.removeEventListener("click", toggleCommandMenu);
    };
  }, []);

  // Auto-open the menu for demonstration purposes when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpened(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Auto-cycle through top-level options to demonstrate the menu's capabilities
  useEffect(() => {
    if (!opened) return;

    const cycleInterval = setInterval(() => {
      setSetSelectedOption((prev) => {
        if (prev === null) return 0;
        return (prev + 1) % marketingOptions.length;
      });
    }, 3000);

    return () => clearInterval(cycleInterval);
  }, [opened]);

  const currentOptions = useMemo(() => {
    const options =
      selectedOption === null
        ? marketingOptions
        : marketingOptions[selectedOption].subOptions;

    // If no search value is provided, we return all options.
    if (searchValue === "") return options;

    // If a search value is provided, we do a simple search based on that input.
    return [...options].filter((option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [selectedOption, searchValue]);

  useEffect(() => {
    if (!commandMenuRef.current) return;
    commandMenuRef.current.classList.remove("animate-bounce");
    commandMenuRef.current.clientWidth;
    commandMenuRef.current.classList.add("animate-bounce");
  }, [selectedOption]);

  return (
    <div className={classNames(opened && "opened")} ref={commandMenuRef}>
      <div
        className={classNames(
          "absolute left-[calc(50%+7.5rem)] flex w-[90vw] max-w-[64rem] -translate-x-1/2 flex-col items-start rounded-xl border border-transparent-white bg-transparent-white shadow-[rgb(0_0_0_/_35%)_0px_7px_32px] transition-[transform,opacity] md:left-1/2",
          opened && "translate-y-[12.8rem] opacity-100 md:translate-y-[2.4rem]",
          !opened && "translate-y-[12.8rem] opacity-60"
        )}
      >
        <span className="ml-4 mt-2 bg-white/[0.05] px-2 text-xs leading-10 text-white/50">
          Course Marketing Strategy
        </span>
        <input
          placeholder="Choose a marketing strategy..."
          className="w-full bg-transparent p-5 text-lg outline-none"
          value={searchValue}
          onChange={(ev) => setSearchValue(ev.target.value)}
        />
        <div className="flex w-full flex-col text-sm text-off-white">
          {currentOptions.map(({ label, icon: Icon, ...menuItem }, index) => (
            <button
              key={label}
              onClick={(ev) => {
                const clickedRootItem = "subOptions" in menuItem;
                setSetSelectedOption(clickedRootItem ? index : null);
                setSearchValue("");
                if (!clickedRootItem) {
                  setOpened(false);
                  ev.stopPropagation();
                }
              }}
              className="command-menu-button flex h-[4.6rem] w-full items-center gap-3 px-5 first:bg-white/[0.15] hover:bg-white/[0.05]"
            >
              <Icon />
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
