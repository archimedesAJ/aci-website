import type { Metadata } from "next";
import Card from "./card";

export const metadata: Metadata = {
	title: "Departments",
	description: "Our departments",
};

export default function DepartmentsPage() {
	return (
		<div className="space-y-8 py-12 md:space-y-16 md:py-24">
			<div className="space-y-3 text-center md:space-y-6">
				<h1>Departments</h1>
				<div>
					{/* first section */}
					<div className="py-8 md:py-16">
						<ul className="container grid gap-x-4 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3">
							<li>
								<Card
									imgUrl="/departments/music.webp"
									title="MUSIC"
									description="At ACI we believe that hallelujah: (Praise the Lord) must be the every day language of a child of God, no matter what season of life they’re in. Exciting Praise and Worship to us is a lifestyle of"
								>
									<p>
										At ACI we believe that hallelujah: (Praise the Lord) must be
										the every day language of a child of God, no matter what
										season of life they’re in. Exciting Praise and Worship to us
										is a lifestyle of expressing our love and adoration for our
										Lord Jesus Christ.
									</p>
									<p>To us polite applause is empty praise!</p>
									<p>
										Praise is not just a request, it is a command; Praise is not
										merely an art-form but the attitude of a grateful heart.
									</p>
									<p>
										We worship God as He is: “A LIVING GOD” – who enjoys and
										inhabits the praises of His people.
									</p>
									<p>
										Our Services begin with soul stirring and spiritually
										inspiring Praise and Worship that ushers in the glory and
										presence of God, preparing our hearts to receive His life
										changing Word and activating our faith for the demonstration
										of His power.
									</p>
								</Card>
							</li>
							<li>
								<Card
									imgUrl="/departments/youth-movement.webp"
									title="YOUTH MOVEMENT"
									description="Our Youth Movement is dedicated to equipping young people with knowledge and life skills relevant to their day to day experiences. We see our youth as leaders of tomorrow and our"
								>
									<p>
										Our Youth Movement is dedicated to equipping young people
										with knowledge and life skills relevant to their day to day
										experiences. We see our youth as leaders of tomorrow and our
										commission is to groom and develop them for future
										leadership both within and outside the church environment.
										We teach biblical truths that help them live victoriously as
										young Christians in their often challenging social
										environment.
									</p>
								</Card>
							</li>
							<li>
								<Card
									imgUrl="/departments/young-adults.webp"
									title="YOUNG ADULTS"
									description="Our  young adults’ ministry is a key feature of our church and an important area of focus for us. With countless stories of displaced, marginalised young people"
								>
									<div className="space-y-4 md:space-y-8">
										<p>
											Our young adults’ ministry are a key feature of our church
											and an important area of focus for us. With countless
											stories of displaced, marginalised young people who are
											increasingly at risk of violent crime and with poor
											prospects for the future, we believe that the church has
											an important role to play to restore hope, aspiration and
											encouragement to young people in the community.
										</p>

										<p>
											The report of increase in mental challenges with the youth
											has given the church a holistic approach with intention to
											go further from where we were to engage and interact with
											the young ones in more social activities like sports,
											talent shows and talent building.
										</p>

										<p>
											Our church has a vibrant congregation of young adults who
											are challenging and redefining the status quo of Christian
											living. Five core pillars underpin the young adults’
											ministry: Spiritual, Physical, Intellectual, Community &
											Character and Economic (SPICE) advancement. Underpinned by
											biblical teaching, these practical pillars aim to enable
											Christians to lead well-rounded lives that are a true
											reflection of the fullness and abundance promised in
											Christ.
										</p>

										<div>
											<p>Two Notable events held in recent years include: </p>
											<p>
												1. Faith & Finances – an “E” pillar event, held
												successfully at the KPMG in Canary Wharf to economically
												empower Christians to make an impact in our communities.
											</p>
										</div>

										<p>
											2. Our Young Adults team proudly won a 2-church
											tournament, King of Kings Football showdown, held at the
											Paddington Recreational Grounds for the Community. Food
											and drinks served after the event enabled both teams to
											socialise with members of the community who came to watch
											the match.
										</p>
									</div>
								</Card>
							</li>
						</ul>
					</div>
					{/* second section */}
					<div className="bg-gray-3 py-8 md:py-16">
						<ul className="container grid gap-x-4 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3">
							<li>
								<Card
									imgUrl="/departments/cfc.webp"
									title="CHILDREN FOR CHRIST (CFC)"
									description="The Children’s department functions in response to the direct instruction issued by the word of God; it is required of every Christian parent to bring up their children in the reverential fear of"
								>
									<p>
										The Children’s department functions in response to the
										direct instruction issued by the word of God; it is required
										of every Christian parent to bring up their children in the
										reverential fear of the Lord.
									</p>

									<p>
										The Ministry’s foundational and instructional scripture is{" "}
										<span className="text-primary">Psalm 78: 5-8</span>. In
										response to the above scripture, the children are taught to
										put their trust in God, to remember His ways and to remain
										loyal and faithful to Him in all the days of their lives.
										This is achieved through curriculum set out to teach the
										various topics adapted to their age groups. The teaching
										methods adopted are interactive and involve a lot of
										activities.
									</p>
								</Card>
							</li>
							<li>
								<Card
									imgUrl="/departments/welfare.webp"
									title="WELFARE"
									description="The welfare ministry operates to provide our church members, and particularly those who are recently bereaved or in need of support due to a specific event (e.g. unexpected unemployment)"
								>
									<p>
										The welfare ministry operates to provide our church members,
										and particularly those who are recently bereaved or in need
										of support due to a specific event (e.g. unexpected
										unemployment) with financial donations and extended
										fellowship as and when required. This may include hospital
										visitations and counselling and small financial donations to
										meet with unexpected costs (e.g. funeral, housing costs).
									</p>
									<p>
										Externally, the welfare ministry runs campaigns to raise
										cash for local and international charities and runs coffee
										mornings to invite the local community in for friendship and
										emotional support. One such social interaction includes
										teatime with the elderly, physically challenged and the
										lonely.
									</p>
								</Card>
							</li>
							<li>
								<Card
									imgUrl="/departments/foundation-and-biblical-studies.webp"
									title="FOUNDATION AND BIBLICAL STUDIES
"
									description="To grow and mature as a Christian, requires continual study and spirit led exposition of the Word of God. We have designed a discipleship and bible study course to establish"
								>
									<p>
										To grow and mature as a Christian, requires continual study
										and spirit led exposition of the Word of God. We have
										designed a discipleship and bible study course to establish
										the fundamental principles of the Christian faith for new
										converts and those aspiring to growth and maturity.These
										courses will equip, enrich and increase you in the knowledge
										and pursuit of God.
									</p>
								</Card>
							</li>
						</ul>
					</div>
					{/* last section */}
					<div className="py-8 md:py-16">
						<ul className="container grid gap-x-4 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3">
							<li>
								<Card
									imgUrl="/departments/international-day.webp"
									title="INTERNATIONAL DAY"
									description="As a vibrant, multicultural church, we take the opportunity to celebrate our various cultures with an annual international day. Pre Covid, we had the pleasure of hosting the High Commissioners"
								>
									<p>
										As a vibrant, multicultural church, we take the opportunity
										to celebrate our various cultures with an annual
										international day. Pre Covid, we had the pleasure of hosting
										the High Commissioners (and representatives) of Sierra
										Leone, Ghana, and Nigeria for our International Day
										celebration. The theme was Diversity, taking inspiration
										from <span className="text-primary">1 Timothy 2:14.</span>{" "}
										Together with the Clergy, Children, and Youth, we learnt
										about different countries, their food, national attire,
										cultures and Christian expression through dance, song, and
										drama. We also had the company of our local parliament
										Labour Party councillors of the Maida Vale ward, Nafisika
										Butler-Thalasis and Rita Begum when our main branch was
										based in Maida Vale.
									</p>
								</Card>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
