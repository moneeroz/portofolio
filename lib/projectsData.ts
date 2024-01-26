import KitchenKeeperImg from "@/public/assets/projects/kitchenkeeper.jpg";
import opentableImg from "@/public/assets/projects/opentable.png";
import rrImg from "@/public/assets/projects/reciperift.png";
import nitroImg from "@/public/assets/projects/nitro.png";
import homeImg from "@/public/assets/projects/reciperift/home.png";
import authImg from "@/public/assets/projects/reciperift/auth.png";
import basketImg from "@/public/assets/projects/reciperift/basket.png";
import bottomsheetImg from "@/public/assets/projects/reciperift/bottomsheet.png";
import detailsImg from "@/public/assets/projects/reciperift/details.png";
import favouritesImg from "@/public/assets/projects/reciperift/favourites.png";
import grocerylistImg from "@/public/assets/projects/reciperift/grocerylist.png";

export const mainProject = [
  {
    slug: "recipe-rift",
    title: "RecipeRift",
    backgroundImg: rrImg,
    projectUrl: "/projects/recipe-rift",
    tech: "React Native & Nitro",
    stack: "React Native & Expo / Node & Nitro / Postgres",
    overview:
      "RecipeRift is mobile recipe app that allows users to explore a vast collection of recipes, create personalised shopping lists and more.",
    repoLink: "https://github.com/moneeroz/RecipeRift",
    demoSiteLink:
      "https://res.cloudinary.com/dsity4tvx/video/upload/v1704783695/rn-recipes-demo/ukk9fdkuywbymnkivxsq.mov",
    technologies: [
      "React Native",
      "Expo",
      "Redux Tool Kit",
      "Node JS",
      "Nitro",
      "Prisma",
      "Postgres",
      "JWT",
      "Cloudinary SDK",
    ],
    images: [
      { title: "Home Page", img: homeImg },
      { title: "Recipe Details", img: detailsImg },
      { title: "User favourites", img: favouritesImg },
      { title: "Basket", img: basketImg },
      { title: "Grocery List", img: grocerylistImg },
      { title: "Bottom Sheet", img: bottomsheetImg },
      { title: "Authentication", img: authImg },
    ],
    description:
      "RecipeRift is a user friendly react native recipe app. It allows users to easily browse recipes, favourite them and add them to their basket. Users can generate grocery lists from their basket and check off items as they shop.",
  },
  {
    slug: "nitro-server",
    title: "RecipeRift Server",
    backgroundImg: nitroImg,
    projectUrl: "/projects/nitro-server",
    tech: "TypeScript & Nitro",
    stack: "TypeScript / Node & Nitro / Postgres",
    overview:
      "RecipeRift Nitro server is a fast and lightweight Typescript server with a REST API and POSTGRES database.",
    repoLink: "https://github.com/moneeroz/RecipeRift-nitro-server",
    demoSiteLink: "",
    technologies: [
      "TypeScript",
      "Nitro",
      "Node JS",
      "Prisma",
      "Postgres",
      "JWT",
      "Cloudinary SDK",
    ],
    description:
      "RecipeRift server is a fast and lightweight Typescript sever using Nitro unjs. It has a REST API and POSTGRES database with JWT authentication. It is used to serve data to the RecipeRift mobile app.",
  },
];

export const previousProjects = [
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
    demoSiteLink: "https://open-table-clone-eight.vercel.app/",
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
