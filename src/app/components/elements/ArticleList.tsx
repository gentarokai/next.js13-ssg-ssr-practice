import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=2"
            alt=""
            width={1280}
            height={300}
          ></Image>
        </Link>
        <div className="bg-white  flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            Next.jsの勉強中
          </Link>
          <p className="text-xs text-slate-900">Published on 2024/03/22</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            vero similique aperiam accusantium voluptatum voluptates quis neque
            ab nisi perspiciatis voluptatem. Aliquid laborum, reprehenderit
            laudantium veritatis eius iste molestias praesentium.
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
