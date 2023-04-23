import Image from "next/image";
import type { AuthorDetails } from "../../content/team";

export const Avatar = ({ name, picture, twitterUsername }: AuthorDetails) => (
  <div className="flex flex-shrink-0 items-center md:justify-start">
    <div className="h-[32px] w-[32px]">
      <Image
        src={picture}
        height={32}
        width={32}
        title={name}
        className="w-full rounded-full"
        alt={name}
        priority
      />
    </div>
    <dl className="whitespace-no-wrap ml-2 text-left text-sm  leading-4">
      <dt className="sr-only">Name</dt>
      <dd className="font-medium text-gray-900 dark:text-white">{name}</dd>
      {twitterUsername && (
        <>
          <dt className="sr-only">Twitter</dt>
          <dd>
            <a
              href={`https://twitter.com/${twitterUsername}`}
              className="font-regular text-xs text-blue-500 no-underline betterhover:hover:text-blue-600 betterhover:hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {`@${twitterUsername}`}
            </a>
          </dd>
        </>
      )}
    </dl>
  </div>
);
