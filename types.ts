export interface StoryTheme {
  id: string;
  title: string;
  description: string;
  image: string;
  promptSuggestion: string;
}

export interface ArtStyle {
  id: string;
  name: string;
  image: string;
  prompt: string;
}

export interface StoryPage {
  pageNumber: number;
  text: string;
  imagePrompt: string;
  imageUrl?: string;
  imageIsGenerating?: boolean;
}

export interface Story {
  title: string;
  pages: StoryPage[];
}

export type Language = 'en' | 'ar';

export type Page = 'home' | 'create' | 'stories';

export interface GenerationProgress {
    message: string;
    percentage: number;
}

export interface LibraryStoryDefinition {
  id: string;
  image: string;
}