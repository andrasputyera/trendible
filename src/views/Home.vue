<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue'

export default {
  name: "Home",
  components: { BlogPost },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome to Trendible!",
        blogPost: "We track emerging industries and trends before they explode, and then show you how to capitalize.",
        welcomeScreen: true,
        photo: "coding"
      },
      sampleBlogPost: [
        {
          title: "This is a Filler Title!",
          blogHTML: "This is filler blog post title!",
          blogCoverPhoto: "beautiful-stories"
        },
        {
          title: "This is a Filler Title!",
          blogHTML: "This is filler blog post title!",
          blogCoverPhoto: "designed-for-everyone"
        }
      ]
    }
  }
};
</script>
