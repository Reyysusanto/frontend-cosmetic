export const BrowsePage = () => {
    return (
        <main className="mx-auto flex min-h-screen max-w-[640px] flex-col gap-5 bg-white pb-[141px]">
            <section id="Info">
                <div className="mt-5 flex items-center justify-between px-5">
                <div className="language flex h-[32px] items-center gap-[10px]">
                    <button type="button" className="indo flex items-center gap-[6px]">
                    <img
                        src="/images/icons/id.svg"
                        alt="icon"
                        className="h-[15px] w-5 shrink-0"
                    />
                    <p className="text-xs font-semibold leading-[18px]">ID</p>
                    </button>
                    <span className="block h-full w-px bg-cosmetics-greylight" />
                    <button type="button" className="jpn flex items-center gap-[6px]">
                    <img
                        src="/images/icons/jp.svg"
                        alt="icon"
                        className="h-[15px] w-5 shrink-0"
                    />
                    <p className="text-xs font-semibold leading-[18px]">JP</p>
                    </button>
                </div>
                <div className="flex items-center gap-[6px]">
                    <img
                    src="/images/icons/telp.svg"
                    alt="icon"
                    className="size-5 shrink-0"
                    />
                    <strong className="text-xs font-semibold leading-[18px]">
                    62821202019213
                    </strong>
                </div>
                </div>
            </section>
            <section id="Company">
                <div className="flex justify-between px-5">
                <a href="">
                    <img
                    src="/images/logos/shayna.svg"
                    alt="icon"
                    className="h-[48px] w-[113px] shrink-0"
                    />
                </a>
                <div className="flex items-center gap-[10px]">
                    <a
                    href=""
                    className="flex size-[44px] items-center justify-center rounded-full bg-cosmetics-greylight p-px transition-all duration-300 hover:bg-cosmetics-gradient-purple-pink hover:p-[2px]"
                    >
                    <div className="flex h-full w-full shrink-0 items-center justify-center rounded-full bg-white">
                        <img
                        src="/images/icons/search.svg"
                        alt="icon"
                        className="size-5 shrink-0"
                        />
                    </div>
                    </a>
                    <a
                    href="my-cart.html"
                    className="flex size-[44px] items-center justify-center rounded-full bg-cosmetics-greylight p-px transition-all duration-300 hover:bg-cosmetics-gradient-purple-pink hover:p-[2px]"
                    >
                    <div className="flex h-full w-full shrink-0 items-center justify-center rounded-full bg-white">
                        <img
                        src="/images/icons/cart.svg"
                        alt="icon"
                        className="size-5 shrink-0"
                        />
                    </div>
                    </a>
                </div>
                </div>
            </section>
            <section id="Hero">
                <div id="HeroSlider" className="swiper w-full overflow-x-hidden">
                <div className="swiper-wrapper">
                    <div className="swiper-slide !w-fit">
                    <a href="">
                        <div className="flex h-[190px] w-[320px] items-center justify-center overflow-hidden rounded-3xl">
                        <img
                            src="/images/thumbnails/girls-day.png"
                            alt="image"
                            className="h-full w-full object-cover"
                        />
                        </div>
                    </a>
                    </div>
                    <div className="swiper-slide !w-fit">
                    <a href="">
                        <div className="flex h-[190px] w-[320px] items-center justify-center overflow-hidden rounded-3xl">
                        <img
                            src="/images/thumbnails/beuty-tips.png"
                            alt="image"
                            className="h-full w-full object-cover"
                        />
                        </div>
                    </a>
                    </div>
                    <div className="swiper-slide !w-fit">
                    <a href="">
                        <div className="flex h-[190px] w-[320px] items-center justify-center overflow-hidden rounded-3xl">
                        <img
                            src="/images/thumbnails/discount-for.png"
                            alt="image"
                            className="h-full w-full object-cover"
                        />
                        </div>
                    </a>
                    </div>
                </div>
                </div>
            </section>
            <section id="TopCategories">
                <div className="flex flex-col gap-4 px-5">
                <h2 className="font-bold">Top Categories</h2>
                <div className="categories-cards grid grid-cols-3 gap-4">
                    <a href="category.html">
                    <div className="flex h-[142px] items-center justify-center rounded-3xl bg-cosmetics-greylight p-px transition-all duration-300 hover:bg-cosmetics-gradient-purple-pink hover:p-[2px]">
                        <div className="flex h-full w-full flex-col justify-center rounded-[23px] bg-white px-[10px] hover:rounded-[22px]">
                        <div className="mx-auto mb-[10px] flex size-[60px] items-center justify-center overflow-hidden rounded-full">
                            <img
                            src="/images/thumbnails/serum.png"
                            alt="image"
                            className="h-full w-full object-cover"
                            />
                        </div>
                        <h3 className="mb-[2px] text-center text-sm font-semibold leading-[21px]">
                            Serum
                        </h3>
                        <p className="text-center text-sm leading-[21px] text-cosmetics-grey">
                            18,398
                        </p>
                        </div>
                    </div>
                    </a>
                    <a href="category.html">
                    <div className="flex h-[142px] items-center justify-center rounded-3xl bg-cosmetics-greylight p-px transition-all duration-300 hover:bg-cosmetics-gradient-purple-pink hover:p-[2px]">
                        <div className="flex h-full w-full flex-col justify-center rounded-[23px] bg-white px-[10px] hover:rounded-[22px]">
                        <div className="mx-auto mb-[10px] flex size-[60px] items-center justify-center overflow-hidden rounded-full">
                            <img
                            src="/images/thumbnails/mascaras.png"
                            alt="image"
                            className="h-full w-full object-cover"
                            />
                        </div>
                        <h3 className="mb-[2px] text-center text-sm font-semibold leading-[21px]">
                            Mascaras
                        </h3>
                        <p className="text-center text-sm leading-[21px] text-cosmetics-grey">
                            18,398
                        </p>
                        </div>
                    </div>
                    </a>
                    <a href="category.html">
                    <div className="flex h-[142px] items-center justify-center rounded-3xl bg-cosmetics-greylight p-px transition-all duration-300 hover:bg-cosmetics-gradient-purple-pink hover:p-[2px]">
                        <div className="flex h-full w-full flex-col justify-center rounded-[23px] bg-white px-[10px] hover:rounded-[22px]">
                        <div className="mx-auto mb-[10px] flex size-[60px] items-center justify-center overflow-hidden rounded-full">
                            <img
                            src="/images/thumbnails/lipsticks.png"
                            alt="image"
                            className="h-full w-full object-cover"
                            />
                        </div>
                        <h3 className="mb-[2px] text-center text-sm font-semibold leading-[21px]">
                            Lipsticks
                        </h3>
                        <p className="text-center text-sm leading-[21px] text-cosmetics-grey">
                            18,398
                        </p>
                        </div>
                    </div>
                    </a>
                    <a href="category.html">
                    <div className="flex h-[142px] items-center justify-center rounded-3xl bg-cosmetics-greylight p-px transition-all duration-300 hover:bg-cosmetics-gradient-purple-pink hover:p-[2px]">
                        <div className="flex h-full w-full flex-col justify-center rounded-[23px] bg-white px-[10px] hover:rounded-[22px]">
                        <div className="mx-auto mb-[10px] flex size-[60px] items-center justify-center overflow-hidden rounded-full">
                            <img
                            src="/images/thumbnails/brushes.png"
                            alt="image"
                            className="h-full w-full object-cover"
                            />
                        </div>
                        <h3 className="mb-[2px] text-center text-sm font-semibold leading-[21px]">
                            Brushes
                        </h3>
                        <p className="text-center text-sm leading-[21px] text-cosmetics-grey">
                            18,398
                        </p>
                        </div>
                    </div>
                    </a>
                    <a href="category.html">
                    <div className="flex h-[142px] items-center justify-center rounded-3xl bg-cosmetics-greylight p-px transition-all duration-300 hover:bg-cosmetics-gradient-purple-pink hover:p-[2px]">
                        <div className="flex h-full w-full flex-col justify-center rounded-[23px] bg-white px-[10px] hover:rounded-[22px]">
                        <div className="mx-auto mb-[10px] flex size-[60px] items-center justify-center overflow-hidden rounded-full">
                            <img
                            src="/images/thumbnails/face-mask.png"
                            alt="image"
                            className="h-full w-full object-cover"
                            />
                        </div>
                        <h3 className="mb-[2px] text-center text-sm font-semibold leading-[21px]">
                            Face Mask
                        </h3>
                        <p className="text-center text-sm leading-[21px] text-cosmetics-grey">
                            18,398
                        </p>
                        </div>
                    </div>
                    </a>
                    <a href="category.html">
                    <div className="flex h-[142px] items-center justify-center rounded-3xl bg-cosmetics-greylight p-px transition-all duration-300 hover:bg-cosmetics-gradient-purple-pink hover:p-[2px]">
                        <div className="flex h-full w-full flex-col justify-center rounded-[23px] bg-white px-[10px] hover:rounded-[22px]">
                        <div className="mx-auto mb-[10px] flex size-[60px] items-center justify-center overflow-hidden rounded-full">
                            <img
                            src="/images/thumbnails/foundation.png"
                            alt="image"
                            className="h-full w-full object-cover"
                            />
                        </div>
                        <h3 className="mb-[2px] text-center text-sm font-semibold leading-[21px]">
                            Foundation
                        </h3>
                        <p className="text-center text-sm leading-[21px] text-cosmetics-grey">
                            18,398
                        </p>
                        </div>
                    </div>
                    </a>
                </div>
                </div>
            </section>
            <section id="PopularChoices">
                <div className="flex flex-col gap-4 bg-[#F6F6F8] pb-[30px] pt-5">
                <h2 className="px-5 font-bold">Popular Choices</h2>
                <div
                    id="PopularChoicesSlider"
                    className="swiper w-full overflow-x-hidden"
                >
                    <div className="swiper-wrapper">
                    <div className="swiper-slide !w-fit">
                        <a href="details.html">
                        <div className="relative flex h-[276px] w-[222px] items-center justify-center rounded-3xl transition-all duration-300 hover:bg-cosmetics-gradient-purple-pink hover:p-[2px]">
                            <div className="flex h-full flex-col justify-center gap-4 rounded-[23px] bg-white px-4 hover:rounded-[22px]">
                            <span className="absolute right-[14px] top-[14px] flex items-center justify-center gap-[2px] rounded-full bg-cosmetics-purple px-2 py-[6px]">
                                <img
                                src="/images/icons/star.svg"
                                alt="icon"
                                className="size-4 shrink-0"
                                />
                                <p className="text-xs font-bold leading-[18px] text-white">
                                4.8
                                </p>
                            </span>
                            <div className="mx-auto flex h-[130px] w-full items-center justify-center">
                                <img
                                src="/images/thumbnails/coverblur.png"
                                alt="image"
                                className="h-full w-full object-contain"
                                />
                            </div>
                            <div className="des flex flex-col gap-1">
                                <h4 className="text-xs leading-[18px] text-cosmetics-purple">
                                SOMETHINC
                                </h4>
                                <h3 className="line-clamp-2 h-[48px] w-full font-semibold">
                                CoverBlur Powder Foundation Natural
                                </h3>
                                <strong className="font-semibold text-cosmetics-pink">
                                Rp 8.540.000
                                </strong>
                            </div>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="swiper-slide !w-fit">
                        <a href="details.html">
                        <div className="relative flex h-[276px] w-[222px] items-center justify-center rounded-3xl transition-all duration-300 hover:bg-cosmetics-gradient-purple-pink hover:p-[2px]">
                            <div className="flex h-full flex-col justify-center gap-4 rounded-[23px] bg-white px-4 hover:rounded-[22px]">
                            <span className="absolute right-[14px] top-[14px] flex items-center justify-center gap-[2px] rounded-full bg-cosmetics-purple px-2 py-[6px]">
                                <img
                                src="/images/icons/star.svg"
                                alt="icon"
                                className="size-4 shrink-0"
                                />
                                <p className="text-xs font-bold leading-[18px] text-white">
                                4.8
                                </p>
                            </span>
                            <div className="mx-auto flex h-[130px] w-full items-center justify-center">
                                <img
                                src="/images/thumbnails/lipstick.png"
                                alt="image"
                                className="h-full w-full object-contain"
                                />
                            </div>
                            <div className="des flex flex-col gap-1">
                                <h4 className="text-xs leading-[18px] text-cosmetics-purple">
                                MAYBELLINA
                                </h4>
                                <h3 className="line-clamp-2 h-[48px] w-full font-semibold">
                                Lipstick Golden Ultra Alami Lebih Basah
                                </h3>
                                <strong className="font-semibold text-cosmetics-pink">
                                Rp 8.540.000
                                </strong>
                            </div>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="swiper-slide !w-fit">
                        <a href="details.html">
                        <div className="relative flex h-[276px] w-[222px] items-center justify-center rounded-3xl transition-all duration-300 hover:bg-cosmetics-gradient-purple-pink hover:p-[2px]">
                            <div className="flex h-full flex-col justify-center gap-4 rounded-[23px] bg-white px-4 hover:rounded-[22px]">
                            <span className="absolute right-[14px] top-[14px] flex items-center justify-center gap-[2px] rounded-full bg-cosmetics-purple px-2 py-[6px]">
                                <img
                                src="/images/icons/star.svg"
                                alt="icon"
                                className="size-4 shrink-0"
                                />
                                <p className="text-xs font-bold leading-[18px] text-white">
                                4.8
                                </p>
                            </span>
                            <div className="mx-auto flex h-[130px] w-full items-center justify-center overflow-hidden">
                                <img
                                src="/images/thumbnails/deodorant.png"
                                alt="image"
                                className="h-full w-full object-contain"
                                />
                            </div>
                            <div className="des flex flex-col gap-1">
                                <h4 className="text-xs leading-[18px] text-cosmetics-purple">
                                NIVEA
                                </h4>
                                <h3 className="line-clamp-2 h-[48px] w-full font-semibold">
                                Deodorant Alami Anti Lembab Seharian
                                </h3>
                                <strong className="font-semibold text-cosmetics-pink">
                                Rp 8.540.000
                                </strong>
                            </div>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="swiper-slide !w-fit">
                        <a href="details.html">
                        <div className="relative flex h-[276px] w-[220px] items-center justify-center rounded-3xl transition-all duration-300 hover:bg-cosmetics-gradient-purple-pink hover:p-[2px]">
                            <div className="flex h-full flex-col justify-center gap-4 rounded-[23px] bg-white px-4 hover:rounded-[22px]">
                            <span className="absolute right-[14px] top-[14px] flex items-center justify-center gap-[2px] rounded-full bg-cosmetics-purple px-2 py-[6px]">
                                <img
                                src="/images/icons/star.svg"
                                alt="icon"
                                className="size-4 shrink-0"
                                />
                                <p className="text-xs font-bold leading-[18px] text-white">
                                4.8
                                </p>
                            </span>
                            <div className="mx-auto flex h-[130px] w-full items-center justify-center overflow-hidden">
                                <img
                                src="/images/thumbnails/mascara.png"
                                alt="image"
                                className="h-full w-full object-contain"
                                />
                            </div>
                            <div className="des flex flex-col gap-1">
                                <h4 className="text-xs leading-[18px] text-cosmetics-purple">
                                MAYBELLINA
                                </h4>
                                <h3 className="line-clamp-2 h-[48px] w-full font-semibold">
                                Mascara Pinky Pilihan Arti Terkenal Cantik
                                </h3>
                                <strong className="font-semibold text-cosmetics-pink">
                                Rp 8.540.000
                                </strong>
                            </div>
                            </div>
                        </div>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section id="FreshThisSummer">
                <div className="flex flex-col gap-4 px-5">
                <h2 className="font-bold">Fresh This Summer</h2>
                <a href="details.html">
                    <div className="flex h-[130px] items-center justify-center rounded-3xl bg-cosmetics-greylight p-px transition-all duration-300 hover:bg-cosmetics-gradient-purple-pink hover:p-[2px]">
                    <div className="flex h-full w-full items-center gap-4 rounded-[23px] bg-white px-4 hover:rounded-[22px]">
                        <div className="flex size-[90px] shrink-0 items-center justify-center">
                        <img
                            src="/images/thumbnails/acne.png"
                            alt="image"
                            className="h-full w-full object-contain"
                        />
                        </div>
                        <div className="flex w-full flex-col gap-[2px]">
                        <h4 className="text-xs leading-[18px] text-cosmetics-purple">
                            MAYBELINA
                        </h4>
                        <h3 className="line-clamp-2 h-[48px] w-full font-semibold">
                            Acne Patch Tidak Sakit
                        </h3>
                        <div className="flex items-center justify-between">
                            <strong className="font-semibold text-cosmetics-pink">
                            Rp 8.540.000
                            </strong>
                            <div className="flex items-center justify-center gap-[2px]">
                            <img
                                src="/images/icons/star.svg"
                                alt="icon"
                                className="size-4 shrink-0"
                            />
                            <p className="text-xs font-bold leading-[18px]">4.8</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </a>
                <a href="details.html">
                    <div className="flex h-[130px] items-center justify-center rounded-3xl bg-cosmetics-greylight p-px transition-all duration-300 hover:bg-cosmetics-gradient-purple-pink hover:p-[2px]">
                    <div className="flex h-full w-full items-center gap-4 rounded-[23px] bg-white px-4 hover:rounded-[22px]">
                        <div className="flex size-[90px] shrink-0 items-center justify-center">
                        <img
                            src="/images/thumbnails/bedak.png"
                            alt="image"
                            className="h-full w-full object-contain"
                        />
                        </div>
                        <div className="flex w-full flex-col gap-[2px]">
                        <h4 className="text-xs leading-[18px] text-cosmetics-purple">
                            SOMETHINK
                        </h4>
                        <h3 className="line-clamp-2 h-[48px] w-full font-semibold">
                            Bedak Halus Penghilang Jerawat Tanpa Effect
                        </h3>
                        <div className="flex items-center justify-between">
                            <strong className="font-semibold text-cosmetics-pink">
                            Rp 8.540.000
                            </strong>
                            <div className="flex items-center justify-center gap-[2px]">
                            <img
                                src="/images/icons/star.svg"
                                alt="icon"
                                className="size-4 shrink-0"
                            />
                            <p className="text-xs font-bold leading-[18px]">4.8</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </a>
                <a href="details.html">
                    <div className="flex h-[130px] items-center justify-center rounded-3xl bg-cosmetics-greylight p-px transition-all duration-300 hover:bg-cosmetics-gradient-purple-pink hover:p-[2px]">
                    <div className="flex h-full w-full items-center gap-4 rounded-[23px] bg-white px-4 hover:rounded-[22px]">
                        <div className="flex size-[90px] shrink-0 items-center justify-center">
                        <img
                            src="/images/thumbnails/acne-patch.png"
                            alt="image"
                            className="h-full w-full object-contain"
                        />
                        </div>
                        <div className="flex w-full flex-col gap-[2px]">
                        <h4 className="text-xs leading-[18px] text-cosmetics-purple">
                            MAYBELINA
                        </h4>
                        <h3 className="line-clamp-2 h-[48px] w-full font-semibold">
                            Acne Patch Tidak Sakit
                        </h3>
                        <div className="flex items-center justify-between">
                            <strong className="font-semibold text-cosmetics-pink">
                            Rp 8.540.000
                            </strong>
                            <div className="flex items-center justify-center gap-[2px]">
                            <img
                                src="/images/icons/star.svg"
                                alt="icon"
                                className="size-4 shrink-0"
                            />
                            <p className="text-xs font-bold leading-[18px]">4.8</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </a>
                </div>
            </section>
            <nav className="fixed bottom-0 left-0 right-0 z-30 mx-auto w-full">
                <div className="mx-auto max-w-[640px]">
                <div className="h-[89px] bg-white px-[30px] shadow-[0px_-4px_30px_0px_#1107260D]">
                    <ul className="flex justify-between">
                    <li className="flex items-center">
                        <a href="">
                        <div className="flex w-[50px] flex-col items-center gap-1">
                            <img
                            src="/images/icons/browse.svg"
                            alt="icon"
                            className="size-6 shrink-0"
                            />
                            <p className="text-sm font-semibold leading-[21px] text-cosmetics-pink">
                            Browse
                            </p>
                        </div>
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a href="view-orders.html">
                        <div className="flex w-[50px] flex-col items-center gap-1">
                            <img
                            src="/images/icons/car.svg"
                            alt="icon"
                            className="size-6 shrink-0"
                            />
                            <p className="text-sm leading-[21px]">Orders</p>
                        </div>
                        </a>
                    </li>
                    <li>
                        <a href="" className="relative -top-[23px]">
                        <div className="relative flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#FAF9FA]">
                            <div className="flex size-[65px] items-center justify-center rounded-full bg-cosmetics-gradient-pink-white transition-shadow duration-300 hover:shadow-[0px_6px_10px_0px_#FF4D9E6E]">
                            <img
                                src="/images/icons/video.svg"
                                alt="icon"
                                className="size-[30px] shrink-0"
                            />
                            </div>
                        </div>
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a href="">
                        <div className="flex w-[50px] flex-col items-center gap-1">
                            <img
                            src="/images/icons/gift.svg"
                            alt="icon"
                            className="size-6 shrink-0"
                            />
                            <p className="text-sm leading-[21px]">Perks</p>
                        </div>
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a href="">
                        <div className="flex w-[50px] flex-col items-center gap-1">
                            <img
                            src="/images/icons/message.svg"
                            alt="icon"
                            className="size-6 shrink-0"
                            />
                            <p className="text-sm leading-[21px]">Helps</p>
                        </div>
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </main>

    )
}