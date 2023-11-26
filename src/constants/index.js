import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Введение",
  },
  {
    id: "work",
    title: "Языки",
  },
  {
    id: "contact",
    title: "Вопросы",
  },
];

const services = [
  {
    title: "Начни с основ",
    icon: web,
  },
  {
    title: "Регулярно практикуйся",
    icon: mobile,
  },
  {
    title: "Не бойся ошибаться",
    icon: backend,
  },
  {
    title: "Окружи себя программистами",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Веб-разработка",
    company_name: "Web Development",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Java, Ruby, Python, JavaScript (Node.js), Go и PHP.",
    points: [
      "Веб-разработчики создают веб-сайты и веб-приложения, которые используются людьми для доступа к информации и взаимодействию друг с другом.",
      "Веб-разработка - это одна из самых популярных специализаций в программировании, поскольку веб-сайты и веб-приложения являются неотъемлемой частью нашей повседневной жизни.",
      "Для начала карьеры в веб-разработке необходимо освоить HTML, CSS и JavaScript.",
    ],
  },
  {
    title: "Разработка игр",
    company_name: "Game Development",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "С++, Java, JavaScript, Python, Swift и C#",
    points: [
      "Игровые разработчики создают видеоигры, которые приносят людям удовольствие и развлечение.",
      "Разработка игр - это творческая и увлекательная специализация, которая требует навыков программирования, дизайна и искусства.",
      "Для начала карьеры в разработке игр необходимо освоить C++, C#, Java, Python или Lua.",
    ],
  },
  {
    title: "Мобильная разработка",
    company_name: "Mobile App Development",
    icon: shopify,
    iconBg: "#383E56",
    date: "Java, Kotlin, Swift, Objective-C, JavaScript, Dart, C# и C++",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Программирование и работа с базами данных",
    company_name: "Data Science",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Python, Julia, Haskell, Lisp, R, JavaScript, C++, Prolog и Scala.",
    points: [
      "Data Science - это область информатики, которая занимается сбором, анализом и извлечением информации из больших наборов данных.",
      "Нейронные сети - это тип алгоритмов машинного обучения, которые вдохновлены работой человеческого мозга.",
      "Data Science, программирование искусственного интеллекта, нейросетей и работа с большими данными - это быстро развивающиеся области информатики, которые предлагают множество возможностей для карьерного роста.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Начните с написания небольших программ, которые делают что-то полезное. Не пытайтесь сразу написать что-то сложное.",
    name: "Дональд Кнут",
    image: "https://wiki.spbu.ru/images/8/80/Knuth_donald.jpg",
  },
  {
    testimonial:
      "Программирование - это искусство, которое требует как творчества, так и технических навыков. ",
    name: "Бьёрн Страуструп",
    image: "https://i.ytimg.com/vi/Xglebz8YxCQ/maxresdefault.jpg",
  },
  {
    testimonial:
      "Программирование - это не только работа, это образ жизни.",
    name: "Линус Торвальдс",
    image: "https://static.tildacdn.com/tild6633-6264-4036-b035-616432333762/01.jpg",
  },
];

const projects = [
  {
    name: "2048",
    description:
      "Если ты хочешь научиться программировать, игра 2048 - это отличный проект, с которого стоит начать. Она простая, но увлекательная, и она поможет тебе освоить основные навыки программирования.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Калькулятор",
    description:
      "Это простой и понятный проект, который поможет тебе попрактиковаться в основных операциях программирования, таких как ввод и вывод данных, математические операции и ветвление. ",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "c++",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Сайт",
    description:
      "Ты можешь начать с простого одностраничного веб-сайта, например простую стаью. Затем ты можешь попробовать сделать более сложный веб-сайт, такой как блог или портфолио с несколькими страницами.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
