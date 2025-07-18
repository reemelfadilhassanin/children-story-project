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
      en: 'The Little Astronaut',
      ar: 'رائد الفضاء الصغير'
    },
    coverImage: 'https://img.freepik.com/free-vector/cute-astronaut-meditating-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated_138676-5272.jpg?w=826',
    description: {
        en: "A boy's dream of space comes true when he finds a rocket in his backyard.",
        ar: "حلم فتى بالفضاء يتحقق عندما يجد صاروخًا في حديقة منزله الخلفية."
    },
    pages: [
      {
        pageNumber: 1,
        text: {
            en: "Once upon a time, in a cozy little house on a green hill, lived a boy named Leo. Leo wasn't just any boy; he dreamed of stars, planets, and galaxies far, far away.",
            ar: "كان يا مكان، في بيت صغير دافئ على تل أخضر، يعيش فتى اسمه ليو. لم يكن ليو مجرد فتى عادي؛ كان يحلم بالنجوم والكواكب والمجرات البعيدة."
        },
        imageUrl: 'https://img.freepik.com/free-vector/cute-boy-sitting-moon-cartoon-vector-icon-illustration-people-nature-icon-concept-isolated-premium_138676-4809.jpg?w=826',
        imagePrompt: 'A young boy with brown hair looking up at the night sky from his bedroom window, dreaming of space. Cute cartoon style.'
      },
      {
        pageNumber: 2,
        text: {
            en: "One night, he found a shiny, red rocket in his backyard! It had a note that said, 'For Leo, the Star Explorer.' His eyes sparkled with excitement. It was his very own spaceship!",
            ar: "في إحدى الليالي، وجد صاروخًا أحمر لامعًا في حديقة منزله! وكان معه ملاحظة تقول: 'إلى ليو، مستكشف النجوم'. لمعت عيناه بالإثارة. لقد كان يمتلك سفينته الفضائية الخاصة!"
        },
        imageUrl: 'https://img.freepik.com/free-vector/cute-boy-riding-rocket-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-premium_138676-5211.jpg?w=826',
        imagePrompt: 'A cute young boy with brown hair, looking amazed at a small, friendly-looking red toy rocket in his backyard at night. Cute cartoon style.'
      },
      {
        pageNumber: 3,
        text: {
            en: "With a happy wave, Leo hopped in. 'Ready for an adventure!' he shouted. The rocket rumbled and with a WHOOSH, it soared into the starry sky, leaving a trail of glitter behind.",
            ar: "بتحية سعيدة، قفز ليو إلى الداخل. وصرخ: 'مستعد للمغامرة!'. اهتز الصاروخ وبصوت عالٍ، انطلق في السماء المليئة بالنجوم، تاركًا وراءه أثرًا من الغبار المتلألئ."
        },
        imageUrl: 'https://img.freepik.com/free-vector/cute-astronaut-waving-hand-moon-cartoon-vector-icon-illustration-science-technology-icon-concept_138676-5271.jpg?w=826',
        imagePrompt: 'A small red rocket flying into a starry night sky, with a happy boy visible through the window waving. Cute cartoon style.'
      },
      {
        pageNumber: 4,
        text: {
            en: "He zoomed past the Moon, who gave him a sleepy smile. He met friendly aliens on a purple planet who taught him how to dance the zero-gravity jiggle.",
            ar: "انطلق بسرعة متجاوزًا القمر، الذي ابتسم له ابتسامة ناعسة. والتقى بكائنات فضائية ودودة على كوكب بنفسجي علمته كيف يرقص رقصة انعدام الجاذبية."
        },
        imageUrl: 'https://img.freepik.com/free-vector/cute-astronaut-dance-with-alien-cartoon-vector-icon-illustration-science-technology-icon-concept_138676-5441.jpg?w=826',
        imagePrompt: 'A cartoon boy in a spacesuit dancing with three colorful, friendly-looking aliens on a purple planet. The moon is smiling in the background. Cute cartoon style.'
      },
      {
        pageNumber: 5,
        text: {
            en: "After playing among the stars, Leo steered his rocket back home. He landed softly in his backyard, just as the sun began to peek over the horizon.",
            ar: "بعد اللعب بين النجوم، وجه ليو صاروخه عائدًا إلى المنزل. هبط بهدوء في حديقته الخلفية، تمامًا عندما بدأت الشمس تشرق من وراء الأفق."
        },
        imageUrl: 'https://img.freepik.com/free-vector/cute-astronaut-waving-hand-rocket-cartoon-vector-icon-illustration-science-technology-icon-concept_138676-5282.jpg?w=826',
        imagePrompt: 'A small red rocket landing gently in a green backyard as the sun rises. The boy is looking out the window, tired but happy. Cute cartoon style.'
      },
      {
        pageNumber: 6,
        text: {
            en: "Leo snuggled into his bed, dreaming of his next big adventure. He knew that with a little imagination, he could travel anywhere in the universe.",
            ar: "استلقى ليو في سريره، يحلم بمغامرته الكبيرة التالية. كان يعلم أنه بقليل من الخيال، يمكنه السفر إلى أي مكان في الكون."
        },
        imageUrl: 'https://img.freepik.com/free-vector/cute-boy-sleeping-moon-cartoon-vector-icon-illustration-people-nature-icon-concept-isolated-premium_138676-4796.jpg?w=826',
        imagePrompt: 'A cute boy sleeping peacefully in his bed, with space-themed toys around his room. A window shows the morning sky. Cute cartoon style.'
      }
    ]
  },
  {
    title: {
      en: 'Dragon\'s Golden Treasure',
      ar: 'كنز التنين الذهبي'
    },
    coverImage: 'https://img.freepik.com/free-vector/cute-dragon-with-gold-coin-cartoon-vector-icon-illustration-animal-finance-icon-concept-isolated_138676-5190.jpg?w=826',
    description: {
        en: 'A story about a friendly dragon who learns that friendship is the greatest treasure of all.',
        ar: 'قصة عن تنين ودود يتعلم أن الصداقة هي أعظم كنز على الإطلاق.'
    },
    pages: [
        {
            pageNumber: 1,
            text: {
                en: "In a glittery cave, high on a misty mountain, lived a dragon named Sparky. He didn't hoard gold, but shiny, smooth pebbles that he polished every day.",
                ar: "في كهف متلألئ، على قمة جبل ضبابي، عاش تنين اسمه سباركي. لم يكن يجمع الذهب، بل حصى لامعة وناعمة كان يلمعها كل يوم."
            },
            imageUrl: 'https://img.freepik.com/free-vector/cute-dragon-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-42站.jpg?w=826',
            imagePrompt: 'A friendly purple dragon polishing a collection of shiny pebbles inside a cozy, sparkling cave. Cute cartoon style.'
        },
        {
            pageNumber: 2,
            text: {
                en: "One day, a girl named Lily, who loved to climb, found his cave. She wasn't scared. She saw that Sparky had a kind smile.",
                ar: "ذات يوم، وجدت فتاة اسمها ليلي، كانت تحب التسلق، كهفه. لم تكن خائفة. رأت أن سباركي لديه ابتسامة لطيفة."
            },
            imageUrl: 'https://img.freepik.com/free-vector/cute-girl-with-dragon-cartoon-illustration_138676-2895.jpg?w=826',
            imagePrompt: 'A young girl with a backpack meeting a friendly purple dragon at the entrance of a cave. They are both smiling. Cute cartoon style.'
        },
        {
            pageNumber: 3,
            text: {
                en: "Lily didn't have pebbles, but she gave Sparky a daisy. Sparky had never seen one up close. He thought it was more beautiful than all his stones.",
                ar: "لم يكن لدى ليلي حصى، لكنها أعطت سباركي زهرة أقحوان. لم ير سباركي واحدة من قبل عن قرب. اعتقد أنها أجمل من كل حجارته."
            },
            imageUrl: 'https://img.freepik.com/free-vector/cute-dragon-holding-flower-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-5188.jpg?w=826',
            imagePrompt: 'A friendly purple dragon gently holding a single daisy, looking at it with wonder. A little girl is watching him happily. Cute cartoon style.'
        },
        {
            pageNumber: 4,
            text: {
                en: "They spent the afternoon laughing and playing. Lily learned that dragons give the best piggyback rides, and Sparky learned that friendship is the greatest treasure of all.",
                ar: "قضيا فترة ما بعد الظهر يضحكان ويلعبان. تعلمت ليلي أن التنانين تقدم أفضل جولات على الظهر، وتعلم سباركي أن الصداقة هي أعظم كنز على الإطلاق."
            },
            imageUrl: 'https://img.freepik.com/free-vector/cute-girl-riding-dragon-cartoon-vector-icon-illustration-people-animal-icon-concept-isolated_138676-5389.jpg?w=826',
            imagePrompt: 'A young girl riding on the back of a happy, flying purple dragon against a blue sky with fluffy clouds. Cute cartoon style.'
        }
    ]
  },
  {
    title: {
      en: 'The Friendly Mermaid',
      ar: 'حورية البحر الودودة'
    },
    coverImage: 'https://img.freepik.com/free-vector/cute-mermaid-holding-pearl-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-5014.jpg?w=826',
    description: {
        en: 'A curious mermaid befriends a boy on the shore, sharing stories of land and sea.',
        ar: 'حورية بحر فضولية تصادق فتى على الشاطئ، وتتبادل معه قصص البر والبحر.'
    },
    pages: [
        {
            pageNumber: 1,
            text: {
                en: "Deep under the sea, in a castle made of coral, lived a mermaid named Cora. She had a shimmering tail and a heart full of curiosity.",
                ar: "في أعماق البحر، في قلعة مصنوعة من المرجان، عاشت حورية بحر اسمها كورا. كان لديها ذيل لامع وقلب مليء بالفضول."
            },
            imageUrl: 'https://img.freepik.com/free-vector/cute-mermaid-swimming-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium_138676-5011.jpg?w=826',
            imagePrompt: 'A beautiful mermaid with a pink tail swimming happily in front of a colorful coral castle underwater. Cute cartoon style.'
        },
        {
            pageNumber: 2,
            text: {
                en: "Cora loved to swim to the surface and watch the strange two-legged creatures who lived on land. One day, she saw a boy looking very sad.",
                ar: "أحبت كورا السباحة إلى السطح ومشاهدة المخلوقات الغريبة ذات الساقين التي تعيش على الأرض. ذات يوم، رأت فتى يبدو حزيناً جداً."
            },
            imageUrl: 'https://img.freepik.com/premium-vector/boy-looks-sad-beach_11433-28.jpg',
            imagePrompt: 'A mermaid watching from the sea as a young boy sits sadly on a beach. Cute cartoon style.'
        },
        {
            pageNumber: 3,
            text: {
                en: "She swam closer and asked what was wrong. 'I lost my favorite seashell,' he sniffled. Cora zipped back down to her garden and found the most beautiful, swirly shell she could.",
                ar: "سبحت أقرب وسألت ما المشكلة. قال وهو يشهق: 'لقد فقدت صدفتي المفضلة'. عادت كورا بسرعة إلى حديقتها ووجدت أجمل صدفة حلزونية يمكن أن تجدها."
            },
            imageUrl: 'https://img.freepik.com/free-vector/set-seashells-cartoon-style_1308-111322.jpg?w=1380',
            imagePrompt: 'A beautiful mermaid underwater, carefully choosing a perfect, glowing seashell from a collection of shells. Cute cartoon style.'
        },
        {
            pageNumber: 4,
            text: {
                en: "She gave the shell to the boy, whose face lit up with joy. 'Thank you!' he said. They became secret friends, meeting by the shore to share stories of land and sea.",
                ar: "أعطت الصدفة للفتى، الذي أشرق وجهه بالفرح. قال: 'شكرًا لك!'. أصبحا صديقين سريين، يلتقيان عند الشاطئ لتبادل قصص البر والبحر."
            },
            imageUrl: 'https://img.freepik.com/free-vector/cute-mermaid-waving-hand-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-5015.jpg?w=826',
            imagePrompt: 'A mermaid in the water waving happily to a young boy on the beach who is holding a beautiful seashell. Cute cartoon style.'
        }
    ]
  },
  {
    title: {
      en: 'Whispers of the Forest',
      ar: 'همسات الغابة'
    },
    coverImage: 'https://img.freepik.com/free-vector/mysterious-forest-background_23-2148154146.jpg?w=1380',
    description: {
        en: 'A lost girl learns to trust the friendly animals of the forest to find her way home.',
        ar: 'فتاة تائهة تتعلم الثقة بحيوانات الغابة الودودة لتجد طريقها إلى المنزل.'
    },
    pages: [
        {
            pageNumber: 1,
            text: {
                en: "Maya loved exploring the woods behind her house. But one day, she wandered too far and couldn't find her way back. The forest grew quiet and dark.",
                ar: "كانت مايا تحب استكشاف الغابة خلف منزلها. لكن في يوم من الأيام، ابتعدت كثيرًا ولم تستطع العثور على طريق العودة. أصبحت الغابة هادئة ومظلمة."
            },
            imageUrl: 'https://img.freepik.com/free-vector/kids-scared-dark-forest_1308-36173.jpg?w=1380',
            imagePrompt: 'A young girl looking lost and a little scared in a dark, dense forest. Cute cartoon style.'
        },
        {
            pageNumber: 2,
            text: {
                en: "Suddenly, she heard a soft 'Hoo-hoo!' A wise old owl blinked at her. 'The moss on the trees grows towards the sun,' it whispered. 'Follow it!'.",
                ar: "فجأة، سمعت صوتًا ناعمًا 'هوهو!'. بومة عجوز حكيمة رمشت إليها. همست: 'الطحلب على الأشجار ينمو باتجاه الشمس'. 'اتبعيه!'."
            },
            imageUrl: 'https://img.freepik.com/free-vector/owl-sitting-branch_1308-30379.jpg?w=826',
            imagePrompt: 'A wise-looking cartoon owl sitting on a branch talking to a lost little girl in a forest. Cute cartoon style.'
        },
        {
            pageNumber: 3,
            text: {
                en: "She followed the mossy trees until she came to a giggling stream. A family of otters chattered and pointed their paws, showing her a safe place to cross.",
                ar: "تبعت الأشجار المليئة بالطحالب حتى وصلت إلى جدول ماء يضحك. ثرثرت عائلة من ثعالب الماء وأشارت بكفوفها، مبينة لها مكانًا آمنًا للعبور."
            },
            imageUrl: 'https://img.freepik.com/free-vector/cute-otter-swimming-river-cartoon_138676-2358.jpg?w=826',
            imagePrompt: 'Friendly cartoon otters playing in a stream and pointing the way for a little girl. Cute cartoon style.'
        },
        {
            pageNumber: 4,
            text: {
                en: "Finally, the trees parted and she saw her own backyard! The forest wasn't scary after all; it was full of friends. Maya waved goodbye, promising to visit again soon.",
                ar: "أخيرًا، تفرقت الأشجار ورأت حديقتها الخلفية! لم تكن الغابة مخيفة بعد كل شيء؛ كانت مليئة بالأصدقاء. لوحت مايا وداعًا، واعدة بالزيارة مرة أخرى قريبًا."
            },
            imageUrl: 'https://img.freepik.com/free-vector/girl-waving-hand-cartoon-character_1308-110266.jpg?w=826',
            imagePrompt: 'A happy young girl waving goodbye to a forest as she stands in her sunny backyard. Cute cartoon style.'
        }
    ]
  },
  {
    title: {
      en: 'The Hero of Metro City',
      ar: 'بطل مدينة مترو'
    },
    coverImage: 'https://img.freepik.com/free-vector/superhero-flying-cartoon-character_1308-118854.jpg?w=826',
    description: {
        en: 'A superhero with a super heart teaches a grumpy villain that kindness is the greatest power.',
        ar: 'بطل خارق بقلب كبير يعلّم شريرًا متذمرًا أن اللطف هو أعظم قوة.'
    },
    pages: [
        {
            pageNumber: 1,
            text: {
                en: "In the busy Metro City, lived a superhero named Captain Kindness. He didn't have super strength, but he had a super heart.",
                ar: "في مدينة مترو المزدحمة، عاش بطل خارق اسمه كابتن اللطف. لم يكن لديه قوة خارقة، لكن كان لديه قلب كبير."
            },
            imageUrl: 'https://img.freepik.com/free-vector/illustration-superhero_1308-6625.jpg?w=826',
            imagePrompt: 'A friendly superhero in a bright costume standing on a rooftop overlooking a bustling city, smiling. Cute cartoon style.'
        },
        {
            pageNumber: 2,
            text: {
                en: "One day, a grumpy villain named The Pouter made all the flowers in the city park wilt with his gloomy sighs. Everyone was sad.",
                ar: "ذات يوم، جعل شرير متذمر اسمه 'المتجهم' كل الزهور في حديقة المدينة تذبل بتنهداته الكئيبة. كان الجميع حزينًا."
            },
            imageUrl: 'https://img.freepik.com/free-vector/sad-boy-sitting-alone_1308-37207.jpg?w=826',
            imagePrompt: 'A grumpy cartoon character sighing, causing all the flowers in a beautiful park to wilt and droop. Cute cartoon style.'
        },
        {
            pageNumber: 3,
            text: {
                en: "Captain Kindness didn't fight him. He flew down and asked, 'What's wrong?' The Pouter confessed he was lonely. So Captain Kindness threw a 'Pouter Party'!",
                ar: "لم يحاربه كابتن اللطف. طار إليه وسأل: 'ما المشكلة؟'. اعترف المتجهم بأنه وحيد. لذا أقام كابتن اللطف 'حفلة للمتجهم'!"
            },
            imageUrl: 'https://img.freepik.com/free-vector/kids-having-party_1308-36829.jpg?w=1380',
            imagePrompt: 'A superhero hosting a happy party in a park for a formerly grumpy villain. There are balloons and cake. Cute cartoon style.'
        },
        {
            pageNumber: 4,
            text: {
                en: "With his new friends, The Pouter started to smile. And as he smiled, all the flowers bloomed again, more colorful than ever! Metro City was saved by kindness.",
                ar: "مع أصدقائه الجدد، بدأ المتجهم يبتسم. وبينما كان يبتسم، أزهرت كل الزهور مرة أخرى، بألوان زاهية أكثر من أي وقت مضى! تم إنقاذ مدينة مترو باللطف."
            },
            imageUrl: 'https://img.freepik.com/free-vector/public-park-with-rainbow-sky_1308-46383.jpg?w=1380',
            imagePrompt: 'A beautiful city park with vibrant, blooming flowers, with a happy group of people including a superhero and a smiling former villain. Cute cartoon style.'
        }
    ]
  },
  {
    title: {
      en: 'Dino-Mite Adventure',
      ar: 'مغامرة الديناصور'
    },
    coverImage: 'https://img.freepik.com/free-vector/cute-dinosaur-with-egg-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium_138676-4798.jpg?w=826',
    description: {
        en: 'A little T-Rex who is afraid of his own roar learns to find his voice with a little help.',
        ar: 'ديناصور تي-ريكس صغير يخاف من زئيره يتعلم كيف يجد صوته بمساعدة بسيطة.'
    },
    pages: [
        {
            pageNumber: 1,
            text: {
                en: "Rory was a small dinosaur with a very big problem. He was a T-Rex who was afraid of his own roar! Every time he tried, it came out as a tiny 'squeak'.",
                ar: "روري كان ديناصورًا صغيرًا لديه مشكلة كبيرة جدًا. كان تي-ريكس يخاف من زئيره! في كل مرة حاول فيها، كان يخرج صوت 'صغير' فقط."
            },
            imageUrl: 'https://img.freepik.com/free-vector/cute-t-rex-dinosaur-white-background_1308-114446.jpg?w=826',
            imagePrompt: 'A small, cute T-Rex looking sad and covering his mouth, with a tiny "squeak" speech bubble. Cute cartoon style.'
        },
        {
            pageNumber: 2,
            text: {
                en: "The other dinosaurs would giggle. Rory would hide behind big ferns, feeling embarrassed. He wished he could be big and loud like the others.",
                ar: "كانت الديناصورات الأخرى تضحك. كان روري يختبئ خلف السراخس الكبيرة، شاعرًا بالحرج. تمنى لو كان كبيرًا وصاخبًا مثل الآخرين."
            },
            imageUrl: 'https://img.freepik.com/free-vector/group-dinosaurs-nature_1308-32213.jpg?w=1380',
            imagePrompt: 'A small T-Rex hiding behind a large leaf while other bigger dinosaurs play happily in the background. Cute cartoon style.'
        },
        {
            pageNumber: 3,
            text: {
                en: "One day, a wise old Brachiosaurus saw him. 'A roar comes from the heart, little one,' she said kindly. 'Roar about something you love!'.",
                ar: "ذات يوم، رأته أنثى براكيوصور حكيمة. قالت بلطف: 'الزئير يأتي من القلب يا صغيري'. 'ازأر عن شيء تحبه!'."
            },
            imageUrl: 'https://img.freepik.com/free-vector/cute-brachiosaurus-cartoon-character_1308-107050.jpg?w=826',
            imagePrompt: 'A very large, gentle Brachiosaurus talking kindly to a small, sad T-Rex in a prehistoric jungle. Cute cartoon style.'
        },
        {
            pageNumber: 4,
            text: {
                en: "Rory thought about his favorite thing: yummy berries! He thought about how sweet they were, took a deep breath, and let out a giant, earth-shaking ROAR! He wasn't scared anymore. He was proud.",
                ar: "فكر روري في الشيء المفضل لديه: التوت اللذيذ! فكر في مدى حلاوته، وأخذ نفسًا عميقًا، وأطلق زئيرًا عملاقًا يهز الأرض! لم يعد خائفًا. كان فخورًا."
            },
            imageUrl: 'https://img.freepik.com/free-vector/t-rex-dinosaur-cartoon-character_1308-111162.jpg?w=826',
            imagePrompt: 'A small T-Rex standing proudly on a rock, letting out a giant "ROAR!" from its open mouth. Cute cartoon style.'
        }
    ]
  }
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
        errorGeneratingStory: "Sorry, we couldn't generate the story. Please check your inputs and try again.",
        errorGeneratingImage: "Sorry, we couldn't create this image. Please try regenerating.",
        imagePrompt: "Image Prompt",
        imagePromptDesc: "This is the instruction for the AI to draw the picture. You can edit it and regenerate the image.",
        characterDetails: "Character Details",
        nav: {
            home: "Home",
            ourStories: "Our Stories",
            pricing: "Pricing",
            createStory: "Create Story"
        },
        storyViewer: {
            backToLibrary: 'Back to Library',
            previous: 'Previous',
            next: 'Next',
            theEnd: 'The End',
            enjoyedStory: 'We hope you enjoyed the story of {title}!',
            pageIndicator: 'Page {current} of {total}'
        },
        customTheme: {
            title: "Or, Create Your Own Adventure",
            description: "Have a specific story in mind? Write your own title and prompt below to bring it to life!",
            storyTitleLabel: "Your Story Title",
            storyTitlePlaceholder: "e.g., The Magical Toy Box",
            promptLabel: "What is your story about?",
            promptPlaceholder: "e.g., A story about a magical toy box where all the toys come alive at night and have secret adventures.",
            buttonText: "Create My Story"
        },
        pricing: {
            title: "Choose Your Plan",
            description: "Unlock the full potential of AI storytelling with a plan that fits your needs.",
            monthly: "Monthly",
            yearly: "Yearly",
            saveOffer: "Save 2 months!",
            faqTitle: "Frequently Asked Questions",
            plans: [
                {
                    name: "Free",
                    priceMonthly: "$0",
                    priceYearly: "$0",
                    description: "Perfect for trying out the magic of AI storytelling.",
                    buttonText: "Start for Free",
                    features: ["Create 1 story", "10 pages per story", "Standard image quality", "All themes available"]
                },
                {
                    name: "Spark",
                    priceMonthly: "$9",
                    priceYearly: "$90",
                    description: "For families who love to create and read together.",
                    buttonText: "Get Started",
                    features: ["Create 10 stories per month", "High-quality image exports", "Priority support", "Access to all art styles"]
                },
                {
                    name: "Dreamer",
                    priceMonthly: "$19",
                    priceYearly: "$190",
                    description: "Unlimited creativity for the most avid storytellers.",
                    buttonText: "Go Unlimited",
                    features: ["Unlimited story creation", "Highest quality image exports", "Early access to new features", "Dedicated support agent"]
                }
            ],
            faqs: [
                { question: "Can I cancel my subscription anytime?", answer: "Yes, you can cancel your subscription at any time. You will retain access to your plan's features until the end of your billing cycle." },
                { question: "What happens to my stories if I cancel?", answer: "You will always have access to the stories you've created, even if you cancel your subscription. You can view and download them anytime." },
                { question: "Do you offer refunds?", answer: "We offer a 7-day money-back guarantee on all our paid plans. If you're not satisfied, just contact us within 7 days of your purchase for a full refund." }
            ]
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
        nav: {
            home: "الرئيسية",
            ourStories: "قصصنا",
            pricing: "الأسعار",
            createStory: "أنشئ قصة"
        },
        storyViewer: {
            backToLibrary: 'العودة للمكتبة',
            previous: 'السابق',
            next: 'التالي',
            theEnd: 'النهاية',
            enjoyedStory: 'نتمنى أن تكون قد استمتعت بقصة {title}!',
            pageIndicator: 'صفحة {current} من {total}'
        },
        customTheme: {
            title: "أو، أنشئ مغامرتك الخاصة",
            description: "هل لديك قصة معينة في ذهنك؟ اكتب عنوانك الخاص ووصف القصة أدناه لتحويلها إلى حقيقة!",
            storyTitleLabel: "عنوان قصتك",
            storyTitlePlaceholder: "مثال: صندوق الألعاب السحري",
            promptLabel: "عن ماذا تدور قصتك؟",
            promptPlaceholder: "مثال: قصة عن صندوق ألعاب سحري حيث تعود كل الألعاب إلى الحياة ليلاً وتخوض مغامرات سرية.",
            buttonText: "أنشئ قصتي"
        },
        pricing: {
            title: "اختر خطتك",
            description: "أطلق العنان للإمكانيات الكاملة لسرد القصص بالذكاء الاصطناعي مع خطة تناسب احتياجاتك.",
            monthly: "شهري",
            yearly: "سنوي",
            saveOffer: "وفر شهرين!",
            faqTitle: "الأسئلة الشائعة",
            plans: [
                {
                    name: "مجانية",
                    priceMonthly: "0$",
                    priceYearly: "0$",
                    description: "مثالية لتجربة سحر سرد القصص بالذكاء الاصطناعي.",
                    buttonText: "ابدأ مجانًا",
                    features: ["إنشاء قصة واحدة", "10 صفحات لكل قصة", "جودة صور قياسية", "جميع الثيمات متاحة"]
                },
                {
                    name: "سبارك",
                    priceMonthly: "9$",
                    priceYearly: "90$",
                    description: "للعائلات التي تحب الإبداع والقراءة معًا.",
                    buttonText: "ابدأ الآن",
                    features: ["إنشاء 10 قصص شهريًا", "تصدير صور بجودة عالية", "دعم ذو أولوية", "الوصول لجميع الأساليب الفنية"]
                },
                {
                    name: "دريمر",
                    priceMonthly: "19$",
                    priceYearly: "190$",
                    description: "إبداع لا محدود لأكثر رواة القصص شغفًا.",
                    buttonText: "انطلق بلا حدود",
                    features: ["إنشاء قصص غير محدود", "تصدير صور بأعلى جودة", "وصول مبكر للميزات الجديدة", "وكيل دعم مخصص"]
                }
            ],
            faqs: [
                { question: "هل يمكنني إلغاء اشتراكي في أي وقت؟", answer: "نعم، يمكنك إلغاء اشتراكك في أي وقت. ستحتفظ بالوصول إلى ميزات خطتك حتى نهاية دورة الفوترة الخاصة بك." },
                { question: "ماذا يحدث لقصصي إذا قمت بالإلغاء؟", answer: "ستحتفظ دائمًا بالوصول إلى القصص التي أنشأتها، حتى لو قمت بإلغاء اشتراكك. يمكنك عرضها وتنزيلها في أي وقت." },
                { question: "هل تقدمون المبالغ المستردة؟", answer: "نحن نقدم ضمان استرداد الأموال لمدة 7 أيام على جميع خططنا المدفوعة. إذا لم تكن راضيًا، فما عليك سوى الاتصال بنا في غضون 7 أيام من تاريخ الشراء لاسترداد المبلغ بالكامل." }
            ]
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
