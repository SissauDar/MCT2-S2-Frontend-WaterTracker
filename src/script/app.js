(function() {
  console.log('💧', 'https://www.youtube.com/watch?v=ARC1w1WWxGY');
  const options = {
    // - De eenheden van je doel.
    units: 'ml',
    // - De hoeveelheid van het dagelijks doel.
    dailyGoal: 1539,
    // - Of je met localStorage of een API wil werken.
    mode: 'local',
    // - Een array met classes voor:
    domRefs: {
      // 	- Het huidige percentage.
      percentage: 'js-amount',
      // 	- De tijdstippen.
      timeStampHolder: 'js-timestamps',
      // 	- De 'voeg toe'-knop.
      addButton: 'js-log',
      // 	- Een klasse voor elk element waarin de goal moet komen.
      currentGoal: 'js-goal',
      // 	- Een klasse voor elk element waarin de eenheden mogen komen.
      currentUnits: 'js-units'
    },
    // - Een callback-functie voor als we de hoeveelheid aangepast hebben.
    afterUpdate: function(newPercentage) {
      uiBinding.wave.updateWaveHeight(newPercentage);
      console.log('It has been updated!', newPercentage);
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    uiBinding.wave.setup('js-waves')
    uiBinding.logging.setup('js-log');
    uiBinding.logging.enableAmountOptions();
    new ProgressTracker(options);
  });


})();