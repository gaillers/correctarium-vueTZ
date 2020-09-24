<template>
  <section class="section-laung">
    <section class="section__item">
      <h3 class="section__title small">язык</h3>
      <div class="radio-button">
        <div
          v-for="(language, index) of languages"
          :key="index"
          class="radio-button__item"
          @click="activeLanguage(language.id)"
        >
          <div class="common__radio">
            <div :class="['button-radio', language.active && 'active']">
              <div class="circle"></div>
            </div>
            {{ language.name }}
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'LangBtn',
  components: {},
  props: {},
  data() {
    return {
      languages: [
        {
          id: 1,
          name: 'Украинский',
          active: false
        },
        {
          id: 2,
          name: 'Русский',
          active: false
        },
        {
          id: 3,
          name: 'Английский',
          active: false
        },
      ],
    }
  },
  methods: {
    activeLanguage(id) {
      const updateLanguages = this.languages.map(language => {
        if (language.id === id) {
          language.active = true;
          return language;
        }
        language.active = false;

        return language;
      });

      this.languages = updateLanguages;
    },
  },
}
</script>

<style lang="scss">
.radio-button {
  display: grid;
  grid-gap: 16px;
}
.radio-button__item {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}
.common__radio {
  display: flex;
  align-items: center;
  cursor: pointer;
  align-items: center;
  font-size: 14px;
}

.button-radio {
  margin-right: 5px;
  border-radius: 50%;
  border: 1px solid #4a90e2;
  width: 15px;
  height: 15px;
  .circle {
    background-color: #fff;
    border-radius: 50%;
    width: 5px;
    height: 5px;
    margin-left: 4px;
    margin-top: 4px;
  }
  &.active {
    margin-right: 5px;
    border-radius: 155%;
    border: 1px solid #4a90e2;
    width: 15px;
    height: 15px;
    background-color: #4a90e2;
    .circle {
      background-color: #fff;
      border-radius: 50%;
      width: 5px;
      height: 5px;
      margin-left: 4px;
      margin-top: 4px;
    }
  }
}
</style>
