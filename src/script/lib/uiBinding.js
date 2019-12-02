// Hoofdmodule
const uiBinding = (function() {

  // Submodule
  const wave = (function() {
    this.waveElement = null;
    const setup = function(waveClass) {
      console.log('setup');
      console.log(document.querySelector(`.${waveClass}`));
      this.waveElement = document.querySelector(`.${waveClass}`);
    };

    const updateWaveHeight = function(newPercentage) {
      console.log('updateWaveHeight');
      if (newPercentage > 100) newPercentage = 100;
      this.waveElement.style.transform = `translateY(${100-newPercentage}%)`
    };
    return {
      setup: setup,
      updateWaveHeight: updateWaveHeight
    };

  })();

  // Submodule
  const logging = (function() {
    this.addButton;

    const setup = function(buttonClass) {
      console.log('setup');
      this.addButton = document.querySelector(`.${buttonClass}`);
    };

    const enableAmountOptions = function() {
      console.log('enableAmountOptions');
      this.addButton.addEventListener('click', function() {
        console.log(this.dataset);
      });
    };

    return {
      setup: setup,
      enableAmountOptions: enableAmountOptions
    };
  })();


  return {
    wave: wave,
    logging: logging
  };
})();