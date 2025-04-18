var posts=["2025/04/11/Pastelic-256x-V2-Purple/","2025/04/11/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };