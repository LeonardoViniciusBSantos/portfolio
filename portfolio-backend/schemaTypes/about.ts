export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {name: 'image', title: 'Image', type: 'image'},
        {name: 'title', title: 'Title', type: 'string'},
        {
            name: 'text',
            title: 'About text',
            type: 'array',
            of: [
                {
                    title: 'About text',
                    type: 'object',
                    fields: [
                        {
                            name: 'paragraph',
                            title: 'paragraph',
                            type: 'text',
                        }
                    ]
                }
            ]
        },
        {name: 'button', title: 'Button', type: 'string'},
        {name: 'url', title: 'Url', type: 'string'}
    ]
}