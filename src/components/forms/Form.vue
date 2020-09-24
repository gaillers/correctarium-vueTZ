<template>
  <form class="form">
    <div class="form__item">
      <section class="section">
        <div class="section__item">
          <h3 class="section__title">заказ редактирования</h3>
          <p class="section__p">
            Исправим все ошибки и огрехи, уберем все глупости из текста, перефразируем неудачные места, но сильно
            переписывать текст не станем. Лишних правок не будет.
            <router-link to="price">Подробнее о редактировании</router-link>
          </p>
          <div class="fields__email">
            <input class="fields__input" type="email" v-model="email" placeholder="Ваша эл. почта" />
          </div>
          <div class="fields__name">
            <input class="fields__input" type="name" v-model="name" placeholder="Ваше имя" />
          </div>
          <div class="fields__area">
            <textarea
              class="area__text"
              name="text"
              placeholder="Введите текст или"
              v-model="text"
              id="text"
            ></textarea>
            <label class="area__download" v-if="!text">
              загрузите файл
              <input
                type="file"
                id="file"
                name="files"
                accept=".doc,.docx,application/msword,
                application/vnd.openxmlformats-officedocument.wordprocessingml.document,.csv, 
                application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,
                application/vnd.ms-excel,application/msword, application/vnd.ms-excel, 
                application/vnd.ms-powerpoint, text/plain, application/pdf, .rtf, .txt, .pdf, .zip"
              />
            </label>
            <div class="area__symbol">{{ text.length }}</div>
          </div>
        </div>
      </section>
      <LangBtn />
      <section class="section-comments">
        <section class="section__item">
          <div class="fields">
            <div class="fields__row">
              <input type="commentary" class="fileds__com" placeholder="Короткий комментарий или ссылка" />
            </div>
          </div>
        </section>
      </section>
    </div>
    <div class="form__item">
      <div class="submit">
        <div class="submit__content">
          <div class="submit__price">
            <div class="number">{{checkRequiredFields() ? zero : summary}} грн</div>
            <div class="time"></div>
          </div>
          <SubmitButton :disabled="checkRequiredFields()" />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import LangBtn from './LangBtn'
import SubmitButton from './SubmitButton'

export default {
  name: 'Form',
  data() {
    return {
      email: '',
      name: '',
      text: '',
      zero: '0,00',
      summary: '50,00'
    }
  },
  methods: {
    checkRequiredFields() {
      if (this.email.length > 0 && this.text.length > 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  components: {
    LangBtn,
    SubmitButton,
  },
}
</script>

<style lang="scss">
.form {
  display: grid;
  grid-template-columns: 75% auto;
  grid-gap: 20px;
}
.section,
.section__item {
  margin-bottom: 40px;
}
.section__item {
  padding: 0 15px;
}
.section__title {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: normal;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.section__title.small {
  font-size: 13px;
}
.section__p {
  font-size: 15px;
  line-height: 26px;
  margin-bottom: 8px;
  & a {
    text-decoration: none;
    color: #4a90e2;
  }
  &:hover {
    & a {
      text-decoration: underline;
    }
  }
}
.fields {
  margin-bottom: 100px;
}

.fields__email,
.fields__name {
  margin-bottom: 10px;
  border-radius: 2px;
  height: 35px;
  position: relative;
}
.fields__email {
  &::before {
    content: '*';
    position: absolute;
    color: red;
    top: -5px;
    left: -12px;
    font-size: 18px;
    font-weight: 700;
  }
}
.fields__input {
  height: auto;
  min-height: 100%;
  font-size: inherit;
  font-family: inherit;
  border-radius: inherit;
  width: 100%;
  padding: 5px 10px;
  border: 1px solid #eaeaea;
  outline: none;
  box-shadow: none;
}
.fields__area {
  position: relative;
  .area__text {
    resize: none;
    width: 100%;
    min-height: 250px;
    border-radius: 2px;
    border: 1px solid #eaeaea;
    outline: none;
    padding: 10px;
  }
}
.area__download {
  position: absolute;
  top: 11px;
  left: 155px;
  color: #4a90e2;
  cursor: pointer;
  &:hover {
    color: red;
  }
  & input {
    display: none;
  }
}
.area__symbol {
  position: absolute;
  bottom: -12px;
  left: 2px;
  color: #999;
  font-weight: 700;
  font-size: 12px;
  background-color: #fff;
}
.fields__row {
  margin-bottom: 10px;
  border-radius: 2px;
  height: 35px;
  position: relative;
}
.fileds__com {
  height: auto;
  min-height: 100%;
  font-size: inherit;
  font-family: inherit;
  border-radius: inherit;
  width: 100%;
  padding: 5px 10px;
  border: 1px solid #eaeaea;
  outline: none;
  box-shadow: none;
}

.submit {
  position: relative;
  height: 100%;
}
.submit__content {
  position: sticky;
  top: 10px;
  margin-top: 38px;
  border-top: 1px solid #eaeaea;
}
.submit__price {
  padding: 0 20px;
  margin-top: 30px;
}
.number {
  color: #333;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
}
.time {
  color: #999;
  font-size: 15px;
  margin-bottom: 10px;
  min-height: 17px;
}
</style>
