import Image from "next/image";
import Link from "next/link";
import type React from "react";
import Balancer, { Provider as BalancerProvider } from "react-wrap-balancer";
import subscriberUpdate from "../public/sub_update.png";

type Server = {
  name: string;
  url: `https://${string}`;
  image: string;
  statistics: { subscribers: string; members: string };
};

const ServerCard: React.FC<Server> = (props) => {
  return (
    <Link
      href={props.url}
      className="flex items-start gap-2 rounded-lg border border-neutral-600 p-3 hover:border-white"
    >
      <Image
        src={props.image}
        alt={`${props.name} Logo`}
        width={80}
        height={80}
        className="rounded-2xl"
      />
      <div>
        <p className="text-4xl font-bold">{props.name}</p>
        <div className="text-sm text-black/40 dark:text-white/40">
          <p>{props.statistics.subscribers}+ subscribers</p>
          <p>{props.statistics.members}+ members</p>
        </div>
      </div>
    </Link>
  );
};

const servers: Server[] = [
  {
    name: "Elenz Stats",
    url: "https://youtube.com/@Elenz_Stats",
    image:
      "https://yt3.googleusercontent.com/zvkstUcqhBVBpIcpx8l7m-otMKkD22nsKI-FKfrr52PlTJT3_ni4-O9dl2nWBBZQPUubK3clR5g=s176-c-k-c0x00ffffff-no-rj",
    statistics: {
      subscribers: "320K",
      members: "17",
    },
  },
  {
    name: "YT Battles",
    url: "https://youtube.com/@YT_Battles",
    image:
      "https://yt3.googleusercontent.com/ytc/AGIKgqPd54aQ6qcgWKBW5AvkS-sZaD3-vGsYbWu95mKwyw=s176-c-k-c0x00ffffff-no-rj",
    statistics: {
      subscribers: "275K",
      members: "1.3K",
    },
  },
  {
    name: "SzaSzabi",
    url: "https://youtube.com/@SzaSzabiYT",
    image:
      "https://yt3.googleusercontent.com/MiwMFkXd658yiVtuV-TIp-P0Aa4xwitT2Y4fBNJTiTh3ljofvruCRkmc2fkw_7f2NK4y1AxKGA=s176-c-k-c0x00ffffff-no-rj",
    statistics: {
      subscribers: "15.6K",
      members: "312",
    },
  },
  {
    name: "JipStats",
    url: "https://youtube.com/@JipStats",
    image:
      "https://yt3.googleusercontent.com/MUp2-cuP-5u4shkbWEmYIPGWNPL9TMr4HLBVw0xaLmme9KD-W3FKouSq_qXfJqlUXT-rF_TgQw=s176-c-k-c0x00ffffff-no-rj",
    statistics: {
      subscribers: "3.8K",
      members: "42",
    },
  },
  {
    name: "Statsable",
    url: "https://youtube.com/@Statsable",
    image:
      "https://yt3.googleusercontent.com/ztGKebrf_89_mROXdUnRPoDh61egEvQwpbxol9wQHjCNp0dGFQluRzYMSUJD-YXs5ZC81U7lVA=s176-c-k-c0x00ffffff-no-rj",
    statistics: {
      subscribers: "3.1K",
      members: "105",
    },
  },
  {
    name: "GNZGUY",
    url: "https://youtube.com/@GNZGUY",
    image:
      "https://yt3.googleusercontent.com/oUcmdn7rkvxQPgKPYfjinOSt3ZhmER46dJ8u8mE8lom05BijMZzxh-KNqX2HtrA6Tymx2be_=s176-c-k-c0x00ffffff-no-rj",
    statistics: {
      subscribers: "800",
      members: "35",
    },
  },
  {
    name: "Cadzilla",
    url: "https://youtube.com/@Cadzilla",
    image:
      "https://yt3.googleusercontent.com/1fc4Bd4bglgecB3it1GX6Okwz-XC0rhjbeTOyEVCjqhITBe00MsI2aH5pcVw2SASLPDUz13bQw=s176-c-k-c0x00ffffff-no-rj",
    statistics: {
      subscribers: "50",
      members: "83",
    },
  },
];

type Review = {
  name: string;
  url: `https://${string}`;
  image: string;
  message: string;
};

const ReviewCard: React.FC<Review> = (props) => {
  return (
    <Link
      href={props.url}
      className="flex items-start gap-2 rounded-lg border border-neutral-600 p-3 hover:border-white"
    >
      <Image
        src={props.image}
        alt={`${props.name} Logo`}
        width={56}
        height={56}
        className="rounded-full"
      />
      <div>
        <p className="text-xl">{props.message}</p>
        <div className="text-sm text-black/40 dark:text-white/40">
          <p>- {props.name}</p>
        </div>
      </div>
    </Link>
  );
};

const reviews: Review[] = [
  {
    name: "Elenz Stats",
    url: "https://youtube.com/@Elenz_Stats",
    image:
      "https://yt3.googleusercontent.com/zvkstUcqhBVBpIcpx8l7m-otMKkD22nsKI-FKfrr52PlTJT3_ni4-O9dl2nWBBZQPUubK3clR5g=s176-c-k-c0x00ffffff-no-rj",
    message: "5 stars. Would give more if you had more stars.",
  },
];

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-[90rem] px-6 py-8">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-4">
          <div className="text-center lg:text-left">
            <BalancerProvider>
              <Balancer as="h1" className="text-5xl font-bold">
                Track anyone,{" "}
                <span className="font-normal italic underline">at anytime</span>
                .
              </Balancer>
              <Balancer as="p" className="mt-4">
                With one command, you can start tracking any{" "}
                <span className="font-semibold text-red-500">
                  YouTube channel
                </span>{" "}
                and immediately get notified when their subscriber count
                updates.
              </Balancer>
            </BalancerProvider>
            <div className="p-3 lg:p-4" />
            <Link
              href="/docs"
              className="group relative rounded-lg bg-gradient-to-b from-blue-500 to-indigo-700 px-3 py-2 text-white dark:text-inherit"
            >
              <span className="absolute -inset-0.5 bg-gradient-to-b from-blue-500 to-indigo-700 opacity-75 blur-md transition-all group-hover:opacity-100" />
              <span className="relative">
                Get started{" "}
                <span className="inline-block transition-all group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </div>
          <div className="relative mx-auto">
            <span className="absolute -inset-0.5 bg-[#323339] blur-lg" />
            <div className="relative overflow-hidden rounded-lg bg-[#323339] py-1.5">
              <Image
                src={subscriberUpdate}
                placeholder="blur"
                alt="Subscriber Update"
                width={627}
                height={470}
              />
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-5">
          <h1 className="text-center text-3xl font-bold">
            Trusted by the biggest statistics YouTubers.
          </h1>
          <div className="flex flex-wrap justify-center gap-3">
            {servers.map((server) => (
              <ServerCard {...server} key={server.name} />
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-5">
          <h1 className="text-center text-3xl font-bold">
            But hey, words speak louder than cards.
          </h1>
          <div className="flex flex-wrap justify-center gap-3">
            {reviews.map((review) => (
              <ReviewCard {...review} key={review.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
