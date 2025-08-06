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
import teamOne from "../asset/image/team-one.png";
import teamTwo from "../asset/image/team-two.png";
import teamThree from "../asset/image/team-three.png";
import teamFour from "../asset/image/team-four.png";
import teamFive from "../asset/image/team-five.png";
import teamSix from "../asset/image/team-six.png";

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

export const workSteps = [
    {
        name: "STEP 1",
        title: "We analyse needs and opportunities",
        description: "We try our best to understand your key needs and share our experience."
    },
    {
        name: "STEP 2",
        title: "We provide the base version of the solution",
        description: "We launch a test system immediately to gather feedback and train users."
    },
    {
        name: "STEP 3",
        title: "We adapt the solution to your needs",
        description: "We configure the solution, feed it with data and build interfaces with other systems."
    },
    {
        name: "STEP 4",
        title: "We launch the production solution",
        description: "We take care of configuration, implementation, security and smooth system start-up."
    },
    {
        name: "STEP 5",
        title: "We develop and update the solution",
        description: "We ensure the continuity of the system and build new components together."
    },
];

export const foundations = [
    {
        title: "Team spirit",
        body: "We are driven by the energy of joint action and the desire to overcome obstacles that appear on our way. Each of us has many roles, which we adapt to the needs, project realities or... the weather forecast and the trail."
    },
    {
        title: "The joy of creation",
        body: "The recipe for a successful expedition is the right proportion of new impressions, joy and... peace, which is the consequence of appropriate planning, preparation and logistical security of subsequent stages of the journey."
    },
    {
        title: "Deep trust",
        body: "An expedition into the unknown requires mutual trust, stemming from care and respect for all participants in the mission. It results in effective cooperation and team synergy, which builds commitment and intrinsic motivation for action."
    },
];

export const organizationalCharacter = [
    {
        title: "We practice agile",
        body: "We focus on agility and flexibility in our operations to maximise the value of the solutions we deliver and make the most of our energy."
    },
    {
        title: "We create with passion",
        body: "We are building an organisation bringing together experienced professionals and ambitious technology adepts who share a passion for creating high-end IT solutions."
    },
    {
        title: "We raise the bar",
        body: "We believe that high quality products and services are the best reflection of who we are, and therefore they are worth the wait and price."
    },
    {
        title: "We employ the ambitious",
        body: "We believe that determination to strive and the conviction that limitations are only in our heads are key factors for success and a guarantee of a happy life."
    },
];

export const teamGallery = [
    {
        title: "Member One",
        url: teamOne
    },
    {
        title: "Member Two",
        url: teamTwo
    },
    {
        title: "Member Three",
        url: teamThree
    },
    {
        title: "Member Four",
        url: teamFour
    },
    {
        title: "Member Five",
        url: teamFive
    },
    {
        title: "Member Six",
        url: teamSix
    },
];
