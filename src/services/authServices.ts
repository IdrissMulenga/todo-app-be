import { GraphQLError } from 'graphql';
import jwt from 'jsonwebtoken';

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, process.env.AUTH_SECRET as string)
    } catch (error: any) {
        throw new GraphQLError("Invalid/Expired token", error.message);
    }
}