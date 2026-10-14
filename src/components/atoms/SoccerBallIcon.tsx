interface SoccerBallIconProps {
  size?: number;
  className?: string;
}

export function SoccerBallIcon({ size = 24, className }: SoccerBallIconProps) {
  return (
    <span
      role="img"
      aria-label="pelota de fútbol"
      className={className}
      style={{ fontSize: `${size}px`, lineHeight: 1 }}
    >
      ⚽
    </span>
  );
}
