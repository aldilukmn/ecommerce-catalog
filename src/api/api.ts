import { ref, onMounted, computed } from "vue";

export default function products() {
  interface Rate {
    rate: number;
    count: number;
  }
  
  interface Post {
    title: string;
    image: string;
    category: string;
    description: string;
    price: number;
    rating: Rate;
  }
  const products = ref([] as Post[]);
  const currentIndex = ref(0);
  const loading = ref(false);

  const currentProductIndex = computed(() => {
    return products.value[currentIndex.value] || ({} as Post);
  });

  const getPosts = async (category?: string) => {
    try {
      loading.value = true;
      const url = await fetch(`https://fakestoreapi.com/products`);
      const data = await url.json();
      if (category) {
        products.value = data.filter((item: any) => item.category === category);
      } else {
        products.value = data;
      }
    } catch (error) {
      console.log("Error fetching => ", error);
    } finally {
      loading.value = false;
    }
  };

  const nextProduct = () => {
    currentIndex.value = (currentIndex.value + 1) % products.value.length;
    let category = products.value[currentIndex.value].category;
    
    console.log(category);
  };

  onMounted(() => {
    getPosts();
  });

  return {
    products,
    currentProductIndex,
    getPosts,
    nextProduct,
    loading,
  };
}
