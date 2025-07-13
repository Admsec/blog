var posts=["2025/07/13/Linux-组-raid-1/","2025/07/13/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };