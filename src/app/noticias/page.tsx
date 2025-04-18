import BlogCard from "../ui/blogCard";
import { noticiasBlog } from "../utils/BlogAdvices";



export default function page() {

  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {noticiasBlog.map((noticia, idx) => (
          <BlogCard key={idx} {...noticia} />
        ))}
      </div>
    </div>
  );
}
