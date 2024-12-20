import { z } from "zod";

const createBlogValidationSchema = z.object({
    title: z.string({
        invalid_type_error: 'Title should be a string',
        required_error:'Title is required'
    }),
    content: z.string({
        invalid_type_error: 'Content should be a string',
        required_error:'Content is required'
    })
})

const updateBlogValidationSchema = z.object({
    title: z.string({
        invalid_type_error: 'Title should be a string',
    }).optional(),
    content: z.string({
        invalid_type_error: 'Content should be a string',
    }).optional()
})

export const BlogValidation = {
    createBlogValidationSchema,
    updateBlogValidationSchema
}