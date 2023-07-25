/**
 * @param trigger: HTMLElement - The element which should trigger the animation
 * @param elements: HTMLElement[] - A list of elements to animate
 *
 * @return gsap.core.Timeline
 */
export function fadeAnimation(trigger: HTMLElement, elements: HTMLElement[]): gsap.core.Timeline {
  const { $gsap, $ScrollTrigger } = useNuxtApp();
  $gsap.registerPlugin($ScrollTrigger);

  const timeline = $gsap.timeline({
    scrollTrigger: {
      trigger,
      start: 'top 80%',
      toggleActions: 'play resume none reset',
    },
  });

  elements.forEach((element) => {
    timeline.fromTo(element, { autoAlpha: 0 }, { autoAlpha: 1 });
  });

  return timeline;
}
