function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHP: 100,
      monsterHP: 100,
    };
  },

  computed: {
    monsterBar() {
      return { width: this.monsterHP + '%' };
    },

    playerBar() {
      return { width: this.playerHP + '%' };
    },
  },

  methods: {
    attackMonster() {
      const attackValue = getRandomValue(5, 12);
      this.monsterHP = this.monsterHP - attackValue;
      this.attackPlayer();
    },

    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHP = this.playerHP - attackValue;
    },
  },
});

app.mount('#game');
