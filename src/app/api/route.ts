// import connectDB from '../../utils/db';
import User from '../utilis/models';

export async function POST(request: Request) {
    console.log(request)
    return new Response('Success!', {
        status: 200,
    })
}

