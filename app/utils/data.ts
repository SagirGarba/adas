import Images from "@/public/images/Aboutus/Vision/Mission1.gif";
import Images2 from "@/public/images/Aboutus/Vision/Vision1.gif";
import Images1 from "@/public/images/home/Team/index";
import { StaticImageData } from "next/image";
import Images3 from "@/public/images/home/Testimonial/index";
import Images4 from "@/public/images/blog/index";
import SSG from "@/public/images/home/auwal.jpeg";

export const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/aboutus",
  },
  { name: "Our Work", href: "/ourwork" },
  { name: "Patnership", href: "/patnership" },

  {
    name: "Programme",
    href: "/programme",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Blog",
    href: "/blog",
  },

  {
    name: "Our Team",
    href: "/ourTeam",
  },
];

export const cards = [
  {
    image: Images2,
    title: "Our Vision",
    description:
      "Transform the state subsistence farming into commercial agriculture",
  },
  {
    image: Images,
    title: "Our Mission",
    description:
      "To build a competitive, profitable and sustainable Agribusiness sector in Adamawa State",
  },
];

export const expertsData = [
  {
    id: 1,
    image: Images1[0],
    name: "Alhaji Kashim Njidda",
    title: "Board Chairman ",
  },
  {
    id: 2,
    image: Images1[1],
    name: "Dr. Garba Ahmed",
    title: "Team Lead, Implementation",
  },
  {
    id: 3,
    image: Images1[2],
    name: "Dr. Tasiu Idi",
    title: "Head, Component One",
  },
  {
    id: 4,
    image: Images1[3],
    name: "Ikara Ubong Ikara",
    title: "Project Accountant",
  },
  {
    id: 5,
    image: Images1[4],
    name: "Mr. James Birdling",
    title: "Head, Component Two",
  },
  {
    id: 6,
    image: Images1[5],
    name: "Mrs. Joy Tarfa",
    title: "Secretary, Implementation",
  },
  {
    id: 7,
    image: Images1[6],
    name: "Yunusa Ibrahim Gafai",
    title: "Chief Operating Officer",
  },
];

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: StaticImageData; // Or StaticImageData for Next.js
}

export interface TeamCategory {
  category: string;
  members: TeamMember[];
}

export const teamsData: TeamCategory[] = [
  {
    category: "Board Membership",
    members: [
      {
        id: 1,
        name: "Alhaji Kashim Njidda",
        title: "Board Chairman",
        image: Images1[0],
      },
      {
        id: 2,
        name: "Alhaji Nuhu Umar",
        title: "Member",
        image: Images1[7],
      },
      {
        id: 3,
        name: "Alhaji Modibbo Usman Saleh",
        title: "Member",
        image: Images1[7],
      },
      {
        id: 4,
        name: "Alhaji Abdulhameed Usman",
        title: "Member",
        image: Images1[7],
      },
      {
        id: 5,
        name: "Mrs. Ekundayo Fumilayo Tomkilola",
        title: "Member/STL Trustee",
        image: Images1[7],
      },
      {
        id: 6,
        name: "Mr. Akinwumi Oni Moses",
        title: "Member/STL Trustee ",
        image: Images1[7],
      },
      {
        id: 7,
        name: "Mrs. Ekundayo Fumilayo Tomkilola",
        title: "Member/STL Trustee",
        image: Images1[7],
      },
      {
        id: 8,
        name: "Abimbola Ajinibi Adebowale",
        title: "Member/FBNQuest Trustee",
        image: Images1[7],
      },
      {
        id: 9,
        name: "Olufemi Okin Ayoola",
        title: "Member/FBNQuest Trustee",
        image: Images1[7],
      },
    ],
  },

  {
    category: "ADAS State Implementation Committee",
    members: [
      {
        id: 3,
        name: "Auwal D. Tukur",
        title: "Secretary to the Government of Adamawa",
        image: SSG,
      },
      {
        id: 1,
        name: "Dr. Garba Ahmad",
        title: "Team Lead",
        image: Images1[1],
      },
      {
        id: 2,
        name: "Mrs Joy Tarfa",
        title: "Secretary",
        image: Images1[5],
      },
    ],
  },

  {
    category: "Management Team",
    members: [
      {
        id: 1,
        name: "Yunusa Ibrahim Gafai",
        title: "Chief Operating Officer",
        image: Images1[6], // ✅ Correct type: string (URL) or StaticImageData
      },
      {
        id: 2,
        name: "Dr. Tasiu Yusuf Idi",
        title: "Head, Component One",
        image: Images1[2],
      },
      {
        id: 3,
        name: "Mr. James Birdling",
        title: "Head, Component Two",
        image: Images1[4],
      },
      {
        id: 4,
        name: "Ikara Ubong Ikara",
        title: "Project Accountant",
        image: Images1[3],
      },
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Aishatu Usman",
    feedback:
      "Unity Farmers Cooperative, Mubi North, Adamawa State, Nigeria: With ADASP support, our members have accessed cash loans, solar and engine water pumps, fertilizers, and essential farming equipment, significantly improving productivity in our community.",
    image: Images3[0],
  },
  {
    id: 2,
    name: "Awwal Hayatu",
    feedback:
      "Women in Agriculture Cooperative, Hong, Adamawa State, Nigeria: ADASP has enabled us to access quality farming equipment, fertilizers, and irrigation tools, making a real difference for women farmers in our community.",
    image: Images3[1],
  },
  {
    id: 3,
    name: "Emmanuel Peter",
    feedback:
      "Rural Farmers Development Cooperative, Numan, Adamawa State, Nigeria: With ADASP support, we have received essential poultry farming equipment and fertilizers, boosting both crop and livestock production in our area.",
    image: Images3[2],
  },
  {
    id: 4,
    name: "Habibu Ibrahim",
    feedback:
      "Bright Future Women Farmers Cooperative, Yola South, Adamawa State, Nigeria: ADASP has provided us with vital farming equipment and fertilizers, empowering our women farmers and increasing food production in our LGA.",
    image: Images3[3],
  },
  {
    id: 5,
    name: "Hauwa Mohammed",
    feedback:
      "Green Growth Farmers Cooperative, Fufore, Adamawa State, Nigeria: The solar water pumps and fertilizers from ADASP have greatly improved our farming efficiency and increased yields for all our members.",
    image: Images3[4],
  },
  {
    id: 6,
    name: "Hauwa Yunusa",
    feedback:
      "Rural Farmers Development Cooperative, Numan, Adamawa State, Nigeria: With ADASP support, we have received essential poultry farming equipment and fertilizers, boosting both crop and livestock production in our area.",
    image: Images3[5],
  },
  {
    id: 7,
    name: "Jennifar Ishaya",
    feedback:
      "Women in Agriculture Cooperative, Hong, Adamawa State, Nigeria: ADASP has enabled us to access quality farming equipment, fertilizers, and irrigation tools, making a real difference for women farmers in our community.",
    image: Images3[6],
  },
  {
    id: 8,
    name: "Judith Jacob",
    feedback:
      "Adamawa Agro-Tech Cooperative, Demsa, Adamawa State, Nigeria: The financial and technical support from ADASP has strengthened our cooperative, allowing us to invest in modern farming techniques and increase our output.",
    image: Images3[7],
  },
  {
    id: 20,
    name: "Nuruddeen Abdullahi",
    feedback:
      "New Vision Farmers Cooperative, Girei, Adamawa State, Nigeria: Through ADASP, we now have access to essential farming equipment and funding, helping our members achieve better harvests and sustainable farming practices.",
    image: Images3[8],
  },

  {
    id: 9,
    name: "Rilwanu Dan Buram",
    feedback:
      "Victory Farmers Cooperative, Song, Adamawa State, Nigeria: ADASP has provided our members with much-needed agricultural inputs, including fertilizers and water pumps, ensuring we can farm efficiently year-round.",
    image: Images3[9],
  },
  {
    id: 10,
    name: "Sale Dala",
    feedback:
      "Farmers Prosperity Cooperative, Lamurde, Adamawa State, Nigeria: With ADASP help, we now have access to poultry farming equipment and irrigation tools, significantly improving our members agricultural output.",
    image: Images3[10],
  },
  {
    id: 11,
    name: "Shuaibu Dahiru",
    feedback:
      "Future Farmers Cooperative, Toungo, Adamawa State, Nigeria: ADASP has made modern farming equipment and financial aid accessible to us, improving productivity and food security in our LGA.",
    image: Images3[11],
  },
  {
    id: 12,
    name: "Solomon Luka",
    feedback:
      "Harvest Boost Cooperative, Jada, Adamawa State, Nigeria: Thanks to ADASP, our members now have access to solar water pumps and fertilizers, making farming more sustainable and profitable.",
    image: Images3[12],
  },

  {
    id: 13,
    name: "Yohana Thimoty",
    feedback:
      "Ganye, Adamawa State, Nigeria: With ADASP support, I received an engine water pump and fertilizers, which have helped me improve my farms productivity and income.",
    image: Images3[13],
  },
];

export const blogs = [
  {
    id: 1,
    title:
      "THE ADAS-P JOURNEY SO FAR: TRANSFORMING AGRICULTURE IN ADAMAWA STATE",
    description:
      "The Adamawa Agribusiness Support Programme (ADAS-P) has been at the forefront of agribusiness transformation, ...",
    image: Images4[0],
    link: "/blog/blog1",
  },
  {
    id: 2,
    title:
      "2024 Seed Connect Africa: Adamawa’s ADAS-P to Partner with 6 Organizations to Promote Value Chain",
    description:
      "The Adamawa State Agribusiness Support Programme (ADAS-P) has expressed its readiness to collaborate with six organizations that have shown interest in partnering ...",
    image: Images4[9],
    link: "/blog/blog2",
  },
  {
    id: 3,
    title:
      "ADAS-P Organises One Day Workshop for Strategy Formulation & Stakeholder Engagement on Aquaculture",
    description:
      "The Adamawa State Agribusiness Support Programme ADAS-P has has organised a one day workshop on developing aquaculture sub sector in Adamawa state and ...",
    image: Images4[10],
    link: "/blog/blog3",
  },
  {
    id: 4,
    title:
      "ADAS-Programme Ltd. Making Adamawa An Icon At The 2024 Northeast Domestic Trade Fair.",
    description:
      "The Adamawa State Agribusiness Support Programme Ltd. ADAS-P is making spectacular presentations and market linkages at the 15th Edition of the Nigeria Northeast Domestic Trade Fair holding",
    image: Images4[11],
    link: "/blog/blog4",
  },
  {
    id: 5,
    title:
      "ADAS-P Flags Off Community Engagements On Cluster Formation, Farmer Database Devt",
    description:
      "The Adamawa State Agribusiness Support Programme, ADAS- P has simultaneously flagged off community stakeholders’ engagements for identification of community irrigation sites,",
    image: Images4[12],
    link: "/blog/blog5",
  },
  {
    id: 6,
    title:
      "YOLA NORTH LGA CHAIR COMMENDS ADAS-P INNOVATIONS, EXPRESSES READINESS FOR PARTNERSHIP",
    description:
      "The Executive Chairman of Yola North Local Government Council, Hon. Barr. Jibril Ibrahim, has commended the Adamawa State Agribusiness Support Programme (ADAS-P) for",
    image: Images4[17],
    link: "/blog/blog6",
  },
];

export const data = [
  {
    id: 1,
    grain: "Mubi Grains Market - Sabo",
    livestock: "Mubi International livestock market",
  },
  {
    id: 2,
    grain: "Mubi Grains Market – Dole",
    livestock: "Ganye Livestock Market",
  },
  {
    id: 3,
    grain: "Toungo Grain Market",
    livestock: "Ngurore Livestock Market",
  },
  { id: 4, grain: "Ganye Grains Market", livestock: "Song Cattle Market" },
  {
    id: 5,
    grain: "Tingno Grains Market",
    livestock: "Chigari Livestock Market",
  },
  { id: 6, grain: "Gurin Grains Market", livestock: "" },
  { id: 7, grain: "5.	Gombi Grains Market", livestock: "" },
];
