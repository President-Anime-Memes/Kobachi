<template>
  <footer
    class="
      bg-transparent
      shadow-md
      text-center
      md:text-left
    "
  >
    <div
      class="
        sm:flex
        items-center
        justify-between
        max-w-6xl
        mx-auto
        py-4
        px-4
        md:px-8
        text-sm
      "
    >
      <div class="flex-1">
        <div>
          Copyright
          <a
            href="https://github.com/retraigo"
            target="_blank"
            class="font-bold text-nett-maid"
          >
            NeTT
          </a>
        </div>
      </div>
      <div class="flex-initial mt-3 sm:mt-0 text-nett-maid">
        <NuxtLink
          to="/"
          class="font-bold transition duration-500 ease-in-out block transform hover:-translate-y-1 hover:scale-110 hover:text-rose-400"
        >
          Go Home
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
