import axios from "axios";
import { useInfiniteQuery } from "react-query";

const useGetPost = () => {
  const fetPosts = async ({ pageParam = 1 }) => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _page: pageParam,
          },
        }
      );

      return data;
    } catch (error) {
      console.error("* ~ fetPosts ~ error:", error);
      throw error;
    }
  };

  return useInfiniteQuery({
    queryKey: "fetPosts", // Unique key for this query
    queryFn: fetPosts, // Function to fetch data
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined;
      return allPages.length + 1;
    },
  });
};

export default useGetPost;
