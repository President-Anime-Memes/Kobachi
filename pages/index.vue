<template>
  <div class="flex flex-col items-center space-y-36">
    <div class="object-cover">
      <p
        class="
          p-8
          text-xl
          font-bold
          uppercase
          tracking-wide
          text-center
          mx-auto
          text-white
        "
      >
        Welcome to {{ Name }}!
      </p>
      <img
        src="/banner.webp"
        alt="Banner"
        class="
          w-full
          md:max-w-3xl
          object-cover
          md:block
          hidden
          transform
          transition
          duration-500
          ease-in-out
          hover:scale-90
        "
      />
    </div>
    <!--Content-->
    <div
      class="
        p-2
        transform
        transition
        duration-500
        ease-in-out
        md:hover:scale-110 md:hover:animate-pulse
      "
    >
      <div
        class="
          p-4
          md:flex
          justify-between items-center
        "
      >
        <div class="md:flex-shrink-0">
          <img
            src="/kaichou.webp"
            alt="Banner"
            class="object-cover w-full md:w-48 rounded-full h-48"
          />
        </div>
        <div class="p-8">
          <p class="mt-2 text-gray-300 tracking-wide leading-6">
            An anime community for memes and
            <a href="javascript:void(0)" class="text-pamred-100 hover:text-red-400"
              >anime character popularity polls</a
            >!
          </p>
        </div>
      </div>
    </div>
    <div
      class="
        p-2
        transform
        transition
        duration-500
        ease-in-out
        md:hover:scale-110 md:hover:animate-pulse
      "
    >
      <div
        class="
          p-4
          md:flex
          justify-between items-center
        "
      >
        <div class="p-8">
          <p class="mt-2 text-gray-300 tracking-wide leading-6">
            Join our
            <a
              class="text-pamred-100 hover:text-red-400"
              :href="Discord"
            >
              Discord server</a
            >! We have a friendly community! We also hold frequent events and
            giveaways! Follow us on Facebook and Instagram for a regular supply
            of memes!
          </p>
        </div>
        <div class="md:flex-shrink-0">
          <img
            src="/shinomiya.webp"
            alt="Banner"
            class="object-cover w-full md:w-48 rounded-full h-48"
          />
        </div>
      </div>
    </div>
    <!--Sauce-->
    <div
      class="
      "
    >
      <div class="">
        <img
          class="p-4 w-full object-cover md:h-72"
          src="/saucebanner.png"
          alt="Weiner"
        />
      </div>
      <div class="flex flex-col items-center p-8 space-y-8">
        <span
          class="
            block
            mt-1
            text-lg
            leading-tight
            font-medium
            text-white
          "
          >Psst hey!</span
        >
        <a href="https://discord.gg/BBQQZuKCQj" class="mt-2 text-gray-300 flex flex-col items-center space-y-4"
          ><span>Why not check out our Sauce Posting Discord server by clicking here
          meanwhile?</span>
          <img
            class="mx-auto"
            src="https://discordapp.com/api/guilds/864469510660816896/embed.png?style=banner2&id={Date.now()}"
            alt="Discord"
        /></a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Name, Website, Discord, Facebook } from "@/data/Constants.js";
definePageMeta({
  title: "Seitokai",
});
</script>