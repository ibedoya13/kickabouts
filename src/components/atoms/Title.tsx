import type { PropsWithChildren } from 'hono/jsx';
import { colors } from '../../lib/colors';

type TitleColor = 'fieldGreen' | 'pureWhite';

interface TitleProps extends PropsWithChildren {
  /** Color del texto */
  color?: TitleColor;
  /** Nivel de heading: h1 (default), h2, h3, h4, h5, h6 */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Subtítulo opcional apilado debajo del título */
  subtitle?: string;
  /** Clases CSS adicionales */
  className?: string;
}

export function Title({
  children,
  color = 'pureWhite',
  as: Tag = 'h1',
  subtitle,
  className,
}: TitleProps) {
  return (
    <div className={className}>
      <Tag style={{ color: colors[color], margin: 0 }}>{children}</Tag>
      {subtitle && (
        <p style={{ color: '#565f89', margin: '0.25rem 0 0', fontSize: '0.875em' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
