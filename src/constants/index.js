import {
    mobile,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    git,
    figma,
    graphqlLogo,
    open,
    tekion,
    homelane,
    juniper,
    apisero,
    amazon,
    noteMe,
    weather,
    quiz
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Development",
      icon: web,
    },
    {
      title: "Web Applications",
      icon: creator,
    },
    {
      title: "UI Development",
      icon: reactjs,
    },
    {
      title: "Responsive designs",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "GraphQL",
      icon: graphqlLogo,
    },
  ];
  
  const experiences = [
    {
      title: "Software Development Engineer",
      company_name: "Tekion Corp, Banglore",
      icon: tekion,
      iconBg: "#383E56",
      date: "June 2023 - Present",
      points: [
      ],
    },
    {
      title: "Software Development Engineer",
      company_name: "HomeLane, Banglore",
      icon: homelane,
      iconBg: "#383E56",
      date: "June 2022 - May 2023",
      points: [
      ],
    },
    {
      title: "Software Engineer 1",
      company_name: "Juniper Networks pvt ltd, Banglore",
      icon: juniper,
      iconBg: "#E6DEDD",
      date: "Mar 2021 - June 2022",
      points: [
      ],
    },
    {
      title: "Software Enginner",
      company_name: "Apisero, Banglore",
      icon: apisero,
      iconBg: "#383E56",
      date: "Oct 2020 - March 2021",
      points: [
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Juniper Networks pvt ltd, Banglore",
      icon: juniper,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - June 2020",
      points: [
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "A Developer perspective to improve React application",
      name: "HomeLane",
      designation: "Dec 2022",
      image: open,
      link: "https://medium.com/homelane-tech/a-developers-perspective-to-improve-react-applications-641db287e414",
    },
    {
      testimonial:
        "Design and Integration of collaborative features along with efficient GUI to industrial robot",
      name: "Springer",
      designation: "July 2022",
      image: open,
      link: "https://link.springer.com/chapter/10.1007/978-981-19-1906-0_2",
    },
    {
      testimonial:
        "Review on designing and implementation of application load balancing using AWS",
      name: "IRJET",
      designation: "July 2020",
      image: open,
      link: "https://www.irjet.net/archives/V7/i6/IRJET-V7I61324.pdf",
    },
    {
      testimonial:
        "Designing an optimised algorithm for automation of PR state flow",
      name: "IRJET",
      designation: "June 2020",
      image: open,
      link: "https://www.irjet.net/archives/V7/i6/IRJET-V7I647.pdf",
    },
  ];
  
  const projects = [
    {
      name: "Amazon Clone",
      description:
        "Ecom application replicating AMAZON, Landing page including cart, login, signup page",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "red-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "graphql",
          color: "pink-text-gradient",
        },
      ],
      image: amazon,
      source_code_link: "https://github.com/Prathamz/amazon-clone",
    },
    {
      name: "WeatherMate",
      description:
        "Web-based simple tool shows weather for selected item.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "Axios",
          color: "yellow-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/Prathamz/Weather-app",
    },
    {
      name: "QuizMaster",
      description:
        "Simple form based quiz app which validates the answers and gives the score",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: quiz,
      source_code_link: "https://github.com/Prathamz/python-quiz-using-react",
    },
    {
      name: "keepMeNoted",
      description:
        "Simle ToDo app allowing to take note, add or delete the notes",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "red-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: noteMe,
      source_code_link: "https://github.com/Prathamz/ToDo",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };