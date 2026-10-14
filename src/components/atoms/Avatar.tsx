import { useState } from 'hono/jsx';
import { colors } from '../../lib/colors';

interface AvatarProps {
  /** Emoji o texto a mostrar dentro del avatar */
  emoji?: string;
  /** Tamaño en px (default: 48) */
  size?: number;
  /** Clases CSS adicionales */
  className?: string;
}

export function Avatar({
  emoji = '👤',
  size = 48,
  className,
}: AvatarProps) {
  const [active, setActive] = useState(false);

  const borderColor = active ? colors.fieldGreen : colors.pureWhite;

  return (
    <button
      type="button"
      aria-label="avatar"
      className={className}
      onClick={() => setActive(!active)}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        border: `3px solid ${borderColor}`,
        background: '#24283b',
        fontSize: `${size * 0.5}px`,
        lineHeight: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        padding: 0,
        transition: 'border-color 0.2s ease',
      }}
    >
      {emoji}
    </button>
  );
}
