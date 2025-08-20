import { Blog } from "../(homeroutes)/blogs/page";
import Banner from "./components/banner/Banner";
import Cards from "./components/Cards/Cards";
import Events from "./components/events/Events";

import { banner, academics, ccps } from "@/data/home/data";

export const revalidate = 3600;

export default async function Home() {
  const url = `${process.env.NEXT_PUBLIC_API}/services/blogs?limit=5`;
  const blogs: Blog[] | null = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.error) throw new Error(res.message);
      return res.data.blogs;
    })
    .catch((err) => {
      console.error(err.message);
      return null;
    });

  return (
    <>
      <Banner data={banner} />
      {blogs && <Events blogs={blogs} />}
      <Cards data={academics} />
      <Cards data={ccps} />
    </>
  );
}
