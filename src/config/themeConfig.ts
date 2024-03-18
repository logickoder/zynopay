export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  fontSize: string;
}

export const lightTheme: ThemeConfig = {
  primaryColor: '#0074D9',
  secondaryColor: '#FF851B',
  fontFamily: 'Arial, sans-serif',
  fontSize: '16px',
};

export const darkTheme: ThemeConfig = {
  primaryColor: '#1E90FF',
  secondaryColor: '#FF6347',
  fontFamily: 'Roboto, sans-serif',
  fontSize: '18px',
};
