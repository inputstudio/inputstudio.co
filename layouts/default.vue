<template>
  <div>
    <TheNavbar />
    <Nuxt />
    <TheFooter />
    <ScrollToTop />
  </div>
</template>

<script>
export default {
  mounted() {
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

<style lang="scss" scoped></style>
