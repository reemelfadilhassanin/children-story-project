export type LocalizedString = {
    en: string;
    ar: string;
};

export interface StoryTheme {
  id: string;
  title: string;
  description: string;
  image: string;
  promptSuggestion: string;
}

export interface ArtStyle {
  id:string;
  name: string;
  image: string;
  prompt: string;
}

export interface StoryPage {
  pageNumber: number;
  text: LocalizedString;
  imagePrompt: string;
  imageUrl?: string;
  imageIsGenerating?: boolean;
}

export interface Story {
  title: LocalizedString;
  pages: StoryPage[];
}

export interface FullLibraryStory extends Story {
  coverImage: string;
  description: LocalizedString;
}

export type Language = 'en' | 'ar';

export type Page = 'home' | 'create' | 'stories' | 'pricing';

export interface GenerationProgress {
    message: string;
    percentage: number;
}
