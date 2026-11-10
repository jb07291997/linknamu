import Image from "next/image";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center bg-zinc-50 px-6 py-16 dark:bg-black">
      <div className="flex w-full max-w-md flex-col items-center">
        {/* 원형 프로필 사진 */}
        <Image
          src={profile.imageUrl}
          alt={`${profile.name} 프로필 사진`}
          width={160}
          height={160}
          loading="eager"
          className="h-40 w-40 rounded-full border border-zinc-200 object-cover dark:border-zinc-800"
        />

        {/* 이름 */}
        <h1 className="mt-6 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          {profile.name}
        </h1>

        {/* 한 줄 소개 */}
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">{profile.bio}</p>

        {/* 링크 카드 목록 */}
        <ul className="mt-8 flex w-full flex-col gap-4">
          {profile.links.map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                  {link.label}
                </span>
                <span className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
                  {link.description}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
