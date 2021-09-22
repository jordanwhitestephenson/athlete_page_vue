<template>
  <div class="container">
    <b-input v-model="filter" placeholder="Filter Athlete by Name"></b-input>
    <b-modal id="modal-2" title="Athlete Updated!"> </b-modal>
    <hr />
    <b-table
      responsive
      :filter="filter"
      variant="info"
      :fields="fields"
      :items="athletes"
      _showDetails:
      true
      @row-clicked="(item) => $set(item, '_showDetails', !item._showDetails)"
    >
      <template slot="row-details" slot-scope="row">
        <b-card>
          <b-form>
            <b-form-group
              id="input-group-3"
              label="Athlete Type:"
              label-for="input-3"
            >
              <b-form-select
                id="input-3"
                v-model="row.item.TYPE"
                :options="options"
                required
              ></b-form-select>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="Athlete's Name:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="row.item.ATHLETE_NAME_HEADLIME"
                placeholder="Athlete's Name"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-grid"
              label="Athlete's Grid Image:"
              label-for="input-1-grid-image"
            >
              <b-form-input
                id="input-1-grid-image"
                v-model="row.item.ATHLETE_GRID_IMAGE"
                placeholder="Athlete's Grid Image"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Athlete's Helmet (Desktop) 1st Helmet:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="row.item.ATHLETE_HELMET[0].name"
                placeholder="1st (Desktop) Athlete's Helmet Name"
                required
              ></b-form-input>
              <b-form-input
                id="input-2"
                v-model="row.item.ATHLETE_HELMET[0].url"
                placeholder="1st  (Desktop) Athlete's Helmet Link"
                required
              ></b-form-input>
            </b-form-group>

          <b-form-group  v-if="row.item.ATHLETE_HELMET[1]"
              id="input-group-112"
              label="Athlete's Helmet (Desktop) 2nd Helmet:"
              label-for="input-112"
            >
              <b-form-input
                id="input-112"
                v-model="row.item.ATHLETE_HELMET[1].name"
                placeholder="2nd (Desktop) Athlete's Helmet Name"
                required
              ></b-form-input>
              <b-form-input
                id="input-112"
                v-model="row.item.ATHLETE_HELMET[1].url"
                placeholder="2nd (Desktop) Athlete's Helmet Link"
                required
              ></b-form-input>
            </b-form-group>


            <b-form-group v-if="row.item.ATHLETE_HELMET[2]"
              id="input-group-113"
              label="Athlete's Helmet (Desktop) 3rd Helmet:"
              label-for="input-113"
            >
              <b-form-input
                id="input-113"
                v-model="row.item.ATHLETE_HELMET[2].name"
                placeholder="3rd (Desktop) Athlete's Helmet Name"
                required
              ></b-form-input>
              <b-form-input
                id="input-113"
                v-model="row.item.ATHLETE_HELMET[2].url"
                placeholder="3rd (Desktop) Athlete's Helmet Link"
                required
              ></b-form-input>
            </b-form-group>
           <b-form-group v-if="row.item.ATHLETE_HELMET[3]"
              id="input-group-114"
              label="Athlete's Helmet (Desktop) 4th Helmet:"
              label-for="input-114"
            >
              <b-form-input
                id="input-113"
                v-model="row.item.ATHLETE_HELMET[3].name"
                placeholder="4th (Desktop) Athlete's Helmet Name"
                required
              ></b-form-input>
              <b-form-input
                id="input-113"
                v-model="row.item.ATHLETE_HELMET[3].url"
                placeholder="4th (Desktop) Athlete's Helmet Link"
                required
              ></b-form-input>
            </b-form-group>



            <b-form-group
               v-if="row.item.ATHLETE_MOBILE[0]"
              id="input-group-22"
              label="Athlete's Helmet (Mobile) 1st Helmet:"
              label-for="input-22"
            >
              <b-form-input
                id="input-22"
                v-model="row.item.ATHLETE_MOBILE[0].name"
                required
              ></b-form-input>

                <b-form-input
                id="input-23"
                v-model="row.item.ATHLETE_MOBILE[0].url"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
               v-if="row.item.ATHLETE_MOBILE[1]"
              id="input-group-24"
              label="Athlete's Helmet (Mobile) 2nd Helmet:"
              label-for="input-24"
            >
              <b-form-input
                id="input-24"
                v-model="row.item.ATHLETE_MOBILE[1].name"
                required
              ></b-form-input>

                <b-form-input
                id="input-25"
                v-model="row.item.ATHLETE_MOBILE[1].url"
                required
              ></b-form-input>
            </b-form-group>


            <b-form-group
               v-if="row.item.ATHLETE_MOBILE[2]"
              id="input-group-26"
              label="Athlete's Helmet (Mobile) 3rd Helmet:"
              label-for="input-26"
            >
              <b-form-input
                id="input-26"
                v-model="row.item.ATHLETE_MOBILE[2].name"
                required
              ></b-form-input>

                <b-form-input
                id="input-26"
                v-model="row.item.ATHLETE_MOBILE[2].url"
                required
              ></b-form-input>
            </b-form-group>

                        <b-form-group
               v-if="row.item.ATHLETE_MOBILE[3]"
              id="input-group-26"
              label="Athlete's Helmet (Mobile) 4th Helmet:"
              label-for="input-29"
            >
              <b-form-input
                id="input-29"
                v-model="row.item.ATHLETE_MOBILE[3].name"
                required
              ></b-form-input>

                <b-form-input
                id="input-30"
                v-model="row.item.ATHLETE_MOBILE[3].url"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-checkbox
              id="checkbox-1"
              v-model="row.item.FEATURED"
              name="checkbox-1"
            >
              Is Athlete Featured?
            </b-form-checkbox>

            <b-form-group
              v-if="row.item.FEATURED"
              id="input-group-5"
              label="Featured Athlete Paragraph"
              label-for="input-5"
            >
              <b-form-input
                id="input-5"
                v-model="row.item.MODAL_ATHLETE_PARAGRAPH"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              v-if="row.item.FEATURED"
              id="input-group-6"
              label="Hometown"
              label-for="input-6"
            >
              <b-form-input
                id="input-6"
                v-model="row.item.MODAL_ATHELETE_HOMETOWN"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              v-if="row.item.FEATURED"
              id="input-group-7"
              label="Instagram Handle"
              label-for="input-7"
            >
              <b-form-input
                id="input-7"
                v-model="row.item.INSTAGRAM"
                required
              ></b-form-input>
              <b-form-text>Example : "@veroniquesandler"</b-form-text>
            </b-form-group>

            <b-form-group
              v-if="row.item.FEATURED"
              id="input-group-8"
              label="Instagram URL"
              label-for="input-8"
            >
              <b-form-input
                id="input-8"
                v-model="row.item.INSTAGRAMHREF"
                required
              ></b-form-input>
              <b-form-text
                >Example :
                "https://www.instagram.com/veroniquesandler"</b-form-text
              >
            </b-form-group>

            <b-form-group
              v-if="row.item.FEATURED"
              id="input-group-9"
              label="Favorite Icecream"
              label-for="input-9"
            >
              <b-form-input
                id="input-8"
                v-model="row.item.ICECREAM"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              v-if="row.item.FEATURED"
              id="input-group-9"
              label="Youtube Default Image"
              label-for="input-9"
            >
              <b-form-input
                id="input-9"
                v-model="row.item.YOUTUBEIMAGE"
                required
              ></b-form-input>
              <b-form-text
                >Example : "Veronique-Sandler-Feature-Video-Slot.jpg" - Image
                needs to be found in SFCC's directory
                'images/landing-pages'</b-form-text
              >
            </b-form-group>

            <b-form-group
              v-if="row.item.FEATURED"
              id="input-group-10"
              label="Youtube URL ID"
              label-for="input-10"
            >
              <b-form-input
                id="input-9"
                v-model="row.item.YOUTUBE"
                required
              ></b-form-input>
              <b-form-text>Example : InwjlhS0JmI</b-form-text>
            </b-form-group>

            <b-form-group
              v-if="row.item.FEATURED"
              id="input-group-11"
              label="Youtube Label"
              label-for="input-11"
            >
              <b-form-input
                id="input-9"
                v-model="row.item.YOUTUBELABEL"
                required
              ></b-form-input>
              <b-form-text
                >Example : Distant Relatives - 50to01 Visits
                Barcelona</b-form-text
              >
            </b-form-group>

            <b-form-group
              v-if="row.item.FEATURED"
              id="input-group-11"
              label="Featured Image 1"
              label-for="input-11"
            >
              <b-form-input
                id="input-9"
                v-model="row.item.MODALGRIDIMAGE1"
                required
              ></b-form-input>
              <b-form-text
                >Example : Veronique-Sandler-Feature-Image-1.jpg" Image needs to
                be found in SFCC's directory 'images/landing-pages</b-form-text
              >
            </b-form-group>

            <b-form-group
              v-if="row.item.FEATURED"
              id="input-group-11"
              label="Featured Image 2"
              label-for="input-11"
            >
              <b-form-input
                id="input-9"
                v-model="row.item.MODALGRIDIMAGE2"
                required
              ></b-form-input>
              <b-form-text
                >Example : Veronique-Sandler-Feature-Image-2.jpg" Image needs to
                be found in SFCC's directory 'images/landing-pages</b-form-text
              >
            </b-form-group>

            <b-form-group
              v-if="row.item.FEATURED"
              id="input-group-12"
              label="Featured Image 3"
              label-for="input-12"
            >
              <b-form-input
                id="input-9"
                v-model="row.item.MODALGRIDIMAGE3"
                required
              ></b-form-input>
              <b-form-text
                >Example : Veronique-Sandler-Feature-Image-3.jpg" Image needs to
                be found in SFCC's directory 'images/landing-pages</b-form-text
              >
            </b-form-group>

            <div class="button-container d-flex justify-content-between">
              <b-button href="#">Cancel</b-button>
              <b-button
                type="submit"
                @click.prevent="writeUserData(row.item)"
                variant="success"
                >Save</b-button
              >
            </div>
          </b-form>
        </b-card>
      </template>
    </b-table>
  </div>
</template>



<script>
import { db } from "../firebase";

export default {
  name: "EditAthlete",
  firestore: {
    athletes: db,
  },
  data() {
    return {
      rowClass: "",
      options: [
        "ALPINE",
        "Road-Cycling",
        "Mountain-Bike",
        "GRAVEL",
        "CYLOCROSS",
        "SNOWBOARD",
        "SKI",
      ],
      athletes: [],
      defaultSelect: " ",
      successMessage: "",
      selectedAth: "",
      selected: [],
      currentItems: [],
      visible: false,
      viewableAthlete: "aaaa",
      fields: [
        {
          key: "ATHLETE_NAME_HEADLIME",
          label: "Update Athlete",
        },
      ],
      filter: null,
    };
  },
  methods: {
    saveUpdate(row) {
      console.log(row, "ROW");
    },
    onRowSelected(row) {
      row._showDetails = !row._showDetails;
    },
    toggleDetails(action) {
      this.rowClass = "activeRow";
      return action.toggleDetails();
    },
    writeUserData(newValues) {
      console.log(newValues);
      db.doc(newValues.id).set(newValues).then(this.$bvModal.show("modal-2"));

      // console.log(this.$firebaseRefs)
      // const db = getDatabase();
      // const usersRef = ref.child('athletes');
      // console.log(usersRef,db, set, '?')
      // set(ref(db, "athletes/"), {
      //   ATHLETE_NAME_HEADLIME: this.ATHLETE_NAME_HEADLIME

      // });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.activeRow {
  background-color: #f2f2f2;
}
</style>