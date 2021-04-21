import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import {API_URL} from '@/config/index';
import styles from '@/styles/Event.module.css';
import { useRouter } from 'next/router';


export default function EventPage({evt}) {

    
    return (
        <Layout>
            <div className={styles.event}>

                <span>
                    {new Date(evt.date).toLocaleDateString('en-us')} at {evt.time}
                </span>
                <h1>{evt.name}</h1>
                <ToastContainer />
                {evt.image && (
                    <div className={styles.image}>
                        <Image src={evt.image.formats.medium.url} width={600} height={600} objectFit="cover"></Image>
                    </div>
                )}

                <h3>Participants:</h3>
                <p>{evt.participants}</p>
                <h3>Description:</h3>
                <p>{evt.description}</p>
                <h3>Location: {evt.location}</h3>
                <p>{evt.address}</p>

                <Link href='/events'>
                    <a className={styles.back}>{'<'} Go Back</a>
                </Link>
            </div>
        </Layout>
    )
};

export async function getStaticPaths() {
    const res = await fetch(`${API_URL}/events`);
    const events = await res.json();

    const paths = events.map(evt => ({
        params: {slug: evt.slug}
    }));

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({params: {slug}}) {
    const res = await fetch(`${API_URL}/events?slug=${slug}`);
    const events = await res.json();

    return {
      props: {
          evt: events[0]
      },
      revalidate: 1
    }
  }
