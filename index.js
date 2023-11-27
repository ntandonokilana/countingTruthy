let booleanArray = [true, false, true, true, false, true, false, true];

      let trueCount = booleanArray.filter(value => value === true).length;

      console.log('Number of true values: ${trueCount}');

      document.write(`<p class="result">Number of true values: ${trueCount}</p>`);