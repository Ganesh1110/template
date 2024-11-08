import axios from "axios";
import { useQuery } from "react-query";

const useGetList = () => {
  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return data;
    } catch (error) {
      console.error("* ~ fetchPosts ~ error:", error);
    }
  };
  return useQuery("Post", fetchPosts);
};

export default useGetList;
