export interface Themes {
  id: number;
  title: string;
  description: string;
  recipe_count: number;
  duration: number;
  tips: string;
  theme_type: number;
  recipes: [];
  landscape_image: string;
  portrait_image: string;
  save_count: number;
}

export interface Recipes {
  id: number;
  video_id: string;
  title: string;
  time_taken: string;
  save_count: number;
  required_ingredients: [];
  theme: number;
  image: string;
}
