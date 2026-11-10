// 보여주기용 더미 데이터. 진짜 내용이 정해지면 이 파일만 고치면 된다.

export type LinkItem = {
  id: string;
  label: string;
  description: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  imageUrl: string;
  links: LinkItem[];
};

export const profile: Profile = {
  name: "김플로",
  bio: "세계 최강 바이브 코더",
  imageUrl: "/profile-placeholder.svg",
  links: [
    {
      id: "github",
      label: "GitHub",
      description: "코드 저장소",
      url: "https://github.com/",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      description: "경력과 이력",
      url: "https://www.linkedin.com/",
    },
    {
      id: "blog",
      label: "Blog",
      description: "개발 기록",
      url: "https://example.com/",
    },
  ],
};
