const handlePageChange = (page, setPage) => {
    setPage(page)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
}



export default handlePageChange