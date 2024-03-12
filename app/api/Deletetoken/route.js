import { cookies } from 'next/headers'
 
export async function POST(request) {
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    console.log(`this is `,token)
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${token}` },
  })
}