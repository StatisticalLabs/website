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
      className="flex items-start gap-2 rounded-lg border border-neutral-600 p-3 transition-colors hover:bg-black/10 dark:hover:bg-white/10"
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
    name: "Choccy Statistics",
    url: "https://youtube.com/@ChoccyStatistics",
    image:
      "https://yt3.googleusercontent.com/ytc/AGIKgqOAoUWmMGLE5NQnOtEhZB-Li9hbR4MZmnY5kT9G=s176-c-k-c0x00ffffff-no-rj",
    statistics: {
      subscribers: "2.1K",
      members: "78",
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
];

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-[90rem] px-6 py-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <BalancerProvider>
            <Balancer as="h1" className="text-5xl font-bold">
              The{" "}
              <span className="inline-block bg-gradient-to-b from-blue-500 to-indigo-700 bg-clip-text font-black text-transparent">
                most popular
              </span>{" "}
              way to track{" "}
              <span className="inline-block bg-gradient-to-b from-red-500 to-red-600 bg-clip-text font-black text-transparent">
                YouTube channels
              </span>
              .
            </Balancer>
            <Balancer as="p">
              With one command, you can start tracking anyone and immediately
              get notified when their subscriber count updates.
            </Balancer>
          </BalancerProvider>
          <div className="mt-1 flex justify-center gap-2">
            <Link href="/invite" legacyBehavior>
              <button
                className="rounded-md bg-blue-600 px-3 py-2 text-white transition-all enabled:hover:-translate-y-1 enabled:hover:bg-blue-700 disabled:!cursor-not-allowed disabled:opacity-50 dark:text-inherit"
                title="Statistical can't be added currently due to the bot not being verified yet. Try again later."
                disabled
              >
                Add Statistical to your server
              </button>
            </Link>
            <Link href="/docs" legacyBehavior>
              <button className="rounded-md bg-black px-3 py-2 text-white transition-all enabled:hover:-translate-y-1 enabled:hover:bg-neutral-700 disabled:opacity-50 dark:bg-white dark:text-black enabled:hover:dark:bg-neutral-300">
                Learn more
              </button>
            </Link>
          </div>
          <div className="p-1" />
          <div className="relative mx-auto">
            <span className="absolute -inset-0.5 bg-[#323339] blur-lg" />
            <div className="relative overflow-hidden rounded-lg bg-[#323339]">
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
      </div>
    </div>
  );
};

export default Landing;
