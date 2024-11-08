import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const useDeletePost = () => {
  const QueryClient = useQueryClient();
  const deleteFn = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      QueryClient.invalidateQueries("books");
      return data;
    } catch (error) {
      console.error("* ~ fetchPosts ~ error:", error);
    }
  };
  return useMutation(deleteFn);
};

export default useDeletePost;
