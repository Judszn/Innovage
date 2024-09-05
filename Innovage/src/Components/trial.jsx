import React from "react";

function trial() {
  return (
    <div>
      <div className="mt-xl m:mt-2xl overflow-hidden">
        <div className="max-w-container">
          <div className="p-0 mb-3xs m:mb-s flex-row max-w-container grid grid-cols-12">
            <div className="col-span-12 m:col-span-12">
              <div className="flex flex-col relative">
                <h2 className="text-h5 text-pretty">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-btn-primary-base--hover"
                    href="/chatgpt/"
                  >
                    ChatGPT
                  </a>
                </h2>
                <div className="absolute bottom-[-0.3em] right-0">
                  <div className="hidden m:flex -mr-3xs">
                    <div className="flex w-full justify-end">
                      <button
                        type="button"
                        className="hover:text-btn-base--hover focus:outline-btn-carousel-outline text-gray-100/80 disabled:text-gray-100/15 dark:text-gray-0/80 dark:disabled:text-gray-0/15 duration-150 ease-out-cubic transition-all flex justify-center items-center h-[2.25rem] w-[2.25rem] m:h-[2.5rem] m:w-[2.5rem] rounded-s disabled:hover:animate-none hover:animate-wiggle-left active:scale-90"
                        disabled=""
                        aria-label="Previous slide"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          style="transform:rotate(90deg)"
                          width="0.875rem"
                          viewBox="0 0 14 8"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.292892 0.292894C0.683416 -0.0976306 1.31658 -0.0976315 1.70711 0.292892L7.00002 5.58579L12.2929 0.292894C12.6834 -0.0976306 13.3166 -0.0976315 13.7071 0.292892C14.0976 0.683416 14.0976 1.31658 13.7071 1.70711L7.70713 7.70711C7.51959 7.89464 7.26524 8 7.00002 8C6.7348 8 6.48045 7.89464 6.29291 7.70711L0.292894 1.70711C-0.0976306 1.31658 -0.0976315 0.683419 0.292892 0.292894Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="hover:text-btn-base--hover focus:outline-btn-carousel-outline text-gray-100/80 disabled:text-gray-100/15 dark:text-gray-0/80 dark:disabled:text-gray-0/15 duration-150 ease-out-cubic transition-all flex justify-center items-center h-[2.25rem] w-[2.25rem] m:h-[2.5rem] m:w-[2.5rem] rounded-s disabled:hover:animate-none hover:animate-wiggle-right active:scale-90"
                        aria-label="Next slide"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          style="transform:rotate(-90deg)"
                          width="0.875rem"
                          viewBox="0 0 14 8"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.292892 0.292894C0.683416 -0.0976306 1.31658 -0.0976315 1.70711 0.292892L7.00002 5.58579L12.2929 0.292894C12.6834 -0.0976306 13.3166 -0.0976315 13.7071 0.292892C14.0976 0.683416 14.0976 1.31658 13.7071 1.70711L7.70713 7.70711C7.51959 7.89464 7.26524 8 7.00002 8C6.7348 8 6.48045 7.89464 6.29291 7.70711L0.292894 1.70711C-0.0976306 1.31658 -0.0976315 0.683419 0.292892 0.292894Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full max-w-container"
          style="--overflowMargin:calc(0.5*var(--document-width)-max(68rem,calc(var(--document-width)-40px)))"
        >
          <div
            className="flex w-[var(--document-width)]"
            style="margin-left:calc(-1*var(--gutter-size))"
          >
            <div className="flex scroll-px-[var(--gutter-size)] min-w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory no-scrollbar relative">
              <div className="shrink-0 w-[var(--gutter-size)]"></div>
              <div
                className="snap-start max-m:w-[15rem] max-m:flex-none max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))] max-container:flex-unset max-container:basis-0 mr-3xs"
                style="aspect-ratio:3/4"
                data-slide-index="0"
              >
                <a
                  aria-label="ChatGPT"
                  className="transition ease-curve-a duration-250 bg-gray-200 mr-3 rounded relative block w-full m:w-unset max-w-full group z-0 overflow-hidden aspect-3/4 rounded-s w-full m:hidden max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))]"
                  href="/chatgpt/"
                >
                  <div className="p-3 absolute left-0 top-0 z-10 h-full w-full pointer-events-none overflow-hidden aspect-3/4 transition-[opacity,background] duration-normal ease-curve-d opacity-1">
                    <div className="p-r1 absolute inset-y-0 inset-x-0 w-full h-full flex flex-col z-20 justify-between pointer-events-none transition-opacity duration-normal ease-curve-d opacity-1 text-gray-0">
                      <div className="relative w-full h-full">
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center pointer-events-none select-none"
                          style="filter:blur(30px);color:#E86559;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              For Everyone
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center text-gray-100 pointer-events-none select-none"
                          style="filter:blur(30px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              For Everyone
                            </span>
                          </div>
                        </div>
                        <div className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center">
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              For Everyone
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance pointer-events-none select-none"
                          style="filter:blur(45px);color:#E86559;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>Let your imagination run wild</p>
                            </div>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance text-gray-100 pointer-events-none select-none"
                          style="filter:blur(45px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>Let your imagination run wild</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 leading-snug text-balance">
                          <div className="text-gray-0">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>Let your imagination run wild</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-s w-full h-full [&amp;_img]:scale-100 group-hover:[&amp;_img]:scale-105 group-hover:[&amp;_video]:scale-105 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:ease-curve-d [&amp;_img]:duration-normal [&amp;_video]:transition-transform [&amp;_video]:ease-curve-d [&amp;_video]:duration-normal w-1/2 mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
                    data-caption-height="0"
                    data-caption-open="false"
                  >
                    <div
                      className="relative w-full h-full"
                      style="aspect-ratio:3/4"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-none aspect-3/4 bg-transparent transition-[background] ease-curve-d duration-normal">
                        <img
                          alt="ChatGPT Carousel1"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center"
                          style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                          sizes="(min-width: 68rem) 419px, 100vw"
                          srcset=""
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  aria-label="ChatGPT"
                  className="transition ease-curve-a duration-250 bg-gray-200 mr-3 rounded relative block w-full m:w-unset max-w-full group z-0 overflow-hidden aspect-3/4 rounded-s hidden m:block max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))]"
                  href="/chatgpt/"
                >
                  <div className="p-3 absolute left-0 top-0 z-10 h-full w-full pointer-events-none overflow-hidden aspect-3/4 transition-[opacity,background] duration-normal ease-curve-d opacity-1">
                    <div className="p-r1 absolute inset-y-0 inset-x-0 w-full h-full flex flex-col z-20 justify-between pointer-events-none transition-opacity duration-normal ease-curve-d opacity-1 text-gray-0">
                      <div className="relative w-full h-full">
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center pointer-events-none select-none"
                          style="filter:blur(30px);color:#E86559;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              For Everyone
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center text-gray-100 pointer-events-none select-none"
                          style="filter:blur(30px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              For Everyone
                            </span>
                          </div>
                        </div>
                        <div className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center">
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              For Everyone
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance pointer-events-none select-none"
                          style="filter:blur(45px);color:#E86559;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>Let your imagination run wild</p>
                            </div>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance text-gray-100 pointer-events-none select-none"
                          style="filter:blur(45px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>Let your imagination run wild</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 leading-snug text-balance">
                          <div className="text-gray-0">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>Let your imagination run wild</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-s w-full h-full [&amp;_img]:scale-100 group-hover:[&amp;_img]:scale-105 group-hover:[&amp;_video]:scale-105 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:ease-curve-d [&amp;_img]:duration-normal [&amp;_video]:transition-transform [&amp;_video]:ease-curve-d [&amp;_video]:duration-normal w-1/2 mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
                    data-caption-height="0"
                    data-caption-open="false"
                  >
                    <div
                      className="relative w-full h-full"
                      style="aspect-ratio:3/4"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-none aspect-3/4 bg-transparent transition-[background] ease-curve-d duration-normal">
                        <img
                          alt="ChatGPT Carousel1"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center"
                          style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                          sizes="(min-width: 68rem) 419px, 100vw"
                          srcset=""
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="snap-start max-m:w-[15rem] max-m:flex-none max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))] max-container:flex-unset max-container:basis-0 mr-3xs"
                style="aspect-ratio:3/4"
                data-slide-index="1"
              >
                <a
                  aria-label="ChatGPT for teams"
                  className="transition ease-curve-a duration-250 bg-gray-200 mr-3 rounded relative block w-full m:w-unset max-w-full group z-0 overflow-hidden aspect-3/4 rounded-s w-full m:hidden max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))]"
                  href="/chatgpt/team/"
                >
                  <div className="p-3 absolute left-0 top-0 z-10 h-full w-full pointer-events-none overflow-hidden aspect-3/4 transition-[opacity,background] duration-normal ease-curve-d opacity-1">
                    <div className="p-r1 absolute inset-y-0 inset-x-0 w-full h-full flex flex-col z-20 justify-between pointer-events-none transition-opacity duration-normal ease-curve-d opacity-1 text-gray-0">
                      <div className="relative w-full h-full">
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center pointer-events-none select-none"
                          style="filter:blur(30px);color:#354263;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              For Teams
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center text-gray-100 pointer-events-none select-none"
                          style="filter:blur(30px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              For Teams
                            </span>
                          </div>
                        </div>
                        <div className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center">
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              For Teams
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance pointer-events-none select-none"
                          style="filter:blur(45px);color:#354263;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>
                                A superassistant for every member of your team
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance text-gray-100 pointer-events-none select-none"
                          style="filter:blur(45px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>
                                A superassistant for every member of your team
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 leading-snug text-balance">
                          <div className="text-gray-0">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>
                                A superassistant for every member of your team
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-s w-full h-full [&amp;_img]:scale-100 group-hover:[&amp;_img]:scale-105 group-hover:[&amp;_video]:scale-105 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:ease-curve-d [&amp;_img]:duration-normal [&amp;_video]:transition-transform [&amp;_video]:ease-curve-d [&amp;_video]:duration-normal w-1/2 mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
                    data-caption-height="0"
                    data-caption-open="false"
                  >
                    <div
                      className="relative w-full h-full"
                      style="aspect-ratio:3/4"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-none aspect-3/4 bg-transparent transition-[background] ease-curve-d duration-normal">
                        <img
                          alt="Team Update Image"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center"
                          style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                          sizes="(min-width: 68rem) 419px, 100vw"
                          srcset=""
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  aria-label="ChatGPT for teams"
                  className="transition ease-curve-a duration-250 bg-gray-200 mr-3 rounded relative block w-full m:w-unset max-w-full group z-0 overflow-hidden aspect-3/4 rounded-s w-full hidden m:block max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))]"
                  href="/chatgpt/team/"
                >
                  <div className="p-3 absolute left-0 top-0 z-10 h-full w-full pointer-events-none overflow-hidden aspect-3/4 transition-[opacity,background] duration-normal ease-curve-d opacity-1">
                    <div className="p-r1 absolute inset-y-0 inset-x-0 w-full h-full flex flex-col z-20 justify-between pointer-events-none transition-opacity duration-normal ease-curve-d opacity-1 text-gray-0">
                      <div className="relative w-full h-full">
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center pointer-events-none select-none"
                          style="filter:blur(30px);color:#354263;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              For Teams
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center text-gray-100 pointer-events-none select-none"
                          style="filter:blur(30px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              For Teams
                            </span>
                          </div>
                        </div>
                        <div className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center">
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              For Teams
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance pointer-events-none select-none"
                          style="filter:blur(45px);color:#354263;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>
                                A superassistant for every member of your team
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance text-gray-100 pointer-events-none select-none"
                          style="filter:blur(45px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>
                                A superassistant for every member of your team
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 leading-snug text-balance">
                          <div className="text-gray-0">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>
                                A superassistant for every member of your team
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-s w-full h-full [&amp;_img]:scale-100 group-hover:[&amp;_img]:scale-105 group-hover:[&amp;_video]:scale-105 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:ease-curve-d [&amp;_img]:duration-normal [&amp;_video]:transition-transform [&amp;_video]:ease-curve-d [&amp;_video]:duration-normal w-1/2 mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
                    data-caption-height="0"
                    data-caption-open="false"
                  >
                    <div
                      className="relative w-full h-full"
                      style="aspect-ratio:3/4"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-none aspect-3/4 bg-transparent transition-[background] ease-curve-d duration-normal">
                        <img
                          alt="Team Update Image"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center"
                          style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                          sizes="(min-width: 68rem) 419px, 100vw"
                          srcset=""
                          src=""
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="snap-start max-m:w-[15rem] max-m:flex-none max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))] max-container:flex-unset max-container:basis-0 mr-3xs"
                style="aspect-ratio:3/4"
                data-slide-index="2"
              >
                <a
                  aria-label="ChatGPT for enterprise"
                  className="transition ease-curve-a duration-250 bg-gray-200 mr-3 rounded relative block w-full m:w-unset max-w-full group z-0 overflow-hidden aspect-3/4 rounded-s w-full m:hidden max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))]"
                  href="/chatgpt/enterprise/"
                >
                  <div className="p-3 absolute left-0 top-0 z-10 h-full w-full pointer-events-none overflow-hidden aspect-3/4 transition-[opacity,background] duration-normal ease-curve-d opacity-1">
                    <div className="p-r1 absolute inset-y-0 inset-x-0 w-full h-full flex flex-col z-20 justify-between pointer-events-none transition-opacity duration-normal ease-curve-d opacity-1 text-gray-0">
                      <div className="relative w-full h-full">
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center pointer-events-none select-none"
                          style="filter:blur(30px);color:#217DB5;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              For Enterprises{" "}
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center text-gray-100 pointer-events-none select-none"
                          style="filter:blur(30px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              For Enterprises{" "}
                            </span>
                          </div>
                        </div>
                        <div className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center">
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              For Enterprises{" "}
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance pointer-events-none select-none"
                          style="filter:blur(45px);color:#217DB5;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>
                                Empower your entire workforce with
                                enterprise-grade AI
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance text-gray-100 pointer-events-none select-none"
                          style="filter:blur(45px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>
                                Empower your entire workforce with
                                enterprise-grade AI
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 leading-snug text-balance">
                          <div className="text-gray-0">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>
                                Empower your entire workforce with
                                enterprise-grade AI
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-s w-full h-full [&amp;_img]:scale-100 group-hover:[&amp;_img]:scale-105 group-hover:[&amp;_video]:scale-105 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:ease-curve-d [&amp;_img]:duration-normal [&amp;_video]:transition-transform [&amp;_video]:ease-curve-d [&amp;_video]:duration-normal w-1/2 mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
                    data-caption-height="0"
                    data-caption-open="false"
                  >
                    <div
                      className="relative w-full h-full"
                      style="aspect-ratio:3/4"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-none aspect-3/4 bg-transparent transition-[background] ease-curve-d duration-normal">
                        <img
                          alt="enterprise"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center"
                          style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                          sizes="(min-width: 68rem) 419px, 100vw"
                          srcset=""
                          src=""
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  aria-label="ChatGPT for enterprise"
                  className="transition ease-curve-a duration-250 bg-gray-200 mr-3 rounded relative block w-full m:w-unset max-w-full group z-0 overflow-hidden aspect-3/4 rounded-s w-full hidden m:block max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))]"
                  href="/chatgpt/enterprise/"
                >
                  <div className="p-3 absolute left-0 top-0 z-10 h-full w-full pointer-events-none overflow-hidden aspect-3/4 transition-[opacity,background] duration-normal ease-curve-d opacity-1">
                    <div className="p-r1 absolute inset-y-0 inset-x-0 w-full h-full flex flex-col z-20 justify-between pointer-events-none transition-opacity duration-normal ease-curve-d opacity-1 text-gray-0">
                      <div className="relative w-full h-full">
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center pointer-events-none select-none"
                          style="filter:blur(30px);color:#217DB5;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              For Enterprises{" "}
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center text-gray-100 pointer-events-none select-none"
                          style="filter:blur(30px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              For Enterprises{" "}
                            </span>
                          </div>
                        </div>
                        <div className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center">
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              For Enterprises{" "}
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance pointer-events-none select-none"
                          style="filter:blur(45px);color:#217DB5;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>
                                Empower your entire workforce with
                                enterprise-grade AI
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance text-gray-100 pointer-events-none select-none"
                          style="filter:blur(45px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>
                                Empower your entire workforce with
                                enterprise-grade AI
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 leading-snug text-balance">
                          <div className="text-gray-0">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>
                                Empower your entire workforce with
                                enterprise-grade AI
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-s w-full h-full [&amp;_img]:scale-100 group-hover:[&amp;_img]:scale-105 group-hover:[&amp;_video]:scale-105 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:ease-curve-d [&amp;_img]:duration-normal [&amp;_video]:transition-transform [&amp;_video]:ease-curve-d [&amp;_video]:duration-normal w-1/2 mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
                    data-caption-height="0"
                    data-caption-open="false"
                  >
                    <div
                      className="relative w-full h-full"
                      style="aspect-ratio:3/4"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-none aspect-3/4 bg-transparent transition-[background] ease-curve-d duration-normal">
                        <img
                          alt="enterprise"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center"
                          style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                          sizes="(min-width: 68rem) 419px, 100vw"
                          srcset=""
                          src=""
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="snap-start max-m:w-[15rem] max-m:flex-none max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))] max-container:flex-unset max-container:basis-0 mr-3xs"
                style="aspect-ratio:3/4"
                data-slide-index="3"
              >
                <a
                  aria-label="SearchGPT is a prototype of new AI search features"
                  className="transition ease-curve-a duration-250 bg-gray-200 mr-3 rounded relative block w-full m:w-unset max-w-full group z-0 overflow-hidden aspect-3/4 rounded-s w-full m:hidden max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))]"
                  href="/index/searchgpt-prototype/"
                >
                  <div className="p-3 absolute left-0 top-0 z-10 h-full w-full pointer-events-none overflow-hidden aspect-3/4 transition-[opacity,background] duration-normal ease-curve-d opacity-1">
                    <div className="p-r1 absolute inset-y-0 inset-x-0 w-full h-full flex flex-col z-20 justify-between pointer-events-none transition-opacity duration-normal ease-curve-d opacity-1 text-gray-100">
                      <div className="relative w-full h-full">
                        <div className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center">
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              SearchGPT Prototype
                            </span>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 leading-snug text-balance">
                          <div className="text-gray-100">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>
                                SearchGPT is a prototype of new AI search
                                features
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-s w-full h-full [&amp;_img]:scale-100 group-hover:[&amp;_img]:scale-105 group-hover:[&amp;_video]:scale-105 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:ease-curve-d [&amp;_img]:duration-normal [&amp;_video]:transition-transform [&amp;_video]:ease-curve-d [&amp;_video]:duration-normal w-1/2 mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
                    data-caption-height="0"
                    data-caption-open="false"
                  >
                    <div
                      className="relative w-full h-full"
                      style="aspect-ratio:3/4"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-none aspect-3/4 bg-transparent transition-[background] ease-curve-d duration-normal">
                        <img
                          alt="Home > News > Card Carousel > SearchGPT > Media Background Item"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center"
                          style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                          sizes="(min-width: 68rem) 314px, 100vw"
                          srcset=""
                          src=""
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  aria-label="SearchGPT is a prototype of new AI search features"
                  className="transition ease-curve-a duration-250 bg-gray-200 mr-3 rounded relative block w-full m:w-unset max-w-full group z-0 overflow-hidden aspect-3/4 rounded-s w-full hidden m:block max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))]"
                  href="/index/searchgpt-prototype/"
                >
                  <div className="p-3 absolute left-0 top-0 z-10 h-full w-full pointer-events-none overflow-hidden aspect-3/4 transition-[opacity,background] duration-normal ease-curve-d opacity-1">
                    <div className="p-r1 absolute inset-y-0 inset-x-0 w-full h-full flex flex-col z-20 justify-between pointer-events-none transition-opacity duration-normal ease-curve-d opacity-1 text-gray-100">
                      <div className="relative w-full h-full">
                        <div className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center">
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              SearchGPT Prototype
                            </span>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 leading-snug text-balance">
                          <div className="text-gray-100">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>
                                SearchGPT is a prototype of new AI search
                                features
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-s w-full h-full [&amp;_img]:scale-100 group-hover:[&amp;_img]:scale-105 group-hover:[&amp;_video]:scale-105 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:ease-curve-d [&amp;_img]:duration-normal [&amp;_video]:transition-transform [&amp;_video]:ease-curve-d [&amp;_video]:duration-normal w-1/2 mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
                    data-caption-height="0"
                    data-caption-open="false"
                  >
                    <div
                      className="relative w-full h-full"
                      style="aspect-ratio:3/4"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-none aspect-3/4 bg-transparent transition-[background] ease-curve-d duration-normal">
                        <img
                          alt="Home > News > Card Carousel > SearchGPT > Media Background Item"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center"
                          style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                          sizes="(min-width: 68rem) 314px, 100vw"
                          srcset=""
                          src=""
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="snap-start max-m:w-[15rem] max-m:flex-none max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))] max-container:flex-unset max-container:basis-0 mr-3xs"
                style="aspect-ratio:3/4"
                data-slide-index="4"
              >
                <a
                  aria-label="ChatGPT on your desktop"
                  className="transition ease-curve-a duration-250 bg-gray-200 mr-3 rounded relative block w-full m:w-unset max-w-full group z-0 overflow-hidden aspect-3/4 rounded-s w-full m:hidden max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))]"
                  href="/chatgpt/mac/"
                >
                  <div className="p-3 absolute left-0 top-0 z-10 h-full w-full pointer-events-none overflow-hidden aspect-3/4 transition-[opacity,background] duration-normal ease-curve-d opacity-1">
                    <div className="p-r1 absolute inset-y-0 inset-x-0 w-full h-full flex flex-col z-20 justify-between pointer-events-none transition-opacity duration-normal ease-curve-d opacity-1 text-gray-0">
                      <div className="relative w-full h-full">
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center pointer-events-none select-none"
                          style="filter:blur(30px);color:#354263;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              ChatGPT on your desktop
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center text-gray-100 pointer-events-none select-none"
                          style="filter:blur(30px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              ChatGPT on your desktop
                            </span>
                          </div>
                        </div>
                        <div className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center">
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              ChatGPT on your desktop
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance pointer-events-none select-none"
                          style="filter:blur(45px);color:#354263;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>
                                Chat about email, screenshots, files, and
                                anything on your screen
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance text-gray-100 pointer-events-none select-none"
                          style="filter:blur(45px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>
                                Chat about email, screenshots, files, and
                                anything on your screen
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 leading-snug text-balance">
                          <div className="text-gray-0">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>
                                Chat about email, screenshots, files, and
                                anything on your screen
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-s w-full h-full [&amp;_img]:scale-100 group-hover:[&amp;_img]:scale-105 group-hover:[&amp;_video]:scale-105 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:ease-curve-d [&amp;_img]:duration-normal [&amp;_video]:transition-transform [&amp;_video]:ease-curve-d [&amp;_video]:duration-normal w-1/2 mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
                    data-caption-height="0"
                    data-caption-open="false"
                  >
                    <div
                      className="relative w-full h-full"
                      style="aspect-ratio:3/4"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-none aspect-3/4 bg-transparent transition-[background] ease-curve-d duration-normal">
                        <img
                          alt="Media > Mac App Card 1"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center"
                          style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                          sizes="(min-width: 68rem) 419px, 100vw"
                          srcset=""
                          src=""
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  aria-label="ChatGPT on your desktop"
                  className="transition ease-curve-a duration-250 bg-gray-200 mr-3 rounded relative block w-full m:w-unset max-w-full group z-0 overflow-hidden aspect-3/4 rounded-s w-full hidden m:block max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))]"
                  href="/chatgpt/mac/"
                >
                  <div className="p-3 absolute left-0 top-0 z-10 h-full w-full pointer-events-none overflow-hidden aspect-3/4 transition-[opacity,background] duration-normal ease-curve-d opacity-1">
                    <div className="p-r1 absolute inset-y-0 inset-x-0 w-full h-full flex flex-col z-20 justify-between pointer-events-none transition-opacity duration-normal ease-curve-d opacity-1 text-gray-0">
                      <div className="relative w-full h-full">
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center pointer-events-none select-none"
                          style="filter:blur(30px);color:#354263;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              ChatGPT on your desktop
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center text-gray-100 pointer-events-none select-none"
                          style="filter:blur(30px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              ChatGPT on your desktop
                            </span>
                          </div>
                        </div>
                        <div className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center">
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              ChatGPT on your desktop
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance pointer-events-none select-none"
                          style="filter:blur(45px);color:#354263;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>
                                Chat about email, screenshots, files, and
                                anything on your screen
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance text-gray-100 pointer-events-none select-none"
                          style="filter:blur(45px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>
                                Chat about email, screenshots, files, and
                                anything on your screen
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 leading-snug text-balance">
                          <div className="text-gray-0">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>
                                Chat about email, screenshots, files, and
                                anything on your screen
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-s w-full h-full [&amp;_img]:scale-100 group-hover:[&amp;_img]:scale-105 group-hover:[&amp;_video]:scale-105 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:ease-curve-d [&amp;_img]:duration-normal [&amp;_video]:transition-transform [&amp;_video]:ease-curve-d [&amp;_video]:duration-normal w-1/2 mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
                    data-caption-height="0"
                    data-caption-open="false"
                  >
                    <div
                      className="relative w-full h-full"
                      style="aspect-ratio:3/4"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-none aspect-3/4 bg-transparent transition-[background] ease-curve-d duration-normal">
                        <img
                          alt="Media > Mac App Card 1"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center"
                          style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                          sizes="(min-width: 68rem) 419px, 100vw"
                          srcset=""
                          src=""
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="snap-start max-m:w-[15rem] max-m:flex-none max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))] max-container:flex-unset max-container:basis-0 mr-3xs"
                style="aspect-ratio:3/4"
                data-slide-index="5"
              >
                <a
                  aria-label="New compliance and administrative tools for ChatGPT Enterprise"
                  className="transition ease-curve-a duration-250 bg-gray-200 mr-3 rounded relative block w-full m:w-unset max-w-full group z-0 overflow-hidden aspect-3/4 rounded-s w-full m:hidden max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))]"
                  href="/index/new-tools-for-chatgpt-enterprise/"
                >
                  <div className="p-3 absolute left-0 top-0 z-10 h-full w-full pointer-events-none overflow-hidden aspect-3/4 transition-[opacity,background] duration-normal ease-curve-d opacity-1">
                    <div className="p-r1 absolute inset-y-0 inset-x-0 w-full h-full flex flex-col z-20 justify-between pointer-events-none transition-opacity duration-normal ease-curve-d opacity-1 text-gray-0">
                      <div className="relative w-full h-full">
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center pointer-events-none select-none"
                          style="filter:blur(30px);color:#DA8CBF;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              Product
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center text-gray-100 pointer-events-none select-none"
                          style="filter:blur(30px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              Product
                            </span>
                          </div>
                        </div>
                        <div className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center">
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              Product
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance pointer-events-none select-none"
                          style="filter:blur(45px);color:#DA8CBF;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              New compliance and administrative tools for
                              ChatGPT Enterprise
                            </div>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance text-gray-100 pointer-events-none select-none"
                          style="filter:blur(45px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              New compliance and administrative tools for
                              ChatGPT Enterprise
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 leading-snug text-balance">
                          <div className="text-gray-0">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              New compliance and administrative tools for
                              ChatGPT Enterprise
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-s w-full h-full [&amp;_img]:scale-100 group-hover:[&amp;_img]:scale-105 group-hover:[&amp;_video]:scale-105 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:ease-curve-d [&amp;_img]:duration-normal [&amp;_video]:transition-transform [&amp;_video]:ease-curve-d [&amp;_video]:duration-normal w-1/2 mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
                    data-caption-height="0"
                    data-caption-open="false"
                  >
                    <div
                      className="relative w-full h-full"
                      style="aspect-ratio:3/4"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-none aspect-3/4 bg-transparent transition-[background] ease-curve-d duration-normal">
                        <img
                          alt="New tools for ChatGPT Enterprise > Cover Image"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center"
                          style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                          sizes="(min-width: 68rem) 419px, 100vw"
                          srcset=""
                          src=""
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  aria-label="New compliance and administrative tools for ChatGPT Enterprise"
                  className="transition ease-curve-a duration-250 bg-gray-200 mr-3 rounded relative block w-full m:w-unset max-w-full group z-0 overflow-hidden aspect-3/4 rounded-s w-full hidden m:block max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))]"
                  href="/index/new-tools-for-chatgpt-enterprise/"
                >
                  <div className="p-3 absolute left-0 top-0 z-10 h-full w-full pointer-events-none overflow-hidden aspect-3/4 transition-[opacity,background] duration-normal ease-curve-d opacity-1">
                    <div className="p-r1 absolute inset-y-0 inset-x-0 w-full h-full flex flex-col z-20 justify-between pointer-events-none transition-opacity duration-normal ease-curve-d opacity-1 text-gray-0">
                      <div className="relative w-full h-full">
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center pointer-events-none select-none"
                          style="filter:blur(30px);color:#DA8CBF;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              Product
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center text-gray-100 pointer-events-none select-none"
                          style="filter:blur(30px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              Product
                            </span>
                          </div>
                        </div>
                        <div className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center">
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              Product
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance pointer-events-none select-none"
                          style="filter:blur(45px);color:#DA8CBF;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              New compliance and administrative tools for
                              ChatGPT Enterprise
                            </div>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance text-gray-100 pointer-events-none select-none"
                          style="filter:blur(45px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              New compliance and administrative tools for
                              ChatGPT Enterprise
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 leading-snug text-balance">
                          <div className="text-gray-0">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              New compliance and administrative tools for
                              ChatGPT Enterprise
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-s w-full h-full [&amp;_img]:scale-100 group-hover:[&amp;_img]:scale-105 group-hover:[&amp;_video]:scale-105 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:ease-curve-d [&amp;_img]:duration-normal [&amp;_video]:transition-transform [&amp;_video]:ease-curve-d [&amp;_video]:duration-normal w-1/2 mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
                    data-caption-height="0"
                    data-caption-open="false"
                  >
                    <div
                      className="relative w-full h-full"
                      style="aspect-ratio:3/4"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-none aspect-3/4 bg-transparent transition-[background] ease-curve-d duration-normal">
                        <img
                          alt="New tools for ChatGPT Enterprise > Cover Image"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center"
                          style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                          sizes="(min-width: 68rem) 419px, 100vw"
                          srcset=""
                          src=""
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="snap-start max-m:w-[15rem] max-m:flex-none max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))] max-container:flex-unset max-container:basis-0 mr-3xs"
                style="aspect-ratio:3/4"
                data-slide-index="6"
              >
                <a
                  aria-label="ChatGPT Education"
                  className="transition ease-curve-a duration-250 bg-gray-200 mr-3 rounded relative block w-full m:w-unset max-w-full group z-0 overflow-hidden aspect-3/4 rounded-s m:hidden max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))]"
                  href="/chatgpt/education/"
                >
                  <div className="p-3 absolute left-0 top-0 z-10 h-full w-full pointer-events-none overflow-hidden aspect-3/4 transition-[opacity,background] duration-normal ease-curve-d opacity-1">
                    <div className="p-r1 absolute inset-y-0 inset-x-0 w-full h-full flex flex-col z-20 justify-between pointer-events-none transition-opacity duration-normal ease-curve-d opacity-1 text-gray-0">
                      <div className="relative w-full h-full">
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center pointer-events-none select-none"
                          style="filter:blur(30px);color:#354263;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              For Education
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center text-gray-100 pointer-events-none select-none"
                          style="filter:blur(30px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              For Education
                            </span>
                          </div>
                        </div>
                        <div className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center">
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              For Education
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance pointer-events-none select-none"
                          style="filter:blur(45px);color:#354263;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>Bring AI to campus at scale</p>
                            </div>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance text-gray-100 pointer-events-none select-none"
                          style="filter:blur(45px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>Bring AI to campus at scale</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 leading-snug text-balance">
                          <div className="text-gray-0">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>Bring AI to campus at scale</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-s w-full h-full [&amp;_img]:scale-100 group-hover:[&amp;_img]:scale-105 group-hover:[&amp;_video]:scale-105 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:ease-curve-d [&amp;_img]:duration-normal [&amp;_video]:transition-transform [&amp;_video]:ease-curve-d [&amp;_video]:duration-normal w-1/2 mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
                    data-caption-height="0"
                    data-caption-open="false"
                  >
                    <div
                      className="relative w-full h-full"
                      style="aspect-ratio:3/4"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-none aspect-3/4 bg-transparent transition-[background] ease-curve-d duration-normal">
                        <img
                          alt="An abstract expressionist painting of a desk and chair near a window in a warm color palette."
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center"
                          style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                          sizes="(min-width: 68rem) 419px, 100vw"
                          srcset=""
                          src=""
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  aria-label="ChatGPT Education"
                  className="transition ease-curve-a duration-250 bg-gray-200 mr-3 rounded relative block w-full m:w-unset max-w-full group z-0 overflow-hidden aspect-3/4 rounded-s w-full hidden m:block max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))]"
                  href="/chatgpt/education/"
                >
                  <div className="p-3 absolute left-0 top-0 z-10 h-full w-full pointer-events-none overflow-hidden aspect-3/4 transition-[opacity,background] duration-normal ease-curve-d opacity-1">
                    <div className="p-r1 absolute inset-y-0 inset-x-0 w-full h-full flex flex-col z-20 justify-between pointer-events-none transition-opacity duration-normal ease-curve-d opacity-1 text-gray-0">
                      <div className="relative w-full h-full">
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center pointer-events-none select-none"
                          style="filter:blur(30px);color:#354263;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              For Education
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center text-gray-100 pointer-events-none select-none"
                          style="filter:blur(30px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              For Education
                            </span>
                          </div>
                        </div>
                        <div className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center">
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              For Education
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance pointer-events-none select-none"
                          style="filter:blur(45px);color:#354263;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>Bring AI to campus at scale</p>
                            </div>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance text-gray-100 pointer-events-none select-none"
                          style="filter:blur(45px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>Bring AI to campus at scale</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 leading-snug text-balance">
                          <div className="text-gray-0">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>Bring AI to campus at scale</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-s w-full h-full [&amp;_img]:scale-100 group-hover:[&amp;_img]:scale-105 group-hover:[&amp;_video]:scale-105 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:ease-curve-d [&amp;_img]:duration-normal [&amp;_video]:transition-transform [&amp;_video]:ease-curve-d [&amp;_video]:duration-normal w-1/2 mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
                    data-caption-height="0"
                    data-caption-open="false"
                  >
                    <div
                      className="relative w-full h-full"
                      style="aspect-ratio:3/4"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-none aspect-3/4 bg-transparent transition-[background] ease-curve-d duration-normal">
                        <img
                          alt="An abstract expressionist painting of a desk and chair near a window in a warm color palette."
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center"
                          style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                          sizes="(min-width: 68rem) 419px, 100vw"
                          srcset=""
                          src=""
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="snap-start max-m:w-[15rem] max-m:flex-none max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))] max-container:flex-unset max-container:basis-0 mr-3xs"
                style="aspect-ratio:3/4"
                data-slide-index="7"
              >
                <a
                  aria-label="Improvements to data analysis in ChatGPT"
                  className="transition ease-curve-a duration-250 bg-gray-200 mr-3 rounded relative block w-full m:w-unset max-w-full group z-0 overflow-hidden aspect-3/4 rounded-s w-full m:hidden max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))]"
                  href="/index/improvements-to-data-analysis-in-chatgpt/"
                >
                  <div className="p-3 absolute left-0 top-0 z-10 h-full w-full pointer-events-none overflow-hidden aspect-3/4 transition-[opacity,background] duration-normal ease-curve-d opacity-1">
                    <div className="p-r1 absolute inset-y-0 inset-x-0 w-full h-full flex flex-col z-20 justify-between pointer-events-none transition-opacity duration-normal ease-curve-d opacity-1 text-gray-0">
                      <div className="relative w-full h-full">
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center pointer-events-none select-none"
                          style="filter:blur(30px);color:#000000;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              Product
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center text-gray-100 pointer-events-none select-none"
                          style="filter:blur(30px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              Product
                            </span>
                          </div>
                        </div>
                        <div className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center">
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              Product
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance pointer-events-none select-none"
                          style="filter:blur(45px);color:#000000;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>Improvements to data analysis in ChatGPT</p>
                            </div>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance text-gray-100 pointer-events-none select-none"
                          style="filter:blur(45px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>Improvements to data analysis in ChatGPT</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 leading-snug text-balance">
                          <div className="text-gray-0">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>Improvements to data analysis in ChatGPT</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-s w-full h-full [&amp;_img]:scale-100 group-hover:[&amp;_img]:scale-105 group-hover:[&amp;_video]:scale-105 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:ease-curve-d [&amp;_img]:duration-normal [&amp;_video]:transition-transform [&amp;_video]:ease-curve-d [&amp;_video]:duration-normal w-1/2 mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
                    data-caption-height="0"
                    data-caption-open="false"
                  >
                    <div
                      className="relative w-full h-full"
                      style="aspect-ratio:3/4"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-none aspect-3/4 bg-transparent transition-[background] ease-curve-d duration-normal">
                        <img
                          alt="ChatGPT Charts Blog Hero"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center"
                          style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                          sizes="(min-width: 68rem) 419px, 100vw"
                          srcset=""
                          src=""
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  aria-label="Improvements to data analysis in ChatGPT"
                  className="transition ease-curve-a duration-250 bg-gray-200 mr-3 rounded relative block w-full m:w-unset max-w-full group z-0 overflow-hidden aspect-3/4 rounded-s w-full hidden m:block max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))]"
                  href="/index/improvements-to-data-analysis-in-chatgpt/"
                >
                  <div className="p-3 absolute left-0 top-0 z-10 h-full w-full pointer-events-none overflow-hidden aspect-3/4 transition-[opacity,background] duration-normal ease-curve-d opacity-1">
                    <div className="p-r1 absolute inset-y-0 inset-x-0 w-full h-full flex flex-col z-20 justify-between pointer-events-none transition-opacity duration-normal ease-curve-d opacity-1 text-gray-0">
                      <div className="relative w-full h-full">
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center pointer-events-none select-none"
                          style="filter:blur(30px);color:#000000;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              Product
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center text-gray-100 pointer-events-none select-none"
                          style="filter:blur(30px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              Product
                            </span>
                          </div>
                        </div>
                        <div className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center">
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              Product
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance pointer-events-none select-none"
                          style="filter:blur(45px);color:#000000;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>Improvements to data analysis in ChatGPT</p>
                            </div>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance text-gray-100 pointer-events-none select-none"
                          style="filter:blur(45px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>Improvements to data analysis in ChatGPT</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 leading-snug text-balance">
                          <div className="text-gray-0">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>Improvements to data analysis in ChatGPT</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-s w-full h-full [&amp;_img]:scale-100 group-hover:[&amp;_img]:scale-105 group-hover:[&amp;_video]:scale-105 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:ease-curve-d [&amp;_img]:duration-normal [&amp;_video]:transition-transform [&amp;_video]:ease-curve-d [&amp;_video]:duration-normal w-1/2 mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
                    data-caption-height="0"
                    data-caption-open="false"
                  >
                    <div
                      className="relative w-full h-full"
                      style="aspect-ratio:3/4"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-none aspect-3/4 bg-transparent transition-[background] ease-curve-d duration-normal">
                        <img
                          alt="ChatGPT Charts Blog Hero"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center"
                          style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                          sizes="(min-width: 68rem) 419px, 100vw"
                          srcset=""
                          src=""
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="snap-start max-m:w-[15rem] max-m:flex-none max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))] max-container:flex-unset max-container:basis-0 mr-3xs"
                style="aspect-ratio:3/4"
                data-slide-index="8"
              >
                <a
                  aria-label="ChatGPT can now see, hear, and speak"
                  className="transition ease-curve-a duration-250 bg-gray-200 mr-3 rounded relative block w-full m:w-unset max-w-full group z-0 overflow-hidden aspect-3/4 rounded-s w-full m:hidden max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))]"
                  href="/index/chatgpt-can-now-see-hear-and-speak/"
                >
                  <div className="p-3 absolute left-0 top-0 z-10 h-full w-full pointer-events-none overflow-hidden aspect-3/4 transition-[opacity,background] duration-normal ease-curve-d opacity-1">
                    <div className="p-r1 absolute inset-y-0 inset-x-0 w-full h-full flex flex-col z-20 justify-between pointer-events-none transition-opacity duration-normal ease-curve-d opacity-1 text-gray-100">
                      <div className="relative w-full h-full">
                        <div className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center">
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              News
                            </span>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 leading-snug text-balance">
                          <div className="text-gray-100">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>ChatGPT can now see, hear, and speak</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-s w-full h-full [&amp;_img]:scale-100 group-hover:[&amp;_img]:scale-105 group-hover:[&amp;_video]:scale-105 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:ease-curve-d [&amp;_img]:duration-normal [&amp;_video]:transition-transform [&amp;_video]:ease-curve-d [&amp;_video]:duration-normal w-1/2 mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
                    data-caption-height="0"
                    data-caption-open="false"
                  >
                    <div
                      className="relative w-full h-full"
                      style="aspect-ratio:3/4"
                    >
                      <div
                        tabindex="0"
                        className="relative rounded-s flex w-full overflow-hidden h-full group outline-none aspect-3/4"
                      >
                        <video
                          playsinline=""
                          muted=""
                          autoplay=""
                          loop=""
                          className="aspect-3/4 m:aspect-3/4 l:aspect-3/4 min-w-full :min-h-full absolute left-0 top-0 w-full h-full object-cover"
                        >
                          <source
                            src="https://cdn.openai.com/chatgpt/Comp_1_1.mp4"
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  aria-label="ChatGPT can now see, hear, and speak"
                  className="transition ease-curve-a duration-250 bg-gray-200 mr-3 rounded relative block w-full m:w-unset max-w-full group z-0 overflow-hidden aspect-3/4 rounded-s w-full hidden m:block max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))]"
                  href="/index/chatgpt-can-now-see-hear-and-speak/"
                >
                  <div className="p-3 absolute left-0 top-0 z-10 h-full w-full pointer-events-none overflow-hidden aspect-3/4 transition-[opacity,background] duration-normal ease-curve-d opacity-1">
                    <div className="p-r1 absolute inset-y-0 inset-x-0 w-full h-full flex flex-col z-20 justify-between pointer-events-none transition-opacity duration-normal ease-curve-d opacity-1 text-gray-100">
                      <div className="relative w-full h-full">
                        <div className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center">
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              News
                            </span>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 leading-snug text-balance">
                          <div className="text-gray-100">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>ChatGPT can now see, hear, and speak</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-s w-full h-full [&amp;_img]:scale-100 group-hover:[&amp;_img]:scale-105 group-hover:[&amp;_video]:scale-105 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:ease-curve-d [&amp;_img]:duration-normal [&amp;_video]:transition-transform [&amp;_video]:ease-curve-d [&amp;_video]:duration-normal w-1/2 mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
                    data-caption-height="0"
                    data-caption-open="false"
                  >
                    <div
                      className="relative w-full h-full"
                      style="aspect-ratio:3/4"
                    >
                      <div
                        tabindex="0"
                        className="relative rounded-s flex w-full overflow-hidden h-full group outline-none aspect-3/4"
                      >
                        <video
                          playsinline=""
                          muted=""
                          autoplay=""
                          loop=""
                          className="aspect-3/4 m:aspect-3/4 l:aspect-3/4 min-w-full :min-h-full absolute left-0 top-0 w-full h-full object-cover"
                        >
                          <source src="" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="snap-start max-m:w-[15rem] max-m:flex-none max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))] max-container:flex-unset max-container:basis-0"
                style="aspect-ratio:3/4"
                data-slide-index="9"
              >
                <a
                  aria-label="Introducing the GPT Store"
                  className="transition ease-curve-a duration-250 bg-gray-200 mr-3 rounded relative block w-full m:w-unset max-w-full group z-0 overflow-hidden aspect-3/4 rounded-s w-full m:hidden max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))]"
                  href="/index/introducing-the-gpt-store/"
                >
                  <div className="p-3 absolute left-0 top-0 z-10 h-full w-full pointer-events-none overflow-hidden aspect-3/4 transition-[opacity,background] duration-normal ease-curve-d opacity-0">
                    <div className="p-r1 absolute inset-y-0 inset-x-0 w-full h-full flex flex-col z-20 justify-between pointer-events-none transition-opacity duration-normal ease-curve-d opacity-0 text-gray-0">
                      <div className="relative w-full h-full">
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center pointer-events-none select-none"
                          style="filter:blur(30px);color:#5290B3;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              News
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center text-gray-100 pointer-events-none select-none"
                          style="filter:blur(30px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              News
                            </span>
                          </div>
                        </div>
                        <div className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center">
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              News
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance pointer-events-none select-none"
                          style="filter:blur(45px);color:#5290B3;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>Introducing the GPT Store</p>
                            </div>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance text-gray-100 pointer-events-none select-none"
                          style="filter:blur(45px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>Introducing the GPT Store</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 leading-snug text-balance">
                          <div className="text-gray-0">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>Introducing the GPT Store</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-s w-full h-full [&amp;_img]:scale-100 group-hover:[&amp;_img]:scale-105 group-hover:[&amp;_video]:scale-105 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:ease-curve-d [&amp;_img]:duration-normal [&amp;_video]:transition-transform [&amp;_video]:ease-curve-d [&amp;_video]:duration-normal w-1/2 mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
                    data-caption-height="0"
                    data-caption-open="false"
                  >
                    <div
                      className="relative w-full h-full"
                      style="aspect-ratio:3/4"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-none aspect-3/4 bg-surface-loading">
                        <img
                          alt="introducing the gpt store"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center"
                          style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                          sizes="(min-width: 68rem) 419px, 100vw"
                          srcset=""
                          src=""
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  aria-label="Introducing the GPT Store"
                  className="transition ease-curve-a duration-250 bg-gray-200 mr-3 rounded relative block w-full m:w-unset max-w-full group z-0 overflow-hidden aspect-3/4 rounded-s w-full hidden m:block max-m:h-auto container:h-[29.471875rem] max-container:h-[calc((((var(--document-width)-2.5rem-(0.84375rem*2))*4/3)/3))]"
                  href="/index/introducing-the-gpt-store/"
                >
                  <div className="p-3 absolute left-0 top-0 z-10 h-full w-full pointer-events-none overflow-hidden aspect-3/4 transition-[opacity,background] duration-normal ease-curve-d opacity-0">
                    <div className="p-r1 absolute inset-y-0 inset-x-0 w-full h-full flex flex-col z-20 justify-between pointer-events-none transition-opacity duration-normal ease-curve-d opacity-0 text-gray-0">
                      <div className="relative w-full h-full">
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center pointer-events-none select-none"
                          style="filter:blur(30px);color:#5290B3;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              News
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center text-gray-100 pointer-events-none select-none"
                          style="filter:blur(30px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              News
                            </span>
                          </div>
                        </div>
                        <div className="w-full absolute top-0 left-0 text-xs flex flex-wrap items-center">
                          <div className="break-none truncate">
                            <span className="text-small block leading-[1.3]">
                              News
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance pointer-events-none select-none"
                          style="filter:blur(45px);color:#5290B3;-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>Introducing the GPT Store</p>
                            </div>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 leading-snug text-balance text-gray-100 pointer-events-none select-none"
                          style="filter:blur(45px);-webkit-text-stroke:2px currentColor"
                        >
                          <div className="">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>Introducing the GPT Store</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 leading-snug text-balance">
                          <div className="text-gray-0">
                            <div className="line-clamp-4 text-p1 leading-[1.3] mt-2xs m:mt-xs text-balance items-start">
                              <p>Introducing the GPT Store</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-s w-full h-full [&amp;_img]:scale-100 group-hover:[&amp;_img]:scale-105 group-hover:[&amp;_video]:scale-105 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:ease-curve-d [&amp;_img]:duration-normal [&amp;_video]:transition-transform [&amp;_video]:ease-curve-d [&amp;_video]:duration-normal w-1/2 mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
                    data-caption-height="0"
                    data-caption-open="false"
                  >
                    <div
                      className="relative w-full h-full"
                      style="aspect-ratio:3/4"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-none aspect-3/4 bg-surface-loading">
                        <img
                          alt="introducing the gpt store"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center"
                          style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                          sizes="(min-width: 68rem) 419px, 100vw"
                          srcset=""
                          src=""
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="shrink-0 w-[var(--gutter-size)]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default trial;
