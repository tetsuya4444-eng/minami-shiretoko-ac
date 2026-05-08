// 南知床山岳会 - メインスクリプト
// 1) ヒーロー写真スライドショー（Ken Burns 風）
// 2) 山々ギャラリーの自動生成
// 3) ナビゲーション・スクロール演出（既存機能）

document.addEventListener("DOMContentLoaded", () => {
  initHeroSlideshow();
  initMountainGallery();
  initNavigation();
  initScrollEffects();
});

/* ========== ヒーロースライドショー ========== */
function initHeroSlideshow() {
  const container = document.getElementById("heroSlides");
  if (!container || !window.SSAC_PHOTOS) return;

  const slides = window.SSAC_PHOTOS.heroSlides;
  if (!slides || !slides.length) return;

  // スライド要素を生成
  slides.forEach((slide, i) => {
    const div = document.createElement("div");
    div.className = "hero-slide";
    div.style.backgroundImage = `url(images/photos/${slide.slug}.jpg)`;
    div.setAttribute("aria-label", slide.name);
    if (i === 0) div.classList.add("is-active");
    container.appendChild(div);
  });

  // 最初のスライドを優先プリロード
  const firstImg = new Image();
  firstImg.src = `images/photos/${slides[0].slug}.jpg`;

  // 自動切替（5秒間隔・クロスフェード）
  let current = 0;
  const slideEls = container.querySelectorAll(".hero-slide");
  const total = slideEls.length;
  if (total <= 1) return;

  setInterval(() => {
    slideEls[current].classList.remove("is-active");
    current = (current + 1) % total;
    slideEls[current].classList.add("is-active");
  }, 5500);
}

/* ========== 山々ギャラリー ========== */
function initMountainGallery() {
  const container = document.getElementById("mountainGallery");
  if (!container || !window.SSAC_PHOTOS) return;

  const items = window.SSAC_PHOTOS.gallery;
  if (!items || !items.length) return;

  items.forEach((item) => {
    const fig = document.createElement("figure");
    fig.className = "mountain-card photo-frame" + (item.featured ? " mountain-card-featured" : "");
    fig.setAttribute("data-credit", "Photo by K.Yama");

    const img = document.createElement("img");
    img.src = `images/photos/${item.slug}.jpg`;
    img.alt = item.name;
    img.loading = "lazy";
    fig.appendChild(img);

    const cap = document.createElement("figcaption");
    cap.className = "mountain-caption";

    const head = document.createElement("h3");
    head.innerHTML = item.elevation
      ? `${item.name} <small>${item.elevation}</small>`
      : item.name;
    cap.appendChild(head);

    if (item.caption) {
      const p = document.createElement("p");
      p.textContent = item.caption;
      cap.appendChild(p);
    }
    fig.appendChild(cap);
    container.appendChild(fig);
  });
}

/* ========== ナビゲーション ========== */
function initNavigation() {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  if (!navbar || !navToggle || !navMenu) return;

  // スクロール時のナビバー変化
  const onScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // モバイルメニュー開閉
  navToggle.addEventListener("click", () => {
    const isOpen = !navToggle.classList.contains("active");
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", isOpen);
    navToggle.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navMenu.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "メニューを開く");
    });
  });

  // スムーズスクロール（ナビバー高さ分オフセット）
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const offset = navbar.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  // ナビゲーションのアクティブセクション表示
  const navLinks = navMenu.querySelectorAll("a");
  const sectionIds = Array.from(navLinks).map((link) =>
    link.getAttribute("href").replace("#", "")
  );

  const activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            const href = link.getAttribute("href").replace("#", "");
            link.classList.toggle("active", href === id);
          });
        }
      });
    },
    {
      rootMargin: `-${navbar.offsetHeight + 1}px 0px -50% 0px`,
      threshold: 0,
    }
  );

  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) activeObserver.observe(el);
  });
}

/* ========== スクロールフェードイン ========== */
function initScrollEffects() {
  const sections = document.querySelectorAll(".section");
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0 }
  );
  sections.forEach((s) => fadeObserver.observe(s));
}
