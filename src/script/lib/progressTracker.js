class ProgressTracker {
  constructor(options) {
    this.options = options;
    this.percentageValue = 0;
    this.currentProgress = [] //dataAccess[this.options.mode].getProgressOfToday || [];
    this.timerId = null;
    this.percentageRatio = 100 / this.options.dailyGoal;
    this.percentage = document.querySelector(`.${this.options.domRefs.percentage}`);
    this.timeStampHolder = document.querySelector(`.${this.options.domRefs.timeStampHolder}`);
    this.addButton = document.querySelector(`.${this.options.domRefs.addButton}`);
    this.currentGoalHolders = document.querySelectorAll(`.${this.options.domRefs.currentGoal}`);
    this.currentUnitsHolders = document.querySelectorAll(`.${this.options.domRefs.currentUnits}`);

    this.showUserOptions();

    this.restoreProgress();
    this.listenToNewLogging();
  }

  restoreProgress() {
    this.currentProgress = dataAccess[this.options.mode].getprogressByDate(new Date());

    for (const p of this.currentProgress) {
      this.updateProgress(p);
    }
    // this.updateProgress(this.cu);
  }

  updateProgress(newLogging = ['00:00', 0]) {
    //this.currentProgress.push(newLogging);
    this.showTimeStamp(newLogging[0]);

    const oldProgress = Number(this.percentage.innerText),
      newProgress = oldProgress + (newLogging[1] * this.percentageRatio);

    this.percentageValue = newProgress;

    if (this.timerId) {
      clearInterval(this.timerId);
    }

    let v = oldProgress;
    this.timerId = setInterval(() => {
      this.percentage.innerText = v;
      const animateWave = this.options.afterUpdate.bind(this, v);
      requestAnimationFrame(animateWave);
      if (v >= newProgress) {
        clearInterval(this.timerId);
      }
      v++;
    }, 16); // 1000 ms / 60 frames (/s) = 16ms/fr
    this.options.afterUpdate(newProgress); // When finished, pass the new progress.
  };

  showUserOptions() {
    console.log('Showing options');
    console.log(this.currentGoalHolders);
    for (const g of this.currentGoalHolders) {
      g.innerHTML = this.options.dailyGoal;
    }

    for (const u of this.currentUnitsHolders) {
      u.innerHTML = this.options.units;
    }
  }

  showTimeStamp(timeStamp) {
    console.log('hey');
    console.log(this.timeStampHolder);
    this.timeStampHolder.innerHTML += `<li class="c-time-stamp">${timeStamp}</li>`;
  }

  listenToNewLogging() {
    this.addButton.addEventListener('click', () => { // arrow functie omdat je buitenste scope wilt.
      console.log('Dataset is ', this.addButton.dataset.amount);
      const now = new Date();

      const time = `${now
        .getHours()
        .toString()
        .padStart(2, '0')}:${now
        .getMinutes()
        .toString()
        .padStart(2, '0')}
      `,

        // const time = `${now.getHours()}:${now.getMinutes()}`,
        amount = this.addButton.dataset.amount;
      this.updateProgress([time, amount]);
      //dataAccess[this.options.mode].saveLogging([time, amount]);
    });
  }


}