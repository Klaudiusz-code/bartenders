import React from "react";
import Link from "next/link";

const GET_PAGE_QUERY = `  query GetPage($uri: ID!) {
    page(id: $uri, idType: URI) {
      id
      databaseId
      slug
      uri
      title
      content
      seo {
        title
        description
      }
    }
  }`;

async function getPage(uri: string) {
  const res = await fetch("http://146.59.63.145/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60,
    },
    body: JSON.stringify({
      query: GET_PAGE_QUERY,
      variables: {
        uri,
      },
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch page");
  }

  const json = await res.json();

  return json.data?.page;
}

export async function generateMetadata() {
  const page = await getPage("/polityka-prywatnosci/");

  return {
    title: page?.seo?.title || page?.title || "Polityka prywatności",
    description: page?.seo?.description || "",
  };
}

export default async function Page() {
  const page = await getPage("/polityka-prywatnosci/");

  if (!page) {
    return (
      <main className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-6">
        {" "}
        <div className="text-center">
          {" "}
          <h1 className="text-2xl font-semibold text-[#151515]">
            Nie znaleziono strony{" "}
          </h1>
          ```
          <Link
            href="/"
            className="mt-6 inline-flex items-center rounded-full bg-[#151515] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b2b]"
          >
            Wróć do strony głównej
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#181818]">
      <div className="border-b border-black/5 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-sm font-medium text-[#555] transition hover:text-[#111]"
          >
            Brothers Bartenders
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#555] transition hover:text-[#111]"
          >
            <span>←</span>
            Strona główna
          </Link>
        </div>
      </div>
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#9A9A9A]">
            Informacje prawne
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-[#151515] sm:text-5xl">
            {page.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#777]">
            Informacje dotyczące przetwarzania danych osobowych oraz zasad
            korzystania ze strony internetowej Brothers Bartenders.
          </p>
        </div>
      </section>
      <section className="px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <div
            className="
          rounded-2xl
          border border-black/5
          bg-white
          px-6 py-8
          shadow-[0_10px_40px_rgba(0,0,0,0.04)]
          sm:px-10
          sm:py-12
          lg:px-14
          lg:py-14

          [&_h1]:mb-8
          [&_h1]:text-3xl
          [&_h1]:font-semibold
          [&_h1]:tracking-tight

          [&_h2]:mb-4
          [&_h2]:mt-12
          [&_h2]:text-xl
          [&_h2]:font-semibold
          [&_h2]:tracking-tight
          [&_h2]:text-[#1A1A1A]

          [&_p]:mb-5
          [&_p]:text-[15px]
          [&_p]:leading-7
          [&_p]:text-[#666]

          [&_ul]:mb-6
          [&_ul]:ml-5
          [&_ul]:list-disc
          [&_ul]:space-y-2

          [&_li]:pl-1
          [&_li]:text-[15px]
          [&_li]:leading-7
          [&_li]:text-[#666]

          [&_strong]:font-semibold
          [&_strong]:text-[#333]

          [&_a]:text-[#111]
          [&_a]:underline
          [&_a]:underline-offset-2
        "
            dangerouslySetInnerHTML={{
              __html: page.content || "",
            }}
          />
        </div>
      </section>
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-[#151515]
          px-6
          py-3
          text-sm
          font-medium
          text-white
          transition
          duration-200
          hover:-translate-y-0.5
          hover:bg-[#292929]
        "
          >
            <span>←</span>
            Wróć do strony głównej
          </Link>
        </div>
      </section>
    </main>
  );
}
