class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="bg-white">
    <!-- # MENU START -->
    <div
      class="menu flex min-h-[30px] w-full items-center bg-secondary font-pt"
    >
      <div
        class="super-container flex flex-col items-center justify-between pt-0 text-[14px] md:flex-row"
      >
        <ul class="xs:flex-row xs:gap-[10px] flex flex-col items-center">
          <li class="flex items-center whitespace-nowrap">
            <i class="fa-regular fa-clock pr-2"></i> Mon - Fri:
            <span class="pl-1 font-bold"> 9:00am - 9:00pm</span>
          </li>
          <li class="xs:block hidden h-[15px] w-[1px] bg-dark"></li>
          <li class="flex items-center whitespace-nowrap">
            <i class="fa-solid fa-phone-flip pr-2"></i> Call us:
            <span class="pl-1 font-bold">+1-202-555-0168</span>
          </li>
        </ul>
        <ul class="flex gap-[20px]">
          <li>Language:<span class="font-bold"> English</span></li>
          <li>Currency:<span class="font-bold"> USD$</span></li>
        </ul>
      </div>
    </div>
    <!-- # MENU END -->
    <!-- # Navbar Start -->
    <nav class="super-container pt-0">
      <div
        class="xs:gap-12 flex h-[105px] items-center justify-between gap-4"
      >
        <div class="flex gap-1.5">
          <div
            class="side-menu flex cursor-pointer flex-col items-center justify-center gap-[3px] md:hidden"
          >
            <span class="block h-1 w-5 rounded-full bg-darkBold"></span>
            <span class="block h-1 w-5 rounded-full bg-darkBold"></span>
            <span class="block h-1 w-5 rounded-full bg-darkBold"></span>
          </div>
          <a
            href="./home.html"
            class="logo relative text-[2rem] text-darkBold"
          >
            Disho
            <img
              src="./util/images/logo-leaf.png"
              alt="Tree leaf"
              class="absolute left-[19px] top-[5px]"
            />
          </a>
        </div>
        <ul class="nav-items hidden gap-4 font-pt md:flex lg:gap-6">
          <li class="whitespace-nowrap font-bold">
            <a href="./shop.html"
              >Home <i class="fa-solid fa-chevron-down w-[10px]"></i
            ></a>
          </li>
          <li class="whitespace-nowrap">
            <a href="./pages.html"
              >Shop <i class="fa-solid fa-chevron-down w-[10px]"></i
            ></a>
          </li>
          <li class="whitespace-nowrap">
            <a href="./blog.html"
              >Pages <i class="fa-solid fa-chevron-down w-[10px]"></i
            ></a>
          </li>
          <li class="whitespace-nowrap">
            <a href="./blog.html"
              >Blog <i class="fa-solid fa-chevron-down w-[10px]"></i
            ></a>
          </li>
          <li class="whitespace-nowrap">
            <a href="./contact.html">Contact </a>
          </li>
        </ul>
        <div class="flex w-full justify-end gap-6">
          <div class="search-bar hidden w-full max-w-[410px] font-pt lg:flex">
            <input
              type="text"
              placeholder="Search for product..."
              class="flex-1 rounded-[25px] rounded-r-none border-2 border-r-0 border-[#D2D2D2] px-4 py-3"
            />
            <button
              class="flex items-center justify-center rounded-r-[25px] bg-primary px-9 pl-11"
            >
              <i class="fa-solid fa-magnifying-glass text-white"></i>
            </button>
          </div>
          <ul class="flex gap-[10px] relative">
            <li class="z-[10]">
              <a
                class="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white drop-shadow-[0px_2px_15px_rgba(183,189,196,0.59)]"
                href="./profile.html"
              >
                <i class="fa-regular fa-user"></i>
              </a>
            </li>
            <li
              class="z-[10]"
            >
              <a
                class="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white drop-shadow-[0px_2px_15px_rgba(183,189,196,0.59)]"
                href="./cart.html"
                >
                <span data-basket-count class="absolute bg-primary w-[23px] h-[23px] top-[-5px] right-[-5px] rounded-full flex justify-center items-center text-white font-pt font-bold text-sm">2</span>
                <i class="fa-solid fa-basket-shopping"></i
              >
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="search-bar mx-auto flex w-full font-pt lg:hidden">
        <input
          type="text"
          placeholder="Search for product..."
          class="xs:px-4 xs:py-3 flex-1 rounded-[25px] rounded-r-none border-2 border-r-0 border-[#D2D2D2] px-3 py-2"
        />
        <button
          class="xs:px-9 xs:pl-11 flex items-center justify-center rounded-r-[25px] bg-primary px-7 pl-9"
        >
          <i class="fa-solid fa-magnifying-glass text-white"></i>
        </button>
      </div>
    </nav>
    <!-- # Navbar End -->
  </header>
    `;
  }
}

customElements.define("header-component", Header);
