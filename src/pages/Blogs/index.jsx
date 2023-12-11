import React from 'react';
import { Link } from 'react-router-dom';
import blogData from './blogData.json';

const MetakulCollection = () => {
  return (
    <main className="pt-[5.5rem] lg:pt-24">
      <section className="relative py-16 md:py-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
          </picture>

        <div className="container">
          {blogData.map((post) => (
            <article key={post.id} className="mb-[1.875rem] md:mb-16">
              <div className="flex flex-col overflow-hidden rounded-2.5xl transition-shadow hover:shadow-lg md:flex-row">
                <figure className="group overflow-hidden md:w-1/2">
                  <Link to={`/singleBlog/${post.id}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                    />
                  </Link>
                </figure>

                <div
                  className="rounded-b-[1.25rem] border border-jacarta-100 bg-white p-[10%] dark:border-jacarta-600 dark:bg-jacarta-700 md:w-1/2 md:rounded-none md:rounded-r-[1.25rem]"
                >
                  <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
                    <a
                      href="#"
                      className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200"
                    >
                      {post.author}
                    </a>
                    <span className="dark:text-jacarta-400">in</span>
                    <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
                      {post.categories.map((category) => (
                        <a key={category} href="#">
                          {category}
                        </a>
                      ))}
                    </span>
                  </div>

                  <h2
                    className="mb-4 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent sm:text-3xl"
                  >
                    <Link to={`/singleBlog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="mb-8 dark:text-jacarta-200">{post.content}</p>

                  <div className="flex flex-wrap items-center space-x-2 text-sm text-jacarta-400">
                    <span>
                      <time dateTime={post.date}>{post.date}</time>
                    </span>
                    <span>•</span>
                    <span>3 min read</span>
                  </div>
                </div>
              </div>
            </article>
          ))}

        </div>
      </section>
    </main>
  );
};

export default MetakulCollection;
