import type { PropsWithChildren } from 'hono/jsx';
import { colors } from '../../lib/colors';

type ActiveBorder = 'sportBlue' | 'competitionRed';

interface ContainerProps extends PropsWithChildren {
  /** Color del borde cuando está activo */
  activeBorder?: ActiveBorder;
  /** Estado activo del borde */
  active?: boolean;
  /** Clases CSS adicionales */
  className?: string;
}

export function Container({
  children,
  activeBorder = 'sportBlue',
  active = false,
  className,
}: ContainerProps) {
  const borderColor = active ? colors[activeBorder] : 'transparent';

  return (
    <div
      className={className}
      style={{
        background: colors.darkBackground,
        borderRadius: '8px',
        border: `2px solid ${borderColor}`,
        padding: '1rem',
      }}
    >
      {children}
    </div>
  );
}
