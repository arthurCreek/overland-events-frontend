import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';
import Search from './Search';
import styles from '@/styles/Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <a>Overland Events</a>
                </Link>
            </div>

            <Search />

            <nav>
                <ul>
                    <li>
                        <Link href="/events">
                            <a>Events</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/events/add'>
                            <a>Add Event</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/account/login'>
                            <a className='btn-secondary btn-icon'>
                                <FaSignInAlt /> Login
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
