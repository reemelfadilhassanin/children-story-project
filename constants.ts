
import { FullLibraryStory, Language, ArtStyle } from './types';

// The Google AI API Key has been moved to the backend server for security.
// The frontend will now make requests to the local server, which will then
// securely use the API key to communicate with Google's services.

export const ART_STYLES: ArtStyle[] = [
  {
    id: 'cartoon',
    name: 'Cartoon Style',
    image: 'https://img.freepik.com/free-vector/cute-dino-riding-skateboard-cartoon-vector-icon-illustration-animal-sport-icon-concept-isolated_138676-4993.jpg?w=826',
    prompt: "charming children's book illustration, cute cartoon style, simple lines, vibrant colors, friendly style"
  },
  {
    id: 'watercolor',
    name: 'Watercolor',
    image: 'https://img.freepik.com/free-vector/cute-animal-drive-car-watercolor-cartoon-illustration_603843-1627.jpg?w=996',
    prompt: "soft watercolor illustration, gentle colors, whimsical and dreamy style, for a children's book"
  },
  {
    id: 'pixel_art',
    name: 'Pixel Art',
    image: 'https://img.freepik.com/free-vector/pixel-art-fantasy-castle-background_52683-98334.jpg?w=1380',
    prompt: 'friendly 16-bit pixel art style, vibrant colors, clear outlines, for a children\'s game'
  },
  {
    id: '3d_render',
    name: '3D Render',
    image: 'https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151134233.jpg?w=996',
    prompt: "Pixar movie style 3D render, vibrant and friendly, cinematic lighting, highly detailed, for a children's movie"
  },
  {
    id: 'storybook',
    name: 'Classic Storybook',
    image: 'https://img.freepik.com/free-vector/fantasy-creatures-magic-forest_107791-10028.jpg?w=1380',
    prompt: 'classic storybook illustration, detailed and rich, warm lighting, timeless feel'
  },
];

export const STORY_THEME_DEFINITIONS = [
  {
    id: 'space_adventure',
    image: 'https://img.freepik.com/free-vector/cute-astronaut-meditating-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated_138676-5272.jpg?w=826',
  },
  {
    id: 'magic_forest',
    image: 'https://img.freepik.com/free-vector/mysterious-forest-background_23-2148154146.jpg?w=1380',
  },
  {
    id: 'underwater_kingdom',
    image: 'https://img.freepik.com/free-vector/cute-mermaid-holding-pearl-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-5014.jpg?w=826',
  },
  {
    id: 'dinosaur_era',
    image: 'https://img.freepik.com/free-vector/cute-dinosaur-with-egg-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium_138676-4798.jpg?w=826',
  },
  {
    id: 'superhero_mission',
    image: 'https://img.freepik.com/free-vector/superhero-flying-cartoon-character_1308-118854.jpg?w=826',
  },
];

export const FULL_LIBRARY_STORIES: FullLibraryStory[] = [
  {
    title: {
      en: 'The Bear Who Lost His Roar',
      ar: 'الدب الذي فقد زئيره'
    },
    category: 'adventure',
    coverImage: 'https://img.freepik.com/free-vector/cute-bear-waving-hand-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium_138676-4712.jpg?w=826',
    description: {
        en: 'A little bear goes on a big adventure to find his missing roar.',
        ar: 'يذهب دب صغير في مغامرة كبيرة للعثور على زئيره المفقود.'
    },
    pages: [
      {
        pageNumber: 1,
        text: {
            en: "Barnaby the bear woke up, stretched, and opened his mouth for a big morning roar... but only a tiny squeak came out!",
            ar: "استيقظ الدب بارنابي، وتمدد، وفتح فمه لزئير صباحي كبير... لكن لم يخرج سوى صرير صغير!"
        },
        imageUrl: 'https://img.freepik.com/free-vector/cute-bear-sitting-wood-log-cartoon-vector-icon-illustration-animal-nature-icon-concept_138676-5412.jpg?w=826',
        imagePrompt: 'A cute, worried-looking cartoon bear sitting on a log in a sunny forest, covering his mouth with his paws. charming children\'s book illustration.'
      },
      {
        pageNumber: 2,
        text: {
            en: "He asked a wise old owl for help. 'Perhaps you lent your roar to the wind,' hooted the owl. 'Go ask it!'.",
            ar: "طلب المساعدة من بومة عجوز حكيمة. صاحت البومة: 'ربما أعرت زئيرك للريح. اذهب واسألها!'."
        },
        imageUrl: 'https://img.freepik.com/free-vector/cute-bear-with-owl-tree-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-5390.jpg?w=826',
        imagePrompt: 'A small cartoon bear looking up at a wise old owl perched on a branch. The owl is pointing a wing towards the blowing leaves. charming children\'s book illustration.'
      },
      {
        pageNumber: 3,
        text: {
            en: "Barnaby chased the wind through the forest, laughing so hard that his big ROAR suddenly returned! He hadn't lost it after all.",
            ar: "طارد بارنابي الريح عبر الغابة، وضحك بشدة لدرجة أن زئيره الكبير عاد فجأة! لم يكن قد فقده على الإطلاق."
        },
        imageUrl: 'https://img.freepik.com/free-vector/cute-bear-running-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector_138676-5599.jpg?w=826',
        imagePrompt: 'A happy cartoon bear running through a forest with leaves swirling around him, his mouth open in a joyful roar. charming children\'s book illustration.'
      }
    ]
  },
  {
    title: {
      en: 'The Magical Treehouse',
      ar: 'بيت الشجرة السحري'
    },
    category: 'fantasy',
    coverImage: 'https://img.freepik.com/free-vector/tree-house-kids-playground_1308-111306.jpg?w=1060',
    description: {
        en: 'Two friends discover a treehouse that can travel to anywhere they imagine.',
        ar: 'يكتشف صديقان بيت شجرة يمكنه السفر إلى أي مكان يتخيلانه.'
    },
    pages: [
        {
            pageNumber: 1,
            text: {
                en: "Lily and Tom found a rickety old treehouse. Inside, there was a dusty ship's wheel. 'Where should we go?' Lily whispered.",
                ar: "وجدت ليلى وتوم بيت شجرة قديمًا ومتهالكًا. في الداخل، كانت هناك عجلة قيادة سفينة مغبرة. همست ليلى: 'إلى أين يجب أن نذهب؟'."
            },
            imageUrl: 'https://img.freepik.com/free-vector/children-playing-tree-house_1308-113947.jpg?w=1060',
            imagePrompt: 'Two kids, a boy and a girl, inside a cozy wooden treehouse, looking with wonder at an old ship\'s wheel. Classic storybook style.'
        },
        {
            pageNumber: 2,
            text: {
                en: "'To the land of dinosaurs!' Tom shouted, spinning the wheel. The treehouse creaked, groaned, and then lifted into the air!",
                ar: "صاح توم: 'إلى أرض الديناصورات!'، وهو يدير العجلة. صر بيت الشجرة، وتأوه، ثم ارتفع في الهواء!"
            },
            imageUrl: 'https://img.freepik.com/free-vector/cute-boy-girl-with-dinosaur-tree-house_1308-112349.jpg?w=1060',
            imagePrompt: 'A magical treehouse floating in the sky above a prehistoric landscape with friendly dinosaurs below. Classic storybook style.'
        },
        {
            pageNumber: 3,
            text: {
                en: "They shared their sandwiches with a friendly Brachiosaurus before flying home. It was the best adventure ever.",
                ar: "تقاسموا شطائرهم مع ديناصور براكيوصور ودود قبل أن يعودوا إلى المنزل. لقد كانت أفضل مغامرة على الإطلاق."
            },
            imageUrl: 'https://img.freepik.com/free-vector/cute-girl-feeding-brachiosaurus-cartoon-vector-icon-illustration-people-animal-icon-concept_138676-5388.jpg?w=826',
            imagePrompt: 'Two children having a picnic on a branch next to their treehouse, feeding a large, gentle Brachiosaurus. Classic storybook style.'
        }
    ]
  },
  {
    title: {
      en: 'The Little Knight\'s BIG Picnic',
      ar: 'نزهة الفارس الصغير الكبيرة'
    },
    category: 'adventure',
    coverImage: 'https://img.freepik.com/free-vector/cute-knight-riding-horse-cartoon-vector-icon-illustration-people-animal-icon-concept-isolated_138676-5396.jpg?w=826',
    description: {
        en: 'A very small knight embarks on a very big quest... to have a picnic.',
        ar: 'فارس صغير جدًا ينطلق في مهمة كبيرة جدًا... للقيام بنزهة.'
    },
    pages: [
        {
            pageNumber: 1,
            text: {
                en: "Sir Reginald was a brave knight, though he was only as tall as a teacup. Today, he had a mighty quest: to carry a giant strawberry to the perfect picnic spot.",
                ar: "كان السير ريجنالد فارسًا شجاعًا، على الرغم من أن طوله لم يتجاوز فنجان الشاي. اليوم، كان لديه مهمة عظيمة: حمل حبة فراولة عملاقة إلى مكان النزهة المثالي."
            },
            imageUrl: 'https://img.freepik.com/free-vector/cute-knight-with-sword-shield-cartoon-vector-icon-illustration-people-holiday-icon-concept-isolated_138676-5401.jpg?w=826',
            imagePrompt: "A tiny knight in full armor struggling to lift a huge, juicy strawberry. soft watercolor illustration."
        },
        {
            pageNumber: 2,
            text: {
                en: "He had to cross the 'Rushing River' (a small puddle) and climb 'Mount Fuzzy' (a mossy rock). He was very brave!",
                ar: "كان عليه عبور 'النهر المتدفق' (بركة صغيرة) وتسلق 'جبل فازي' (صخرة طحلبية). لقد كان شجاعًا جدًا!"
            },
            imageUrl: 'https://img.freepik.com/free-vector/cute-knight-jumping-cartoon-vector-icon-illustration-people-sport-icon-concept-isolated-premium-vector_138676-5601.jpg?w=826',
            imagePrompt: "A tiny knight heroically leaping over a small puddle, holding a giant strawberry over his head. soft watercolor illustration."
        },
        {
            pageNumber: 3,
            text: {
                en: "Finally, he reached the top. He sat down and enjoyed his delicious strawberry, the bravest picnic-knight in the whole garden.",
                ar: "أخيرًا، وصل إلى القمة. جلس واستمتع بفراولته اللذيذة، أشجع فارس نزهة في الحديقة بأكملها."
            },
            imageUrl: 'https://img.freepik.com/free-vector/cute-knight-sitting-shield-cartoon-vector-icon-illustration-people-holiday-icon-concept-isolated_138676-5247.jpg?w=826',
            imagePrompt: "A tiny knight sitting triumphantly on a mossy rock, taking a large bite out of a giant strawberry. soft watercolor illustration."
        }
    ]
  },
  {
    title: {
      en: 'The Star Who Couldn\'t Twinkle',
      ar: 'النجمة التي لم تستطع أن تلمع'
    },
    category: 'bedtime',
    coverImage: 'https://img.freepik.com/free-vector/cute-star-sad-cartoon-vector-icon-illustration-space-nature-icon-concept-isolated-premium-vector_138676-4847.jpg?w=826',
    description: {
        en: 'A little star learns that everyone shines in their own special way.',
        ar: 'نجمة صغيرة تتعلم أن كل شخص يلمع بطريقته الخاصة والمميزة.'
    },
    pages: [
        {
            pageNumber: 1,
            text: {
                en: "Stella the star was sad. All the other stars twinkled and sparkled, but she just gave a steady, gentle glow.",
                ar: "كانت النجمة ستيلا حزينة. كل النجوم الأخرى تومض وتتلألأ، لكنها كانت تعطي توهجًا ثابتًا ولطيفًا فقط."
            },
            imageUrl: 'https://img.freepik.com/free-vector/cute-star-sleeping-cloud-cartoon-vector-icon-illustration_138676-2365.jpg?w=826',
            imagePrompt: "A cute, sad-looking star sitting on a cloud, looking at other twinkling stars in the night sky. Pixar movie style 3D render."
        },
        {
            pageNumber: 2,
            text: {
                en: "She talked to the Moon, who smiled kindly. 'Your steady light is a beacon,' he said. 'Lost fireflies use you to find their way home.'",
                ar: "تحدثت إلى القمر، الذي ابتسم بلطف. قال: 'نورك الثابت هو منارة. تستخدمه اليراعات المفقودة لتجد طريقها إلى المنزل'."
            },
            imageUrl: 'https://img.freepik.com/free-photo/glowing-insects-illuminate-night-sky-enchanting-forest-scene-generated-by-ai_188544-39832.jpg?w=1380',
            imagePrompt: "A friendly, smiling crescent moon talking to a small star. Below them, a swarm of fireflies glows brightly. Pixar movie style 3D render."
        },
        {
            pageNumber: 3,
            text: {
                en: "Stella realized her glow was special after all. From then on, she shone her light as brightly as she could, a proud little lighthouse in the night sky.",
                ar: "أدركت ستيلا أن توهجها كان مميزًا في النهاية. منذ ذلك الحين، أشرقت بنورها بأقصى ما تستطيع، منارة صغيرة فخورة في سماء الليل."
            },
            imageUrl: 'https://img.freepik.com/free-vector/set-cute-star-mascot-cartoon-character_138676-2364.jpg?w=826',
            imagePrompt: "A happy, glowing star shining brightly in the center of the night sky, looking proud and confident. Pixar movie style 3D render."
        }
    ]
  },
  {
    title: {
      en: 'The Mystery of the Missing Colors',
      ar: 'لغز الألوان المفقودة'
    },
    category: 'fantasy',
    coverImage: 'https://img.freepik.com/free-vector/hand-drawn-detective-illustration_23-2149503460.jpg?w=826',
    description: {
        en: 'A young detective and her paintbrush must solve the mystery of a world that is losing its color.',
        ar: 'يجب على محققة شابة وفرشاة رسمها حل لغز عالم يفقد ألوانه.'
    },
    pages: [
        {
            pageNumber: 1,
            text: {
                en: "One morning, Detective Daisy woke up to find the world in shades of gray. The red of her favorite ball was gone! The blue of the sky was missing!",
                ar: "في صباح أحد الأيام، استيقظت المحققة ديزي لتجد العالم بدرجات اللون الرمادي. اختفى اللون الأحمر من كرتها المفضلة! واختفى اللون الأزرق من السماء!"
            },
            imageUrl: 'https://img.freepik.com/free-vector/detective-character-concept_23-2148497380.jpg?w=826',
            imagePrompt: "A young girl with a magnifying glass looking at a gray, colorless world with a shocked expression. friendly 16-bit pixel art style."
        },
        {
            pageNumber: 2,
            text: {
                en: "She discovered a mischievous gremlin who was gobbling up all the colors. 'I was hungry for brightness!' he mumbled.",
                ar: "اكتشفت عفريتًا مؤذيًا يلتهم كل الألوان. تمتم قائلاً: 'كنت جائعًا للسطوع!'."
            },
            imageUrl: 'https://img.freepik.com/free-vector/pixel-art-monster-character-game-8-bit-style_148087-750.jpg?w=826',
            imagePrompt: "A small, gray gremlin looking guilty, with a trail of fading colors leading to him. friendly 16-bit pixel art style."
        },
        {
            pageNumber: 3,
            text: {
                en: "Daisy shared her magical paint set with the gremlin. Together, they repainted the world, making it more vibrant than ever before.",
                ar: "شاركت ديزي مجموعة ألوانها السحرية مع العفريت. معًا، أعادا طلاء العالم، وجعلاه أكثر حيوية من أي وقت مضى."
            },
            imageUrl: 'https://img.freepik.com/free-vector/colorful-pixel-background_1057-2384.jpg?w=740',
            imagePrompt: "A girl and a small gremlin happily painting a vibrant rainbow across a pixelated landscape. friendly 16-bit pixel art style."
        }
    ]
  }
];

export const UI_TEXT: { [key in Language]: any } = {
  en: {
    nav: {
      home: 'Home',
      ourStories: 'Our Stories',
      pricing: 'Pricing',
      createStory: 'Create Story',
    },
    home: {
      heroTitle: "See Your Child as a Storybook",
      heroTitleHighlight: "Hero",
      heroSubtitle: "Upload a photo, and our AI will cast your child in their very own personalized, illustrated adventure. A magical gift that lasts a lifetime.",
      howItWorksTitle: "How It Works in 3 Easy Steps",
      steps: [
        {
          title: "Upload a Photo",
          description: "Provide a picture of your child. Our AI analyzes it to create a cartoon character that looks just like them for the story's illustrations."
        },
        {
          title: "Choose Your Adventure",
          description: "Select from exciting themes like space, magic forests, or superhero missions, or create your own custom story idea."
        },
        {
          title: "Create & Perfect Your Book",
          description: "Watch as our AI writes and illustrates a unique story. You have full control to edit the text and regenerate any image."
        }
      ],
      featuresTitle: "Everything You Need to Create Magic",
      features: [
        {
          title: "Truly Personalized Hero",
          description: "Our AI crafts illustrations featuring a hero that looks like your child, based on the photo you provide."
        },
        {
          title: "Complete Creative Control",
          description: "You are the author. Edit every word of the story and fine-tune image prompts to create the perfect tale."
        },
        {
          title: "Print-Ready Keepsakes",
          description: "Download your finished story as a high-quality PDF, ready to be printed and cherished for years to come."
        }
      ],
      testimonialsTitle: "Loved by Parents & Kids Alike",
      testimonials: [
        {
          quote: "My daughter's face lit up when she saw herself as the main character. This is the most special gift I've ever given her.",
          author: "Sarah J.",
          role: "Parent"
        },
        {
          quote: "The process was so simple and fun. We had a finished, beautiful story in less than 15 minutes. The illustrations are just gorgeous.",
          author: "Michael B.",
          role: "Parent"
        },
        {
          quote: "As a teacher, I love how this sparks creativity. The ability to edit the story makes it a fantastic tool for encouraging reading and writing.",
          author: "Emily R.",
          role: "Educator"
        }
      ],
      ctaTitle: "Ready to Create Your Own Adventure?",
      ctaSubtitle: "Start crafting a unique and personal story that your child will cherish forever."
    },
    title: "Let's Create a Magical Story!",
    tagline: "Personalize your hero and let the adventure begin.",
    selectLanguage: "Select Story Language",
    childName: "Child's Name",
    childNamePlaceholder: "e.g., Lily or Adam",
    uploadPhoto: "Upload a Photo of the Hero",
    uploadPhotoDesc: "This helps the AI create illustrations that look like your child.",
    changePhoto: "Change Photo",
    start: "Start Creating",
    chooseTheme: "Choose a Theme",
    chooseThemeDesc: "Every great story starts with an idea. Pick one below or create your own!",
    themes: {
        space_adventure: {
            title: 'Space Adventure',
            description: 'Explore galaxies, meet friendly aliens, and pilot your own rocket ship.',
            promptSuggestion: 'A child discovers a mysterious map that leads to a hidden planet full of wonders.',
        },
        magic_forest: {
            title: 'Magic Forest',
            description: 'Journey through an enchanted forest with talking animals and sparkling secrets.',
            promptSuggestion: 'A child finds a glowing key that unlocks a hidden door in an ancient tree.',
        },
        underwater_kingdom: {
            title: 'Underwater Kingdom',
            description: 'Dive deep to discover a world of mermaids, colorful coral, and friendly sea creatures.',
            promptSuggestion: 'A child helps a lost baby dolphin find its way back to its family in a hidden city under the sea.',
        },
        dinosaur_era: {
            title: 'Dinosaur Era',
            description: 'Travel back in time to walk with gentle giants and have a prehistoric adventure.',
            promptSuggestion: 'A child finds a friendly baby T-Rex and helps it find food and play games.',
        },
        superhero_mission: {
            title: 'Superhero Mission',
            description: 'Put on your cape, discover your powers, and save the day in a bustling city.',
            promptSuggestion: 'A child suddenly develops the power to talk to animals and must use it to stop a villain from ruining the city park.',
        },
    },
    customTheme: {
        title: 'Or Create Your Own Adventure',
        description: 'Have a specific idea? Tell our AI what you want the story to be about!',
        storyTitleLabel: 'Story Title',
        storyTitlePlaceholder: 'e.g., The Mystery of the Missing Toy',
        promptLabel: 'What should the story be about?',
        promptPlaceholder: 'e.g., A brave knight who is afraid of the dark, but has to rescue a friendly dragon from a castle.',
        buttonText: 'Create Custom Story'
    },
    chooseStyle: "Choose an Art Style",
    chooseStyleDesc: "Select the illustration style for your storybook.",
    generatingTitle: "Your Story is Brewing...",
    generatingDesc: "Our AI is busy writing and illustrating your personalized tale. Please wait a moment!",
    errorGeneratingStory: "Sorry, the AI had trouble creating the story. Please try a different theme or prompt.",
    editorTitle: "Your Story is Ready!",
    editorDesc: "Review your story below. You can edit the text or regenerate any image.",
    exportPdf: "Export as PDF",
    previewAsBook: "Preview as Book",
    startOver: "Start Over",
    characterDetails: "Character Details",
    editStory: "Edit Text",
    imagePrompt: "Image Prompt",
    imagePromptDesc: "This prompt guides the AI for image generation. Edit it for different results.",
    regenerateImage: "Regenerate Image",
    page: "Page",
    error: "Error",
    errorGeneratingImage: "Could not generate image. Please try again.",
    storyViewer: {
        backToLibrary: "Back to Library",
        theEnd: "The End",
        enjoyedStory: "We hope you enjoyed '{title}'!",
        pageIndicator: "Page {current} of {total}",
        previous: "Previous",
        next: "Next",
    },
    pricing: {
        title: "Choose Your Plan",
        description: "Unlock the full power of StorySpark AI and create unlimited magical stories.",
        monthly: "Monthly",
        yearly: "Yearly",
        saveOffer: "Save 20%",
        faqTitle: "Frequently Asked Questions",
        plans: [
            {
                name: "Sprout",
                priceMonthly: "$0",
                priceYearly: "$0",
                description: "Perfect for trying things out.",
                buttonText: "Start for Free",
                features: ["Create 1 story per month", "Standard art styles", "PDF export", "Community support"]
            },
            {
                name: "Dreamer",
                priceMonthly: "$9.99",
                priceYearly: "$95.99",
                description: "For families who love to read and create.",
                buttonText: "Get Started",
                features: ["Unlimited stories", "All art styles", "High-resolution PDF export", "Edit image prompts", "Priority support"]
            },
            {
                name: "Magician",
                priceMonthly: "$19.99",
                priceYearly: "$191.99",
                description: "For educators and power creators.",
                buttonText: "Contact Us",
                features: ["Everything in Dreamer", "Commercial usage rights", "Bulk story creation", "Dedicated account manager"]
            }
        ],
        faqs: [
            {
                question: "Can I cancel my subscription anytime?",
                answer: "Yes, you can cancel your subscription at any time from your account settings. You will retain access to your plan's features until the end of the current billing cycle."
            },
            {
                question: "What happens if I use my free story for the month?",
                answer: "On the Sprout plan, you can create one complete story per calendar month. If you'd like to create more, you can upgrade to our Dreamer plan for unlimited creations."
            },
            {
                question: "Are the stories truly unique?",
                answer: "Absolutely! Every story is generated by our AI based on your unique inputs, including your child's name, character description, and chosen theme. No two stories are exactly alike."
            }
        ]
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      ourStories: 'قصصنا',
      pricing: 'الأسعار',
      createStory: 'أنشئ قصة',
    },
    home: {
      heroTitle: "شاهد طفلك كبطل",
      heroTitleHighlight: "في كتاب قصص",
      heroSubtitle: "ارفع صورة، وسيقوم الذكاء الاصطناعي لدينا بوضع طفلك في مغامرته الخاصة والمصورة. هدية سحرية تدوم مدى الحياة.",
      howItWorksTitle: "كيف يعمل في 3 خطوات سهلة",
      steps: [
        {
          title: "ارفع صورة",
          description: "قدم صورة لطفلك. يقوم الذكاء الاصطناعي لدينا بتحليلها لإنشاء شخصية كرتونية تشبهه تمامًا لرسوم القصة."
        },
        {
          title: "اختر مغامرتك",
          description: "اختر من بين مواضيع مثيرة مثل الفضاء، أو الغابات السحرية، أو مهمات الأبطال الخارقين، أو أنشئ فكرة قصتك المخصصة."
        },
        {
          title: "أنشئ وأتقن كتابك",
          description: "شاهد كيف يكتب الذكاء الاصطناعي ويرسم قصة فريدة. لديك السيطرة الكاملة لتعديل النص وإعادة إنشاء أي صورة."
        }
      ],
      featuresTitle: "كل ما تحتاجه لصنع السحر",
      features: [
        {
          title: "بطل مخصص حقًا",
          description: "يصنع الذكاء الاصطناعي لدينا رسومًا توضيحية تتميز ببطل يشبه طفلك، بناءً على الصورة التي تقدمها."
        },
        {
          title: "سيطرة إبداعية كاملة",
          description: "أنت المؤلف. قم بتحرير كل كلمة في القصة وضبط موجهات الصور لإنشاء الحكاية المثالية."
        },
        {
          title: "تذكارات جاهزة للطباعة",
          description: "قم بتنزيل قصتك النهائية كملف PDF عالي الجودة، جاهز للطباعة والاعتزاز به لسنوات قادمة."
        }
      ],
      testimonialsTitle: "أحبها الآباء والأطفال على حد سواء",
      testimonials: [
        {
          quote: "أضاء وجه ابنتي عندما رأت نفسها الشخصية الرئيسية. هذه أروع هدية قدمتها لها على الإطلاق.",
          author: "سارة ج.",
          role: "ولية أمر"
        },
        {
          quote: "كانت العملية بسيطة وممتعة للغاية. حصلنا على قصة منتهية وجميلة في أقل من 15 دقيقة. الرسوم التوضيحية رائعة بكل معنى الكلمة.",
          author: "مايكل ب.",
          role: "ولي أمر"
        },
        {
          quote: "كمعلمة، أحب كيف يثير هذا الإبداع. القدرة على تحرير القصة تجعلها أداة رائعة لتشجيع القراءة والكتابة.",
          author: "إميلي ر.",
          role: "معلمة"
        }
      ],
      ctaTitle: "هل أنت مستعد لإنشاء مغامرتك الخاصة؟",
      ctaSubtitle: "ابدأ في صياغة قصة فريدة وشخصية سيعتز بها طفلك إلى الأبد."
    },
    title: "لنصنع قصة سحرية!",
    tagline: "خصص بطلك ودع المغامرة تبدأ.",
    selectLanguage: "اختر لغة القصة",
    childName: "اسم الطفل",
    childNamePlaceholder: "مثال: ليلى أو آدم",
    uploadPhoto: "ارفع صورة للبطل",
    uploadPhotoDesc: "هذا يساعد الذكاء الاصطناعي على إنشاء رسوم تشبه طفلك.",
    changePhoto: "تغيير الصورة",
    start: "ابدأ الإنشاء",
    chooseTheme: "اختر موضوعًا",
    chooseThemeDesc: "كل قصة عظيمة تبدأ بفكرة. اختر واحدة أدناه أو أنشئ فكرتك الخاصة!",
    themes: {
        space_adventure: {
            title: 'مغامرة في الفضاء',
            description: 'استكشف المجرات، قابل كائنات فضائية لطيفة، وقد سفينة صواريخك الخاصة.',
            promptSuggestion: 'يكتشف طفل خريطة غامضة تؤدي إلى كوكب خفي مليء بالعجائب.',
        },
        magic_forest: {
            title: 'الغابة السحرية',
            description: 'رحلة عبر غابة مسحورة مع حيوانات ناطقة وأسرار متلألئة.',
            promptSuggestion: 'يجد طفل مفتاحًا متوهجًا يفتح بابًا خفيًا في شجرة قديمة.',
        },
        underwater_kingdom: {
            title: 'مملكة تحت الماء',
            description: 'اغوص عميقًا لاكتشاف عالم من حوريات البحر والشعاب المرجانية الملونة والمخلوقات البحرية الودودة.',
            promptSuggestion: 'يساعد طفل دلفينًا صغيرًا تائهًا في العثور على طريقه إلى عائلته في مدينة مخفية تحت سطح البحر.',
        },
        dinosaur_era: {
            title: 'عصر الديناصورات',
            description: 'سافر عبر الزمن للمشي مع العمالقة اللطيفة وخوض مغامرة من عصور ما قبل التاريخ.',
            promptSuggestion: 'يجد طفل ديناصورًا صغيرًا وودودًا من نوع تي-ريكس ويساعده في العثور على الطعام وممارسة الألعاب.',
        },
        superhero_mission: {
            title: 'مهمة بطل خارق',
            description: 'ارتدِ عباءتك، واكتشف قواك، وأنقذ الموقف في مدينة صاخبة.',
            promptSuggestion: 'يكتسب طفل فجأة القدرة على التحدث إلى الحيوانات ويجب عليه استخدامها لمنع شرير من إفساد حديقة المدينة.',
        },
    },
    customTheme: {
        title: 'أو أنشئ مغامرتك الخاصة',
        description: 'هل لديك فكرة محددة؟ أخبر الذكاء الاصطناعي بما تريد أن تكون القصة عنه!',
        storyTitleLabel: 'عنوان القصة',
        storyTitlePlaceholder: 'مثال: لغز اللعبة المفقودة',
        promptLabel: 'عما يجب أن تكون القصة؟',
        promptPlaceholder: 'مثال: فارس شجاع يخاف من الظلام، لكن عليه إنقاذ تنين ودود من قلعة.',
        buttonText: 'أنشئ قصة مخصصة'
    },
    chooseStyle: "اختر نمط الرسم",
    chooseStyleDesc: "حدد نمط الرسوم التوضيحية لكتاب قصصك.",
    generatingTitle: "قصتك قيد التحضير...",
    generatingDesc: "الذكاء الاصطناعي لدينا مشغول بكتابة ورسم حكايتك المخصصة. يرجى الانتظار لحظة!",
    errorGeneratingStory: "عذراً، واجه الذكاء الاصطناعي مشكلة في إنشاء القصة. يرجى تجربة موضوع أو فكرة مختلفة.",
    editorTitle: "قصتك جاهزة!",
    editorDesc: "راجع قصتك أدناه. يمكنك تعديل النص أو إعادة إنشاء أي صورة.",
    exportPdf: "تصدير كـ PDF",
    previewAsBook: "معاينة ككتاب",
    startOver: "البدء من جديد",
    characterDetails: "تفاصيل الشخصية",
    editStory: "تعديل النص",
    imagePrompt: "موجه الصورة",
    imagePromptDesc: "هذا الموجه يرشد الذكاء الاصطناعي لإنشاء الصورة. عدله لنتائج مختلفة.",
    regenerateImage: "إعادة إنشاء الصورة",
    page: "صفحة",
    error: "خطأ",
    errorGeneratingImage: "لا يمكن إنشاء الصورة. يرجى المحاولة مرة أخرى.",
    storyViewer: {
        backToLibrary: "العودة إلى المكتبة",
        theEnd: "النهاية",
        enjoyedStory: "نأمل أن تكون قد استمتعت بـ '{title}'!",
        pageIndicator: "صفحة {current} من {total}",
        previous: "السابق",
        next: "التالي",
    },
    pricing: {
        title: "اختر خطتك",
        description: "أطلق العنان للقوة الكاملة لـ StorySpark AI وأنشئ قصصًا سحرية غير محدودة.",
        monthly: "شهرياً",
        yearly: "سنوياً",
        saveOffer: "وفر 20%",
        faqTitle: "الأسئلة الشائعة",
        plans: [
            {
                name: "برعم",
                priceMonthly: "$0",
                priceYearly: "$0",
                description: "مثالية لتجربة الأشياء.",
                buttonText: "ابدأ مجاناً",
                features: ["إنشاء قصة واحدة شهريًا", "أنماط فنية قياسية", "تصدير PDF", "دعم مجتمعي"]
            },
            {
                name: "الحالم",
                priceMonthly: "$9.99",
                priceYearly: "$95.99",
                description: "للعائلات التي تحب القراءة والإبداع.",
                buttonText: "ابدأ الآن",
                features: ["قصص غير محدودة", "جميع الأنماط الفنية", "تصدير PDF عالي الدقة", "تعديل موجهات الصور", "دعم ذو أولوية"]
            },
            {
                name: "الساحر",
                priceMonthly: "$19.99",
                priceYearly: "$191.99",
                description: "للمعلمين والمبدعين المحترفين.",
                buttonText: "اتصل بنا",
                features: ["كل شيء في خطة الحالم", "حقوق الاستخدام التجاري", "إنشاء قصص بالجملة", "مدير حساب مخصص"]
            }
        ],
        faqs: [
            {
                question: "هل يمكنني إلغاء اشتراكي في أي وقت؟",
                answer: "نعم، يمكنك إلغاء اشتراكك في أي وقت من إعدادات حسابك. ستحتفظ بالوصول إلى ميزات خطتك حتى نهاية دورة الفوترة الحالية."
            },
            {
                question: "ماذا يحدث إذا استخدمت قصتي المجانية لهذا الشهر؟",
                answer: "في خطة البرعم، يمكنك إنشاء قصة كاملة واحدة كل شهر. إذا كنت ترغب في إنشاء المزيد، يمكنك الترقية إلى خطة الحالم للحصول على إبداعات غير محدودة."
            },
            {
                question: "هل القصص فريدة حقًا؟",
                answer: "بالتأكيد! يتم إنشاء كل قصة بواسطة الذكاء الاصطناعي الخاص بنا بناءً على مدخلاتك الفريدة، بما في ذلك اسم طفلك ووصف الشخصية والموضوع المختار. لا توجد قصتان متطابقتان تمامًا."
            }
        ]
    }
  }
};
