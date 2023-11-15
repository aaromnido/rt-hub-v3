<template>
  <div class="accordion-container mb-24 xl:max-w-[50rem] max-w-full mx-auto">
    <div class="accordion" data-accordion="collapse">

      <div v-for="(faq, index) in faqs" :key="index">
        <h2 :id="'faq-heading-' + (index + 1)">
          <button
            type="button"
            class="accordion-button"
            :class="{ 'active': activeFaq === index }"
            @click="toggleFaq(index)"
            :aria-expanded="activeFaq === index"
            :aria-controls="'faq-message-' + (index + 1)"
          >
            {{ faq.title }}
            <svg
              data-accordion-icon
              class="collapse-icon w-3 h-3 shrink-0"
              :class="{ 'rotate-180': activeFaq === index }"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="#FF5570"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div :id="'faq-message-' + (index + 1)" class="accordion-message" :aria-labelledby="'faq-heading-' + (index + 1)">
          <p class="mb-2 text-gray-500 dark:text-gray-400">{{ faq.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      activeFaq: null,
      faqs: [
        {
          title: "How do your courses differ from other 3D, video games, and real-time technology courses available online?",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        },
        {
          title: "Do I need any prior experience or prerequisites to enroll in these courses?",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        },
        {
          title: "How long does it typically take to complete a course?",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        },
        {
          title: "Are the courses self-paced or do they have set schedules?",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        },
        {
          title: "Do you offer any certifications or credentials upon course completion?",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        },
      ],
    };
  },
  methods: {
    toggleFaq(index) {
        console.log("toggleFaq called, index:", index);
      if (this.activeFaq === index) {
        this.activeFaq = null;
      } else {
        this.activeFaq = index;
      }
    },
  },
};

</script>

<style scoped>
/* Estilos para el acordeón */
.accordion-button.active + .accordion-message {
    @apply block;
}

.accordion-message {
    @apply hidden;
  }
  
</style>
