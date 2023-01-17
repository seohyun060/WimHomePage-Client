export type BusinessTypes = 'ai' | 'hardware' | 'webApp';

export type BusinessListItemTypes = {
  title: string;
  subtitle: string;
  description: string;
  business: BusinessTypes;
};
