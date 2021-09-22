<template>
<div>
<h2>welcome to the giro athlete dashboard</h2>
    <h3>Content Asset Name : 'team' </h3>
    <li> To Add an athelete, click on the Add Athlete nav link and fill out the form. By submitting a new athlete form, database will be updated </li>
    <ul class="container">
      <p> Database Keys </p>
     <div>
        <li>ATHLETE_GRID_IMAGE : this key references the grid image file for each athlete. Upload this image to /images/landingpages/ folder in SFCC. When submitting a new athlete grid image, just add the image reference. AKA 'Nico-Porteous.jpg' (as long as Nico-Porteous.jpg is found in SFCC images/landing-pages folder</li>
        <img src="../assets/GridImage.png" style = "max-width: 100%"/>
      </div>
     <div>
          <li>ATHLETE_HELMENT : this key references an array of associated products on desktop. As a design request, Desktop products are displayed differently than Mobile products. Each object in this array should have a 'name' and a 'url' property. </li>
           <img src="../assets/products.png" style = "max-width: 100%"/>
       </div>

        <div>
          <li>ATHLETE_NAME_HEADLIME : this key references a string of an athlete's name. </li>
           <img src="../assets/athletename_1.png" style = "max-width: 100%"/>
       </div>

       <h3>
         If an athlete is FEATURED, the following keys will be needed..
        </h3>


        <div>
          <li>INSTAGRAM : this key references a string of a featrued athlete's INSTAGRAM display name i.e. '@veroniquesandler' </li>
          <li> INSTAGRAMHREF : this key references a string of a featured athlete's instagram url, i.e : "https://www.instagram.com/veroniquesandler/" </li>
          <li> MODALGRIDIMAGE1,  MODALGRIDIMAGE2, MODALGRIDIMAGE3: this key references a string of a featured athlete's instagram url </li>
           <img src="../assets/Modalgridimages.png" style = "max-width: 100%"/>
           <li> MODAL_ATHLETE_PARAGRAPH : this key references a string of a featured athlete's paragraph info</li>
            <img src="../assets/paragraph.png" style = "max-width: 100%"/>
            <li>YOUTUBE : this key references a string of a featured athlete's youtube ID source Example : 'InwjlhS0JmI' </li>
            <li> YOUTUBEIMAGE :  this key references a string of a featured athlete's youtube overlay. This image (along with all referenced images), needs to be found in SFCC's images/landing-pages folder. </li>
             <img src="../assets/youtubepicture.png" style = "max-width: 100%"/>
             <li>YOUTUBELABEL : this key references a string of a featured athlete's youtube description</li>
              <img src="../assets/youtubelabel.png" style = "max-width: 100%"/>
       </div>

      </ul>
      </div>
</template>

<script>


export default {
  name: "home",

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
};
</script>