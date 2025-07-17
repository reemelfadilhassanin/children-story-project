import { StoryTheme, Language, ArtStyle, LibraryStoryDefinition, FullLibraryStory } from './types';

// IMPORTANT: This is the API key for Google's AI services.
// In a production application, this should be handled securely and not hardcoded.
// For this browser-only project, it's placed here for functionality.
export const GOOGLE_AI_API_KEY = process.env.GEMINI_API_KEY;

// IMPORTANT: This is the API key for Hugging Face's Inference API.
// Get your key from https://huggingface.co/settings/tokens
// For this browser-only project, it's placed here for functionality.
export const HUGGING_FACE_API_KEY = process.env.HUGGING_FACE_API_KEY; // <-- REPLACE THIS

export const ART_STYLES: ArtStyle[] = [
  {
    id: 'cartoon',
    name: 'Cartoon Style',
    image: 'https://picsum.photos/seed/cartoon/300/200',
    prompt: "charming children's book illustration, cute cartoon style, simple lines, vibrant colors, friendly style"
  },
  {
    id: 'watercolor',
    name: 'Watercolor',
    image: 'https://picsum.photos/seed/watercolor/300/200',
    prompt: "soft watercolor illustration, gentle colors, whimsical and dreamy style, for a children's book"
  },
  {
    id: 'pixel_art',
    name: 'Pixel Art',
    image: 'https://picsum.photos/seed/pixel/300/200',
    prompt: 'friendly 16-bit pixel art style, vibrant colors, clear outlines, for a children\'s game'
  },
  {
    id: 'storybook',
    name: 'Classic Storybook',
    image: 'https://picsum.photos/seed/storybook/300/200',
    prompt: 'classic storybook illustration, detailed and rich, warm lighting, timeless feel'
  },
];

export const STORY_THEME_DEFINITIONS = [
  {
    id: 'space_adventure',
    image: 'https://picsum.photos/seed/space/500/300',
  },
  {
    id: 'magic_forest',
    image: 'https://picsum.photos/seed/forest/500/300',
  },
  {
    id: 'underwater_kingdom',
    image: 'https://picsum.photos/seed/sea/500/300',
  },
  {
    id: 'dinosaur_era',
    image: 'https://picsum.photos/seed/dino/500/300',
  },
  {
    id: 'superhero_mission',
    image: 'https://picsum.photos/seed/hero/500/300',
  },
];

export const FULL_LIBRARY_STORIES: FullLibraryStory[] = [
    {
        id: 'leo_lion',
        title: 'Leo the Brave Lion',
        description: 'Join Leo as he learns that true bravery comes from being kind.',
        coverImage: 'https://picsum.photos/seed/leo/400/500',
        pages: [
            { text: "In a sunny savanna, lived a little lion named Leo. He wanted to be the bravest lion of all.", image: "https://picsum.photos/seed/leo1/800/600" },
            { text: "He tried to roar the loudest, but only a tiny squeak came out. The other animals giggled.", image: "https://picsum.photos/seed/leo2/800/600" },
            { text: "One day, a little bird fell from its nest. Leo saw it was scared and gently nudged it back.", image: "https://picsum.photos/seed/leo3/800/600" },
            { text: "His mom saw and said, 'True bravery is not a loud roar, Leo. It's a kind heart.'", image: "https://picsum.photos/seed/leo4/800/600" },
        ]
    },
    {
        id: 'stella_stars',
        title: "Stella's Starry Sleep",
        description: "A magical journey across the night sky to help a little star find its twinkle.",
        coverImage: 'https://picsum.photos/seed/stella/400/500',
        pages: [
            { text: "Stella was a little star who had lost her twinkle. She felt very dull in the big, dark sky.", image: "https://picsum.photos/seed/stella1/800/600" },
            { text: "The wise old Moon told her, 'To find your light, you must share your light.'", image: "https://picsum.photos/seed/stella2/800/600" },
            { text: "Stella saw a lost firefly. She used her last bit of dim light to guide it home.", image: "https://picsum.photos/seed/stella3/800/600" },
            { text: "Suddenly, she glowed brighter than ever before! By helping others, she found her own twinkle.", image: "https://picsum.photos/seed/stella4/800/600" },
        ]
    },
    { 
        id: 'ollie_ocean', 
        title: "Ollie's Underwater Quest", 
        description: "Dive deep with Ollie the octopus to find the ocean's most colorful treasure.", 
        coverImage: 'https://picsum.photos/seed/ollie/400/500', 
        pages: [
            { text: "Ollie the octopus loved exploring. One day, he heard tales of the Rainbow Pearl.", image: "https://picsum.photos/seed/ollie1/800/600" },
            { text: "He swam past coral castles and gardens of seaweed, asking every fish he met.", image: "https://picsum.photos/seed/ollie2/800/600" },
            { text: "A grumpy crab pointed a claw towards a dark cave. 'It's in there, if you dare!' he snapped.", image: "https://picsum.photos/seed/ollie3/800/600" },
            { text: "Inside, the pearl wasn't a gem, but a giant clam that opened to show a beautiful rainbow. The real treasure was the adventure!", image: "https://picsum.photos/seed/ollie4/800/600" },
        ] 
    },
    { 
        id: 'mia_moon', 
        title: "Mia and the Missing Moonbeam", 
        description: "Help Mia solve the mystery of the missing moonbeam before the sun rises.", 
        coverImage: 'https://picsum.photos/seed/mia/400/500', 
        pages: [
            { text: "One night, the Moon looked sad. 'One of my favorite moonbeams is missing!' he cried.", image: "https://picsum.photos/seed/mia1/800/600" },
            { text: "A little girl named Mia, who loved the night sky, decided to help.", image: "https://picsum.photos/seed/mia2/800/600" },
            { text: "She found the moonbeam tangled in a spider's web, sparkling like a diamond.", image: "https://picsum.photos/seed/mia3/800/600" },
            { text: "Mia gently freed the beam, and it zipped back to the sky. The Moon shone brighter than ever, winking at his new friend.", image: "https://picsum.photos/seed/mia4/800/600" },
        ] 
    },
    { 
        id: 'dino_dax', 
        title: "Dax the Dinosaur's Big Day", 
        description: "A heartwarming story about a little dinosaur making his very first friend.", 
        coverImage: 'https://picsum.photos/seed/dax/400/500', 
        pages: [
            { text: "Dax was a small dinosaur in a big world. He was very shy and had no friends.", image: "https://picsum.photos/seed/dax1/800/600" },
            { text: "He saw a Pterodactyl struggling to fly with a sore wing. Dax felt worried.", image: "https://picsum.photos/seed/dax2/800/600" },
            { text: "Overcoming his shyness, Dax brought the Pterodactyl a big, tasty leaf to eat.", image: "https://picsum.photos/seed/dax3/800/600" },
            { text: "'Thank you!' chirped the Pterodactyl. 'My name is Pteri. Want to be friends?' Dax had never been happier.", image: "https://picsum.photos/seed/dax4/800/600" },
        ] 
    },
    { 
        id: 'gigi_garden', 
        title: "Gigi's Magical Garden", 
        description: "Discover the secrets of a garden where the flowers can sing and dance.", 
        coverImage: 'https://picsum.photos/seed/gigi/400/500', 
        pages: [
            { text: "Gigi had a secret garden. At night, when everyone was asleep, the garden came alive!", image: "https://picsum.photos/seed/gigi1/800/600" },
            { text: "The tulips would sing in harmony, the roses would waltz gracefully, and the daisies would giggle.", image: "https://picsum.photos/seed/gigi2/800/600" },
            { text: "One night, a sad little weed sprouted. It felt plain and couldn't sing or dance.", image: "https://picsum.photos/seed/gigi3/800/600" },
            { text: "Gigi whispered to it, 'You don't have to sing or dance. Your job is to listen, and you're the best listener of all.' The little weed felt very important.", image: "https://picsum.photos/seed/gigi4/800/600" },
        ] 
    },
];

export const UI_TEXT: Record<Language, any> = {
    en: {
        title: "AI Story Weaver",
        tagline: "Turn your child into the hero of their own story.",
        start: "Start Creating",
        childName: "Child's Name",
        childNamePlaceholder: "e.g., Alex",
        uploadPhoto: "Upload a photo of the hero",
        uploadPhotoDesc: "This helps create a cartoon character that looks like them. We'll describe the photo to the AI.",
        changePhoto: "Change Photo",
        selectLanguage: "Select Story Language",
        next: "Next",
        chooseStyle: "Choose an Illustration Style",
        chooseStyleDesc: "This will define the look of your story's artwork.",
        chooseTheme: "Choose an Adventure",
        chooseThemeDesc: "Select a theme to start the story.",
        generatingTitle: "We're weaving your magical story...",
        generatingDesc: "This can take a minute or two. Please wait.",
        editorTitle: "Your Story is Ready!",
        editorDesc: "Edit the text, regenerate images, and export your masterpiece.",
        exportPdf: "Export to PDF",
        page: "Page",
        regenerateImage: "Regenerate Image",
        editStory: "Edit Story",
        startOver: "Start Over",
        error: "An error occurred",
        errorGeneratingStory: "Sorry, we couldn't generate the story. Please try again.",
        errorGeneratingImage: "Sorry, we couldn't create this image. Please try regenerating.",
        imagePrompt: "Image Prompt",
        imagePromptDesc: "This is the instruction for the AI to draw the picture. You can edit it and regenerate the image.",
        characterDetails: "Character Details",
        library: {
            title: "Explore Our Library of Stories",
            description: "Discover endless possibilities and get inspired for your next adventure.",
            readStory: "Read Story Now",
        },
        storyViewer: {
            backToLibrary: "Back to Library",
            previous: "Previous",
            next: "Next",
        },
        themes: {
            space_adventure: {
                title: 'Space Adventure',
                description: 'A thrilling journey across galaxies to discover new planets and friendly aliens.',
                promptSuggestion: 'A story about a brave astronaut exploring a colorful nebula.'
            },
            magic_forest: {
                title: 'The Magical Forest',
                description: 'An enchanting tale of talking animals, hidden paths, and ancient tree secrets.',
                promptSuggestion: 'A story about a child who befriends a wise old owl in a sparkling forest.'
            },
            underwater_kingdom: {
                title: 'Underwater Kingdom',
                description: 'Dive deep into a world of coral castles, singing mermaids, and treasure chests.',
                promptSuggestion: 'A story about discovering a hidden city of merpeople.'
            },
            dinosaur_era: {
                title: 'Journey to the Dinosaurs',
                description: 'A time-traveling adventure to walk among gentle giants and roaring T-Rexes.',
                promptSuggestion: 'A story about a young explorer who helps a lost baby dinosaur find its family.'
            },
            superhero_mission: {
                title: 'Superhero Mission',
                description: 'A brave hero with amazing powers saves the city from a silly, playful villain.',
                promptSuggestion: 'A story about a superhero who can talk to animals and saves a local festival.'
            },
        }
    },
    ar: {
        title: "ناسج القصص بالذكاء الاصطناعي",
        tagline: "حوّل طفلك إلى بطل قصته الخاصة.",
        start: "ابدأ الإبداع",
        childName: "اسم الطفل",
        childNamePlaceholder: "مثال: أليكس",
        uploadPhoto: "ارفع صورة البطل",
        uploadPhotoDesc: "تساعد هذه الصورة في إنشاء شخصية كرتونية تشبه طفلك. سنقوم بوصف الصورة للذكاء الاصطناعي.",
        changePhoto: "تغيير الصورة",
        selectLanguage: "اختر لغة القصة",
        next: "التالي",
        chooseStyle: "اختر أسلوب الرسوم",
        chooseStyleDesc: "سيحدد هذا مظهر الرسوم الفنية في قصتك.",
        chooseTheme: "اختر مغامرة",
        chooseThemeDesc: "اختر موضوعًا لبدء القصة.",
        generatingTitle: "نحن ننسج قصتك السحرية...",
        generatingDesc: "قد يستغرق هذا دقيقة أو دقيقتين. من فضلك انتظر.",
        editorTitle: "قصتك جاهزة!",
        editorDesc: "عدّل النص، وأعِد إنشاء الصور، وصدّر تحفتك الفنية.",
        exportPdf: "تصدير كـ PDF",
        page: "صفحة",
        regenerateImage: "إعادة إنشاء الصورة",
        editStory: "تعديل القصة",
        startOver: "البدء من جديد",
        error: "حدث خطأ",
        errorGeneratingStory: "عذراً، لم نتمكن من إنشاء القصة. يرجى التحقق من مدخلاتك والمحاولة مرة أخرى.",
        errorGeneratingImage: "عذراً، لم نتمكن من إنشاء هذه الصورة. يرجى محاولة إعادة الإنشاء.",
        imagePrompt: "موجه الصورة",
        imagePromptDesc: "هذه هي التعليمات للذكاء الاصطناعي لرسم الصورة. يمكنك تعديلها وإعادة إنشاء الصورة.",
        characterDetails: "تفاصيل الشخصية",
        library: {
            title: "استكشف مكتبة قصصنا",
            description: "اكتشف إمكانيات لا حصر لها واحصل على إلهام لمغامرتك التالية.",
            readStory: "اقرأ القصة الآن",
        },
        storyViewer: {
            backToLibrary: "العودة إلى المكتبة",
            previous: "السابق",
            next: "التالي",
        },
        themes: {
             space_adventure: {
                title: 'مغامرة في الفضاء',
                description: 'رحلة مثيرة عبر المجرات لاكتشاف كواكب جديدة وكائنات فضائية ودودة.',
                promptSuggestion: 'قصة عن رائد فضاء شجاع يستكشف سديمًا ملونًا.'
            },
            magic_forest: {
                title: 'الغابة السحرية',
                description: 'حكاية ساحرة عن حيوانات ناطقة ومسارات خفية وأسرار الأشجار القديمة.',
                promptSuggestion: 'قصة عن طفل يصادق بومة حكيمة في غابة متلألئة.'
            },
            underwater_kingdom: {
                title: 'مملكة تحت الماء',
                description: 'الغوص في أعماق عالم من قلاع المرجان وحوريات البحر المغنية وصناديق الكنوز.',
                promptSuggestion: 'قصة عن اكتشاف مدينة خفية من الحوريات.'
            },
            dinosaur_era: {
                title: 'رحلة إلى عصر الديناصورات',
                description: 'مغامرة عبر الزمن للمشي بين العمالقة اللطيفة وديناصورات تي-ريكس الصاخبة.',
                promptSuggestion: 'قصة عن مستكشف صغير يساعد ديناصورًا صغيرًا تائهًا في العثور على عائلته.'
            },
            superhero_mission: {
                title: 'مهمة البطل الخارق',
                description: 'بطل شجاع يتمتع بقوى مذهلة ينقذ المدينة من وغد سخيف ومرح.',
                promptSuggestion: 'قصة عن بطل خارق يمكنه التحدث إلى الحيوانات وينقذ مهرجانًا محليًا.'
            },
        }
    }
}
