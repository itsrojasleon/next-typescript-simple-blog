import React from 'react';
import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';

interface Blog {
  title: string;
  description: string;
  route: string;
}

interface Props {
  posts: Blog[];
}

const Blog = ({ posts }: Props) => (
  <>
    <h1 className="text-4xl">Blog</h1>
    <ul>
      {posts.map((info) => (
        <li key={info.title}>
          <Link href="/blog/[slug]" as={`/blog/${info.route}`}>
            <a>{info.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const file = fs.readFileSync(path.join('posts', filename)).toString();
    const parsedMarkdown = matter(file);

    return { ...parsedMarkdown.data, route: filename.replace('.md', '') };
  });

  return {
    props: {
      posts
    }
  };
};

export default Blog;
