import React from "react";
import Cards from "./Cards";
import Link from "next/link";
import { Blog } from "@/app/(homegroup)/(homeroutes)/blogs/page";

interface EventsProps {
	blogs: Blog[];
}

const Events = ({ blogs }: EventsProps) => {
	const cards = blogs.map((item) => {
		return (
			<Cards
				key={item.blogId}
				img={item.cover}
				heading={item.title}
				date={item.createdAt}
				text={item.summary}
				link={`/blogs/${item.blogId}`}
			/>
		);
	});

	return (
		<div className="events" id="news">
			<div className="container">
				<h2 className="events-head">Actualité</h2>

				<div className="events-items">
					<div className="events-container">{cards}</div>
					<div className="events-action">
						<Link href="/blogs">Voir tout</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Events;
