// import { ref } from "vue";

// export async function useFetch(url) {
//   const data = ref(null);
//   const error = ref(null);

//   //   fetch(url)
//   //     .then((res) => res.json())
//   //     .then((json) => (data.value = json))
//   //     .catch((err) => (error.value = err));

//   try {
//     const res = await fetch(url);
//     data.value = await res.json();
//   } catch (error) {
//     console.log(error);
//   }

//   return { data, error };
// }

// code from: https://vuejs.org/guide/reusability/composables.html#async-state-example
