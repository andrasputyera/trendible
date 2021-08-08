<template>
  <div class="blog-wrapper">
      <div class="blog-content">
          <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
          <h2 v-else>{{ post.title }}</h2>
      </div>
  </div>
</template>

<script>
export default {
    name: "blogPost",
    props: ["post"]
};
</script>

<style lang="scss" scoped>
</style>