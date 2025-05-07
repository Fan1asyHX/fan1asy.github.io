var posts=["2025/05/02/Nino_Nakano_[32x]/","2025/04/22/Stardust_[256x]_Sunset/","2025/04/11/Pastelic_256x_V2_Purple/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };