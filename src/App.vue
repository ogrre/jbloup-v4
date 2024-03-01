<script setup lang="ts">
import resumeData from '@/assets/resume.json';
import type { Resume } from '@/types/resume'

const resume: Resume = resumeData as Resume;

</script>

<template>
  <main class="min-h-screen flex flex-col justify-between p-5">

    <div class="flex flex-col justify-end sm:flex-row-reverse">

      <img class="mx-auto sm:mr-0 w-80 sm:w-72 lg:w-64 mb-5 sm:mb-0" src="/img/jb.webp" alt="photography of me">

      <div class="flex flex-col justify-between space-y-10">

        <div class="space-y-2.5">
          <h1 class="text-zinc-200 font-input-serif">
            <span class="tracking-widest text-xs">[⌘]</span>
            {{ resume.basics.name }}
          </h1>
          <p class="text-zinc-400">Currently working as {{ resume.basics.title }} at <a class="relative group"
                                                                                  :href="resume.basics.companyUrl"
                                                                                  target="_blank">
            <span class="text-zinc-400 italic uppercase">{{ resume.basics.company }}</span>
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-500 transition-all group-hover:w-full"></span>
          </a>
          </p>
        </div>

        <div class="space-y-5">
          <div class="space-y-2.5">
            <h2 class="text-zinc-200 font-input-serif"><span class="tracking-widest text-xs">[@]</span> Socials
            </h2>
            <p class="text-zinc-400">
              <a class="relative group" :href="profile.url" target="_blank" v-for="profile in resume.basics.profiles" v-bind:key="profile.network">
                <span>{{ profile.network }}</span>
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-600 transition-all group-hover:w-full"></span>
                / </a>
            </p>
          </div>

          <div class="space-y-2.5">
            <h2 class="text-zinc-200 font-input-serif"><span class="tracking-widest text-xs">[☎]</span> Get in
              contact</h2>
            <p class="text-zinc-400">
              <a class="relative group" href="mailto:contact@jbloup.com?subject=I need you in my team">
                <span>{{ resume.basics.email }}</span>
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-600 transition-all group-hover:w-full"></span>
              </a> //
              <a class="relative group" :href="'tel:'+resume.basics.phoneNumberFr">
                <span>{{ resume.basics.phoneNumberFr }}</span>
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-600 transition-all group-hover:w-full"></span>
              </a> //
              <a class="relative group" :href="'tel:'+resume.basics.phoneNumberCa">
                <span>{{ resume.basics.phoneNumberCa }}</span>
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-600 transition-all group-hover:w-full"></span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="flex flex-col lg:flex-row justify-between mt-20">
        <h2 class="w-auto lg:w-1/3 text-zinc-200 font-input-serif mb-2.5">
          <span class="tracking-widest text-xs">[0]</span> Resume
        </h2>
        <ul class="w-full lg:w-2/3 space-y-2.5">
          <li class="sm:w-full flex flex-row justify-between">
            <h4>
              <a class="relative group" href="/data/Jean-Baptiste_LOUP_CV_2024.pdf" target="_blank">
                <span class="uppercase">get full resume pdf &rarr;</span>
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-600 transition-all group-hover:w-full"></span>
              </a>
            </h4>
            <p class="sm:w-72">[ * ]</p>
          </li>
        </ul>
      </div>

      <div class="flex flex-col lg:flex-row justify-between mt-10">
        <h2 class="w-auto lg:w-1/3 text-zinc-200 font-input-serif mb-2.5">
          <span class="tracking-widest text-xs">[1]</span> Career
        </h2>
        <ul class="w-full lg:w-2/3 space-y-2.5">
          <li class="hover:bg-zinc-300 hover:text-zinc-950 transition-colors duration-300"
              v-for="experience in resume.work" v-bind:key="experience.position">
            <a class="sm:w-full flex flex-row justify-between" :href="experience.url" target="_blank">
              <h4 class="lg:hidden">{{ experience.position + ' | '}}<span class="uppercase"> {{ ' | ' + experience.shortName }}</span></h4>
              <h4 class="hidden lg:flex">{{ experience.position  + ' | '}}<span class="uppercase"> {{ ' | ' + experience.name }}</span></h4>
              <p class="sm:w-72">[ {{ experience.startDate }} - {{ experience.endDate ?? 'Now' }} ]</p>
            </a>
          </li>
        </ul>
      </div>

      <div class="flex flex-col lg:flex-row justify-between mt-10">
        <h2 class="w-auto lg:w-1/3 text-zinc-200 font-input-serif mb-2.5">
          <span class="tracking-widest text-xs">[2]</span> Projects
        </h2>
        <ul class="w-full lg:w-2/3 space-y-2.5">
          <li class="hover:bg-zinc-300 hover:text-zinc-950 transition-colors duration-300"
              v-for="project in resume.projects" v-bind:key="project.name">
            <a class="sm:w-full flex flex-row justify-between " :href="project.url" target="_blank">
              <h4>{{ project.name }} \\ <span>{{ project.type }}</span></h4>
              <p class="sm:w-72">[ {{ project.url ? project.starDate : 'Coming soon'}} ]</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
