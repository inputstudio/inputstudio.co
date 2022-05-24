<template>
  <div class="wrapper">
    <HomeHero />
    <HomeAbout />
    <HomeServices />
    <!-- <HomeTeam /> -->
    <HomeContact />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Input Studio - Agence de développement web',
    }
  },
  mounted() {
    const servicesCardTimeout = 450

    const animatedSections = document.querySelectorAll('.animated--section')

    const showSection = (entries) => {
      entries.forEach((entry) => {
        // If the section is visible in viewport then...
        if (entry.isIntersecting) {
          const currentSection = entry.target

          // If the visible section is about section then ...
          if (currentSection.classList.contains('about--wrapper')) {
            // Select all div in about--wrapper and for each div add animated class show-about
            currentSection.querySelectorAll('div').forEach((element) => {
              element.classList.add('show-about')
            })
          }
          // Else If the visible section is services section then ...
          else if (currentSection.classList.contains('services--wrapper')) {
            // Select all div in services section header
            const serviceHeader = currentSection.querySelector('.services--header').querySelectorAll('div')

            // For each div add animated class show-service-header
            serviceHeader.forEach((header) => {
              header.classList.add('show-service-header')
            })

            // After a delay equal to servicesCardTimeout, add card-fade-down class to elements in service card wrapper
            setTimeout(() => {
              currentSection.querySelectorAll('.service--card--wrapper').forEach((element) => {
                element.classList.add('card-fade-down')
              })
            }, servicesCardTimeout)

            // After a delay equal to servicesCardTimeout + 2500 ms, add example-fade-in class to examples elements in each card
            setTimeout(() => {
              currentSection.querySelectorAll('.example').forEach((element) => {
                element.classList.add('example-fade-in')
              })
            }, servicesCardTimeout + 2500)
          } else if (currentSection.classList.contains('contact--wrapper')) {
            // get the div elements in contact wrapper 
            const contactSectionDivs = currentSection.querySelectorAll('div')

            // get the contact us button in the same section
            const contactUsBtn = currentSection.querySelector('.contact-us')

            // Add show-contact class in all div to launch the animation
            contactSectionDivs.forEach((div) => {
              div.classList.add('show-contact')
            })

            // After 200ms, add show-contact class to contact-us button
            setTimeout(() => {
              contactUsBtn.classList.add('show-contact')
            }, 200)
          }
        }
      })
    }

    const options = {
      rootMargin: '0px',
      threshold: 0.2,
    }

    const observer = new IntersectionObserver(showSection, options)

    animatedSections.forEach((section) => {
      observer.observe(section)
    })
  },
}
</script>
