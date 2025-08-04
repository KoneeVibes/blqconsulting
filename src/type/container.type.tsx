export type AppLayoutPropsType = {
    children: React.ReactNode,
}

export type HeaderPropsType = {
    isCarousel: boolean,
    headerHeight?: string
    headerImages: string[],
    romanHeaderMessage?: string,
    italizedHeaderMessage?: string,
}