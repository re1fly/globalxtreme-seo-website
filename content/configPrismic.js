import richTextToMarkdown from '@edwinjoseph/prismic-richtext-markdown'
import Prismic from "@prismicio/client";
import {URL_BASE_PRISMIC} from "../config/urls";

const emptySpaceRegex = /^(- .*)\n(\n^- )/mg

export const clientPrismic = Prismic.client(URL_BASE_PRISMIC, {})

export function prismicToBlogPost(prismic) {
    return {
        date: prismic.data.publish_date || null,
        id: prismic.uid,
        title: prismic.data.title,
        image: {
            url: prismic.data.image_content.url || null,
            alt: prismic.data.image_content.alt || null
        },
        content: richTextToMarkdown(prismic.data.content)
            .replace(emptySpaceRegex, '$1$2')
    }
}

export function prismicToDataContentPage(prismic) {
    return {
        id: prismic.uid,
        title: prismic.data.title,
        content: richTextToMarkdown(prismic.data.content)
            .replace(emptySpaceRegex, '$1$2')
    }
}


