import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Software License",
};

export default async function LicensePage() {
  const filePath = path.join(process.cwd(), "LICENSE");
  let content = "";

  try {
    content = await fs.promises.readFile(filePath, "utf8");
  } catch (error) {
    return notFound();
  }

  return (
    <main className="m3-container">
      <div className="card bg-base-100 shadow-xl border border-base-200">
        <div className="card-body">
          {/* 
            'prose' class automagically styles headings, lists, and paragraphs.
            'prose-stone' gives it a neutral gray look.
            'dark:prose-invert' ensures it looks good in dark mode.
          */}
          <article className="prose prose-stone dark:prose-invert max-w-none">
            <ReactMarkdown
              components={{
                // Override the 'img' tag
                // 3. Override the Image to make it inline and icon-sized
                img: ({ node, ...props }) => (
                  <img
                    {...props}
                    // 'inline-block': sits next to text
                    // 'h-6': fixes height to match text size (adjust to h-8 if needed)
                    // 'w-auto': maintains aspect ratio
                    // 'align-middle': centers it vertically with the text
                    // 'my-0': removes the big margins default prose adds
                    className="inline-block h-6 w-auto my-0 align-middle mx-1"
                    alt={props.alt || "License image"}
                  />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </article>
          
          <div className="card-actions justify-end mt-8">
            <a href="/" className="btn btn-primary btn-outline">
              Close
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}