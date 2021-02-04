<template>
  <footer class="bg-dark">
    <div class="container">
      <div class="row py-5">
        <div class="col-md">
          <img
            src="http://placehold.it/200x100/FFFFFF?text=Logo NLC"
            alt=""
            width="150"
          >
        </div>
        <div class="col-md">
          <h6>Opening Hours</h6>
          <ul class="list-unstyled">
            <li>
              <i class="far fa-clock" />
              Monday to Friday from 9.00h to 16.00h
            </li>
            <li>
              <i class="far fa-envelope" />
              info@nlcollege.es
            </li>
            <li>
              <button class="btn btn-primary btn-block btn-sm">
                Download our Brochure
              </button>
            </li>
            <li>
              <button class="btn btn-outline-white btn-block btn-sm">
                Privacy Policy
              </button>
            </li>
          </ul>
        </div>
        <div class="col-md">
          <h6 class="text-primary">
            Address
          </h6>
          <ul class="list-unstyled">
            <li>
              <i class="fas fa-map-marker-alt" />
              Plaza Puerta del Sol 11,
              Second Floor, Post Code 28013
              Madrid, Spain
            </li>
            <li>
              <i class="fab fa-whatsapp" />
              +34 917376633 <br> +34 634131769
            </li>
            <li>
              <i class="far fa-envelope" />
              info@nlcollege.es
            </li>
          </ul>
        </div>
        <div class="col-md">
          <h6 class="text-primary">
            Tutoring Hours
          </h6>
          <ul class="list-unstyled">
            <li>Student Advisor</li>
            <li>Accommodation</li>
            <li>Health Insurance</li>
            <li>Other Facilities</li>
            <li>About Madrid & Spain</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg-black py-3">
      <div class="container">
        <small>
          © {{ (new Date()).getFullYear() }} NLC Native Language College.
        </small>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

};
</script>

<style>

</style>
