export {default} from 'next-auth/middleware'


export const config={
    matcher:[
        '/complaints/create',
        '/complaints/:id+',
    ]
}