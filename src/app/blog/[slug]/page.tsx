interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Blog Post: {slug}</h1>
        <p className="text-lg">
          This is a dynamic route example. The slug parameter is: <strong>{slug}</strong>
        </p>
      </main>
    </div>
  );
}
