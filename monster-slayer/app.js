function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHP: 100,
      monsterHP: 100,
      currentRound: 0,
    };
  },

  computed: {
    monsterBar() {
      return { width: this.monsterHP + '%' };
    },

    playerBar() {
      return { width: this.playerHP + '%' };
    },

    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },

  methods: {
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
  },
});

app.mount('#game');
