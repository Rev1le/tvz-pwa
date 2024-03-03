<template>
  <div
    class="drop-down-search-filter"
    tabindex="-1"
    ref="dropDownList"
    @blur="hideChoice"
    @keydown.down.prevent="pointerForward"
    @keydown.up.prevent="pointerBackward"
    @keypress.enter="addPointerElement"
    @keyup.esc="blurSearchInputEvent"
  >
    <FilterSpan
      :value="span.value"
      :defaultValue="span.defaultValue"
      :span-focus="isViewDropDown"
      class="drop-down-search-filter__span"
      @click="showDropDownSearch()"
    />
    <transition name="fade">
      <div
        v-show="isViewDropDown"
        class="drop-down-search-filter__drop-down drop-down"
      >
        <search-input
          ref="dropDownInput"
          class="drop-down__input"
          v-model="searchValue"
          :placeholder="placeholder"
          @blur="blurSearchInputEvent"
        />
        <div class="drop-down__list" ref="list">
          <slot
            name="content"
            :search-value="searchValue"
            :pointer="pointer"
          ></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import SearchInput from "./SearchInput.vue";
import FilterSpan from "./FilterSpan.vue";
// import listKeyboardManagment from "@/mixins/listKeyboardManagment";

export default {
  name: "DropDownSearchFilter",
  // mixins: [listKeyboardManagment],
  components: {
    SearchInput,
    FilterSpan
  },
  props: {
    span: {
      type: Object,
      default: () => {
        return {
          value: "",
          defaultValue: "нет данных"
        };
      }
    },
    options: {
      type: Array
    },
    placeholder: String
  },
  data() {
    return {
      searchValue: "",
      isViewDropDown: false
    };
  },
  watch: {
    searchValue(newValue) {
      this.$emit("inputValue", newValue);
      this.pointerReset();
    }
  },
  methods: {
    blurSearchInputEvent(event) {
      if (Object.is(event.relatedTarget, this.$refs["dropDownList"])) {
        return;
      }
      this.isViewDropDown = false;
    },
    hideChoice(event) {
      const childInputEl = this.$refs["dropDownInput"].$refs["input"] ?? {};
      if (Object.is(event.relatedTarget, childInputEl)) {
        return;
      }
      this.isViewDropDown = false;
    },
    async showDropDownSearch() {
      this.isViewDropDown = !this.isViewDropDown;
      await this.$nextTick();
      this.$refs["dropDownInput"].$refs["input"].focus();
    }
  }
};
</script>

<style scoped lang="scss">
.drop-down-search-filter {
  width: 320px;
  box-sizing: border-box;
  position: relative;

  &__span {
    // width: 320px;
    height: 46px;
  }

  &__drop-down {
    box-sizing: border-box;
    position: absolute;
    top: 56px;
  }
}

.drop-down {
  /** Layout */
  // padding: 16px;
  width: 320px;
  max-height: 355px;
  z-index: 1;

  // display: flex;
  // flex-direction: column;
  // row-gap: 15px;

  border-radius: 4px;
  border: 1px solid rgb(217, 224, 245);
  background: white;
  box-shadow: 0px 4px 34px 0px rgba(0, 0, 0, 0.1);

  // &__span {
  //   padding: 16px 16px 15px 16px;
  // }

  &__input {
    height: 46px;
    margin: 16px 16px 15px 16px;
  }

  &__list {
    flex-grow: 1;
    max-height: 200px;
    overflow-y: scroll;
    // overflow-y: scroll;
    min-height: min-content;
    padding-bottom: 16px;

    &:focus {
      outline: none;
    }

    &::-webkit-scrollbar {
      display: none;
      // width: 6px;
    }

    // scrollbar-width: 0px;
  }
}
</style>
