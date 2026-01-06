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
import teamOne from "../asset/image/team-one.png";
import teamTwo from "../asset/image/team-two.png";
import teamThree from "../asset/image/team-three.png";
import teamFour from "../asset/image/team-four.png";
import teamFive from "../asset/image/team-five.png";
import teamSix from "../asset/image/team-six.png";
import projectOne from "../asset/image/project-one-thumbnail.png";
import projectTwo from "../asset/image/project-two-thumbnail.png";
import projectThree from "../asset/image/project-three-thumbnail.png";
import projectFour from "../asset/image/project-four-thumbnail.png";
import projectConfiguratDetailThumbnailOne from "../asset/image/project-configurat-detail-thumbnail-one.png";
import projectConfiguratDetailGalleryOne from "../asset/image/project-configurat-detail-gallery-one.png";
import projectConfiguratDetailGalleryTwo from "../asset/image/project-configurat-detail-gallery-two.png";
import projectConfiguratDetailGalleryThree from "../asset/image/project-configurat-detail-gallery-three.png";
import projectConfiguratDetailGalleryFour from "../asset/image/project-configurat-detail-gallery-four.png";
import propertyAdvisoryConsulting from "../asset/image/property-advisory-and-consulting-thumbnail.png";
import realEstateInvestmentSolutions from "../asset/image/real-estate-investment-solutions-thumbnail.png";
import corporateCommercialRealEstate from "../asset/image/corporate-commercial-real-estate-thumbnail.png";
import propertyManagementServices from "../asset/image/property-management-services-thumbnail.png";
import realEstateHeaderImg from "../asset/image/real-estate-header.png";

export const navLinks = [
	{
		name: "About",
		url: "/about",
	},
	{
		name: "Solution",
		url: "/solution",
	},
	{
		name: "Project",
		url: "/project",
	},
	{
		name: "Our Team",
		url: "/team",
	},
	// {
	// 	name: "Real Estate",
	// 	url: "/real-estate",
	// },
	{
		name: "Blog",
		url: "/blog",
	},
];

export const socialMedia = [
	{
		name: "Facebook",
		icon: <FacebookIcon />,
		url: "",
	},
	{
		name: "LinkedIn",
		icon: <LinkedInIcon />,
		url: "",
	},
];

export const headerImages = {
	about: [aboutHeaderImg],
	home: [homeHeaderImgI, solutionHeaderImgI, homeHeaderImgI],
	solution: [homeHeaderImgI, solutionHeaderImgI, homeHeaderImgI],
	"real-estate": [realEstateHeaderImg],
};

export const footerInfo = {
	OFFICE: ["ul. Mińska 38", "54-610 Wrocław", "Nigeria"],
	CONTACT: ["+48 885 885 227", "info@blqdigitalconsulting.com"],
};

export const solutions = [
	{
		italizedTitle: "IT Security",
		romanTitle: "Solutions",
		description:
			"Strengthen your defenses with advanced solutions,including perimeter security, Zero Trust network architecture, endpoint security, and comprehensive data protection.",
		bg: ITSecuritySolutions,
	},
	{
		italizedTitle: "Dedicated",
		romanTitle: "Programs",
		description:
			'We build "tailor-made" software from conception to maintenance based on modules of our proprietary EXSO+ platform',
		bg: dedicatedPrograms,
	},
	{
		italizedTitle: "IT",
		romanTitle: "Services",
		description:
			"We support our clients by sharing ourknowledge and experience with them Audits and consulting, Implementation and development of systems, and Implementation and development of systems",
		bg: ITServices,
	},
];

export const realEstateSolutions = [
	{
		italizedTitle: "Property Advisory",
		romanTitle: "& Consulting",
		description:
			"Unlock opportunities in high-value property markets. Our team helps you evaluate, invest, and manage risk with confidence.",
		bg: propertyAdvisoryConsulting,
	},
	{
		italizedTitle: "Real Estate",
		romanTitle: "Investment Solutions",
		description:
			"Unlock opportunities in high-value property markets. Our team helps you evaluate, invest, and manage risk with confidence.",
		bg: realEstateInvestmentSolutions,
	},
	{
		italizedTitle: "Corporate &",
		romanTitle: "Commercial Real Estate",
		description:
			"Unlock opportunities in high-value property markets. Our team helps you evaluate, invest, and manage risk with confidence.",
		bg: corporateCommercialRealEstate,
	},
	{
		italizedTitle: "Property Management",
		romanTitle: "Services",
		description:
			"Enjoy peace of mind as we handle tenant management, rent collection, and property maintenance for you.",
		bg: propertyManagementServices,
	},
];

export const visionStats = {
	"years of experience": 15,
	"large projects": 20,
	users: 10000,
};

export const distinguishers = [
	{
		icon: provenExpertise,
		romanTitle: "Proven",
		italizedTitle: "Expertise",
		body: "Years of successful partnership and solutions delivered.",
		bgColor: "#1B1B1B",
	},
	{
		icon: customerCentric,
		romanTitle: "Customer-Centric",
		italizedTitle: "Approach",
		body: "We don’t just work for you; we work with you.",
		bgColor: "#2B2B2B",
	},
	{
		icon: globalReachLocalTouch,
		romanTitle: "Global Reach,",
		italizedTitle: "Local Touch ",
		body: "A global network with personalized attention.",
		bgColor: "#323232",
	},
];

export const realEstateDifferentials = [
	{
		icon: provenExpertise,
		romanTitle: "Expertise",
		italizedTitle: "Across Industries",
		body: "Backed by years of consulting experience in technology and business.",
		bgColor: "#1B1B1B",
	},
	{
		icon: customerCentric,
		romanTitle: "Tailored",
		italizedTitle: "Solutions",
		body: "We understand every client is unique, so our approach is never one-size-fits-all.",
		bgColor: "#2B2B2B",
	},
	{
		icon: globalReachLocalTouch,
		romanTitle: "Transparency",
		italizedTitle: "& Trust",
		body: "No hidden fees, no surprises—just reliable service.",
		bgColor: "#323232",
	},
];

export const testimonials = [
	{
		reviewer: "Jenny Wilson",
		jobtitle: "Solar energy service",
		stars: 5,
		review:
			"Flow transformed my energy use. Efficient, green tech, outstanding service!",
	},
	{
		reviewer: "Ama Ampomah",
		jobtitle: "CEO & Founder Inc.",
		stars: 5,
		review:
			"Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit.",
	},
	{
		reviewer: "Ofofonono Umoren",
		jobtitle: "Head, Projects BU",
		stars: 5,
		review:
			"Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit.",
	},
];

export const prospectiveProblems = [
	{
		title: "You will give your customers the ability to configure products",
		body: "Even simple products can have multiple configurations. Give your customers the opportunity to configure them. using many predefined options, features and parameters. Show the qualities of your product with two- and three-dimensional visualisation.",
	},
	{
		title: "You will increase sales by automating your quotations",
		body: "Offering complex products is a time-consuming and error-prone process, and the quality of the offer translates directly into customer satisfaction. Increase sales volume by streamlining the quoting process and providing customers with the information they need to make good purchasing decisions.",
	},
];

export const workSteps = [
	{
		name: "STEP 1",
		title: "We analyse needs and opportunities",
		description:
			"We try our best to understand your key needs and share our experience.",
	},
	{
		name: "STEP 2",
		title: "We provide the base version of the solution",
		description:
			"We launch a test system immediately to gather feedback and train users.",
	},
	{
		name: "STEP 3",
		title: "We adapt the solution to your needs",
		description:
			"We configure the solution, feed it with data and build interfaces with other systems.",
	},
	{
		name: "STEP 4",
		title: "We launch the production solution",
		description:
			"We take care of configuration, implementation, security and smooth system start-up.",
	},
	{
		name: "STEP 5",
		title: "We develop and update the solution",
		description:
			"We ensure the continuity of the system and build new components together.",
	},
];

export const foundations = [
	{
		title: "Team spirit",
		body: "We are driven by the energy of joint action and the desire to overcome obstacles that appear on our way. Each of us has many roles, which we adapt to the needs, project realities or... the weather forecast and the trail.",
	},
	{
		title: "The joy of creation",
		body: "The recipe for a successful expedition is the right proportion of new impressions, joy and... peace, which is the consequence of appropriate planning, preparation and logistical security of subsequent stages of the journey.",
	},
	{
		title: "Deep trust",
		body: "An expedition into the unknown requires mutual trust, stemming from care and respect for all participants in the mission. It results in effective cooperation and team synergy, which builds commitment and intrinsic motivation for action.",
	},
];

export const organizationalCharacter = [
	{
		title: "We practice agile",
		body: "We focus on agility and flexibility in our operations to maximise the value of the solutions we deliver and make the most of our energy.",
	},
	{
		title: "We create with passion",
		body: "We are building an organisation bringing together experienced professionals and ambitious technology adepts who share a passion for creating high-end IT solutions.",
	},
	{
		title: "We raise the bar",
		body: "We believe that high quality products and services are the best reflection of who we are, and therefore they are worth the wait and price.",
	},
	{
		title: "We employ the ambitious",
		body: "We believe that determination to strive and the conviction that limitations are only in our heads are key factors for success and a guarantee of a happy life.",
	},
];

export const teamGallery = [
	{
		title: "Member One",
		url: teamOne,
	},
	{
		title: "Member Two",
		url: teamTwo,
	},
	{
		title: "Member Three",
		url: teamThree,
	},
	{
		title: "Member Four",
		url: teamFour,
	},
	{
		title: "Member Five",
		url: teamFive,
	},
	{
		title: "Member Six",
		url: teamSix,
	},
];

export const deliveryValues = {
	Individualize:
		"Every customer is different and seeks individual solutions. Meet the needs and ideas of customers interested in your products.",
	Complexity:
		"Even simple products can have multiple configurations. Give customers the ability to configure a product based on multiple options, features and parameters.",
	Visualization:
		"One picture is worth more than 1,000 words. Showcase the features of your product with 2D and 3D visualization.",
};

export const projects = [
	{
		subtitle: "Unia Machines",
		tags: ["CRM", "B2B "],
		url: "/",
		thumbnail: projectOne,
		title: "Integrated B2B / B2C platform",
		description:
			"We’re a group of passionate individuals, strategists, and builders—united by a shared vision and a drive to create purposeful, human-centered experiences. Each of us brings a unique voice to the table, and together, we make it all happen.",
		items: [
			"Organising the sale of machinery",
			"400 dealers and outlets in 52 countries",
			"Presentation of over 20,000 complex products",
		],
		details: [
			{
				subtitle: "About the project",
				subHeading: "Integrated B2B / B2C platform",
				body1:
					"Integrated B2B / B2C offers our exclusive cloud-based solution that facilitates the configuration of complex products and services. It empowers customers to personalize their orders by selecting specific details, exploring available options, and enables the sales department to deliver tailor-made solutions that meet their unique needs.",
				body2:
					"Configuration, which involves enabling the selection, collation, and pricing of personalized goods and services, has become an integral aspect of modern business reality. Industries such as manufacturing, machinery, and agriculture exemplify the significance of product configuration as a crucial process that creates value in the customer-supplier relationship. These industries serve as prime examples where product configuration plays a vital role in facilitating value creation between customers and suppliers.",
				thumbnail: projectConfiguratDetailThumbnailOne,
			},
			{
				subtitle: "At the service of our clients",
				subHeading: "At the service of our clients",
				body1:
					"Every customer is different and seeks individual solutions. By providing the ability to configure the products and services offered, users of the CONFIGURAT.IO system can meet the needs and ideas of customers interested in their offerings.",
				body2:
					"Even simple products can have multiple configurations. That's why we help our customers create the ability to configure a product based on multiple options, features and parameters, so that their customers can make quick and appropriate purchasing decisions.",
				thumbnail: null,
			},
		],
		gallery: [
			projectConfiguratDetailGalleryOne,
			projectConfiguratDetailGalleryTwo,
			projectConfiguratDetailGalleryThree,
			projectConfiguratDetailGalleryFour,
		],
	},
	{
		subtitle: "CONFIGURAT.IO",
		tags: ["CRM", "B2B "],
		url: "/",
		thumbnail: projectTwo,
		title: "Proprietary configuration system",
		description:
			"We’re a group of passionate individuals, strategists, and builders—united by a shared vision and a drive to create purposeful, human-centered experiences. Each of us brings a unique voice to the table, and together, we make it all happen.",
		items: [
			"Innovative service offered in the SaaS model",
			"Increase sales by automating quotations",
			"Visualisation of complex product features",
		],
		details: [
			{
				subtitle: "About the project",
				subHeading: "Integrated B2B / B2C platform",
				body1:
					"Integrated B2B / B2C offers our exclusive cloud-based solution that facilitates the configuration of complex products and services. It empowers customers to personalize their orders by selecting specific details, exploring available options, and enables the sales department to deliver tailor-made solutions that meet their unique needs.",
				body2:
					"Configuration, which involves enabling the selection, collation, and pricing of personalized goods and services, has become an integral aspect of modern business reality. Industries such as manufacturing, machinery, and agriculture exemplify the significance of product configuration as a crucial process that creates value in the customer-supplier relationship. These industries serve as prime examples where product configuration plays a vital role in facilitating value creation between customers and suppliers.",
				thumbnail: projectConfiguratDetailThumbnailOne,
			},
			{
				subtitle: "At the service of our clients",
				subHeading: "At the service of our clients",
				body1:
					"Every customer is different and seeks individual solutions. By providing the ability to configure the products and services offered, users of the CONFIGURAT.IO system can meet the needs and ideas of customers interested in their offerings.",
				body2:
					"Even simple products can have multiple configurations. That's why we help our customers create the ability to configure a product based on multiple options, features and parameters, so that their customers can make quick and appropriate purchasing decisions.",
				thumbnail: null,
			},
		],
		gallery: [
			projectConfiguratDetailGalleryOne,
			projectConfiguratDetailGalleryTwo,
			projectConfiguratDetailGalleryThree,
			projectConfiguratDetailGalleryFour,
		],
	},
	{
		subtitle: "Unia Machines",
		tags: ["CRM", "B2B "],
		url: "/",
		thumbnail: projectThree,
		title: "Integrated B2B / B2C platform",
		description:
			"We’re a group of passionate individuals, strategists, and builders—united by a shared vision and a drive to create purposeful, human-centered experiences. Each of us brings a unique voice to the table, and together, we make it all happen.",
		items: [
			"Organising the sale of machinery",
			"400 dealers and outlets in 52 countries",
			"Presentation of over 20,000 complex products",
		],
		details: [
			{
				subtitle: "About the project",
				subHeading: "Integrated B2B / B2C platform",
				body1:
					"Integrated B2B / B2C offers our exclusive cloud-based solution that facilitates the configuration of complex products and services. It empowers customers to personalize their orders by selecting specific details, exploring available options, and enables the sales department to deliver tailor-made solutions that meet their unique needs.",
				body2:
					"Configuration, which involves enabling the selection, collation, and pricing of personalized goods and services, has become an integral aspect of modern business reality. Industries such as manufacturing, machinery, and agriculture exemplify the significance of product configuration as a crucial process that creates value in the customer-supplier relationship. These industries serve as prime examples where product configuration plays a vital role in facilitating value creation between customers and suppliers.",
				thumbnail: projectConfiguratDetailThumbnailOne,
			},
			{
				subtitle: "At the service of our clients",
				subHeading: "At the service of our clients",
				body1:
					"Every customer is different and seeks individual solutions. By providing the ability to configure the products and services offered, users of the CONFIGURAT.IO system can meet the needs and ideas of customers interested in their offerings.",
				body2:
					"Even simple products can have multiple configurations. That's why we help our customers create the ability to configure a product based on multiple options, features and parameters, so that their customers can make quick and appropriate purchasing decisions.",
				thumbnail: null,
			},
		],
		gallery: [
			projectConfiguratDetailGalleryOne,
			projectConfiguratDetailGalleryTwo,
			projectConfiguratDetailGalleryThree,
			projectConfiguratDetailGalleryFour,
		],
	},
	{
		subtitle: "CONFIGURAT.IO",
		tags: ["CRM", "B2B "],
		url: "/",
		thumbnail: projectFour,
		title: "Proprietary configuration system",
		description:
			"We’re a group of passionate individuals, strategists, and builders—united by a shared vision and a drive to create purposeful, human-centered experiences. Each of us brings a unique voice to the table, and together, we make it all happen.",
		items: [
			"Innovative service offered in the SaaS model",
			"Increase sales by automating quotations",
			"Visualisation of complex product features",
		],
		details: [
			{
				subtitle: "About the project",
				subHeading: "Integrated B2B / B2C platform",
				body1:
					"Integrated B2B / B2C offers our exclusive cloud-based solution that facilitates the configuration of complex products and services. It empowers customers to personalize their orders by selecting specific details, exploring available options, and enables the sales department to deliver tailor-made solutions that meet their unique needs.",
				body2:
					"Configuration, which involves enabling the selection, collation, and pricing of personalized goods and services, has become an integral aspect of modern business reality. Industries such as manufacturing, machinery, and agriculture exemplify the significance of product configuration as a crucial process that creates value in the customer-supplier relationship. These industries serve as prime examples where product configuration plays a vital role in facilitating value creation between customers and suppliers.",
				thumbnail: projectConfiguratDetailThumbnailOne,
			},
			{
				subtitle: "At the service of our clients",
				subHeading: "At the service of our clients",
				body1:
					"Every customer is different and seeks individual solutions. By providing the ability to configure the products and services offered, users of the CONFIGURAT.IO system can meet the needs and ideas of customers interested in their offerings.",
				body2:
					"Even simple products can have multiple configurations. That's why we help our customers create the ability to configure a product based on multiple options, features and parameters, so that their customers can make quick and appropriate purchasing decisions.",
				thumbnail: null,
			},
		],
		gallery: [
			projectConfiguratDetailGalleryOne,
			projectConfiguratDetailGalleryTwo,
			projectConfiguratDetailGalleryThree,
			projectConfiguratDetailGalleryFour,
		],
	},
];
