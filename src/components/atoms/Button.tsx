import type { PropsWithChildren } from 'hono/jsx';
import { colors } from '../../lib/colors';

interface ButtonProps extends PropsWithChildren {
  /** Clases CSS adicionales */
  className?: string;
}

export function Button({ children, className }: ButtonProps) {
  return (
    <button
      type="button"
      className={className}
      style={{
        background: colors.fieldGreen,
        color: colors.pureWhite,
        borderRadius: '8px',
        border: 'none',
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        fontWeight: 600,
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        transition: 'opacity 0.2s ease',
      }}
    >
      <span role="img" aria-label="counterclockwise arrows">
        🔄
      </span>
      {children}
    </button>
  );
}
