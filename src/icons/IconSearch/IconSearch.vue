<template>
  <svg
    viewBox="0 0 24 24"
    :width="width || size"
    :height="height || size"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.9583 13.9584C16.8348 11.0819 16.8348 6.41818 13.9583 3.5417C11.0818 0.665218 6.41812 0.665217 3.54164 3.5417C0.665156 6.41818 0.665156 11.0819 3.54164 13.9584C6.41812 16.8349 11.0818 16.8349 13.9583 13.9584ZM12.6562 12.6563C14.8136 10.4989 14.8136 7.00115 12.6562 4.84378C10.4989 2.68642 7.00109 2.68642 4.84372 4.84378C2.68636 7.00115 2.68636 10.4989 4.84372 12.6563C7.00109 14.8136 10.4989 14.8136 12.6562 12.6563Z"
      :fill="color"
    />
    <path
      opacity="0.6"
      d="M13.9583 15.2604L15.2603 13.9584L17.8645 16.5625C18.2241 16.9221 18.2241 17.505 17.8645 17.8646C17.5049 18.2242 16.922 18.2242 16.5624 17.8646L13.9583 15.2604Z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: "IconMove",
  props: {
    size: {
      type: [String, Number],
      default: 24,
    },
    width: {
      type: [String, Number],
      default: "",
    },
    height: {
      type: [String, Number],
      default: "",
    },
    color: {
      type: String,
      default: "#DA4A4A",
    },
  },
};
</script>

