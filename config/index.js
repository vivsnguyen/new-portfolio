module.exports = {

    author: "@konstantinmuenster",
    siteTitle: "Vivi Nguyen's Portfolio Site",
    siteShortTitle: "Vivi Nguyen", // Used as logo text in header, footer, and splash screen
    siteDescription: "Portfolio site built using GatsbyJS.",
    siteUrl: "https://vivinguyen.dev/",
    siteLanguage: "en_US",
    siteIcon: "content/favicon.png", // Relative to gatsby-config file
    seoTitleSuffix: "Portfolio Minimal", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

    splashScreen: false, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantinmuenster",
    shownArticles: 3,
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "Github",
            url: "https://github.com/vivsnguyen"
        },
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/thuyvi-nguyen/"
        },
        {
            name: "DevPost",
            url: "https://devpost.com/vivsnguyen"
        },
    ],
  
    navLinks: {
        menu: [
            {
                name: "About Me",
                url: "/#about",
            },
            {
                name: "Projects",
                url: "/#projects",
            },
            {
                name: "Resume",
                url: "https://gist.github.com/vivsnguyen/4302a00ae4935fd0077dfda26bd0067c",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "Privacy",
            url: "/privacy"
        },
        {
            name: "Imprint",
            url: "/imprint"
        }
    ]
}