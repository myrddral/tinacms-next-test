"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import type { PageProps } from "./page";

export function Header(props: PageProps) {
  const { data } = useTina(props);

  console.log(data);

  return (
    <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
      <p
        data-tina-field={tinaField(data.page, "header")}
        className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'
      >
        {data.page.header}
      </p>
    </div>
  );
}
