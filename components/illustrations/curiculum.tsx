// Replace keyboard-related content with curriculum planning steps
export const planningSteps = [
  { text: "Define Learning Goals", keys: "1" },
  { text: "Map Content Structure", keys: "2" },
  { text: "Design Learning Path", keys: "3" },
  { text: "Plan Assessments", keys: "4" },
  { text: "Align with Business Model", keys: "5" },
  { text: "Create Engagement Strategy", keys: "6" },
  { text: "Set Success Metrics", keys: "7" },
  { text: "Develop Delivery Timeline", keys: "8" },
];

export const CurriculumPlanIllustration = () => {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full">
      {/* Background circle */}
      <circle
        cx="400"
        cy="250"
        r="200"
        fill="#1a1a1a"
        stroke="#333"
        strokeWidth="2"
      />

      {/* Center circle */}
      <circle
        cx="400"
        cy="250"
        r="60"
        fill="#2a2a2a"
        stroke="#555"
        strokeWidth="2"
        className="planning-center"
      />
      <text
        x="400"
        y="250"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#fff"
        fontSize="18"
        fontWeight="bold"
      >
        Course
      </text>
      <text
        x="400"
        y="275"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#fff"
        fontSize="14"
      >
        Strategy
      </text>

      {/* Spokes and outer nodes */}
      {planningSteps.map((step, i) => {
        const angle = i * (360 / planningSteps.length) * (Math.PI / 180);
        const innerX = 400 + 60 * Math.cos(angle);
        const innerY = 250 + 60 * Math.sin(angle);
        const outerX = 400 + 180 * Math.cos(angle);
        const outerY = 250 + 180 * Math.sin(angle);

        return (
          <g key={i} className="planning-step" data-step={step.keys}>
            {/* Line connecting center to node */}
            <line
              x1={innerX}
              y1={innerY}
              x2={outerX}
              y2={outerY}
              stroke="#444"
              strokeWidth="2"
            />

            {/* Node circle */}
            <circle
              cx={outerX}
              cy={outerY}
              r="40"
              fill="#2a2a2a"
              stroke="#555"
              strokeWidth="2"
              className="step-node"
              data-key={step.keys}
            />

            {/* Step number */}
            <circle
              cx={outerX}
              cy={outerY - 20}
              r="15"
              fill="#333"
              stroke="#666"
              strokeWidth="1"
            />
            <text
              x={outerX}
              y={outerY - 20}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#fff"
              fontSize="14"
              fontWeight="bold"
            >
              {step.keys}
            </text>

            {/* Step text */}
            <text
              x={outerX}
              y={outerY + 5}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#fff"
              fontSize="10"
              fontWeight="bold"
            >
              {step.text.split(" ")[0]}
            </text>
            <text
              x={outerX}
              y={outerY + 20}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#fff"
              fontSize="10"
            >
              {step.text.split(" ").slice(1).join(" ")}
            </text>
          </g>
        );
      })}

      {/* Add a glow effect to active elements with CSS */}
      <style>
        {`
            .planning-step .step-node.active {
              fill: #3a3a3a;
              stroke: #4a90e2;
              stroke-width: 3px;
              filter: drop-shadow(0 0 8px rgba(74, 144, 226, 0.6));
            }
            .planning-center.active {
              fill: #3a3a3a;
              stroke: #4a90e2;
              stroke-width: 3px;
              filter: drop-shadow(0 0 8px rgba(74, 144, 226, 0.6));
            }
          `}
      </style>
    </svg>
  );
};
