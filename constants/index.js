import StarIcon from "../components/icons/StarIcon";
import DefaultImage from "../components/icons/twitter.png";

const blogTags = [
  {
    name: "Programming",
  },
  {
    name: "Data Science",
  },
  {
    name: "Technology",
  },
  {
    name: "Self Improvement",
  },
  {
    name: "Writing",
  },
  {
    name: "Relationships",
  },
  {
    name: "Machine Learning",
  },
  {
    name: "Productivity",
  },
  {
    name: "Politics",
  },
];

const discoverTags = [
  {
    name: "Help",
  },
  {
    name: "Status",
  },
  {
    name: "Writers",
  },
  {
    name: "Blog",
  },
  {
    name: "Careers",
  },
  {
    name: "Privacy",
  },
  {
    name: "Terms",
  },
  {
    name: "About",
  },
  {
    name: "Text to Speech",
  },
  {
    name: "Teams",
  },
];

const dummyTrendings = [
  {
    title: "The 5 Best Ways to Build Resiliency",
    author: "Darius Foroux",
    image: DefaultImage,
    readTime: "3 min read",
    date: "Nov 2",
  },
  {
    title: "Why I’m Not a Fan of the “Fake It Till You Make It” Approach",
    author: "Ayodeji Awosika",
    image: DefaultImage,
    readTime: "5 min read",
    date: "Nov 5",
  },
  {
    title: "The Chatbot Revolution is Here",
    author: "Chatbots Magazine",
    image: DefaultImage,
    readTime: "8 min read",
    date: "Nov 1",
    isPremium: <StarIcon />,
  },
  {
    title: "Good Design is Imperfect Design",
    author: "Muzli - Design Inspiration",
    image: DefaultImage,
    readTime: "5 min read",
    date: "Nov 3",
  },
  {
    title: "Ukraine is the Wild West of Cryptocurrency",
    author: "Alex Gladstein",
    image: DefaultImage,
    readTime: "5 min read",
    date: "Nov 4",
    isPremium: <StarIcon />,
  },
  {
    title: "The 'Male Loneliness Epidemic' Douesn't Exist",
    author: "Jude Ellison Sady Doyle",
    image: DefaultImage,
    readTime: "8 min read",
    date: "Sep 1",
    isPremium: <StarIcon />,
  },
];

const dummyBlogs = [
  {
    title: "What We’re Reading: When you talk about AI, context matters",
    description: "The latest in AI, analytics, and data science news",
    author: "Darius Foroux",
    image: DefaultImage,
    readTime: "3 min read",
    date: "Nov 2",
    tag: "Programming",
    banner:
      "https://miro.medium.com/v2/resize:fill:150:100/1*gX4lPxojImcNFkmC-mwQEA.png",
  },
  {
    title:
      "Happy, Healthy 101: A Parent’s Guide to Helping Your Child Thrive Across the College Years and Beyond, by Karen L. Schiltz",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
    author: "Ayodeji Awosika",
    image: DefaultImage,
    readTime: "5 min read",
    date: "Nov 5",
    tag: "Data Science",
    banner:
      "https://miro.medium.com/v2/resize:fill:150:100/1*gX4lPxojImcNFkmC-mwQEA.png",
  },
  {
    title: "Happy, Healthy, and Wealthy: 5 Lessons I Learned From My Dad",
    description: "In honor of Father’s Day",
    author: "Chatbots Magazine",
    image: DefaultImage,
    readTime: "8 min read",
    date: "Nov 1",
    tag: "Technology",
    banner:
      "https://miro.medium.com/v2/resize:fill:150:100/1*gX4lPxojImcNFkmC-mwQEA.png",
  },
  {
    title: "The 5 Best Ways to Build Resiliency",
    description: "One of the most important skills in life",
    author: "Muzli - Design Inspiration",
    image: DefaultImage,
    readTime: "5 min read",
    date: "Nov 3",
    tag: "Self Improvement",
    banner:
      "https://miro.medium.com/v2/resize:fill:150:100/1*gX4lPxojImcNFkmC-mwQEA.png",
    isPremium: <StarIcon />,
  },
  {
    title: "Why I’m Not a Fan of the “Fake It Till You Make It” Approach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
    author: "Alex Gladstein",
    image: DefaultImage,
    readTime: "5 min read",
    date: "Nov 4",
    tag: "Writing",
    banner:
      "https://miro.medium.com/v2/resize:fill:150:100/1*gX4lPxojImcNFkmC-mwQEA.png",
    isPremium: <StarIcon />,
  },
  {
    title:
      "Happy, Healthy 101: A Parent’s Guide to Helping Your Child Thrive Across the College Years and Beyond, by Karen L. Schiltz",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
    author: "Ayodeji Awosika",
    image: DefaultImage,
    readTime: "5 min read",
    date: "Nov 5",
    tag: "Data Science",
    banner:
      "https://miro.medium.com/v2/resize:fill:150:100/1*gX4lPxojImcNFkmC-mwQEA.png",
  },
  {
    title: "Happy, Healthy, and Wealthy: 5 Lessons I Learned From My Dad",
    description: "In honor of Father’s Day",
    author: "Chatbots Magazine",
    image: DefaultImage,
    readTime: "8 min read",
    date: "Nov 1",
    tag: "Technology",
    banner:
      "https://miro.medium.com/v2/resize:fill:150:100/1*gX4lPxojImcNFkmC-mwQEA.png",
  },
  {
    title: "The 5 Best Ways to Build Resiliency",
    description: "One of the most important skills in life",
    author: "Muzli - Design Inspiration",
    image: DefaultImage,
    readTime: "5 min read",
    date: "Nov 3",
    tag: "Self Improvement",
    banner:
      "https://miro.medium.com/v2/resize:fill:150:100/1*gX4lPxojImcNFkmC-mwQEA.png",
    isPremium: <StarIcon />,
  },
  {
    title: "Why I’m Not a Fan of the “Fake It Till You Make It” Approach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
    author: "Alex Gladstein",
    image: DefaultImage,
    readTime: "5 min read",
    date: "Nov 4",
    tag: "Writing",
    banner:
      "https://miro.medium.com/v2/resize:fill:150:100/1*gX4lPxojImcNFkmC-mwQEA.png",
    isPremium: <StarIcon />,
  },
];

const suggestUserFollow = [
  {
    id: 1,
    name: "Afrzl Stya",
    bio: "CEO of Google",
    image: DefaultImage,
  },
  {
    id: 2,
    name: "Angga Yudis",
    bio: "CEO of Facebook",
    image: DefaultImage,
  },
  {
    id: 3,
    name: "Septo",
    bio: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,",
    image: DefaultImage,
  },
];

export {
  blogTags,
  dummyTrendings,
  dummyBlogs,
  discoverTags,
  suggestUserFollow,
};
