"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { LatestBlogHero } from "@/components/sections/blog/latest-blog-hero";
import { Post } from "@/sanity/schemaTypes/postType";
import { Tag } from "@/components/blog/Tag";
import { Input } from "@/components/ui/input";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";
import { getPosts } from "@/lib/blog";
import { sanitizeInput } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function BlogClient({
  posts: initialPosts,
  latestBlog: initialLatestBlog,
  tags,
}: {
  posts: Post[];
  latestBlog: Post | null;
  tags: { _id: string; name: string; slug: { current: string } }[];
}) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const t = useTranslations("blog");

  const searchParams = useSearchParams();
  const router = useRouter();

  const [latestBlog] = useState<Post | null>(initialLatestBlog);
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [selectedTag, setSelectedTag] = useState<string>(
    searchParams.get("tag") || ""
  );

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getPosts(selectedTag, search);
      setPosts(fetchedPosts);
    };
    fetchPosts();
  }, [selectedTag, search]);

  const handleTagClick = (tagSlug: string) => {
    if (tagSlug === "all-posts") {
      setSelectedTag("");
      const params = new URLSearchParams();
      if (search) {
        params.set("search", search);
      }
      router.push(`/blog?${params.toString()}`);
    } else {
      setSelectedTag(tagSlug);
      const params = new URLSearchParams();
      params.set("tag", tagSlug);
      if (search) {
        params.set("search", search);
      }
      router.push(`/blog?${params.toString()}`);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(sanitizeInput(e.target.value));
    const params = new URLSearchParams();
    if (e.target.value) {
      params.set("search", e.target.value);
    }
    if (selectedTag) {
      params.set("tag", selectedTag);
    }
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <section className="mb-24 px-5 lg:px-40" ref={ref}>
      <div className="mb-8 mt-4 flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <div className="flex flex-row flex-wrap gap-2">
          <Tag
            key="all-posts"
            name={t("allPosts")}
            isActive={selectedTag === ""}
            onClick={() => handleTagClick("all-posts")}
          />
          {tags.map((tag) => (
            <Tag
              key={tag._id}
              name={tag.name}
              isActive={selectedTag === tag.slug.current}
              onClick={() => handleTagClick(tag.slug.current)}
            />
          ))}
        </div>
        <Input
          type="text"
          placeholder={t("searchPlaceholder")}
          value={search}
          onChange={handleSearchChange}
          className="w-full md:w-fit"
        />
      </div>
      <div>
        <div className="mb-28">
          <LatestBlogHero latestBlog={latestBlog} isLoading={false} />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {posts.slice(0, 4).map((post, index) => (
            <motion.div
              key={post.slug.current}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
            >
              <div className="hidden md:block">
                <ArticleCard article={post} />
              </div>
              <div className="block md:hidden">
                <ArticleCard article={post} size="small" />
              </div>
            </motion.div>
          ))}
        </div>

        {posts.length > 4 && (
          <div className="mt-8 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(4).map((post, index) => (
              <motion.div
                key={post.slug.current}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: (index + 4) * 0.2,
                }}
              >
                <ArticleCard
                  key={post.slug.current}
                  size="small"
                  article={post}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
