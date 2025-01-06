"use client";

import { motion } from "motion/react";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { useInView } from "react-intersection-observer";
import { getPosts } from "@/lib/blog";
import { useEffect, useState } from "react";
import { Post } from "@/sanity/schemaTypes/postType";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const News = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getPosts();
        setPosts(postsData);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return Array.from({ length: 3 }).map((_, index) => (
      <Skeleton key={index} className="w-full" />
    ));
  }

  return (
    <section ref={ref} className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="px-5 lg:px-40"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Blog
          </h2>
          <Button variant="outline" asChild>
            <Link href="/blog">View all</Link>
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {!posts
            ? Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={index} className="w-full" />
              ))
            : posts.slice(0, 3).map((post: Post, index) => (
                <motion.div
                  key={post.slug?.current}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                >
                  <div className="hidden h-full md:block">
                    <ArticleCard article={post} />
                  </div>
                  <div className="block md:hidden">
                    <ArticleCard article={post} size="small" />
                  </div>
                </motion.div>
              ))}
        </div>
      </motion.div>
    </section>
  );
};
