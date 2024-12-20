import { z } from "zod";

const blogValidationSchema = z.object({
    title: z.string({
        invalid_type_error: 'Title should be a string',
        required_error:'Title is required'
    }),
    content: z.string({
        invalid_type_error: 'Content should be a string',
        required_error:'Content is required'
    })
})

export const BlogValidation = {
    blogValidationSchema
}