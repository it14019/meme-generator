<template>
  <div class="editor">
    <b-container>
      <b-row>
        <b-col class="left-side" id="imageToSave">
          <div class="left-side-draggable-container">
            <vue-draggable-resizable
              class="draggable-border"
              :w="100"
              :h="30"
              @dragging="onDrag"
              @resizing="onResize"
              :parent="true"
            >
              <p
                class="text-positioning"
                :style="{fontSize: topTextValue + 'px', color: topTextColor, fontFamily: selected }"
              >{{ topText }}</p>
            </vue-draggable-resizable>

            <vue-draggable-resizable
              class="draggable-border second-draggable-margin"
              :w="100"
              :h="30"
              @dragging="onDrag"
              @resizing="onResize"
              :parent="true"
            >
              <p
                class="text-positioning"
                :style="{fontSize: bottomTextValue + 'px', color: bottomTextColor,fontFamily: selected }"
              >{{ bottomText }}</p>
            </vue-draggable-resizable>
            <img :src="imgToEdit" :alt="`Image to edit`" />
          </div>
        </b-col>

        <b-col class="right-side">
          <b-form>
            <b-form-group id="input-group-1" label="Text top:" label-for="input-1">
              <b-form-input
                id="input-1"
                type="text"
                required
                placeholder="Type text here"
                v-model="topText"
              ></b-form-input>
            </b-form-group>

            <b-row>
              <b-col>
                <p class="text-padding">Font-size:</p>
              </b-col>
              <b-col>
                <vs-slider
                  class="slider-positioning"
                  max="40"
                  color="success"
                  v-model="topTextValue"
                ></vs-slider>
              </b-col>
            </b-row>

            <v-swatches v-model="topTextColor"></v-swatches>

            <b-form-group id="input-group-2" label="Text bottom:" label-for="input-2">
              <b-form-input
                id="input-2"
                type="text"
                required
                placeholder="Type text here"
                v-model="bottomText"
              ></b-form-input>
            </b-form-group>
            <b-row>
              <b-col>
                <p class="text-padding">Font-size:</p>
              </b-col>
              <b-col>
                <vs-slider
                  class="slider-positioning"
                  max="40"
                  color="success"
                  v-model="bottomTextValue"
                ></vs-slider>
              </b-col>
            </b-row>
            <v-swatches v-model="bottomTextColor"></v-swatches>
            <b-form-select v-model="selected" :options="options"></b-form-select>

            <b-form-group id="input-group-3" label="File name:" label-for="input-3">
              <b-form-input
                id="input-3"
                type="text"
                required
                placeholder="Type file name"
                v-model="savedImageName"
              ></b-form-input>
            </b-form-group>

            <b-button
              class="btn btn-download"
              @click="download(savedImageName)"
              variant="success"
            >Download</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import VSwatches from "vue-swatches";
import { saveAsJpeg } from "save-html-as-image";
export default {
  components: { VSwatches },
  name: "Gallery",
  props: {
    imgToEdit: {
      type: String
    }
  },
  data() {
    return {
      topTextValue: 16,
      bottomTextValue: 16,
      topText: "",
      bottomText: "",
      topTextColor: "#222F3D",
      bottomTextColor: "#222F3D",
      savedImageName: "funny-meme",
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      selected: null,
      options: [
        { value: null, text: "Select font-family", disabled: true },
        { value: "Arial", text: "Arial (default)" },
        { value: "Segoe UI", text: "Segoe UI" },
        { value: "Courier New", text: "Courier New" },
        { value: "Georgia", text: "Georgia" }
      ]
    };
  },
  methods: {
    onResize: function(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    },
    onDrag: function(x, y) {
      this.x = x;
      this.y = y;
    },
    download(savedImageName) {
      const node = document.getElementById("imageToSave");
      saveAsJpeg(node, { filename: savedImageName, printDate: false });
    }
  }
};
</script>


<style scoped>
@import "~@radial-color-picker/vue-color-picker/dist/vue-color-picker.min.css";

img {
  width: 100%;
}
.vue-swatches__container {
  z-index: 5;
}

.left-side {
  width: 50%;
  position: relative;
}

.left-side-draggable-container {
  width: 300px;
  /* height problem  */
}

.draggable-border {
  border: none;
}

.second-draggable-margin {
  margin-top: 100px;
}

.text-positioning {
  position: absolute;
  padding: 10px;
}

.right-side {
  width: 50%;
}

.text-padding {
  padding-top: 5px;
}

.slider-positioning {
  width: 19vw;
  min-width: 250px;
  z-index: 1;
}

.btn{
  width: 100%;
}
</style>