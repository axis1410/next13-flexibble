import { NavLinks } from '@/constant';
import Image from 'next/image';
import Link from 'next/link';
import AuthProviders from './AuthProviders';
import { getCurrentUser } from '@/lib/session';

const Navbar = async () => {
	// const session = {};
	const session = await getCurrentUser();

	return (
		<nav className='flexBetween navbar'>
			<div className='flex-1 flexStart gap-10'>
				<Link href='/'>
					<Image
						src='/logo.svg'
						width={115}
						height={43}
						alt='Flexibble'
					/>
				</Link>
				<ul className='xl:flex hidden text-sm gap-7'>
					{NavLinks.map((link) => (
						<Link
							href={link.href}
							key={link.key}
						>
							{link.text}
						</Link>
					))}
				</ul>
			</div>
			<div className='flexCenter gap-4'>
				{session?.user ? (
					<>
						{session.user?.image && (
							<Image
								src={session.user.image}
								width={40}
								height={40}
								alt={session.user.name}
								className='rounded-full'
							/>
						)}

						<Link href='/'>Share work</Link>
					</>
				) : (
					<>
						<AuthProviders />
					</>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
