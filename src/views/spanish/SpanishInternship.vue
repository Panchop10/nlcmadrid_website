<template>
  <div>
    <div
      class="full-width-img bottom-right-rounded"
      style="background-image: url('http://placehold.it/1200x600/ec653c?text=full width image')"
    >
      <div class="image-caption">
        <h4 class="no-line mb-0 pb-0">
          Services
        </h4>
        <h1>
          Internship
        </h1>
      </div>
    </div>

    <div class="container text-center py-5">
      <h2 class="title">
        Join our community and come to do
        your internship at NLC Madrid
      </h2>
      <p>
        NLC Madrid is an educational institution dedicated to the teaching of
        Spanish to non-native speakers. Our aim is to provide a personalized
        education, where the student can take an active part in the learning
        process.
      </p>
    </div>

    <GalleryRow>
      <p>
        The NLC team is made up of native speakers, and people from
        different parts of the world, which creates a multicultural
        environment not only in the classroom but in the offices as well.
      </p>
      <p>
        No matter what area you are interested in, you will be working in a
        motivated, hard-working team that is eager to grow and develop
        professionally.
      </p>
    </GalleryRow>

    <div class="container text-center py-5 mt-5">
      <h1 class="title">
        The different areas of practice that we offer are:
      </h1>
      <div class="row justify-content-center py-5">
        <div class="col-md-3">
          <img
            src="http://placehold.it/100"
            class="icon"
          >
          <p>Academic</p>
        </div>
        <div class="col-md-3">
          <img
            src="http://placehold.it/100"
            class="icon"
          >
          <p>Administrative</p>
        </div>
        <div class="col-md-3">
          <img
            src="http://placehold.it/100"
            class="icon"
          >
          <p>Human Resources</p>
        </div>
        <div class="col-md-3">
          <img
            src="http://placehold.it/100"
            class="icon"
          >
          <p>Marketing and sales</p>
        </div>
      </div>
      <div class="row justify-content-center py-5">
        <div class="col-md-3">
          <img
            src="http://placehold.it/100"
            class="icon"
          >
          <p>Communication and social networks</p>
        </div>
        <div class="col-md-3">
          <img
            src="http://placehold.it/100"
            class="icon"
          >
          <p>Web development</p>
        </div>
        <div class="col-md-3">
          <img
            src="http://placehold.it/100"
            class="icon"
          >
          <p>Graphic Design</p>
        </div>
      </div>
    </div>

    <div
      class="bg-light top-left-rounded rounded-container"
      style="min-height:400px; padding-top: 190px;"
    >
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <p>
              Don’t hesitate, it’s time to put into practise everything you’ve
              learned. Tell us which is your area of interest and send us an email
              to <a href="mailto:info@nlcollege.es">info@nlcollege.es</a>
            </p>

            <button class="btn btn-primary">
              Apply Now!
            </button>
          </div>
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

};
</script>

<style>

</style>
