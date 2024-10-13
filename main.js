// Thêm tương tác JS để nâng cao trải nghiệm người dùng
const promotions = document.querySelectorAll(".promotion button");
const reviews = document.querySelectorAll(".review");

promotions.forEach((button) => {
  button.addEventListener("click", () => {
    alert(
      "Cảm ơn bạn đã quan tâm đến khuyến mãi! Vui lòng đăng nhập để nhận ưu đãi."
    );
  });
});

reviews.forEach((review) => {
  review.addEventListener("mouseenter", () => {
    review.style.backgroundColor = "#f9f9f9";
    review.style.transition = "background-color 0.3s ease";
  });

  review.addEventListener("mouseleave", () => {
    review.style.backgroundColor = "#fff";
  });
});

document
  .getElementById("subscribe-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Cảm ơn bạn đã đăng ký nhận tin!");
  });