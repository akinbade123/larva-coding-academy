import card1Img from "../assets/Card1.svg";
import card2Img from "../assets/Card2.svg";
import card3Img from "../assets/Card3.png";
import card4Img from "../assets/Card4.svg";
import card5Img from "../assets/Card5.png";
import card6Img from "../assets/Card6.svg";
import card7Img from "../assets/Card7.svg";
import card8Img from "../assets/Card8.svg";
import card9Img from "../assets/Card9.svg";
import card10Img from "../assets/Card10.svg";
import card11Img from "../assets/Card11.svg";
import card12Img from "../assets/Card12.svg";
import card13Img from "../assets/Card13.svg";
import card14Img from "../assets/Card14.svg";
import card15Img from "../assets/Card15.svg";
export const modules = [
  // 1. Full Stack Coding
  {
    id: 1,
    courseId: 1,
    title: "Introduction to Full Stack Development",
    topics: 4,
  },
  { id: 2, courseId: 1, title: "HTML, CSS & Tailwind", topics: 10 },
  { id: 3, courseId: 1, title: "JavaScript & React", topics: 12 },
  { id: 4, courseId: 1, title: "Backend with Node.js", topics: 8 },
  { id: 5, courseId: 1, title: "Database & Deployment", topics: 6 },

  // 2. Front End Development
  { id: 6, courseId: 2, title: "HTML Fundamentals", topics: 6 },
  { id: 7, courseId: 2, title: "CSS & Responsive Design", topics: 8 },
  { id: 8, courseId: 2, title: "JavaScript Basics", topics: 10 },
  { id: 9, courseId: 2, title: "React.js", topics: 9 },

  // 3. Back End Development
  { id: 10, courseId: 3, title: "Server Basics & Node.js", topics: 7 },
  { id: 11, courseId: 3, title: "Express.js APIs", topics: 6 },
  { id: 12, courseId: 3, title: "Database (MongoDB/MySQL)", topics: 8 },
  { id: 13, courseId: 3, title: "Authentication & Security", topics: 5 },

  // 4. Product Design
  { id: 14, courseId: 4, title: "Design Principles", topics: 5 },
  { id: 15, courseId: 4, title: "User Research", topics: 4 },
  { id: 16, courseId: 4, title: "WireFraming & Prototyping", topics: 6 },
  { id: 17, courseId: 4, title: "Figma Mastery", topics: 7 },

  // 5. Cyber Security
  { id: 18, courseId: 5, title: "Introduction to Cyber Security", topics: 5 },
  { id: 19, courseId: 5, title: "Network Security", topics: 6 },
  { id: 20, courseId: 5, title: "Ethical Hacking", topics: 7 },
  { id: 21, courseId: 5, title: "Security Tools & Practices", topics: 5 },

  // 6. Web Design
  { id: 22, courseId: 6, title: "Design Basics", topics: 5 },
  { id: 23, courseId: 6, title: "Typography & Colors", topics: 4 },
  { id: 24, courseId: 6, title: "Layout & UX", topics: 6 },
  { id: 25, courseId: 6, title: "Responsive Web Design", topics: 5 },

  // 7. Graphic Design
  { id: 26, courseId: 7, title: "Design Fundamentals", topics: 5 },
  { id: 27, courseId: 7, title: "Photoshop & Illustrator", topics: 8 },
  { id: 28, courseId: 7, title: "Branding & Identity", topics: 6 },
  { id: 29, courseId: 7, title: "Print & Digital Design", topics: 5 },

  // 8. Data Analysis
  { id: 30, courseId: 8, title: "Introduction to Data Analysis", topics: 4 },
  { id: 31, courseId: 8, title: "Excel & Data Cleaning", topics: 7 },
  { id: 32, courseId: 8, title: "Data Visualization", topics: 6 },
  { id: 33, courseId: 8, title: "SQL & Python Basics", topics: 8 },

  // 9. Software Design
  { id: 34, courseId: 9, title: "Software Architecture", topics: 5 },
  { id: 35, courseId: 9, title: "Design Patterns", topics: 6 },
  { id: 36, courseId: 9, title: "UI/UX for Developers", topics: 5 },

  // 10. Software Development
  { id: 37, courseId: 10, title: "Programming Fundamentals", topics: 8 },
  { id: 38, courseId: 10, title: "Object-Oriented Programming", topics: 7 },
  { id: 39, courseId: 10, title: "APIs & Integration", topics: 6 },
  { id: 40, courseId: 10, title: "Project Development", topics: 10 },

  // 11. Mobile App Development
  { id: 41, courseId: 11, title: "Mobile App Basics", topics: 5 },
  { id: 42, courseId: 11, title: "React Native / Flutter", topics: 9 },
  { id: 43, courseId: 11, title: "App UI/UX", topics: 6 },
  { id: 44, courseId: 11, title: "Publishing Apps", topics: 4 },

  // 12. Full Entrepreneurship
  { id: 45, courseId: 12, title: "Business Foundations", topics: 5 },
  { id: 46, courseId: 12, title: "Marketing & Branding", topics: 6 },
  { id: 47, courseId: 12, title: "Finance & Growth", topics: 5 },

  // 13. Web3 & Blockchain
  { id: 48, courseId: 13, title: "Blockchain Basics", topics: 6 },
  { id: 49, courseId: 13, title: "Smart Contracts", topics: 7 },
  { id: 50, courseId: 13, title: "DApps Development", topics: 6 },

  // 14. Kids Coding
  { id: 51, courseId: 14, title: "Introduction to Coding", topics: 4 },
  { id: 52, courseId: 14, title: "Scratch Programming", topics: 6 },
  { id: 53, courseId: 14, title: "Fun Projects", topics: 5 },

  // 15. Basic Computer Skill
  { id: 54, courseId: 15, title: "Computer Basics", topics: 4 },
  { id: 55, courseId: 15, title: "Microsoft Office", topics: 7 },
  { id: 56, courseId: 15, title: "Internet & Email", topics: 5 },
];

export const courseData = [
  {
    id: 1,
    title: "Full Stack Coding",
    duration: "3 Months",
    price: "₦150,000",
    description:
      "Full-stack development involves both front-end and back-end coding, allowing developers to build complete web applications.",
    image: card1Img,
    descriptionCard:
      " Full stack coding refers to the ability to work on both the front-end and back-end of a web application. A full stack developer can handle everything from creating the user interface (front-end) to managing the database and server (back-end). A full stack develop er is versatile and can work on all parts of a project, making them valuable for building and maintaining complete web applications.",
    cohort: "Jan 6, 2025       -       April 6, 2025",
    location: "New Bodija, Ibadan",
    time: "8am - 10am",
    days: "Monday, Tuesday & Wednesday",
    classDuration: "2 Hours",
    new: "New Cohort:",
  
  },
  {
    id: 2,
    title: "Front End Development",
    duration: "2 Months",
    price: "₦150,000", // Based on the image showing the same badge
    description:
      "Learn how to create the visual and interactive elements of a website using HTML, CSS, and JavaScript.",
    image: card2Img,
    descriptionCard:
       "Learn how to create the visual and interactive elements of a website using HTML, CSS, and JavaScript.",
    cohort: "Jan 6, 2025       -       April 6, 2025",
    location: "New Bodija, Ibadan",
    time: "8am - 10am",
    days: "Monday, Tuesday & Wednesday",
    classDuration: "2 Hours",
    new: "New Cohort:",
  },
  {
    id: 3,
    title: "Back End Development",
    duration: "2 Months",
    price: "₦100,000",
    description:
      "Learn Python, Ruby, and databases such as MySQL or MongoDB to manage data and ensure smooth, secure website functionality.",
    image: card3Img,
    descriptionCard:"Learn Python, Ruby, and databases such as MySQL or MongoDB to manage data and ensure smooth, secure website functionality.",
    cohort: "Jan 6, 2025       -       April 6, 2025",
    location: "New Bodija, Ibadan",
    time: "8am - 10am",
    days: "Monday, Tuesday & Wednesday",
    classDuration: "2 Hours",
    new: "New Cohort:",
  },
  {
    id: 4,
    title: "Product Design",
    duration: "3 Months",
    price: "₦100,000",
    description:
      "Gain a deep understanding of essential design techniques and tools, like problem definition, user research, prototyping, and more.",
    image: card4Img,
    descriptionCard:
      "Gain a deep understanding of essential design techniques and tools, like problem definition, user research, prototyping, and more.",
    cohort: "Jan 6, 2025       -       April 6, 2025",
    location: "New Bodija, Ibadan",
    time: "8am - 10am",
    days: "Monday, Tuesday & Wednesday",
    classDuration: "2 Hours",
    new: "New Cohort:",
  },

  {
    id: 5,
    title: "Cyber Security",
    duration: "2 Months",
    price: "₦200,000",
    description:
      "Learn essential cyber security skills to protect data, prevent threats, and secure online environments with practical, hands-on training.",
    color: "bg-blue-200",
    image: card5Img,
    descriptionCard: "Learn essential cyber security skills to protect data, prevent threats, and secure online environments with practical, hands-on training.",
    cohort: "Jan 6, 2025       -       April 6, 2025",
    location: "New Bodija, Ibadan",
    time: "8am - 10am",
    days: "Monday, Tuesday & Wednesday",
    classDuration: "2 Hours",
    new: "New Cohort:",
  },
  {
    id: 6,
    title: "Web Design",
    duration: "3 Months",
    price: "₦100,000",
    description:
      "Master web design and create visually appealing, user-friendly websites with modern tools and design principles.",
    color: "bg-purple-200",
    image: card6Img,
    descriptionCard:
      "Master web design and create visually appealing, user-friendly websites with modern tools and design principles.",
    cohort: "Jan 6, 2025       -       April 6, 2025",
    location: "New Bodija, Ibadan",
    time: "8am - 10am",
    days: "Monday, Tuesday & Wednesday",
    classDuration: "2 Hours",
    new: "New Cohort:",
  },
  {
    id: 7,
    title: "Graphic Design",
    duration: "2 Months",
    price: "₦100,000",
    description:
      "Unleash your creativity with graphic design, learn the tools and techniques to create stunning visuals and professional designs.",
    color: "bg-orange-50",
    image: card7Img,
    descriptionCard:"Unleash your creativity with graphic design, learn the tools and techniques to create stunning visuals and professional designs.",
    cohort: "Jan 6, 2025       -       April 6, 2025",
    location: "New Bodija, Ibadan",
    time: "8am - 10am",
    days: "Monday, Tuesday & Wednesday",
    classDuration: "2 Hours",
    new: "New Cohort:",
  },
  {
    id: 8,
    title: "Data Analysis",
    duration: "2 Months",
    price: "₦100,000",
    description:
      "Unlock the power of data, learn to analyze, interpret, and visualize data to make informed decisions and drive insights.",
    color: "bg-pink-50",
    image: card8Img,
    descriptionCard:
      "Unlock the power of data, learn to analyze, interpret, and visualize data to make informed decisions and drive insights.",
    cohort: "Jan 6, 2025       -       April 6, 2025",
    location: "New Bodija, Ibadan",
    time: "8am - 10am",
    days: "Monday, Tuesday & Wednesday",
    classDuration: "2 Hours",
    new: "New Cohort:",
  },
  {
    id: 9,
    title: "Software Design",
    duration: "3 Months",
    price: "₦150,000",
    description:
      "Learn software design and create efficient, scalable applications with best practices for seamless user experiences.",
    color: "bg-orange-100",
    image: card9Img,
    descriptionCard:
      "Learn software design and create efficient, scalable applications with best practices for seamless user experiences.",
    cohort: "Jan 6, 2025       -       April 6, 2025",
    location: "New Bodija, Ibadan",
    time: "8am - 10am",
    days: "Monday, Tuesday & Wednesday",
    classDuration: "2 Hours",
    new: "New Cohort:",
  },
  {
    id: 10,
    title: "Software Development",
    duration: "4 Months",
    price: "₦400,000",
    description:
      "Master software development and build robust, innovative applications using the latest programming techniques and tools.",
    color: "bg-cyan-50",
    image: card10Img,
    descriptionCard: "Master software development and build robust, innovative applications using the latest programming techniques and tools.",
    cohort: "Jan 6, 2025       -       April 6, 2025",
    location: "New Bodija, Ibadan",
    time: "8am - 10am",
    days: "Monday, Tuesday & Wednesday",
    classDuration: "2 Hours",
    new: "New Cohort:",
  },
  {
    id: 11,
    title: "Mobile App Development",
    duration: "4 Months",
    price: "₦500,000",
    description:
      "Learn mobile app development, create powerful, user-friendly apps for iOS and Android using industry-leading tools.",
    color: "bg-yellow-50",
    image: card11Img,
    descriptionCard:
      "Learn mobile app development, create powerful, user-friendly apps for iOS and Android using industry-leading tools.",
    cohort: "Jan 6, 2025       -       April 6, 2025",
    location: "New Bodija, Ibadan",
    time: "8am - 10am",
    days: "Monday, Tuesday & Wednesday",
    classDuration: "2 Hours",
    new: "New Cohort:",
  },
  {
    id: 12,
    title: "Full Entrepreneurship",
    duration: "4 Months",
    price: "₦500,000",
    description:
      "Become a complete entrepreneur, learn to launch, grow, and manage a successful business from start to finish.",
    color: "bg-yellow-100",
    image: card12Img,
    descriptionCard: "Become a complete entrepreneur, learn to launch, grow, and manage a successful business from start to finish.",
    cohort: "Jan 6, 2025       -       April 6, 2025",
    location: "New Bodija, Ibadan",
    time: "8am - 10am",
    days: "Monday, Tuesday & Wednesday",
    classDuration: "2 Hours",
    new: "New Cohort:",
  },
  {
    id: 13,
    title: "Web3 & Blockchain",
    duration: "4 Months",
    price: "₦750,000",
    description:
      "Discover Web3 and blockchain and decentralized technologies shaping a secure, transparent, and innovative digital future.",
    color: "bg-blue-900",
    image: card13Img,
    descriptionCard:
      "Discover Web3 and blockchain and decentralized technologies shaping a secure, transparent, and innovative digital future.",
    cohort: "Jan 6, 2025       -       April 6, 2025",
    location: "New Bodija, Ibadan",
    time: "8am - 10am",
    days: "Monday, Tuesday & Wednesday",
    classDuration: "2 Hours",
    new: "New Cohort:",
  },
  {
    id: 14,
    title: "Kids Coding",
    duration: "4 Months",
    price: "₦50,000",
    description:
      "Empower young minds with coding, unlock creativity and future skills through fun and engaging programming activities.",
    color: "bg-blue-50",
    image: card14Img,
    descriptionCard:
      "Empower young minds with coding, unlock creativity and future skills through fun and engaging programming activities.",
    cohort: "Jan 6, 2025       -       April 6, 2025",
    location: "New Bodija, Ibadan",
    time: "8am - 10am",
    days: "Monday, Tuesday & Wednesday",
    classDuration: "2 Hours",
    new: "New Cohort:",
  },
  {
    id: 15,
    title: "Basic Computer Skill",
    duration: "2 Months",
    price: "₦50,000",
    description:
      "Master essential computer skills, navigate software, manage files, and boost productivity with easy-to-follow lessons.",
    color: "bg-orange-50",
    image: card15Img,
    descriptionCard:
      "Master essential computer skills, navigate software, manage files, and boost productivity with easy-to-follow lessons.",
    cohort: "Jan 6, 2025       -       April 6, 2025",
    location: "New Bodija, Ibadan",
    time: "8am - 10am",
    days: "Monday, Tuesday & Wednesday",
    classDuration: "2 Hours",
    new: "New Cohort:",
  },
];


// Checkout items are derived from courseData so prices always match what the course page shows.
export const cart = courseData.map(({ id, title, price }) => ({
  id,
  title,
  price: Number(price.replace(/[^0-9]/g, "")),
}));
