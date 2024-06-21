"use client";

import { PageQuery } from "../tina/__generated__/types";
import Image from "next/image";
import { tinaField, useTina } from "tinacms/dist/react";
import { Header } from "./header";

export interface PageProps {
  data: PageQuery;
  variables: object;
  query: string;
}

export function Page(props: PageProps) {
  const { data } = useTina(props);

  // console.log(data);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {/* <Header props={props} /> */}
      <div className='max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <p
          data-tina-field={tinaField(data.page, "header")}
          className='flex justify-center border-b py-2 px-4 rounded-xl border-gray-300 bg-gradient-to-b from-orange-100/70 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit w-auto lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30'
        >
          {data.page.header}
        </p>
      </div>

      <div
        // @ts-ignore
        data-tina-field={tinaField(data.page.logo, "url")}
        className='relative flex place-items-center'
      >
        <Image
          className='relative'
          src={data.page.logo?.url || "/inkarno-header_en.png"}
          alt={data.page.logo?.alt || ""}
          width={180}
          height={37}
          priority
        />
      </div>

      <div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left'>
        {data.page.links?.map((link) => {
          return (
            <a
              key={link?.url}
              href={link?.url || ""}
              className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
              target='_blank'
              rel='noopener noreferrer'
            >
              <h2
                // @ts-ignore
                data-tina-field={tinaField(link, "header")}
                className={`mb-3 text-2xl font-semibold`}
              >
                {link?.header}{" "}
                <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                  -&gt;
                </span>
              </h2>
              <p
                // @ts-ignore
                data-tina-field={tinaField(link, "description")}
                className={`m-0 max-w-[30ch] text-sm opacity-50`}
              >
                {link?.description}
              </p>
            </a>
          );
        })}
      </div>
    </main>
  );
}
