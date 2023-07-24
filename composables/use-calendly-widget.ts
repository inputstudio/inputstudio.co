export default function () {
  const calendly = useCalendly();
  const openCalendly = () => {
    calendly.showPopupWidget('https://calendly.com/input_studio/30min');
  };

  return { openCalendly };
}
