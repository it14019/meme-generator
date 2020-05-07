<template>
  <div class="container">
    <b-row class="mt-5" v-if="!images.length">
      <b-col>
        <b-spinner label="Loading images" variant="primary"></b-spinner>
      </b-col>
    </b-row>
    <div class="gallery">
      <!-- row -->
      <template v-for="image in images">
        <img
          :src="image.url"
          :key="image.id"
          :alt="`Image of ${image.name} meme`"
          class="meme-thumb"
          v-b-modal.modal-1
          @click="imgToEdit = image.url"
         
  
          
       
        />
      </template>
    </div>

    <b-modal class="modal" size="lg" id="modal-1" title="Editor" header-bg-variant="success" ok-only ok-variant=success>
      <Editor :imgToEdit="imgToEdit" />
    </b-modal>
  </div>
</template>



<script>
import Editor from "@/components/Editor.vue";

export default {
  name: "Gallery",
  components: { Editor },
  data() {
    return {
      images: [],
      imgToEdit: ""
    };
  },
  created() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => (this.images = response.data.memes))
      .catch(err => console.log(err));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  /* background-color: tomato; */
  margin: 0 auto;
  width: 90%;
}
.gallery {
  width: 100%;
  margin: 0 auto;
  /* background-color: red; */
}
img {
  width: 17vw;
  height: 15vw;
  cursor: pointer;
}
img:hover {
  opacity: 0.7;
}

.meme-thumb {
}
</style>
