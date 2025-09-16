import BlogCards from "./components/BlogCards";
import BlogModal from "./components/modal";


export const BlogData = async() => {
let blogData= null
try{
    const blogsRes = await fetch('https://jsonplaceholder.typicode.com/posts', {
            cache: "no-store",
        })
 blogData = await blogsRes.json();

// console.log(blogData);

} catch(err){
    console.log(err);
    
}

  

  return (
    <div> 
      
   <div className="grid grid-cols-2 md:grid-cols-3 mt-10 px-20 md:px-0">
    <div className="hidden md:block"></div>
      <h2 className="p-2 text-3xl"> Blog page</h2>
        <BlogModal />
   </div>
    <BlogCards blogData ={blogData.slice(0, 10)} />
    </div>
  )
}

 