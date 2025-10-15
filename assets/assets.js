import user_image from './user-image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';


export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
  {
    title: 'QuickAI- AI SaaS Platform',
    shortDescription:
      'QuickAI is a full-stack SaaS platform built using the PERN stack and Tailwind CSS, integrating the Gemini API to provide users with advanced AI-powered content generation tools....',
    fullDescription:
      'QuickAI is a full-stack SaaS platform built using the PERN stack and Tailwind CSS, integrating the Gemini API to provide users with advanced AI-powered content generation tools. The platform enables article writing, image creation, resume review, and other creative tasks through an intuitive, responsive interface. It features secure authentication using Clerk, Cloudinary for media storage, and a pricing model with free and subscription plans to ensure accessibility and scalability. APIs are tested using Postman, and the platform is optimized for performance, responsiveness, and seamless workflow, making content creation efficient across devices.',
    bgImage: '/work-5.png',
    codeLink: 'https://github.com/adityapal08/Quick-AI.git',
  },
  {
    title: 'Smart Irrigation System',
    shortDescription:
      'Practical working model based on Iot developed using Arduino, ESP8266 Wi-Fi module, and a soil moisture sensor. It continuously monitors soil moisture levels and intelligently controls...',
    fullDescription:
      'Practical working model based on Iot developed using Arduino, ESP8266 Wi-Fi module, and a soil moisture sensor. It continuously monitors soil moisture levels and intelligently controls a water pump to maintain optimal irrigation. The system also features a web-based interface hosted on the ESP8266, enabling remote monitoring and manual pump control for improved reliability during power interruptions or connectivity issues. By combining embedded systems, IoT, and web technologies, this project demonstrates a practical and sustainable solution for efficient water management in agriculture.',
    bgImage: '/work-1.png',
    codeLink: 'https://github.com/alinaroy27/Smart-Irrigation-System.git',
  },
  {
    title: 'BookWormz-Online Bookstore Website',
    shortDescription:
      'A full-stack online bookstore application built using the MERN stack. The platform provides a seamless and responsive user experience with a modern interface designed using React.js...',
    fullDescription:
      'A full-stack online bookstore application built using the MERN stack. The platform provides a seamless and responsive user experience with a modern interface designed using React.js, Tailwind CSS, and DaisyUI. It features secure user authentication (signup, login, logout), a dynamic book carousel, theme toggling, and intuitive navigation. On the backend, it integrates Node.js, Express.js, and MongoDB to manage user and book data, with APIs tested and validated using Postman. The application demonstrates strong focus on both functionality and user experience, bringing together clean UI design and efficient backend integration.',
    bgImage: '/work-2.png',
    codeLink: 'https://github.com/alinaroy27/BookWormz.git',
  },
  {
    title: 'Smart Home Automation',
    shortDescription:
      'A practical IoT-based working model that enables users to remotely control home appliances such as lights and fans through their smartphones using the Blynk platform...',
    fullDescription:
      'A practical IoT-based working model that enables users to remotely control home appliances such as lights and fans through their smartphones using the Blynk platform. The system demonstrates efficient automation, real-time monitoring, and convenience, showcasing the integration of IoT hardware with mobile-based control for a smarter living environment.',
    bgImage: '/work-3.png',
    codeLink:'',
  },
  {
    title: 'Tripzy-Travel Agency website',
    shortDescription:
      'Tripzy is a responsive travel agency website developed using HTML, CSS, and JavaScript, designed to provide users with a seamless travel planning experience....',
    fullDescription:
      'Tripzy is a responsive travel agency website developed using HTML, CSS, and JavaScript, designed to provide users with a seamless and engaging travel planning experience. The website features dedicated sections such as Bookings, Packages, Gallery, Services, Reviews, and Contact, offering a complete solution for showcasing travel deals and destinations. With its clean layout, intuitive navigation, and mobile-friendly design, Tripzy ensures accessibility across devices while maintaining a modern and professional look.',
    bgImage: '/work-4.png',
    codeLink:'https://github.com/alinaroy27/Tripzy.git',
  },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Full Stack Web Development', description: 'I build complete web applications by working on both frontend and backend, ensuring responsive designs, smooth functionality, and seamless user experiences.', link: '' },
    { icon: assets.mobile_icon, title: 'Database Management', description: 'I handle databases to keep data well-structured, secure, and easy to access, making sure everything runs smoothly behind the scenes.', link: '' },
    { icon: assets.graphics_icon, title: 'Version Control & Collaboration', description: 'I use Git and GitHub to track changes, work with teams, and keep projects organized while collaborating smoothly with others.', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'I create clean, user-friendly interfaces with a focus on good design and smooth navigation, making digital experiences enjoyable and simple.', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Java, C, Python, HTML, CSS, JavaScript' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'BTech from Dr. Sudhir Chandra Sur Institute of Technology (2026)' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Skills', description: 'ReactJs, NodeJs, ExpressJs, NextJs, MongoDB, MySQL'}
];

// export const toolsData = [
//     assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
// ];
export const toolsData = [
  { name: "Postman", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "MongoDB Compass", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS", src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  
];

