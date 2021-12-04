<template>
  <section>
    <div class="container">
      <div class="">
        <div class="elementor-posts">
          <h2 class="title-posts">
            Latest Updated
          </h2>
          <div class="bottom-title"></div>
        </div>
        <div class="content-items dish">
          <slick
            ref="slick"
            :options="v2slickOptions"
            class="content-blog-items slick-blog-slider-3 items-3"
          >
            <div class="item-content">
              <div class="image-post">
                <a href="/">
                  <img
                    width="650"
                    height="450"
                    src="~/assets/images/blog-5.jpeg"
                    class=""
                    alt="image-31"
                /></a>
                <div class="icon-right">
                  <div class="icon-1"></div>
                  <div class="icon-2"></div>
                </div>
              </div>
              <div class="post-caption">
                <div class="post-meta">
                  <span class="posted-on"
                    ><svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="calendar-week"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="svg-inline--fa fa-calendar-week fa-w-14 fa-2x ic"
                    >
                      <path
                        fill="currentColor"
                        d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                        class=""
                      ></path></svg
                    ><a href="/" rel="bookmark" tabindex="0"
                      ><time
                        class="entry-date published"
                        datetime="2021-04-06T02:46:43+00:00"
                        >April 6, 2021</time
                      ></a
                    ></span
                  >
                  <span class="post-author">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="user"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="svg-inline--fa fa-user fa-w-14 fa-2x ic"
                    >
                      <path
                        fill="currentColor"
                        d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                        class=""
                      ></path>
                    </svg>
                    <a href="/" rel="author" tabindex="0">
                      <span class="vcard author author_name">
                        <span class="fn">admin</span>
                      </span>
                    </a>
                  </span>
                  <span class="meta-comment">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="comment-dots"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      class="svg-inline--fa fa-comment-dots fa-w-16 fa-2x ic"
                      style="width: 15px"
                    >
                      <path
                        fill="currentColor"
                        d="M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"
                        class=""
                      ></path>
                    </svg>
                    <a class="comment-link" href="/" tabindex="0">3</a>
                  </span>
                </div>
                <h3 class="entry-title">
                  <a href="/" tabindex="0"
                    >Good nutrition and good your healthy</a
                  >
                </h3>
              </div>
            </div>
            <div class="item-content">
              <div class="image-post">
                <a href="/">
                  <img
                    width="650"
                    height="450"
                    src="~/assets/images/blog-1.jpeg"
                    class=""
                    alt="image-31"
                /></a>
                <div class="icon-right">
                  <div class="icon-1"></div>
                  <div class="icon-2"></div>
                </div>
              </div>
              <div class="post-caption">
                <div class="post-meta">
                  <span class="posted-on"
                    ><svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="calendar-week"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="svg-inline--fa fa-calendar-week fa-w-14 fa-2x ic"
                    >
                      <path
                        fill="currentColor"
                        d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                        class=""
                      ></path></svg
                    ><a href="/" rel="bookmark" tabindex="0"
                      ><time
                        class="entry-date published"
                        datetime="2021-04-06T02:46:43+00:00"
                        >April 6, 2021</time
                      ></a
                    ></span
                  >
                  <span class="post-author">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="user"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="svg-inline--fa fa-user fa-w-14 fa-2x ic"
                    >
                      <path
                        fill="currentColor"
                        d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                        class=""
                      ></path>
                    </svg>
                    <a href="/" rel="author" tabindex="0">
                      <span class="vcard author author_name">
                        <span class="fn">admin</span>
                      </span>
                    </a>
                  </span>
                  <span class="meta-comment">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="comment-dots"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      class="svg-inline--fa fa-comment-dots fa-w-16 fa-2x ic"
                      style="width: 15px"
                    >
                      <path
                        fill="currentColor"
                        d="M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"
                        class=""
                      ></path>
                    </svg>
                    <a class="comment-link" href="/" tabindex="0">3</a>
                  </span>
                </div>
                <h3 class="entry-title">
                  <a href="/" tabindex="0"
                    >Nutritional value from Strawberries</a
                  >
                </h3>
              </div>
            </div>
            <div class="item-content">
              <div class="image-post">
                <a href="/">
                  <img
                    width="650"
                    height="450"
                    src="~/assets/images/blog-3.jpeg"
                    class=""
                    alt="image-31"
                /></a>
                <div class="icon-right">
                  <div class="icon-1"></div>
                  <div class="icon-2"></div>
                </div>
              </div>
              <div class="post-caption">
                <div class="post-meta">
                  <span class="posted-on"
                    ><svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="calendar-week"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="svg-inline--fa fa-calendar-week fa-w-14 fa-2x ic"
                    >
                      <path
                        fill="currentColor"
                        d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                        class=""
                      ></path></svg
                    ><a href="/" rel="bookmark" tabindex="0"
                      ><time
                        class="entry-date published"
                        datetime="2021-04-06T02:46:43+00:00"
                        >April 6, 2021</time
                      ></a
                    ></span
                  >
                  <span class="post-author">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="user"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="svg-inline--fa fa-user fa-w-14 fa-2x ic"
                    >
                      <path
                        fill="currentColor"
                        d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                        class=""
                      ></path>
                    </svg>
                    <a href="/" rel="author" tabindex="0">
                      <span class="vcard author author_name">
                        <span class="fn">admin</span>
                      </span>
                    </a>
                  </span>
                  <span class="meta-comment">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="comment-dots"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      class="svg-inline--fa fa-comment-dots fa-w-16 fa-2x ic"
                      style="width: 15px"
                    >
                      <path
                        fill="currentColor"
                        d="M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"
                        class=""
                      ></path>
                    </svg>
                    <a class="comment-link" href="/" tabindex="0">3</a>
                  </span>
                </div>
                <h3 class="entry-title">
                  <a href="/" tabindex="0">Healthy living in body and mind</a>
                </h3>
              </div>
            </div>
            <div class="item-content">
              <div class="image-post">
                <a href="/">
                  <img
                    width="650"
                    height="450"
                    src="~/assets/images/blog-6.jpeg"
                    class=""
                    alt="image-31"
                /></a>
                <div class="icon-right">
                  <div class="icon-1"></div>
                  <div class="icon-2"></div>
                </div>
              </div>
              <div class="post-caption">
                <div class="post-meta">
                  <span class="posted-on"
                    ><svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="calendar-week"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="svg-inline--fa fa-calendar-week fa-w-14 fa-2x ic"
                    >
                      <path
                        fill="currentColor"
                        d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                        class=""
                      ></path></svg
                    ><a href="/" rel="bookmark" tabindex="0"
                      ><time
                        class="entry-date published"
                        datetime="2021-04-06T02:46:43+00:00"
                        >April 6, 2021</time
                      ></a
                    ></span
                  >
                  <span class="post-author">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="user"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="svg-inline--fa fa-user fa-w-14 fa-2x ic"
                    >
                      <path
                        fill="currentColor"
                        d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                        class=""
                      ></path>
                    </svg>
                    <a href="/" rel="author" tabindex="0">
                      <span class="vcard author author_name">
                        <span class="fn">admin</span>
                      </span>
                    </a>
                  </span>
                  <span class="meta-comment">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="comment-dots"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      class="svg-inline--fa fa-comment-dots fa-w-16 fa-2x ic"
                      style="width: 15px"
                    >
                      <path
                        fill="currentColor"
                        d="M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"
                        class=""
                      ></path>
                    </svg>
                    <a class="comment-link" href="/" tabindex="0">3</a>
                  </span>
                </div>
                <h3 class="entry-title">
                  <a href="/" tabindex="0">Overhead of various citrus fruits</a>
                </h3>
              </div>
            </div>
            <div class="item-content">
              <div class="image-post">
                <a href="/">
                  <img
                    width="650"
                    height="450"
                    src="~/assets/images/blog-4.jpeg"
                    class=""
                    alt="image-31"
                /></a>
                <div class="icon-right">
                  <div class="icon-1"></div>
                  <div class="icon-2"></div>
                </div>
              </div>
              <div class="post-caption">
                <div class="post-meta">
                  <span class="posted-on"
                    ><svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="calendar-week"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="svg-inline--fa fa-calendar-week fa-w-14 fa-2x ic"
                    >
                      <path
                        fill="currentColor"
                        d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                        class=""
                      ></path></svg
                    ><a href="/" rel="bookmark" tabindex="0"
                      ><time
                        class="entry-date published"
                        datetime="2021-04-06T02:46:43+00:00"
                        >April 6, 2021</time
                      ></a
                    ></span
                  >
                  <span class="post-author">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="user"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="svg-inline--fa fa-user fa-w-14 fa-2x ic"
                    >
                      <path
                        fill="currentColor"
                        d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                        class=""
                      ></path>
                    </svg>
                    <a href="/" rel="author" tabindex="0">
                      <span class="vcard author author_name">
                        <span class="fn">admin</span>
                      </span>
                    </a>
                  </span>
                  <span class="meta-comment">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="comment-dots"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      class="svg-inline--fa fa-comment-dots fa-w-16 fa-2x ic"
                      style="width: 15px"
                    >
                      <path
                        fill="currentColor"
                        d="M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"
                        class=""
                      ></path>
                    </svg>
                    <a class="comment-link" href="/" tabindex="0">3</a>
                  </span>
                </div>
                <h3 class="entry-title">
                  <a href="/" tabindex="0">Overhead of various citrus fruits</a>
                </h3>
              </div>
            </div>
            <div class="item-content">
              <div class="image-post">
                <a href="/">
                  <img
                    width="650"
                    height="450"
                    src="~/assets/images/blog-2.jpeg"
                    class=""
                    alt="image-31"
                /></a>
                <div class="icon-right">
                  <div class="icon-1"></div>
                  <div class="icon-2"></div>
                </div>
              </div>
              <div class="post-caption">
                <div class="post-meta">
                  <span class="posted-on"
                    ><svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="calendar-week"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="svg-inline--fa fa-calendar-week fa-w-14 fa-2x ic"
                    >
                      <path
                        fill="currentColor"
                        d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                        class=""
                      ></path></svg
                    ><a href="/" rel="bookmark" tabindex="0"
                      ><time
                        class="entry-date published"
                        datetime="2021-04-06T02:46:43+00:00"
                        >April 6, 2021</time
                      ></a
                    ></span
                  >
                  <span class="post-author">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="user"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="svg-inline--fa fa-user fa-w-14 fa-2x ic"
                    >
                      <path
                        fill="currentColor"
                        d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                        class=""
                      ></path>
                    </svg>
                    <a href="/" rel="author" tabindex="0">
                      <span class="vcard author author_name">
                        <span class="fn">admin</span>
                      </span>
                    </a>
                  </span>
                  <span class="meta-comment">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="comment-dots"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      class="svg-inline--fa fa-comment-dots fa-w-16 fa-2x ic"
                      style="width: 15px"
                    >
                      <path
                        fill="currentColor"
                        d="M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"
                        class=""
                      ></path>
                    </svg>
                    <a class="comment-link" href="/" tabindex="0">3</a>
                  </span>
                </div>
                <h3 class="entry-title">
                  <a href="/" tabindex="0"
                    >Sweet orange yellow from Australia</a
                  >
                </h3>
              </div>
            </div>
          </slick>
        </div>
      </div>
      <div class="text-center">
        <div class="center-cirlce">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Slick from 'vue-slick'

export default {
  data() {
    return {
      v2slickOptions: {
        dots: false,
        infinite: true,
        // speed: 300,
        slidesToShow: 4,
        // centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
      },
      items3: [
        { name: 'a' },
        { name: 'b' },
        { name: 'b' },
        { name: 'b' },
        { name: 'b' },
      ],
    }
  },
  mounted() {},
  components: {
    slick: Slick,
  },
}
</script>
