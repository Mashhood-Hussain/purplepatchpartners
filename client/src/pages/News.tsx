export default function NewsPage() {
  const posts = [
    {
      date: "January 2025",
      title: "Holiday Club Announcement",
      image: "/images/holidayposter.jpg",
      content: "We are excited to announce our upcoming holiday club..."
    },
    {
      date: "December 2024",
      title: "New Staff Joining",
      image: "/images/man.png",
      content: "We welcome two new support workers to our team..."
    }
  ];

  return (
    <main id="main-content" className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">News</h1>

      <div className="space-y-10">
        {posts.map((post, index) => (
          <article key={index} className="border rounded-lg p-6">
            <p className="text-sm text-gray-600">{post.date}</p>
            <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
            <img
              src={post.image}
              alt={post.title}
              className="w-full max-w-lg h-auto rounded-lg mb-4"
            />
            <p>{post.content}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
