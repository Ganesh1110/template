import { View, Text, FlatList, Button } from "react-native";
import React from "react";
import useGetPost from "../../hooks/useGetPost";
import CustomLoader from "../../components/CustomLoader";
import useGetList from "../../hooks/useGetList";
import useAddPosts from "../../hooks/useAddPosts";
import useDeletePost from "../../hooks/useDeletePost";

const ToDoScreen = () => {
  // const { data, error, isLoading, status, hasNextPage, fetchNextPage } =
  //   useGetPost(); // with pagination
  // const dataArray = data?.pages?.map((data) => data).flat();

  const { data, error, isLoading, status } = useGetList(); //without pagination

  //Post section
  const {
    mutate,
    isLoading: isPosting,
    isSuccess,
    isError,
    data: successData,
  } = useAddPosts();

  const {
    mutate: deleteM,
    isLoading: isDeleteLoading,
    isSuccess: isDeleteSuccess,
    data: deleteData,
  } = useDeletePost();
  console.log("* ~ ToDoScreen ~ deleteData:", deleteData);
  console.log("---isDeleteLoading-->", isDeleteLoading);
  console.log("--isDeleteSuccess--->", isDeleteSuccess);

  const addFunction = async () => {
    
    await mutate({
      title: "Test Data",
      body: "----------",
    });
  };

  const RenderUI = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          marginBottom: 10,
          borderRadius: 10,
          flexWrap: "wrap",
          marginHorizontal: 20,
          padding: 15,
        }}
      >
        <Text style={{}}>{item?.id}</Text>
        <Text>{item?.title}</Text>
        <Button
          title="delete"
          onPress={() => {
            deleteM(item.id);
          }}
        />
      </View>
    );
  };

  const onReachEnd = () => {
    if (hasNextPage && !isLoading) {
      fetchNextPage();
    }
  };

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      {isLoading && <CustomLoader visible={isLoading} />}
      <View style={{ marginTop: 20 }} />
      <Button title="add Test" onPress={addFunction} />
      {isPosting && <Text>Posting...</Text>}
      {isSuccess && <Text>Post added successfully!</Text>}
      <FlatList
        data={data}
        renderItem={RenderUI}
        keyExtractor={(item) => item.id}
        // onEndReached={onReachEnd}
        // onEndReachedThreshold={0.5}
      />
      <View style={{ marginTop: 60 }} />
    </View>
  );
};

export default ToDoScreen;
