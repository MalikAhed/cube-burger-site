import "@fontsource-variable/big-shoulders"
import "./styles.css"

const assetUrl = (file) => `${import.meta.env.BASE_URL}assets/${file}`

const arrowIcon = `
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`

const brandMark = `
  <svg aria-hidden="true" viewBox="0 0 32 32" fill="none">
    <path d="M8 10c1.5-4.6 14.5-4.6 16 0H8Z" fill="currentColor"/>
    <path d="M7 14h18M8 18h16M10 22h12" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  </svg>`

document.querySelector("#app").innerHTML = `
  <main>
    <section class="hero" id="opening" data-hero>
      <img class="hero__background" src="${assetUrl("hero-background.png")}" alt="" width="1538" height="1022" fetchpriority="high" />
      <img class="hero__ingredients hero__ingredients--left" src="${assetUrl("hero-ingredients.png")}" alt="" width="1536" height="1024" />
      <img class="hero__ingredients hero__ingredients--right" src="${assetUrl("hero-ingredients.png")}" alt="" width="1536" height="1024" />

      <header class="nav shell">
        <a class="brand" href="#opening" aria-label="Cube Burger home" data-hero-brand>
          <span class="brand__mark">${brandMark}</span>
          <span class="brand__words"><strong>CUBE BURGER</strong><small>RESTACKING FOOD</small></span>
        </a>

        <nav class="nav__links" aria-label="Primary navigation">
          <a href="#menu">Menu</a>
          <a href="#story">Our story</a>
          <a href="#layers">Quality</a>
        </nav>

        <a class="button button--nav" href="#order">Order now</a>
      </header>

      <div class="hero__stage shell">
        <h1 class="hero__title" data-hero-title>
          <span>CUBE</span>
          <span>BURGER</span>
        </h1>
        <img class="hero__burger" src="${assetUrl("hero-burger.png")}" alt="A stacked Cube Burger" width="1536" height="1024" data-hero-subject />
      </div>

      <a class="hero__social" href="#story" aria-label="Explore Cube Burger">CB</a>
    </section>

    <section class="menu section section--cream" id="menu">
      <div class="shell section__inner">
        <header class="section-heading section-heading--split">
          <div>
            <p class="eyebrow">The Cube lineup</p>
            <h2>Choose your stack</h2>
          </div>
          <p class="section-heading__intro">Big flavor. Clean ingredients. Built fresh and stacked exactly the way a proper burger should be.</p>
        </header>

        <div class="menu__layout">
          <figure class="menu__photo">
            <img src="${assetUrl("menu-food.png")}" alt="Crispy chicken burger, grilled roll, and loaded fries" width="1122" height="1402" loading="lazy" />
          </figure>

          <div class="menu__cards">
            <article class="menu-card menu-card--red">
              <div>
                <p class="menu-card__number">01 / Signature</p>
                <h3>Cube Double</h3>
                <p>Two smashed patties, molten cheddar, crisp pickles, onions, lettuce and Cube sauce.</p>
              </div>
              <span class="menu-card__arrow">${arrowIcon}</span>
            </article>

            <article class="menu-card menu-card--gold">
              <div>
                <p class="menu-card__number">02 / Crunch</p>
                <h3>Crispy Cube</h3>
                <p>Golden fried chicken, cool slaw, pickles and a generous pour of signature sauce.</p>
              </div>
              <span class="menu-card__arrow">${arrowIcon}</span>
            </article>

            <article class="menu-card menu-card--outline">
              <div>
                <p class="menu-card__number">03 / Wrapped</p>
                <h3>Cube Roll</h3>
                <p>Grilled chicken, crisp greens, fresh tomato and sauce wrapped tight for the road.</p>
              </div>
              <span class="menu-card__arrow">${arrowIcon}</span>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="story" id="story">
      <div class="shell story__inner">
        <div class="story__copy">
          <p class="eyebrow eyebrow--light">Why Cube?</p>
          <h2>We restack<br />the rules</h2>
          <p>No frozen shortcuts. No quiet flavors. Just smashed-to-order patties, crisp produce, bold sauces and every layer built to hit at once.</p>
          <a class="button button--cream" href="#menu">Explore the menu</a>
        </div>

        <div class="food-cycle" aria-label="Burger, fries, and milkshake rotating showcase">
          <div class="food-cycle__item food-cycle__item--burger">
            <img src="${assetUrl("rotator-burger.png")}" alt="Double smash cheeseburger" width="1254" height="1254" loading="lazy" />
          </div>
          <div class="food-cycle__item food-cycle__item--fries">
            <img src="${assetUrl("rotator-fries.png")}" alt="Golden french fries" width="1254" height="1254" loading="lazy" />
          </div>
          <div class="food-cycle__item food-cycle__item--drink">
            <img src="${assetUrl("rotator-drink.png")}" alt="Vanilla milkshake" width="1254" height="1254" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <section class="layers section section--red" id="layers">
      <div class="shell section__inner">
        <header class="section-heading section-heading--split section-heading--light">
          <h2>Built in layers</h2>
          <p class="eyebrow eyebrow--gold">From grill to wrap,<br />every move has a reason.</p>
        </header>

        <div class="layers__grid">
          <article class="layer-card layer-card--cream">
            <span>01</span>
            <div><h3>Smashed hot</h3><p>Seared hard for crisp edges and a juicy center.</p></div>
          </article>
          <article class="layer-card layer-card--gold">
            <span>02</span>
            <div><h3>Stacked fresh</h3><p>Cold crunch, sharp pickles and sauce in every bite.</p></div>
          </article>
          <article class="layer-card layer-card--dark">
            <span>03</span>
            <div><h3>Served loud</h3><p>Wrapped fast, handed over hot, never toned down.</p></div>
          </article>
        </div>
      </div>
    </section>

    <section class="order section" id="order">
      <div class="shell order__inner">
        <p class="eyebrow">Your next meal is ready</p>
        <h2>Stack it. Bite it.</h2>
        <p>Pick your favorite. Make it a meal. We’ll handle the rest.</p>
        <a class="button button--red" href="mailto:orders@cubeburger.example">Order now ${arrowIcon}</a>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="shell footer__inner">
      <strong>Cube Burger<sup>®</sup></strong>
      <span>Restacking food — one bite at a time</span>
      <a href="#opening">Instagram</a>
    </div>
  </footer>
`

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href")
    const target = id && document.querySelector(id)
    if (!target) return
    event.preventDefault()
    target.scrollIntoView({ behavior: "smooth", block: "start" })
  })
})
