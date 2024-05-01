<template>
  <div class="filter-span" :class="dynamicFilterClass" @click="clickOnSpan">
    <span class="filter-span__span" :class="dynamicSpanClass">
      {{ spanValue }}
    </span>
    <ViewDropDownSearchSvg class="filter-span__btn" />
  </div>
</template>

<script>
import ViewDropDownSearchSvg from "./ViewDropDownSearchSvg.vue";

export default {
  name: "FilterSpan",
  components: { ViewDropDownSearchSvg },
  emits: ["click"],
  props: {
    value: {
      type: String,
      default: () => null
    },
    defaultValue: {
      type: String,
      default: () => "Нет данных"
    },
    spanFocus: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      showDropDownSearch: false
    };
  },
  computed: {
    dynamicFilterClass() {
      return this.showDropDownSearch ? "focus" : "";
    },
    dynamicSpanClass() {
      if (this.value == "" || !this.value) {
        return "default-value";
      }
      return "select-value";
    },
    spanValue() {
      if (this.value == "" || !this.value) {
        return this.defaultValue;
      }
      return this.value;
    }
  },
  methods: {
    clickOnSpan(event) {
      this.showDropDownSearch = !this.showDropDownSearch;
      this.$emit("click", event);
    }
  },
  watch: {
    spanFocus(newValue) {
      this.showDropDownSearch = newValue;
    }
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.cdnfonts.com/css/pt-root-ui");

.filter-span {
  border: 1px solid rgb(217, 224, 245);
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  padding: 12px 16px 12px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &__span {
    height: 22px;
    border-width: 0px;
    background-color: rgb(255, 255, 255);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    white-space: nowrap;
    text-overflow: ellipsis;

    font: normal 500 16px/22px PT Root UI;
  }

  &__btn {
    height: 20px;
    width: 20px;
  }

  &:hover {
    box-shadow: 0.5px 0.5px 0.4em rgb(100, 100, 100);
    // -0.5px -0.5px 0.4em rgb(100, 100, 100); //rgba(95, 95, 95, 0)
  }
}

.focus {
  opacity: 0.45;
}

.default-value {
  color: rgb(161, 165, 189);
}

.select-value {
  color: rgb(35, 37, 55);
}
</style>
