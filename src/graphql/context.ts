// import { YogaInitialContext } from "graphql-yoga"
// import jwt from "jsonwebtoken"
// import User from "../model/userModel.js"

// export type Context = {
//     request: Request,
//     user?: InstanceType<typeof User>
// }

// export const context = async (initial: YogaInitialContext): Promise<Context> => {
//     const req = initial.request
//     const authHeader = req.headers.get('authorization') || ''
//     const token = authHeader.replace("Bearer ", "").trim()

    
// }