<template>
  <div>
    <div class="page-head">
      <div class="caption">
        <h1 class="title">
          Volunteer Program
        </h1>
        <b>STUDY SPANISH IN NLC AND VOLUNTEER IN MADRID</b> <br>
        <small>
          With great food, astonishing arts and culture, historic neighborhoods,
          adorable people and super fun events, no city on earth is more alive
          than Madrid.
        </small>
      </div>
    </div>

    <div
      class="full-width-img bottom-left-rounded"
      style="background-image: url('http://placehold.it/1200x600/ec653c?text=full width image')"
    >
      <div class="image-caption">
        <h4 class="no-line">
          Madrid is an amazing city to talk, read, listen & live in Spanish!
        </h4>

        <div class="btn btn-primary btn-sm mt-4">
          Apply Now!
        </div>
      </div>
    </div>

    <div class="container py-5 text-center">
      <p>
        Alongside of studying Spanish, our students at the Native Language
        College will have the opportunity to gain experience and knowledge
        through volunteering at various institutions around the city including
        churches, retirement homes, and schools. The students will be able to
        learn from this service learning experience and have the possibility to
        make long-lasting connections with the institutions they work with and
        the people that they help.
      </p>
    </div>

    <div class="container text-center py-5">
      <div class="row">
        <div class="col-md">
          <div class="rounded-card h-100">
            <img
              src="http://placehold.it/100"
              class="icon"
            >
            <h3 class="title">
              Volunteer Jobs
            </h3>

            <ul class="list-unstyled">
              <li>
                <b class="text-primary">+</b>
                Teaching/Tutoring
              </li>
              <li>
                <b class="text-primary">+</b>
                Companionship/Mentoring
              </li>
              <li>
                <b class="text-primary">+</b>
                Arts
              </li>
              <li>
                <b class="text-primary">+</b>
                Special Needs
              </li>
              <li>
                <b class="text-primary">+</b>
                Sport/Outside Activities
              </li>
            </ul>

            <small>*Kids, teenagers, elders, disabilities.</small>
          </div>
        </div>
        <div class="col-md">
          <div class="rounded-card h-100">
            <img
              src="http://placehold.it/100"
              class="icon"
            >
            <h3 class="title">
              General Spanish
            </h3>

            <p>
              <small>4 weeks</small>
              <br>
              <b class="text-primary">€535</b>
            </p>
            <p>
              <small>8 weeks</small>
              <br>
              <b class="text-primary">€915</b>
            </p>
            <p>
              <small>12 weeks</small>
              <br>
              <b class="text-primary">€1.250</b>
            </p>
          </div>
        </div>
        <div class="col-md">
          <div class="rounded-card h-100">
            <img
              src="http://placehold.it/100"
              class="icon"
            >
            <h3 class="title">
              Accomodation
            </h3>

            <p>
              <small>Hostel</small>
              <br>
              <b class="text-primary">€150 per shared room</b>
            </p>
            <p>
              <small>Host Family</small>
              <br>
              <b class="text-primary">€35 per day</b>
            </p>
            <p>
              <small>Studio</small>
              <br>
              <b class="text-primary">€120 per night</b>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="top-left-rounded bg-light rounded-container"
    >
      <div class="container text-center">
        <h2 class="title">
          Free Time
        </h2>

        <p>
          Our volunteer program includes three activities for you to enjoy <br>
          Madrid and meet people from all over the world.
        </p>

        <p class="text-primary">
          <b>Ask us for the suggested activities!</b>
        </p>
      </div>
    </div>

    <div class="container py-5">
      <div class="row py-5">
        <div class="col text-right">
          <h2
            class="title pointer full-title"
            :class="{
              'text-black': showIncActivities
            }"
            @click="showIncActivities = false"
          >
            Activities Included
          </h2>
        </div>
        <div class="col">
          <h2
            class="title full-title pointer"
            :class="{
              'text-black': !showIncActivities
            }"
            @click="showIncActivities = true"
          >
            Suggested Activities
          </h2>
        </div>
      </div>
      <div
        v-if="showIncActivities"
        key="a"
      >
        <div class="row text-center py-5">
          <div class="col-md-3">
            <img
              src="http://placehold.it/100"
              class="icon"
            >
            <p>Bike Tour</p>
          </div>
          <div class="col-md-3">
            <img
              src="http://placehold.it/100"
              class="icon"
            >
            <p>Segway Tour</p>
          </div>
          <div class="col-md-3">
            <img
              src="http://placehold.it/100"
              class="icon"
            >
            <p>Santiago Bernabéu Tour</p>
          </div>
          <div class="col-md-3">
            <img
              src="http://placehold.it/100"
              class="icon"
            >
            <p>Flamenco Class</p>
          </div>
        </div>

        <div class="row text-center justify-content-center py-5">
          <div class="col-md-3">
            <img
              src="http://placehold.it/100"
              class="icon"
            >
            <p>Canyoning</p>
          </div>
          <div class="col-md-3 b">
            <img
              src="http://placehold.it/100"
              class="icon"
            >
            <p>Pub Crawl</p>
          </div>
          <div class="col-md-3">
            <img
              src="http://placehold.it/100"
              class="icon"
            >
            <p>Amusement Park</p>
          </div>
        </div>
      </div>
      <div
        v-else
        key="b"
      >
        <div class="row text-center py-5">
          <div class="col-md-3">
            <img
              src="http://placehold.it/100"
              class="icon"
            >
            <p>Escape Room</p>
          </div>
          <div class="col-md-3">
            <img
              src="http://placehold.it/100"
              class="icon"
            >
            <p>Flamenco Show</p>
          </div>
          <div class="col-md-3">
            <img
              src="http://placehold.it/100"
              class="icon"
            >
            <p>Skiing</p>
          </div>
          <div class="col-md-3">
            <img
              src="http://placehold.it/100"
              class="icon"
            >
            <p>Spanglish Language Exchange</p>
          </div>
        </div>

        <div class="row text-center justify-content-center py-5">
          <div class="col-md-3">
            <img
              src="http://placehold.it/100"
              class="icon"
            >
            <p>Del Prado Museum</p>
          </div>
          <div class="col-md-3 b">
            <img
              src="http://placehold.it/100"
              class="icon"
            >
            <p>18 Public Pools</p>
          </div>
          <div class="col-md-3">
            <img
              src="http://placehold.it/100"
              class="icon"
            >
            <p>San Miguel Market</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-dark py-5">
      <div class="container py-5 text-center">
        <h4>
          Come to learn Spanish and have <span class="text-primary">the best
            experience of your life</span> with students from all over the world!
        </h4>
        <div class="btn btn-primary btn-sm mt-5">
          Apply Now!
        </div>
      </div>
    </div>

    <div class="py-5">
      <div class="container py-5 text-center">
        <h3 class="title">
          Weekend Off
        </h3>
        <p>Enjoy the impressive natural landscapes throughout the region!</p>
      </div>
      <div class="row no-gutters text-white text-center weekendoff">
        <div class="col-md-4">
          <div
            class="img-container"
            style="background-image: url('http://placehold.it/400/000000')"
          >
            <p>
              Madrid - Barcelona
              <br>
              <b>620 Km</b>
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div
            class="img-container"
            style="background-image: url('http://placehold.it/400')"
          >
            <p>
              Madrid - Valencia
              <br>
              <b>360 Km</b>
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div
            class="img-container"
            style="background-image: url('http://placehold.it/400/ec653c')"
          >
            <p>
              Madrid - Ibiza
              <br>
              <b>556 Km</b>
            </p>
          </div>
        </div>
      </div>

      <div class="container pt-5 my-5 text-center">
        <p>
          As part of this program we also have other activities included like
          flamenco classes, pub crawls, soccer stadium tours, and much more!
        </p>
        <h4 class="text-primary">
          Madrid, the city that never sleeps!
        </h4>

        <div class="btn btn-primary btn-sm mt-4">
          Apply Now!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
