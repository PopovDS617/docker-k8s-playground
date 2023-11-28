import axios from 'axios';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { BASE_URL } from '@/shared/constants';

export default function Home() {
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
    const { data } = await axios.get(`${BASE_URL}/starships`);

    return {
      props: { starships: data },
    };
  } catch (e) {
    console.error(e);
  }

  return { redirect: { destination: '/', permanent: false } };
};
