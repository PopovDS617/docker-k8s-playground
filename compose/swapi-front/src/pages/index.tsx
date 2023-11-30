import axios from 'axios';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { BASE_URL } from '@/shared/constants';

export default function Home(props) {
  console.log(props);

  return (
    <div className="h-screen">
      <main className="flex h-full items-center justify-center">
        <h1 className="font-mono text-9xl">Hello there</h1>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (_context: GetServerSidePropsContext) => {
  try {
    const data = await axios.get(`http://backend:80/starships`);
    console.log(data);

    return {
      props: { starships: { hello: 'there' } || '' },
    };
  } catch (e) {
    console.error(e);
  }

  return { redirect: { destination: '/', permanent: false } };
};
