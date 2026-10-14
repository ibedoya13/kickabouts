export const colors = {
  fieldGreen: '#10B981',
  sportBlue: '#1D4ED8',
  competitionRed: '#EF4444',
  darkBackground: '#0F172A',
  mediumGray: '#1E293B',
  pureWhite: '#FFFFFF',
  energeticYellow: '#FBBF24',
} as const;

export type ColorKey = keyof typeof colors;
