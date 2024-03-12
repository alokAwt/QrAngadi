import { headers } from 'next/headers'
 
export async function POST(request) {
    const authHeader = request.headers.get('authorization');
    if (!authHeader) {
        return new Response('Unauthorized', { status: 401 });
      }
    
      const [, token] = authHeader.split('Bearer ');
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${token}` },
  })
}