var posts=["2025/05/02/Nino_Nakano_32x/","2025/05/08/ColeUnity_35k/","2025/05/09/Alya-x16/","2025/04/11/Pastelic_256x_V2_Purple/","2025/05/19/davez-x-rodaimbot/","2025/05/07/模组包/","2025/05/07/光影包/","2025/04/22/Stardust_256x_Sunset/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };