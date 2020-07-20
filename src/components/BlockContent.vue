<template>
  <portable-text :blocks="blocks" :serializers="serializers"/>
</template>

<script>
import PortableText from "sanity-blocks-vue-component";
export default {
  props: {
    blocks: Array
  },
  components: {
    PortableText
  },
  data() {
    return {
      serializers: {
        types: {
          mainImage: ({ node }) => <figure />
        }
      }
    };
  }
};
</script>

