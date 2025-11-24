import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	try {
		const reqUrl = new URL(request.url)
		const searchParams = reqUrl.searchParams
		const username = searchParams.get('username') || 'niikkhilsharma'
		console.log(username)
		const response = await fetch(`https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`, {
			headers: {
				accept: '*/*',
				'accept-language': 'en-GB,en;q=0.9',
				priority: 'u=1, i',
				'sec-ch-prefers-color-scheme': 'dark',
				'sec-ch-ua': '"Chromium";v="142", "Google Chrome";v="142", "Not_A Brand";v="99"',
				'sec-ch-ua-full-version-list':
					'"Chromium";v="142.0.7444.60", "Google Chrome";v="142.0.7444.60", "Not_A Brand";v="99.0.0.0"',
				'sec-ch-ua-mobile': '?0',
				'sec-ch-ua-model': '""',
				'sec-ch-ua-platform': '"macOS"',
				'sec-ch-ua-platform-version': '"26.0.1"',
				'sec-fetch-dest': 'empty',
				'sec-fetch-mode': 'cors',
				'sec-fetch-site': 'same-origin',
				'x-asbd-id': '359341',
				'x-csrftoken': 'Qr9BJNRtc8Rbh23osLyWWZ',
				'x-ig-app-id': '936619743392459',
				'x-ig-www-claim': '0',
				'x-requested-with': 'XMLHttpRequest',
				'x-web-session-id': '86893x:brjxp4:52x680',
			},
			body: null,
			method: 'GET',
		})

		const data = await response.json()
		return NextResponse.json(data)
	} catch (error) {
		console.error('Error fetching Instagram user details:', error)
		return NextResponse.json({ error: 'Failed to fetch user details' }, { status: 500 })
	}
}
