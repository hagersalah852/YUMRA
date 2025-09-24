// نجيب عناصر الأيقونات اللي فوق
const cartCount = document.getElementById("cart-count");
const favCount = document.getElementById("fav-count");

// نجيب كل الأزرار
const cartButtons = document.querySelectorAll(".add-to-cart");
const favButtons = document.querySelectorAll(".add-to-fav");

// عدادات
let cart = 0;
let fav = 0;

// إضافة للسلة
cartButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    cart++;
    cartCount.textContent = cart;
    btn.textContent = "✔ تمت الإضافة"; // يغير النص بعد الإضافة
    setTimeout(() => btn.textContent = "🛒 أضف إلى السلة", 2000);
  });
});

// إضافة للمفضلة
favButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    fav++;
    favCount.textContent = fav;
    btn.textContent = "❤️ تمت الإضافة";
    setTimeout(() => btn.textContent = "❤️ أضف للمفضلة", 2000);
  });
});