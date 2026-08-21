import "@fontsource-variable/big-shoulders"
import "./styles.css"
import savedIngredientLayout from "./ingredient-layout.json"

const assetUrl = (file) => `${import.meta.env.BASE_URL}assets/${file}`

const ingredientPieces = [
  ["lettuceTop", "Top lettuce"],
  ["tomatoLeft", "Left tomato"],
  ["lettuceBottom", "Lower lettuce"],
  ["onionTop", "Top onion"],
  ["lettuceRight", "Right lettuce"],
  ["tomatoRight", "Right tomato"],
  ["onionBottom", "Lower onion"],
]

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
      <div class="hero__ingredients" aria-hidden="true" style="--ingredients-image: url('${assetUrl("hero-ingredients.png")}')">
        ${ingredientPieces.map(([id, label], index) => `
          <button class="ingredient-piece ingredient-piece--${id}" type="button" data-ingredient="${id}" data-enter="${index % 2 ? "bottom" : "top"}" tabindex="-1" aria-label="${label}">
            <span></span>
          </button>
        `).join("")}
      </div>

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

const ingredientLayout = structuredClone(savedIngredientLayout)
const ingredientStage = document.querySelector(".hero__ingredients")
const ingredientElements = [...document.querySelectorAll("[data-ingredient]")]

const currentIngredientMode = () => window.innerWidth <= 768 ? "mobile" : "desktop"

const applyIngredientLayout = () => {
  const mode = currentIngredientMode()
  ingredientElements.forEach((element) => {
    const position = ingredientLayout[mode][element.dataset.ingredient]
    element.style.left = `${position.x}%`
    element.style.top = `${position.y}%`
    element.style.setProperty("--piece-scale", position.scale)
    element.style.setProperty("--piece-rotation", `${position.rotate}deg`)
  })
}

applyIngredientLayout()
window.addEventListener("resize", applyIngredientLayout)

if (import.meta.env.DEV) {
  document.body.insertAdjacentHTML("beforeend", `
    <div class="ingredient-editor" data-open="false">
      <button class="ingredient-editor__toggle" type="button">Arrange ingredients</button>
      <div class="ingredient-editor__panel" aria-label="Ingredient position editor">
        <strong>Ingredient layout</strong>
        <span class="ingredient-editor__mode"></span>
        <label>Size <input data-control="scale" type="range" min="0.25" max="1.6" step="0.01" /></label>
        <label>Rotation <input data-control="rotate" type="range" min="-90" max="90" step="1" /></label>
        <div class="ingredient-editor__actions">
          <button data-action="save" type="button">Save changes</button>
          <button data-action="reset" type="button">Reset</button>
          <button data-action="done" type="button">Done</button>
        </div>
        <small>Drag any ingredient. Resize the browser to edit the mobile or desktop layout.</small>
      </div>
    </div>
  `)

  const editor = document.querySelector(".ingredient-editor")
  const modeLabel = editor.querySelector(".ingredient-editor__mode")
  const scaleControl = editor.querySelector('[data-control="scale"]')
  const rotateControl = editor.querySelector('[data-control="rotate"]')
  let selected = ingredientElements[0]
  let editing = false

  const selectIngredient = (element) => {
    selected?.removeAttribute("data-selected")
    selected = element
    selected.dataset.selected = "true"
    const value = ingredientLayout[currentIngredientMode()][selected.dataset.ingredient]
    scaleControl.value = value.scale
    rotateControl.value = value.rotate
  }

  const setEditing = (value) => {
    editing = value
    editor.dataset.open = String(value)
    ingredientStage.dataset.editing = String(value)
    ingredientElements.forEach((element) => { element.tabIndex = value ? 0 : -1 })
    modeLabel.textContent = `${currentIngredientMode()} layout`
    if (value) selectIngredient(selected)
  }

  editor.querySelector(".ingredient-editor__toggle").addEventListener("click", () => setEditing(true))
  editor.querySelector('[data-action="done"]').addEventListener("click", () => setEditing(false))

  ingredientElements.forEach((element) => {
    element.addEventListener("pointerdown", (event) => {
      if (!editing) return
      event.preventDefault()
      selectIngredient(element)
      element.setPointerCapture(event.pointerId)
    })

    element.addEventListener("pointermove", (event) => {
      if (!editing || !element.hasPointerCapture(event.pointerId)) return
      const bounds = ingredientStage.getBoundingClientRect()
      const value = ingredientLayout[currentIngredientMode()][element.dataset.ingredient]
      value.x = Math.round(Math.max(-10, Math.min(110, (event.clientX - bounds.left) / bounds.width * 100)) * 10) / 10
      value.y = Math.round(Math.max(-10, Math.min(110, (event.clientY - bounds.top) / bounds.height * 100)) * 10) / 10
      applyIngredientLayout()
    })

    element.addEventListener("click", (event) => {
      if (!editing) return
      event.preventDefault()
      selectIngredient(element)
    })
  })

  const updateSelected = () => {
    const value = ingredientLayout[currentIngredientMode()][selected.dataset.ingredient]
    value.scale = Number(scaleControl.value)
    value.rotate = Number(rotateControl.value)
    applyIngredientLayout()
  }

  scaleControl.addEventListener("input", updateSelected)
  rotateControl.addEventListener("input", updateSelected)

  editor.querySelector('[data-action="reset"]').addEventListener("click", () => {
    Object.assign(ingredientLayout, structuredClone(savedIngredientLayout))
    applyIngredientLayout()
    selectIngredient(selected)
  })

  editor.querySelector('[data-action="save"]').addEventListener("click", async (event) => {
    const button = event.currentTarget
    button.textContent = "Saving…"
    const response = await fetch("/__ingredient-layout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ingredientLayout),
    })
    button.textContent = response.ok ? "Saved ✓" : "Save failed"
    setTimeout(() => { button.textContent = "Save changes" }, 1800)
  })

  window.addEventListener("resize", () => {
    modeLabel.textContent = `${currentIngredientMode()} layout`
    if (editing) selectIngredient(selected)
  })
}
