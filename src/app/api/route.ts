// import connectDB from '../../utils/db';
import { NextApiRequest, NextApiResponse } from 'next';
import User from '../utilis/models';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email , phone } = req.body;
        console.log(name, email)
        try {
            res.status(201).json({ success: true, message: 'User created successfully' });
        } catch (error) {
            console.error('Error saving user data:', error);
            res.status(500).json({ success: false, message: 'Failed to create user' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}

