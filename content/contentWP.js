import {shapeGetThenByWP} from "./configAxios";
import Prismic from "@prismicio/client";
import {URL_BASE_PRISMIC} from "../config/urls";

export const policy = () => shapeGetThenByWP('pages/7', 'pagePolicy')
export const visitor = () => shapeGetThenByWP('pages/26','pageVisitor')
export const speedTest = () => shapeGetThenByWP('pages/216','pageSpeedTest')
export const tc = () => shapeGetThenByWP('pages/33','pageTC')
export const bill = () => shapeGetThenByWP('pages/35','pageBill')

export const contentBlog =  () => shapeGetThenByWP('posts', 'contentBlog')
export const contentBlogDetail = (postId) => shapeGetThenByWP('posts/' + postId, 'postDetail')

export const contentEvent = () => shapeGetThenByWP('events', 'contentEvent')
export const contentEventDetail = (eventId) => shapeGetThenByWP('events/' + eventId, 'contentEventDetail')

export const faqs = () => shapeGetThenByWP('frequently-asked', 'faqs')

export const jobCareer = () => shapeGetThenByWP('job-vacancy', 'faqs')


