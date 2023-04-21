const TEAM: Record<string, AuthorDetails> = {
  toasteddev: {
    name: "ToastedToast",
    twitterUsername: "toasteddev",
    picture: "/team-members/toastedtoast.jpg",
  },
};

export type Author = keyof typeof TEAM;
export type AuthorDetails = {
  name: string;
  twitterUsername?: string;
  picture: string;
};

export default TEAM;
