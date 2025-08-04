import { FacebookIcon, LinkedInIcon } from "../asset";
import homeHeaderImgI from "../asset/image/home-header.png";
import solutionHeaderImgI from "../asset/image/solution-header.png";
import aboutHeaderImg from "../asset/image/about-header.png";
import ITSecuritySolutions from "../asset/image/it-security-solutions-bg.png";
import dedicatedPrograms from "../asset/image/dedicated-programs-solution.png";
import ITServices from "../asset/image/it-services-solutions.png";
import provenExpertise from "../asset/icon/proven-expertise-icon.svg";
import customerCentric from "../asset/icon/customer-centric-icon.svg";
import globalReachLocalTouch from "../asset/icon/global-reach-local-touch-icon.svg";
import webSolutionThumbnail from "../asset/image/web-solution-thumbnail.png";
import UIInterfaceThumbnail from "../asset/image/ui-interface-thumbnail.png";
import webInterfaceThumbnail from "../asset/image/web-interface-thumbnail.png";

export const navLinks = [
    {
        name: "About",
        url: "/about"
    },
    {
        name: "Solution",
        url: "/solution"
    },
    {
        name: "Project",
        url: "/project"
    },
    {
        name: "Our Team",
        url: "/team"
    },
    {
        name: "Blog",
        url: "/blog"
    },
];

export const socialMedia = [
    {
        name: "Facebook",
        icon: <FacebookIcon />,
        url: ""
    },
    {
        name: "LinkedIn",
        icon: <LinkedInIcon />,
        url: ""
    },
];

export const headerImages = {
    "about": [aboutHeaderImg],
    "home": [homeHeaderImgI, solutionHeaderImgI, homeHeaderImgI],
    "solution": [homeHeaderImgI, solutionHeaderImgI, homeHeaderImgI],
}

export const footerInfo = {
    "OFFICE": ["ul. Mińska 38", "54-610 Wrocław", "Nigeria"],
    "CONTACT": ["+48 885 885 227", "info@blqdigitalconsulting.com"],
};

export const solutions = [
    {
        italizedTitle: "IT Security",
        romanTitle: "Solutions",
        description: "Strengthen your defenses with advanced solutions,including perimeter security, Zero Trust network architecture, endpoint security, and comprehensive data protection.",
        bg: ITSecuritySolutions
    },
    {
        italizedTitle: "Dedicated",
        romanTitle: "Programs",
        description: 'We build "tailor-made" software from conception to maintenance based on modules of our proprietary EXSO+ platform',
        bg: dedicatedPrograms
    },
    {
        italizedTitle: "IT",
        romanTitle: "Services",
        description: "We support our clients by sharing ourknowledge and experience with them Audits and consulting, Implementation and development of systems, and Implementation and development of systems",
        bg: ITServices
    },
];

export const visionStats = {
    "years of experience": 15,
    "large projects": 20,
    "users": 10000
};

export const distinguishers = [
    {
        icon: provenExpertise,
        romanTitle: "Proven",
        italizedTitle: "Expertise",
        body: "Years of successful partnership and solutions delivered.",
        bgColor: "#1B1B1B"
    },
    {
        icon: customerCentric,
        romanTitle: "Customer-Centric",
        italizedTitle: "Approach",
        body: "We don’t just work for you; we work with you.",
        bgColor: "#2B2B2B"
    },
    {
        icon: globalReachLocalTouch,
        romanTitle: "Global Reach,",
        italizedTitle: "Local Touch ",
        body: "A global network with personalized attention.",
        bgColor: "#323232"
    },
];

export const testimonials = [
    {
        reviewer: "Jenny Wilson",
        jobtitle: "Solar energy service",
        stars: 5,
        review: "Flow transformed my energy use. Efficient, green tech, outstanding service!",
    },
    {
        reviewer: "Ama Ampomah",
        jobtitle: "CEO & Founder Inc.",
        stars: 5,
        review: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit.",
    },
    {
        reviewer: "Ofofonono Umoren",
        jobtitle: "Head, Projects BU",
        stars: 5,
        review: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit.",
    },
];

export const blogArticles = [
    {
        category: "Web Solution",
        title: "Make a better website solution for your product",
        thumbnail: webSolutionThumbnail,
        url: "/"
    },
    {
        category: "UI Interface",
        title: "The Science of Colour Contrast — An Expert Designer’s Guide",
        thumbnail: UIInterfaceThumbnail,
        url: "/"
    },
    {
        category: "Web Interface",
        title: "SEO Made Simple: A Step by Step Guide for 2020",
        thumbnail: webInterfaceThumbnail,
        url: "/"
    },
];

export const prospectiveProblems = [
    {
        title: "You will give your customers the ability to configure products",
        body: "Even simple products can have multiple configurations. Give your customers the opportunity to configure them. using many predefined options, features and parameters. Show the qualities of your product with two- and three-dimensional visualisation."
    },
    {
        title: "You will increase sales by automating your quotations",
        body: "Offering complex products is a time-consuming and error-prone process, and the quality of the offer translates directly into customer satisfaction. Increase sales volume by streamlining the quoting process and providing customers with the information they need to make good purchasing decisions."
    },
];
