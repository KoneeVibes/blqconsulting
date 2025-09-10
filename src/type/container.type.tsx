export type AppLayoutPropsType = {
	children: React.ReactNode;
};

export type HeaderPropsType = {
	isCarousel: boolean;
	headerHeight?: string;
	headerImages: string[];
	romanHeaderMessage?: string;
	italizedHeaderMessage?: string;
	headerBody?: string;
	headerCTA?: React.ReactNode;
};

export type HeroPropsType = {
	hasThumbnail: boolean;
	subtitle?: string;
	body?: string;
	romanHeaderMessage?: string;
	italizedHeaderMessage?: string;
	thumbnail?: string;
};

export type ProjectDetailPropsType = {
	detail: Record<string, any>;
};

export type BlogDetailPropsType = {
	content: string;
};

export type SetApartPropsType = {
	keyDifferential: string;
	otherDifferentials?: Record<string, any>[];
};
