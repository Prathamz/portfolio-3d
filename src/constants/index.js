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
      company_name: "HomeLane, Banglore",
      icon: homelane,
      iconBg: "#383E56",
      date: "June 2022 - Present",
      points: [
        "Developed and maintained a modular and reusable codebase, utilizing libraries and tools such as Redux, React Router, and Webpack to facilitate code sharing and improve development speed and consistency.",
        "As part of the D2M programs, I focused on adding new features, making enhancements, and fixing bugs, which contributed to reducing order closure time less than 24 hours was taken from 50% to 57%.",
        "During feedback sessions with designers, I contributed to addressing and closing 97.8% of very high and 91% of high priority tasks, which facilitated faster adaptation of the tool by designers.",
        "Worked on adding the new FalseCeiling feature to the spacecrafts HDS system, with end to end quotation flow using ReactJS and GoJS floorplanner",
        "Involved in PRD discussions and worked until sign-off to production along with technical support post-deployment. This had a positive impact on business, resulting in increased profits and a higher number of orders.",
        "Worked on the 2DD tool, which involved generating, reviewing, and exporting design PDFs developed using ReactJS for the UI and Fabric.js for the canvas.",
        "Collaborated with backend developers to integrate front-end and back-end functionality, leveraging RESTful APIs and GraphQL to ensure data transfer between the two layers.",
        "Followed agile method with Web standards, coordinated with QA team to deliver end to end product along with DTR and RCA to support the testings"      
      ],
    },
    {
      title: "Software Engineer 1",
      company_name: "Juniper Networks pvt ltd, Banglore",
      icon: juniper,
      iconBg: "#E6DEDD",
      date: "Mar 2021 - June 2022",
      points: [
        "Owning a feature that allows closing a PR automatically if its in verify resolution state. UI includes a list of actions.Components are designed and developed using ReactJS, Redux HTML, CSS.",
        "Worked on comparison of script submissions, baseline submissions, core, and PR tracking which included multiple interactions with backend and calculations",
        "Developed and maintained reusable ReactJS components and libraries, reducing code duplication and improving code maintainability and scalability.",
        "Users were given an option to enable Auto PR validation with checkbox : Proactively worked on enhancing the feature and added additional feature of displaying the script queues and image location details for the Auto PR.",
        "Worked on debugging and troubleshooting issues that arose during the development process, using tools such as Chrome DevTools and React Developer Tools to identify and fix bugs quickly and efficiently.",
        "Hands-on experience using Git and SVN for code tracking. Effectively participated in code reviews and Jira tickets are handled for bug-fixing, feature enhancements. Involved in building a new team. Created SharePoint and training for various sources",
      ],
    },
    {
      title: "Software Enginner",
      company_name: "Apisero, Banglore",
      icon: apisero,
      iconBg: "#383E56",
      date: "Oct 2020 - March 2021",
      points: [
        "Actively participated in Mulesoft training and cleared MuleSoft certification.",
        "Worked on basic flows of MuleSoft,building flows using mule 4, transforming data using datawave.",
        "Experience in working with cloudhub",
        "Work experience with Anypoint studio and Anypoint Platform for designing , developing and deploying the integrated APIs.",
        "Hands-on experience working with Jenkins, using CI/CD pipeline, Munit for testing and Jira"  
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Juniper Networks pvt ltd, Banglore",
      icon: juniper,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - June 2020",
      points: [
        "Worked on problem statement by developing automation tool using python. The cron based scheduler was designed to handle the manual actions automatically every day and log the reports.",
        "To maintain the records and to store the validation details of every day PSQL was used for database operation. And to notify the details of validation to the responsible person of PR, the mail formatting was designed using HTML, CSS, and Javascript.",
        "Integrated various python libraries to build end to end design. The entire setup was made on a shell server, Linux commands were used to process the data.",
        "Documentation and regressive testing was done in every phase. API testings are done using Postman. PPT and knowledge sharing sessions were carried out for the same.",
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