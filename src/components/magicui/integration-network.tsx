import { cn } from "@/lib/utils";
import React from "react";

// Example node data for a horizontal neural network
const nodes = [
  { id: 0, x: 80, y: 60, r: 32, label: "G", color: "#34A853" }, // hub
  { id: 1, x: 60, y: 160, r: 24, label: "D", color: "#4285F4" },
  { id: 2, x: 160, y: 110, r: 24, label: "W", color: "#25D366" },
  { id: 3, x: 240, y: 60, r: 20, label: "M", color: "#006AFF" },
  { id: 4, x: 320, y: 110, r: 28, label: "N", color: "#000000" }, // hub
  { id: 5, x: 420, y: 60, r: 20, label: "A", color: "#a78bfa" },
  { id: 6, x: 400, y: 160, r: 16, label: "S", color: "#818cf8" },
  { id: 7, x: 320, y: 200, r: 16, label: "F", color: "#f59e42" },
  { id: 8, x: 240, y: 160, r: 18, label: "L", color: "#f472b6" },
  { id: 9, x: 160, y: 200, r: 16, label: "E", color: "#38bdf8" },
];

// Example connections (edges) between nodes
const edges = [
  [0, 1], [0, 2], [1, 2], [2, 3], [2, 8], [3, 4], [4, 5], [4, 6], [4, 7], [4, 8], [5, 6], [6, 7], [7, 8], [8, 9], [2, 9], [1, 9], [3, 8],
];

const svgWidth = 480;
const svgHeight = 220;

export default function IntegrationNetwork({ className, headline }: { className?: string; headline?: string }) {
  return (
    <div
      className={cn(
        "relative w-full h-full flex flex-col items-center justify-center",
        className,
        "min-h-[180px] md:min-h-[220px]"
      )}
    >
      {headline && (
        <h3 className="text-2xl font-extrabold mb-2 text-white leading-tight drop-shadow-lg z-20 relative text-center" style={{marginTop: 8}}>{headline}</h3>
      )}
      <svg
        className="block mx-auto"
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        fill="none"
      >
        <defs>
          {/* Animated dash gradient for power effect */}
          <linearGradient id="neural-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.25" />
          </filter>
        </defs>
        {/* Draw edges with animated dash */}
        {edges.map(([from, to], idx) => {
          const n1 = nodes[from];
          const n2 = nodes[to];
          // Use a quadratic curve for organic feel
          const mx = (n1.x + n2.x) / 2 + (n1.y - n2.y) / 6;
          const my = (n1.y + n2.y) / 2 + (n2.x - n1.x) / 8;
          // Calculate path length for dash animation
          // (approximate with straight line for simplicity)
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const approxLen = Math.sqrt(dx * dx + dy * dy);
          return (
            <path
              key={idx}
              d={`M ${n1.x} ${n1.y} Q ${mx} ${my}, ${n2.x} ${n2.y}`}
              stroke="url(#neural-gradient)"
              strokeWidth={3}
              fill="none"
              opacity="0.8"
              strokeDasharray="18 10"
            >
              <animate
                attributeName="stroke-dashoffset"
                values={`${approxLen};0;${approxLen}`}
                dur="1.6s"
                repeatCount="indefinite"
              />
            </path>
          );
        })}
        {/* Draw nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={node.color}
              stroke="#fff"
              strokeWidth={node.r > 24 ? 3 : 2}
              opacity={0.95}
              filter={node.r > 24 ? "url(#shadow)" : undefined}
            />
            <text
              x={node.x}
              y={node.y + 6}
              textAnchor="middle"
              fontSize={node.r}
              fill="#fff"
              fontWeight="bold"
              style={{ pointerEvents: "none" }}
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
} 