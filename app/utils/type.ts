export interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
}

interface TeamCategory {
  category: string;
  members: TeamMember[];
}

export const teamsData: TeamCategory[] = [
  {
    category: "Management Team",
    members: [
      {
        id: 1,
        name: "John Doe",
        title: "Chief Executive Officer",
        image: "/images/team/ceo.jpg",
      },
      {
        id: 2,
        name: "Jane Smith",
        title: "Chief Operating Officer",
        image: "/images/team/coo.jpg",
      },
    ],
  },
  {
    category: "Engineering Team",
    members: [
      {
        id: 3,
        name: "Emma Wilson",
        title: "Lead Engineer",
        image: "/images/team/lead-engineer.jpg",
      },
      {
        id: 4,
        name: "Liam Taylor",
        title: "Software Engineer",
        image: "/images/team/software-engineer.jpg",
      },
    ],
  },
];
