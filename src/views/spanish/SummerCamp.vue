<template>
  <div>
    <div class="page-head">
      <div class="caption">
        <h1 class="title">
          Summer Adventures in Spanish
        </h1>

        <small>
          NLC Madrid believes that summer is the best season for adventure. <br>
          For this reason, we offer a two-week package program with general
          Spanish, activities, and trips.
        </small>
      </div>
    </div>

    <GalleryRow>
      <h3 class="title">
        Focus
      </h3>
      <p>
        Our Camp provides the total summer experiences for students
        between 12 and 22 years old.
      </p>
      <p>
        We focus on a complete linguistic and cultural immersion that
        builds confidence, facilitating the integration and enrichment of
        different cultures.
      </p>
      <p>
        You can choose to live with a host family with half board or to stay
        in one of our accommodations.
      </p>
    </GalleryRow>
    <GalleryRow
      description-color-class="bg-light"
      img-left
    >
      <h3 class="title">
        Activities
      </h3>
      <p>
        You will develop different skills through painting workshops,
        theatre, creative writings, and short film making.
      </p>
      <p>
        Sports activities, sightseeing trips around Madrid, museum
        outings, tapas tours, and many more activities are all designed to
        encourage interaction.
      </p>
      <p>
        On the weekends there will be tours to different cities in Spain. Do
        you have any suggestions? We’d love to hear them!
      </p>
    </GalleryRow>
    <GalleryRow>
      <h3 class="title">
        Calendar
      </h3>
      <p>
        Choose the period that suits you best:
      </p>
      <p>
        <b>First half of August</b> <br>
        <small>(from 1st to 15th of August) </small>
      </p>
      <p>
        <b>Second half of August</b> <br>
        <small>(from 15th to 31st of August)</small>
      </p>
      <p>
        We customize the program to meet your needs, just ask us and we will be
        happy to organize your dreamy summer!
      </p>
    </GalleryRow>

    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-4 py-1">
          <button class="btn btn-outline-primary btn-block">
            Apply Now!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GalleryRow from '@/components/GalleryRow';

export default {
  components: {
    GalleryRow,
  },
  data: () => ({
    showIncActivities: true,
  }),
};
</script>

<style scoped>
.rounded-card p {
  line-height: 16px;
}
.rounded-card b.text-primary {
  font-size: 1.2em;
}
.weekendoff .img-container {
  min-height: 300px;
}
.weekendoff p {
  font-size: 1.5em;
}
</style>
