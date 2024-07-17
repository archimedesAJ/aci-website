import { socials } from "@/lib/data";

export default function TopHeader() {
	return (
		<div className="flex h-10 items-center bg-primary text-primary-foreground">
			<ul className="container flex items-center justify-center gap-x-4 md:justify-end">
				{socials.map((x) => (
					<li key={x.url}>
						<a href={x.url} target="_blank" rel="noopener noreferrer">
							<x.icon className="size-4" />
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
