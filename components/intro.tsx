import Image from 'next/image';
import Link from 'next/link';

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/">
          <Image src="https://codecaffiene.com/wp-content/uploads/2023/02/codecaffiene-logo.png" alt="codecaffiene logo" width={255} height={83} />
        </Link>        
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Technologies used: <i>NextJs</i> + <i>TypeScript</i> + <i>Tailwind CSS</i>
      </h4>
    </section>
  )
}
