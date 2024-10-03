import dynamic from 'next/dynamic';

const Button = dynamic(() => import('remote/Button'));

export default function Home() {
  return (
    <>
      <h1>Host app</h1>
      <Button>Button from remote</Button>
    </>
  );
}
