<template>
  <div>
    <Navbar>
      <ul class="navbar-nav">
        <li
          v-for="(m, index) of menus"
          :key="m.title"
          class="nav-item"
        >
          <a
            href="#"
            class="nav-link"
            :class="{
              active: m.active,
            }"
            @click="openMenu(index)"
          >
            {{ m.title }}
          </a>
          <transition name="fadeLeft">
            <ul
              v-if="m.children && m.children.length && m.open"
              style="animation-duration: 0.3s"
              class="dropdown-menu"
            >
              <li
                v-for="(s, si) of m.children"
                :key="si"
                class="dropdown-item"
                :class="{
                  disabled: !s.to
                }"
              >
                <router-link
                  :to="{name:s.to || null}"
                  class="nav-link"
                  active-class="actve"
                >
                  {{ s.title }}
                </router-link>
              </li>
            </ul>
          </transition>
        </li>
        <li class="nav-item">
          <button
            href="#"
            class="btn btn-primary"
          >
            Apply Now!
          </button>
        </li>
      </ul>
    </Navbar>

    <router-view />

    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue';
import Footer from '@/components/footer.vue';

export default {
  components: {
    Footer,
    Navbar,
  },
  data: () => ({
    menus: [
      {
        title: 'Spanish Programs',
        active: false,
        open: false,
        children: [
          {
            title: 'First Contact',
            to: 'FirstContact',
          },
          {
            title: 'Culture Inmersion',
            to: 'CultureInmersion',
          },
          {
            title: 'Certificates',
            to: 'Certificates',
          },
          {
            title: 'Private Classes',
            to: 'PrivateClasses',
          },
          {
            title: 'Online Classes',
            to: 'OnlineClasses',
          },
        ],
      },
      {
        title: 'Personalized Courses',
        open: false,
        children: [
          {
            title: 'Volunteer Program',
            to: 'VolunteerProgram',
          },
          {
            title: 'Au Pair Work Program',
            to: 'AuPairProgram',
          },
          {
            title: 'Football Program',
            to: 'FootballProgram',
          },
          {
            title: 'Summer Camp',
            to: 'SummerCamp',
          },
        ],
        active: false,
      },
      {
        title: 'Services',
        open: false,
        active: false,
        children: [
          {
            title: 'Visa Application',
            to: 'VisaApplication',
          },
          {
            title: 'Spanish Internship',
            to: 'SpanishInternship',
          },
        ],
      },
      {
        title: 'Activities',
        open: false,
        active: false,
      },
      {
        title: 'About Us',
        open: false,
        active: false,
      },
    ],
  }),

};
</script>
