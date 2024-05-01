<template>
  <div class="search-input">
    <search-input-svg class="search-input__icon" />
    <input
      @blur="$emit('blur', $event)"
      ref="input"
      type="search"
      @input="$emit('input', $event.target.value)"
      :value="value"
      class="search-input__input"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
import SearchInputSvg from "./SearchInputSvg.vue";

export default {
  name: "SearchInput",
  emits: ["input"],
  props: {
    placeholder: String,
    value: String
  },
  data() {
    return {
      activeInput: false
    };
  },
  components: {
    SearchInputSvg
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.cdnfonts.com/css/pt-root-ui");

$all-width: 288px;
$icon-width: 20px;
$border-color: #d9e0f5;

.search-input {
  display: flex;
  padding: 12px 20px;
  align-items: center;
  gap: 8px;

  border-radius: 4px;
  border: 1px solid $border-color;
  background: rgb(255, 255, 255);

  &__icon {
    height: 20px;
  }

  &__input {
    flex-grow: 1;
    color: rgba(35, 37, 55, 1);

    font-family: PT Root UI;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;

    border-width: 0px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--system-grey, #a1a5bd);
      font-family: PT Root UI;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 22px;
    }
  }
}
</style>
