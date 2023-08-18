import KitchenKeeperImg from "@/public/assets/projects/kitchenkeeper.jpg";
import opentableImg from "@/public/assets/projects/opentable.png";

export const projectsData = [
  {
    slug: "kitchen-keeper",
    title: "Kitchen Keeper",
    backgroundImg: KitchenKeeperImg,
    projectUrl: "/projects/kitchen-keeper",
    tech: "Angular & Ionic JS",
    stack: "Angular & Ionic JS / Node & Express JS / MariaDB",
    overview:
      "Kitchen Keeper is an innovative recipe app that allows users to explore a vast collection of recipes, create personalised shopping lists, and even generate custom recipes using the power of AI. With Kitchen Keeper, you can effortlessly find new recipes, save your favourites, and plan your meals like a pro. The shopping list feature makes grocery shopping a breeze, ensuring you never miss an ingredient again! But what truly sets Kitchen Keeper apart is its AI-powered custom recipe generator. Simply input the available ingredients, and the AI will suggest unique recipes tailored to your pantry.",
    repoLink: "https://github.com/moneeroz/ion-kitchen-keeper",
    demoSiteLink:
      "https://res.cloudinary.com/dsity4tvx/video/upload/v1689808391/demo/Peek_2023-07-01_12-14_vtgqkl.webm",
    technologies: [
      "Angular",
      "Ionic",
      "NGRX Store",
      "Node JS",
      "Express JS",
      "Sequelize",
      "MariaDB",
      "OpenAI SDK",
      "Cloudinary SDK",
    ],
  },
  {
    slug: "open-table-clone",
    title: "Open Table Clone",
    backgroundImg: opentableImg,
    projectUrl: "/projects/open-table-clone",
    tech: "Next JS",
    stack: "Next JS / Tailwind / Postgres",
    overview:
      "For my Next.js learning journey, I embarked on the task of replicating the popular restaurant reservation platform, OpenTable.ca. Inspired by its sophisticated booking system and table availability logic, I aimed to enhance my understanding of Next.js while creating a functional restaurant reservation platform of my own.",
    repoLink: "https://github.com/moneeroz/open-table-clone-NextJs",
    demoSiteLink: "https://open-table-clone-5s8kbumxq-moneeroz.vercel.app/",
    technologies: [
      "React",
      "Next JS",
      "Typescript",
      "MaterialUI",
      "Tailwind",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Bcrypt",
    ],
  },
];
