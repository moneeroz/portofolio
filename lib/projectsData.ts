import KitchenKeeperImg from "@/public/assets/projects/kitchenkeeper.jpg";
import opentableImg from "@/public/assets/projects/opentable.png";
import rrImg from "@/public/assets/projects/reciperift.png";
import nitroImg from "@/public/assets/projects/nitro.png";
import homeImg from "@/public/assets/projects/reciperift/home.png";
import animationsImg from "@/public/assets/projects/reciperift/animations.gif";
import authImg from "@/public/assets/projects/reciperift/auth.png";
import basketImg from "@/public/assets/projects/reciperift/basket.png";
import bottomsheetImg from "@/public/assets/projects/reciperift/bottomsheet.png";
import detailsImg from "@/public/assets/projects/reciperift/details.png";
import favouritesImg from "@/public/assets/projects/reciperift/favourites.png";
import grocerylistImg from "@/public/assets/projects/reciperift/grocerylist.png";
import homeDental from "@/public/assets/projects/peace-dental/home.png";
import loginDental from "@/public/assets/projects/peace-dental/login.png";
import overviewDental from "@/public/assets/projects/peace-dental/overview.png";
import appointmentsDental from "@/public/assets/projects/peace-dental/appointments.png";
import invoicesDental from "@/public/assets/projects/peace-dental/invoices.png";
import patientsDental from "@/public/assets/projects/peace-dental/patients.png";
import revenueDental from "@/public/assets/projects/peace-dental/revenue.png";
import mobileDental from "@/public/assets/projects/peace-dental/mobile.png";
import backendDental from "@/public/assets/projects/peace-dental/backend.png";

export const mainProject = [
  {
    slug: "peace-dental",
    title: "Peace Dental",
    backgroundImg: homeDental,
    projectUrl: "/projects/peace-dental",
    tech: "Angular",
    stack: "Angular / Node / Postgres",
    overview:
      "Peace Dental is a comprehensive web application designed for dental clinics to efficiently manage patients, appointments, invoices, and revenue. The application features simple ui and intuitive navigation, making it easy for both doctors and dental staff to access and manage their data. The project is built using Angular and TypeScript, and utilizes PostgreSQL for database management. Additionally, the application incorporates role-based access control, JWT authentication, and guarded routes to ensure secure access to sensitive areas. Overall, Peace Dental aims to provide a user-friendly and efficient solution for managing dental practices.",
    repoLink: "https://github.com/moneeroz/Peace-dental",
    demoSiteLink: "https://peace-ten.vercel.app/home",
    technologies: [
      "Angular",
      "TypeScript",
      "angular-calender",
      "ng-print",
      "ngx-flatpickr",
    ],
    images: [
      { title: "Home Page", img: homeDental },
      { title: "Login Page", img: loginDental },
      { title: "Overview Page", img: overviewDental },
      { title: "Appointments Page", img: appointmentsDental },
      { title: "Invoices Page", img: invoicesDental },
      { title: "Patients Page", img: patientsDental },
      { title: "Revenue", img: revenueDental },
      { title: "Mobile View", img: mobileDental },
    ],
    description:
      "Peace Dental is a comprehensive web application designed for dental clinics to efficiently manage patients, appointments, invoices, and revenue. The application features simple ui and intuitive navigation, making it easy for both doctors and dental staff to access and manage their data. Additionally, the application incorporates role-based access control, JWT authentication, and guarded routes to ensure secure access to sensitive areas.",
  },
  {
    slug: "peace-dental-webapi",
    title: "Peace Dental Web API",
    backgroundImg: backendDental,
    projectUrl: "/projects/peace-dental-wep-api",
    tech: "Asp.net Core & C#",
    stack: "Asp.net Core / C# / Postgres",
    overview:
      "Asp.net Core MVC Web API that uses JWT authentication, ASP.NET Core Identity and Entity Framework to manage the Postgres database.",
    repoLink: "https://github.com/moneeroz/peace-dental-webapi",
    demoSiteLink: "",
    technologies: [
      "Asp.net Core",
      "C#",
      "Postgres",
      "Entity Framework",
      "ASP.NET Core Identity",
      "JWT Bearer Authentication",
    ],
    description:
      "Peace Dental Web API is fast and robust Asp.net Core Web API that uses JWT authentication, ASP.NET Core Identity and Entity Framework to manage the Postgres database.",
  },
];

export const previousProjects = [
  {
    slug: "recipe-rift",
    title: "RecipeRift",
    backgroundImg: rrImg,
    projectUrl: "/projects/recipe-rift",
    tech: "React Native & Expo & Nitro",
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
      { title: "Animations", img: animationsImg },
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
