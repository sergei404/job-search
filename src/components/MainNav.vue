<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="mx-auto flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8">
        <a href="/" class="flex h-full items-center text-xl">{{ company }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex gap-7 h-full list-none">
            <li v-for="item of menuItems" :key="item" class="h-full"><a href="" class="flex h-full items-center py-2.5">{{item}}</a></li>
            <!-- <li class="h-full"><a href="" class="flex h-full items-center py-2.5">Location</a></li>
            <li class="h-full"><a href="" class="flex h-full items-center py-2.5">Life at Dodo Careers</a></li>
            <li class="h-full"><a href="" class="flex h-full items-center py-2.5">How we hire</a></li>
            <li class="h-full"><a href="" class="flex h-full items-center py-2.5">Students</a></li>
            <li class="h-full"><a href="" class="flex h-full items-center py-2.5">Jobs</a></li> -->
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Dodo Careers",
      menuItems: ['Teams', 'Location', 'Life at Dodo Careers', 'How we hire', 'Students', 'Jobs']
    }
  }
}
</script>