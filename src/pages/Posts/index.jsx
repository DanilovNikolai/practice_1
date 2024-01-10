import React, { useState, useEffect, useRef } from "react";
// custom hooks
import { usePosts } from "../../hooks/usePosts";
import useFetching from "../../hooks/useFetching";
import useObserver from "../../hooks/useObserver";
// API
import PostService from "../../API/PostService";
// utils
import getPageCount from "../../utils/pages";
// components
import PostsList from "../../components/PostsList";
import PostsModal from "../../components/PostsModal";
import PostsFilter from "../../components/PostsFilter";
import Modal from "../../components/UI/Modal";
import Button from "../../components/UI/Button";
import Loader from "../../components/UI/Loader";
import Navbar from "../../components/UI/Navbar";
// styles
import styles from "./Posts.module.scss";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", search: "" });
  const [isModalVisible, setModalVisible] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(7);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalPosts = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalPosts, limit));
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts();
  }, [page, limit]);

  function handlePostCreate(post) {
    setPosts([...posts, post]);
    setModalVisible(false);
  }

  function handlePostRemove(post) {
    setPosts(posts.filter((item) => item.id !== post.id));
  }

  return (
    <>
      <Navbar />
      <div className={styles.postContainer}>
        <Button onClick={() => setModalVisible(true)}>
          <span>Создать запись</span>
        </Button>
        <Modal visible={isModalVisible} closeModal={setModalVisible}>
          <PostsModal onPostCreate={handlePostCreate} posts={posts} />
        </Modal>
        <PostsFilter
          filter={filter}
          setFilter={setFilter}
          limit={limit}
          setLimit={setLimit}
        />
        {postsError && <h1 style={{ color: "red" }}>Произошла ошибка</h1>}
        <PostsList
          onPostRemove={handlePostRemove}
          posts={sortedAndSearchedPosts}
          title="Список дел"
          number="1"
        />
        <div ref={lastElement} />
        {isPostsLoading && <Loader />}
      </div>
    </>
  );
}
