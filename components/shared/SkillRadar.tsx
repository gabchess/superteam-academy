type SkillRadarProps = {
  values: {
    label: string;
    value: number;
  }[];
};

export function SkillRadar({ values }: SkillRadarProps): JSX.Element {
  const size = 260;
  const center = size / 2;
  const radius = 96;
  const safeValues = values.slice(0, 6);

  const points = safeValues.map((item, index) => {
    const angle = (Math.PI * 2 * index) / safeValues.length - Math.PI / 2;
    const distance = (Math.max(0, Math.min(100, item.value)) / 100) * radius;
    const x = center + Math.cos(angle) * distance;
    const y = center + Math.sin(angle) * distance;
    return `${x},${y}`;
  });

  return (
    <div className="space-y-3">
      <svg viewBox={`0 0 ${size} ${size}`} className="mx-auto h-64 w-64">
        <circle cx={center} cy={center} r={radius} className="fill-muted/30 stroke-border" />
        <polygon points={points.join(" ")} className="fill-primary/30 stroke-primary" strokeWidth={2} />
      </svg>
      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
        {safeValues.map((item) => (
          <p key={item.label}>
            {item.label}: {item.value}
          </p>
        ))}
      </div>
    </div>
  );
}
