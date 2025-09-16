// app/actions/blogActions.ts
"use server"

export async function createBlog(formData: FormData) {
  const title = formData.get("title") as string
  const body = formData.get("body") as string
// console.log(title, body);

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      body,
      userId: 1,
    }),
  })
  return res.json().then(data => {
  console.log(data);
  return data;
  })
}
