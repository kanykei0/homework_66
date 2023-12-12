export interface foodProps {
  category: string;
  description: string;
  kcal: number;
}

export interface Foods {
  [id: string]: foodProps;
}
