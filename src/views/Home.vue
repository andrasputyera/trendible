<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View The Most Recent Trends</h3>
        <div class="blog-cards">
          <BlogCard v-for="(post, index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue'
import BlogCard from '../components/BlogCard.vue'

export default {
  name: "Home",
  components: { BlogPost, BlogCard },
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
      ],
      sampleBlogCards: [
        { blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "May 25, 2022" },
        { blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "May 25, 2022" },
        { blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "May 25, 2022" },
        { blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "May 25, 2022" },
      ]
    };
  }
};
</script>
