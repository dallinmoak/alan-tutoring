"use client";

import { useRouter } from "next/navigation";

import absoluteUrl from 'next-absolute-url'

export default function Test() {
  const router = useRouter();
  const { protocol, host } = absoluteUrl();
  console.log(router.asPath)
  console.log(`${protocol}//${host}`)
  return <div>test{router.asPath}</div>;
}
