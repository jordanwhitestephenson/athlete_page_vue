<template>
  <div class="hello">
    <b-form id="add-athlete-form" class="container" @submit.prevent="addAthlete()">
      <h2>Add Athlete To Page</h2>
      <div>
        <b-modal id="modal-1" title="Athlete Added!"> </b-modal>
      </div>
      <b-form-group
        id="input-athlete-type"
        label="Athlete's Sport Type:"
        label-for="input-3"
      >
        <b-form-select
          id="input-athlete-type"
          v-model="TYPE"
          :options="options"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Athlete Name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="ATHLETE_NAME_HEADLIME"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

  <div> 
    <b-form-group
        id="input-Product-list"
        label="Athlete's Product List (Desktop):"
        label-for="input-Product-list"
      >
    <b-form-input type="text" v-model = "ATHLETE_HELMET_nameinput" :value="ATHLETE_HELMET_nameinput"></b-form-input>
    <b-form-input type="text" v-if= "ATHLETE_HELMET_nameinput"  v-model = "ATHLETE_HELMET_urlinput" value="ATHLETE_HELMET_urlinput"> </b-form-input>
    <div v-if= "ATHLETE_HELMET_nameinput !== null && ATHLETE_HELMET_urlinput || ATHLETE_HELMET.length > 0" >
        <button  type="button" @click.prevent="addDesktopProductItem">Add Another</button>
        <span>{{errorAddProduct}}</span>
      </div>

  
    </b-form-group>

    <p class="mt-2">Total Desktop Products: {{ ATHLETE_HELMET.length }}</p>
  </div>
      <div class="form-group">
        <label for="ATHLETE_MOBILE">Athlete's Product List (Mobile):</label>
        <input
          type=""
          class="form-control"
          v-model="ATHLETE_MOBILE"
          placeholder=""
        />
      </div>
      <b-form-group
        id="input-Product-list"
        label="Athlete Grid Image"
        label-for="ATHLETE_GRID_IMAGE"
        description="You will need to upload this image to SFCC's
          'images/landing-pages folder"
      >
        <b-form-input
          id="ATHLETE_GRID_IMAGE"
          v-model="ATHLETE_GRID_IMAGE"
          placeholder="EXAMPLE : Nico-Porteous.jpg"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <div class="form-check">
        <input type="checkbox" class="form-check-input" v-model="FEATURED" />
        <label class="form-check-label" for="FEATURED">Featured Athlete?</label>
      </div>

      <div class="form-group" v-if="FEATURED">
        <label for="MODAL_ATHLETE_PARAGRAPH"
          >Featured Athlete Paragraph text</label
        >
        <input
          type="text"
          class="form-control"
          v-model="MODAL_ATHLETE_PARAGRAPH"
        />
      </div>
      <div class="form-group" v-if="FEATURED">
        <label for="MODAL_ATHELETE_HOMETOWN">Athelete's hometown</label>
        <input
          type="text"
          class="form-control"
          v-model="MODAL_ATHELETE_HOMETOWN"
        />
      </div>
      <div class="form-group" v-if="FEATURED">
        <label for="INSTAGRAM">Athelete's Instagram handle</label>
        <input type="text" class="form-control" v-model="INSTAGRAM" />
        <small id="passwordHelpInline" class="text-muted">
          Example : @tonio_ratley
        </small>
      </div>

      <div class="form-group" v-if="FEATURED">
        <label for="INSTAGRAMHREF">Link to Athlete's Instagram</label>
        <input type="text" class="form-control" v-model="INSTAGRAMHREF" />

        <small id="passwordHelpInline" class="text-muted">
          Example : https://www.instagram.com/tonio_ratley/
        </small>
      </div>

      <div class="form-group" v-if="FEATURED">
        <label for="ICECREAM">Athlete's Favorite Icecream</label>
        <input type="text" class="form-control" v-model="ICECREAM" />
      </div>
      <div class="form-group" v-if="FEATURED">
        <label for="YOUTUBEIMAGE">Default Youtube Image</label>
        <input type="text" class="form-control" v-model="YOUTUBEIMAGE" />
      </div>
      <div class="form-group" v-if="FEATURED">
        <label for="YOUTUBE">Youtube Embed ID</label>
        <input type="text" class="form-control" v-model="YOUTUBE" />

        <small id="passwordHelpInline" class="text-muted">
          Example : InwjlhS0JmI
        </small>
      </div>
      <div class="form-group" v-if="FEATURED">
        <label for="YOUTUBELABEL">Youtube Label</label>
        <input type="text" class="form-control" v-model="YOUTUBELABEL" />

        <small id="passwordHelpInline" class="text-muted">
          Example :Distant Relatives - 50to01 Visits Barcelona
        </small>
      </div>
      <div class="form-group" v-if="FEATURED">
        <label for="MODALGRIDIMAGE1">1st Featured Image</label>
        <input type="text" class="form-control" v-model="MODALGRIDIMAGE1" />

        <small id="passwordHelpInline" class="text-muted">
          Example : Josh-Bryceland-Feature-Image-1.jpg - image will need to be
          uploaded in SFCC's 'images/landing-pages' folder
        </small>
      </div>
      <div class="form-group" v-if="FEATURED">
        <label for="MODALGRIDIMAGE2">2nd Featured Image</label>
        <input type="text" class="form-control" v-model="MODALGRIDIMAGE2" />
        <small id="passwordHelpInline" class="text-muted">
          Example : Josh-Bryceland-Feature-Image-1.jpg - image will need to be
          uploaded in SFCC's 'images/landing-pages' folder
        </small>
      </div>
      <div class="form-group" v-if="FEATURED">
        <label for="MODALGRIDIMAGE3">3nd Featured Image</label>
        <input type="text" class="form-control" v-model="MODALGRIDIMAGE3" />

        <small id="passwordHelpInline" class="text-muted">
          Example : Josh-Bryceland-Feature-Image-1.jpg - image will need to be
          uploaded in SFCC's 'images/landing-pages' folder
        </small>
      </div>

      <b-button type="submit" class="btn btn-primary"> Submit </b-button>
    </b-form>
  </div>
</template>

<script>
import { db } from "../firebase";

db.get().then((querySnapshot) => {
  const documents = querySnapshot.docs.map((doc) => doc.data());
  console.log(documents);
});

export default {
  name: "AddAthlete",
  props: {
    msg: String,
  },
  data() {
    return {
      ATHLETE_HELMET_nameinput: null,
      ATHLETE_HELMET_urlinput : null,
      options: [
        "ALPINE",
        "Road-Cycling",
        "Mountain-Bike",
        "GRAVEL",
        "CYLOCROSS",
        "SNOWBOARD",
        "SKI",
      ],
      TYPE: "",
      ATHLETE_NAME_HEADLIME: "",
      ATHLETE_MOBILE: "",
      FEATURED: false,
      ATHLETE_GRID_IMAGE: "",
      MODAL_ATHLETE_PARAGRAPH: "",
      MODAL_ATHELETE_HOMETOWN: "",
      INSTAGRAM: "",
      INSTAGRAMHREF: "",
      ICECREAM: "",
      YOUTUBEIMAGE: "",
      YOUTUBEDEFAULTID: "",
      YOUTUBEID: "",
      YOUTUBE: "",
      YOUTUBELABEL: "",
      MODALGRIDIMAGE1: "",
      MODALGRIDIMAGE2: "",
      MODALGRIDIMAGE3: "",
      formData: {},
      formsucess: false,
      errorAddProduct: "",
      fields: [
        { key: "name", label: "desktop product name"},
        { key: "url", label: "url" },
      ],
      ATHLETE_HELMET: [],
    };
  },

  firestore: {
    athletes: db,
  },
  methods: {
    clearData() {
      this.TYPE = "";
      this.errorAddProduct= "",
      this.ATHLETE_HELMET_nameinput = null,
      this.ATHLETE_HELMET_urlinput = null,
      this.ATHLETE_NAME_HEADLIME = "";
      this.ATHLETE_HELMET = [];
      this.ATHLETE_MOBILE = "";
      this.FEATURED = false;
      this.ATHLETE_GRID_IMAGE = "";
      this.MODAL_ATHLETE_PARAGRAPH = "";
      this.MODAL_ATHELETE_HOMETOW = "";
      this.INSTAGRAM = "";
      this.INSTAGRAMHREF = "";
      this.ICECREAM = "";
      this.YOUTUBEIMAGE = "";
      this.YOUTUBEDEFAULTID = "";
      this.YOUTUBEID = "";
      this.YOUTUBE = "";
      this.YOUTUBELABEL = "";
      this.MODALGRIDIMAGE1 = "";
      this.MODALGRIDIMAGE2 = "";
      this.MODALGRIDIMAGE3 = "";
    },
    addAthlete() {
      if (!this.FEATURED) {
        db.add({
          ID: Math.random(),
          TYPE: this.TYPE,
          ATHLETE_NAME_HEADLIME: this.ATHLETE_NAME_HEADLIME,
          ATHLETE_HELMET: this.ATHLETE_HELMET,
          ATHLETE_MOBILE: this.ATHLETE_HELMET,
          FEATURED: this.FEATURED,
          ATHLETE_GRID_IMAGE: this.ATHLETE_GRID_IMAGE,
          MODAL_ATHLETE_PARAGRAPH: this.MODAL_ATHLETE_PARAGRAPH,
          MODAL_ATHELETE_HOMETOWN: this.MODAL_ATHELETE_HOMETOWN,
          INSTAGRAM: this.INSTAGRAM,
          INSTAGRAMHREF: this.INSTAGRAMHREF,
          ICECREAM: this.ICECREAM,
          YOUTUBEIMAGE: this.YOUTUBEIMAGE,
          YOUTUBEDEFAULTID: this.YOUTUBEDEFAULTID,
          YOUTUBEID: this.YOUTUBEID,
          YOUTUBE: this.YOUTUBE,
          YOUTUBELABEL: this.YOUTUBELABEL,
          MODALGRIDIMAGE1: this.MODALGRIDIMAGE1,
          MODALGRIDIMAGE2: this.MODALGRIDIMAGE2,
          MODALGRIDIMAGE3: this.MODALGRIDIMAGE3,
        })
          .then(() => this.$bvModal.show("modal-1"))
          .then(() => this.clearData())
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
      } else {
        db.add({
          ID: Math.random(),
          TYPE: this.TYPE,
          ATHLETE_NAME_HEADLIME: this.ATHLETE_NAME_HEADLIME,
          ATHLETE_HELMET: this.ATHLETE_HELMET,
          ATHLETE_MOBILE: this.ATHLETE_MOBILE,
          FEATURED: this.FEATURED,
          ATHLETE_GRID_IMAGE: this.ATHLETE_GRID_IMAGE,
          MODAL_ATHLETE_PARAGRAPH: this.MODAL_ATHLETE_PARAGRAPH,
          MODAL_ATHELETE_HOMETOWN: this.MODAL_ATHELETE_HOMETOWN,
          INSTAGRAM: this.INSTAGRAM,
          INSTAGRAMHREF: this.INSTAGRAMHREF,
          ICECREAM: this.ICECREAM,
          YOUTUBEIMAGE: this.YOUTUBEIMAGE,
          YOUTUBEDEFAULTID: this.YOUTUBEDEFAULTID,
          YOUTUBEID: this.YOUTUBEID,
          YOUTUBE: this.YOUTUBE,
          YOUTUBELABEL: this.YOUTUBELABEL,
          MODALGRIDIMAGE1: this.MODALGRIDIMAGE1,
          MODALGRIDIMAGE2: this.MODALGRIDIMAGE2,
          MODALGRIDIMAGE3: this.MODALGRIDIMAGE3,
        })
          .then(() => this.$bvModal.show("modal-1"))
          .then(() => this.clearData())
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
      }
    },

     addDesktopProductItem() {
       let athleteHelmetOb = {
         name:  this.ATHLETE_HELMET_nameinput,
         url:  this.ATHLETE_HELMET_urlinput 
       }
       if(this.ATHLETE_HELMET_nameinput !== null && this.ATHLETE_HELMET_urlinput !== null ) {
        this.ATHLETE_HELMET.push(athleteHelmetOb)
        this.ATHLETE_HELMET_nameinput = null
        this.ATHLETE_HELMET_urlinput = null
       }
       else {
         this.errorAddProduct = "Please enter a name and url before adding a prduct"
       }

        console.log(this.ATHLETE_HELMET, 'ATHLETE_HELMET?')
     } 
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
