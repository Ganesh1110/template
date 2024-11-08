import axios from "axios";
import { useQueryClient, useMutation } from "react-query";

const useAddPosts = () => {
  const QueryClient = useQueryClient();
  const postTestFunction = async (reqBody) => {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      reqBody
    );
    QueryClient.invalidateQueries("Post");
    return data;
  };
  return useMutation(postTestFunction);
};

export default useAddPosts;
