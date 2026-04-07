// 南知床山岳会 - メインスクリプト

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

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

  // メニューリンククリックで閉じる
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

  // スクロールアニメーション（フェードイン）
  const sections = document.querySelectorAll(".section");
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );
  sections.forEach((s) => fadeObserver.observe(s));

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
});
