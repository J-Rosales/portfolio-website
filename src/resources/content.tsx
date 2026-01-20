import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "José",
  lastName: "Rosales",
  name: `José Rosales`,
  role: "Senior Unity Developer & Tooling Engineer",
  avatar: "/images/avatar.jpg",
  email: "jrosalesdev@proton.me",
  location: "America/Matamoros",
  languages: ["English", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <></>,
  description: <></>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "Contact",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/J-Rosales",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jose-rosales-964360160/",
    essential: true,
  },
  {
    name: "Steam Developer",
    icon: "steam",
    link: "https://store.steampowered.com/search/?developer=Cryomancerlex",
    essential: true,
  },
  {
    name: "Itch Page",
    icon: "itchio",
    link: "https://cryomancerlex.itch.io/",
    essential: true,
  }
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `${person.name} | Game Developer`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Game developer with a passion with an interest in early medieval history, prosopography, and creating compelling fictional worlds.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience & Projects",
    experiences: [
      {
        company: "Self-Employed",
        timeframe: "Nov 2024 - Present",
        role: "Self-Employed",
        achievements: [
          <>
            Developed low-scope games across multiple genres, including:<br/>
            Strategy, First-Person Action, Reverse Bullet-hell ("Survivor-Like"), and Incremental Clicker.
          </>,
        ],
        images: [
          {
            src: "/images/projects/coinflipIcon.png",
            alt: "Conflip Prison, a non-Idle clicker game.",
            width: 9,
            height: 7,
          },
          {
            src: "/images/projects/grimmisIcon.png",
            alt: "Midnight at Grimmi's, a VTuber-themed Survivor-like game.",
            width: 9,
            height: 7,
          },
          {
            src: "/images/projects/bitrotIcon.png",
            alt: "Bitrot, a game jam entry for ShroomJam 2024",
            width: 9,
            height: 7,
          },
          {
            src: "/images/projects/martialIcon.png",
            alt: "Martial Tactics, a low-poly strategy RPG.",
            width: 9,
            height: 7,
          }
        ],
      },
      {
        company: "Hopeless Gaming",
        timeframe: "May 2021 - Nov 2024",
        role: "Senior Game Designer",
        achievements: [
          <>
            Led cross-functional development efforts, coordinating and mentoring a team of developers to deliver production-ready game features
          </>,
          <>
            Integrated live-ops infrastructure including analytics, monetization, and in-app purchases for the Google Play ecosystem.
          </>,
          <>
            Contributed the entirety of the game's visuals and 90% of sounds effects and music.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Autonomous State University of Tamaulipas",
        description: <>B.S. in Computer Engineering, class of 2016</>,
      }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Tools & Technologies",
    skills: [
      {
        title: "Game Asset Creation",
        description: (
          <>Generalist knowledge in for Digital Art, 3D Modelling, Texturing, and Music Production</>
        ),
        tags: [
          {
            name: "Photoshop",
            icon: "photoshop",
          },
          {
            name: "Blender",
            icon: "blender",
          },
          {
            name: "FL Studio",
            icon: "flstudio",
          }
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Placeholder",
  description: `Placeholder`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Placeholder`,
  description: `Placeholder`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
