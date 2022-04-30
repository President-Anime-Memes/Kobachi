<template>
  <div
    class="
      dark:bg-abyss-1000/20
      text-white
      md:h-48
      p-8
      flex flex-col space-y-8
      items-center
    "
  >
    <hr class="border border-rose-500 w-full" />
    <div
      class="
        max-w-6xl
        flex flex-col
        md:flex-row
        text-center
        md:text-left
        justify-between
        space-y-4
        md:space-y-0
        items-start
        w-full
      "
    >
      <div class="p-2 flex flex-col space-y-4 items-start">
        <div class="text-2xl font-black">{{Name}}</div>
        <span
          class="flex flex-row items-center stroke-rose-500 fill-transparent stroke-1 space-x-2"
        >
          <a
            :href="Website"
            target="_blank"
            class="font-bold flex flex-row items-center"
          >
            <SVGGlobe />
          </a>
          <a
            :href="Facebook"
            target="_blank"
            class="font-bold flex flex-row items-center"
          >
            <SVGFacebook />
          </a>
        </span>
      </div>
      <div
        class="
          p-2
          flex flex-col
          space-y-6
          items-start
          stroke-rose-500 stroke-1 fill-transparent
        "
      >
        <span
          class="font-bolder flex flex-row items-center"
        >
          <span class="font-bold text-xl">Join us</span>
        </span>
        <div class="flex flex-col text-sm">
          <a
            :href="Discord"
            target="_blank"
            class="font-bold flex flex-row items-center"
          >
            <span>Discord Server</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {Name, Website, Discord, Facebook} from "@/data/Constants.js"
</script>