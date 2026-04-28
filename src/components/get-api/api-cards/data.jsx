import { FaMoneyBillWave } from "react-icons/fa";
import { MdWarning } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

//--------------------------------------------------------------------------
import { MdNotificationsActive } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";

export const cardData = [
  {
    id: 1,
    img: <FaMoneyBillWave />,
    title: "Money Disappear Mysteriously",
    description:
      "Without tracking. Small purchases add up quickly,leaving you wondering where your paycheck went.",
    color: "#4CAF50",
    bgColor: "#f5f5dc",
    backgroundCard: "var(--background_color)",
  },
  {
    id: 2,
    img: <AiOutlineSearch />,
    title: "No Clear Spending Patterns",
    description:
      "You can`t improve what you don`t measure. Without insights into your spending habits, it`s impossible to make informed financial decisions",
    color: "#1e90ff",
    bgColor: "#e6f0fa",
    backgroundCard: "var(--background_color)",
  },
  {
    id: 3,
    img: <MdWarning />,
    title: "Budget Overruns Go Unnoticed",
    description:
      "By the time you realize you`ve overspent, it`s too late. Real-time budget tracking helps you stay on course.",
    color: "#F44336",
    bgColor: "#fff8dc",
    backgroundCard: "var(--background_color)",
  },
];
//----------------------------------------------------------------------------
export const HowCard = [
  {
    id: 1,
    img: <AiOutlineSearch />,
    title: "Smart Tracking",
    description:
      "Automatically capture and log expenses with intelligent receipt scanning and data extraction",
    color: "green",
    bgColor: "#a9d6e5",
    backgroundCard: "#fff",
  },
  {
    id: 2,
    img: <MdNotificationsActive />,
    title: "Budget Alerts",
    description:
      "Get real-time notifications when you`re approaching or exceeding your budget limits.",
    color: "#fff",
    bgColor: "#ff5252",
    backgroundCard: "#fff",
  },
  {
    id: 3,
    img: <FaChartPie />,
    title: "Visual Reports",
    description:
      "Beautiful charts and graphs that make understanding your finances simple and intuitive",
    color: "#0d47a1",
    bgColor: "#e3f2fd",
    backgroundCard: "#fff",
  },
];
//--------------------------------------------------------------------------------
export const OpinionCard = [
  {
    id: 1,
    star_img: "★★★★☆",
    description:
      "ExpenseFlow saves me at least 5 hours a month managing my business expenses.I save at least 5hours every month on bookkeeping!",

    person_img: "/person1.jpg",
    person_names: "Sarah Johnson",
    job: "Freelance Designer",
  },
  {
    id: 2,
    star_img: "★★★★★",
    description:
      "The auto-categorization is incredibly accurate. I can finally see where my money is going and make smarter decisions.",

    person_img: "/person2.jpg",
    person_names: "Michael Chen",
    job: "Freelance Designer",
  },
  {
    id: 3,
    star_img: "★★★★★",
    description:
      "Budget alerts have saved me from overspending multiple times. This app pays for itself in the money it helps me save.",

    person_img: "/person3.jpg",
    person_names: "Emily Rodriguez",
    job: "Freelance Designer",
  },
];
