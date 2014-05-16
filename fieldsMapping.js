module.exports = function () {
  thothFieldsMappings = {
    avg : {
      qtime: 'avg_qtime_d',
      nqueries: 'tot-count_i',
      queriesOnDeck: 'avg_requestsInProgress_d'
    },
    count: {
      exception: 'exceptionCount_i',
      zeroHits: 'zeroHits-count_i'
    },
    integral: {
      exception: 'exceptionCount_i',
      nqueries: 'avg_qtime_d',
      zeroHits: 'zeroHits-count_i'
    },
    distribution: {
      qtime: 'range-0-10_i,range-10-100_i,range-100-1000_i,range-1000-OVER_i'
    }    
  };
};