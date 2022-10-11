function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHP: 100,
      monsterHP: 100,
      currentRound: 0,
      winner: null,
    };
  },

  computed: {
    monsterBar() {
      if (this.monsterHp <= 0) return { width: '0%' };
      return { width: this.monsterHP + '%' };
    },

    playerBar() {
      if (this.playerHP <= 0) return { width: '0%' };
      return { width: this.playerHP + '%' };
    },

    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },

  watch: {
    playerHP(value) {
      if (value <= 0 && this.monsterHP <= 0) this.winner = 'draw';
      else if (value <= 0) this.winner = 'monster';
    },

    monsterHP(value) {
      if (value <= 0 && this.playerHP <= 0) this.winner = 'draw';
      else if (value <= 0) this.winner = 'player';
    },
  },

  methods: {
    startNewGame() {
      this.playerHP = 100;
      this.monsterHP = 100;
      this.currentRound = 0;
      this.winner = null;
    },

    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHP = this.monsterHP - attackValue;
      this.attackPlayer();
    },

    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHP = this.playerHP - attackValue;
    },

    specialAttack() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHP = this.monsterHP - attackValue;
      this.attackPlayer();
    },

    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      if (this.playerHP >= 99) this.playerHP = 99;
      else this.playerHP = this.playerHP + healValue;
      this.attackPlayer();
    },
  },
});

app.mount('#game');
