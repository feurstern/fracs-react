import React from 'react'
import styles from '../style'
import Link from 'next/link'
import Image from 'next/image'

const Section2reg = () => {
  return (
    <section className={`pt-[50px]`}>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="rounded-t-lg" src="https://media.getmyuni.com/assets/images/articles/group-discussion-topics-for-college-students.webp" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FRAC Program Name</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam finibus lacus diam, ut ultricies nisi interdum id.
            Mauris imperdiet sapien in facilisis iaculis.
            Donec neque enim, auctor ut blandit id, imperdiet vel elit.
          </p>
          <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Register
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>

    </section>
  )
}

export default Section2reg
