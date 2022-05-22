<template>
  <div class="wrapper">
    <HomeHero />
    <HomeAbout />
    <HomeServices />
    <HomeTeam />
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
          
          // If the visible section is about section then ... 
          if (entry.target.classList.contains('about--wrapper')) {

            // Select all div in about--wrapper and for each div add animated class show-about 
            entry.target.querySelectorAll('div').forEach((element) => {
                element.classList.add('show-about')
              })
          }
          // Else If the visible section is services section then ... 
          else if (entry.target.classList.contains('services--wrapper')) {
  
              // Select all div in services section header
              const serviceHeader = entry.target.querySelector('.services--header').querySelectorAll('div')
              
              // For each div add animated class show-service-header 
              serviceHeader.forEach(header => {
                header.classList.add('show-service-header')
              })

              setTimeout(() => {
                document.querySelectorAll('.service--card--wrapper').forEach((element) => {
                  element.classList.add('card-fade-down')
                })
              }, servicesCardTimeout)

            setTimeout(() => {
              document.querySelectorAll('.example').forEach((element) => {
                element.classList.add('example-fade-in')
              })
            }, servicesCardTimeout + 2500)
          }
        }
      })
    }

    const options = {
      rootMargin: '0px',
      threshold: .4
    }

    const observer = new IntersectionObserver(showSection, options)

    animatedSections.forEach((section) => {
      observer.observe(section)
    })
  },
}
</script>