import { Candidate } from "@/types/candidate";

export const getTestCandidateData = (): Candidate => {
  return {
    name: "Robert Baratheon",
    location: "King's Landing",
    email: "rbaratheon@sevenkingdoms.com",
    websites: ["rbaratheon.com"],
    skillLists: [
      {
        category: "Military",
        skills: ["Strategy and Leadership", "Public Speaking", "Delegation"],
      },
      {
        category: "Tools",
        skills: ["Warhammer"],
      },
    ],
    previousJobs: [
      {
        id: 0,
        jobTitle: "King of the Seven Kingdoms",
        startDate: "283 AC",
        endDate: "298 AC",
        company: "Red Keep",
        responsibilities: [
          "Successfully led a kingdom of 7 formerly warring territories, uniting diverse cultures under one crown.",
          "Oversaw the transition of power following a major civil war.",
          "Instituted peace and stability (briefly) following decades of Targaryen rule.",
          "Appointed Hand of the King to manage day-to-day governance, showcasing strong delegation skills.",
        ],
      },
      {
        id: 1,
        jobTitle: "Commander - Robert's Rebellion",
        startDate: "282 AC",
        endDate: "283 AC",
        company: "Westeros",
        companyAdditionalInfo: "(Various battlefields)",
        responsibilities: [
          "Spearheaded and won a kingdom-wide uprising against House Targaryen.",
          "Personally slew Prince Rhaegar Targaryen at the Battle of the Trident.",
          "Forged strategic alliances with Houses Stark, Arryn, and Tully through diplomacy and marriage.",
        ],
      },
      {
        id: 2,
        jobTitle: "Lord of Storm's End",
        startDate: "278 AC",
        endDate: "283 AC",
        company: "Storm's End - Stormlands",
        responsibilities: [
          "Managed a key fortress and territory from a young age.",
          "Oversaw military readiness and local governance.",
          "Maintained loyalty to House Targaryen until rebellion was necessary.",
        ],
      },
    ],
    degrees: [
      {
        name: "Ward of House Arryn",
        endDate: "278 AC",
        schoolName: "The Eyrie, Vale of Arryn",
      },
    ],
    metadata: {
      webPageTitle: "Robert Baratheon | King of the Seven Kingdoms",
      pdfPageTitle: "robert-baratheon_king-of-the-seven-kingdoms",
    },
  };
};
