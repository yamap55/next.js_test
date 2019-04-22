// export default () => <div>Welcome to next.js</div>

// import React from 'react'
// export default () => <div>Hello world!</div>

import Link from 'next/link'
export default function Index() {
    return (
        <dev>
            <h1>Hello Next.js</h1>
            <ul>
                <li><Link href='/about'><a>About</a></Link></li>
                <li><Link href='/cowsay'><a>cowsay</a></Link></li>
            </ul>
        </dev>
    )
}
