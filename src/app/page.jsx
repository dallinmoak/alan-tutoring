'use client'

import getUserWithRole from "@/utils/getUserWithRole";
import { useRouter } from "next/navigation";

export const dynamic = "force-dynamic";

export default function Home() {
  const router = useRouter();
  getUserWithRole()
    .then((res) => {
      router.push(`${res.appRole}`);
    })
    .catch((e) => {
      router.push("/login");
    });
}
