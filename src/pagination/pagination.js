export const choosePagination = (currentPage, numberOfPages) => {
  const pageNumbers = [];
  // Build 1/2/3/4/5
  // Static
  if (numberOfPages <= 5) {
    for (let i = 1; i <= numberOfPages; i++) {
      pageNumbers.push(i);
    }
  }
  // Build Cur-2/Cur-1/Cur/Cur+1/Cur+2, where Cur is Current
  // Normal
  else if (currentPage > 2 && currentPage < numberOfPages - 1 && numberOfPages > 5) {
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      pageNumbers.push(i);
    }
  }
  // Begin 2
  else if (currentPage === 2 && numberOfPages > 5) {
    for (let i = currentPage - 1; i < currentPage + 4; i++) {
      pageNumbers.push(i);
    }
  }
  // Begin 1
  else if (currentPage === 1 && numberOfPages > 5) {
    for (let i = currentPage; i < currentPage + 5; i++) {
      pageNumbers.push(i);
    }
  }
  // End 1
  else if (currentPage === numberOfPages - 1 && numberOfPages > 5) {
    for (let i = currentPage - 3; i < currentPage + 2; i++) {
      pageNumbers.push(i);
    }
  }
  // End 2
  else if (currentPage === numberOfPages && numberOfPages > 5) {
    for (let i = currentPage - 4; i < currentPage + 1; i++) {
      pageNumbers.push(i);
    }
  }
  return pageNumbers;
} 