module.exports = {
  siteMetadata: {
    title: `Keystone Academy`,
    description: `Keystone Academy's Temporary Website`,
    author: `Marketing and Communications Department, Keystone Academy`,
    menuLinks: [
      {
        name: "About Us",
        link: "/about-us",
        subMenu: [
          {
            name: "Welcome from Head of School",
            link: "/welcome-from-head-of-school",
          },
          {
            name: "Our Mission",
            link: "/our-mission",
          },
          {
            name: "Our Shared Values",
            link: "/our-shared-values",
          },
          {
            name: "World School",
            link: "/world-school",
          },
          {
            name: "Head of School's Corner",
            link: "/head-of-schools-corner",
          },
          {
            name: "School Wide Strategic Action Plan",
            link: "/school-wide-strategic-action-plan",
          },
          {
            name: "FAQ",
            link: "/faq",
          },
          {
            name: "An Important Statement",
            link: "/an-important-statement",
          },
        ],
      },
      {
        name: "Leadership",
        link: "/leadership",
        subMenu: [
          {
            name: "Academic Leadership Team",
            link: "/academic-leadership-team",
          },
          {
            name: "Business Leadership Team",
            link: "/business-leadership-team",
          },
        ],
      },
      {
        name: "Admission",
        link: "/admission",
        subMenu: [
          {
            name: "Welcome",
            link: "/welcome",
          },
          {
            name: "Admission Policy",
            link: "/admission-policy",
          },
          {
            name: "How to Apply",
            link: "/how-to-apply",
          },
          {
            name: "Meet the Admission Team",
            link: "/meet-the-admission-team",
          },
          {
            name: "Request Information",
            link: "/request-information",
          },
          {
            name: "Admission Events",
            link: "/admission-events",
          },
          {
            name: "FAQ",
            link: "/faq",
          },
        ],
      },
      {
        name: "Our Program",
        link: "/our-program",
        subMenu: [
          {
            name: "Learning During Covid-19",
            link: "/learning-during-covid-19",
          },
          {
            name: "School Wide Definition of Learning",
            link: "/school-wide-definition-of-learning",
          },
          {
            name: "China: The Thread from Which Our Curriculum is Woven",
            link: "/china-the-thread-from-which-our-curriculum-is-woven",
          },
          {
            name: "Primary School",
            link: "/primary-school",
          },
          {
            name: "Middle School",
            link: "/middle-school",
          },
          {
            name: "High School",
            link: "/high-school",
          },
          {
            name: "Keystone Activities Program",
            link: "/keystone-activities-program",
          },
          {
            name: "Academic Integrity",
            link: "/academic-integrity",
          },
          {
            name: "IB Corner",
            link: "/ib-corner",
          },
        ],
      },
      {
        name: "Student Life",
        link: "/student-life",
        subMenu: [
          { name: "Welcome", link: "/welcome" },
          {
            name: "Life at Keystone",
            link: "/link-at-keystone",
          },
          {
            name: "Advising",
            link: "/advising",
          },
          {
            name: "Residential Life",
            link: "/residential-life",
          },
          {
            name: "Day Student",
            link: "/day-student",
          },
          {
            name: "Community Service Learning",
            link: "/community-service-learning",
          },
          {
            name: "Round Square",
            link: "/round-square",
          },
        ],
      },
      {
        name: "News & Events",
        link: "/news-and-events",
        subMenu: [
          {
            name: "School Calendar",
            link: "/school-calendar",
          },
        ],
      },
      {
        name: "Summer",
        link: "/summer",
        subMenu: [
          {
            name: "English Immersion Program",
            link: "/english-immersion-program",
          },
          {
            name: "APEX Program",
            link: "/apex-program",
          },
          {
            name: "faq",
            link: "/faq",
          },
          {
            name: "Employment",
            link: "/employment",
          },
          {
            name: "Contact Us",
            link: "/contact-us",
          },
        ],
      },
      {
        name: "Employment",
        link: "/employment",
        subMenu: [
          {
            name: "Welcome",
            link: "/welcome",
          },
          {
            name: "Teaching at Keystone Academy",
            link: "/teaching-at-keystone-academy",
          },
          {
            name: "Salary & Benefits",
            link: "/salary-and-benefits",
          },
          {
            name: "Current Openings",
            link: "/current-openings",
          },
          {
            name: "Life in Beijing",
            link: "/life-in-beijing",
          },
          {
            name: "Meet Our Teachers",
            link: "/meet-our-teachers",
          },
        ],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}
