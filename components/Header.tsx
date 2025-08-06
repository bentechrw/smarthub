import Link from 'next/link'

const Header = () => {
    const navigator = [
        {title: 'Home', path: '/'},
        {title: 'Work', path: '/work'},
        {title: 'Service', path: '/service'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
    ]


    return (
        <header className='flex justify-between p-3 m-5 mp-4'>
            <div className="flex items-center gap-5">
                <Link href="/">
                    <img src="/shs.svg" className="mr-3 h-6 sm:h-9" alt="Smart Hub Service" />
                </Link>
                <div className="flex justify-between gap-5">
                    {navigator.map((link, index)=> (
                        <Link href={link.path} key={index} className='text-sm uppercase'>{link.title}</Link>
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-3">
                <p>Let's talk : </p>
                <Link href='tel:+250782643272' role='button' target='_self' className='p-2 border border-white cursor-pointer text-blue-700 font-semibold transition-colors hover:bg-white'><span>&nbsp; +250-782-643-272</span></Link>
            </div>
        </header>
    )
}

export default Header