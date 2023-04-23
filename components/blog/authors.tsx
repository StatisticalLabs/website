import cn from "classnames";
import TEAM, { type Author } from "../../content/team";
import { Avatar } from "./avatar";

export function Authors({ authors }: { authors: Array<Author> }) {
  const validAuthors = authors.filter((author) => TEAM[author]);
  return (
    <div className="authors w-full border-b border-gray-400 border-opacity-20">
      <div
        className={cn(
          "mx-auto flex flex-wrap justify-center gap-7 py-8",
          authors.length > 4 && "max-w-3xl"
        )}
      >
        {validAuthors.map((username) => (
          <Avatar key={username} {...TEAM[username]} />
        ))}
      </div>
    </div>
  );
}
