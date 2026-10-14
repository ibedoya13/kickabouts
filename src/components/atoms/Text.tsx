import type { PropsWithChildren } from 'hono/jsx';
import { colors } from '../../lib/colors';

interface TextProps extends PropsWithChildren {
  /** Tamaño de fuente: 'lg' (grande) o 'default' (estándar) */
  size?: 'lg' | 'default';
  /** Clases CSS adicionales */
  className?: string;
}

const FONT_SIZES: Record<NonNullable<TextProps['size']>, string> = {
  lg: '1.25rem',
  default: '1rem',
};

export function Text({
  children,
  size = 'default',
  className,
}: TextProps) {
  return (
    <p
      className={className}
      style={{
        color: colors.pureWhite,
        fontSize: FONT_SIZES[size],
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      {children}
    </p>
  );
}
