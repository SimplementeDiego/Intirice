function scrollToTop() {
  const cantidad = window.scrollY;

  for (let i = cantidad; -1 < i; i--) {
    setTimeout(() => {
      window.scroll(0, i);
    }, 0 + (cantidad - i) * 0.35);
  }
}
