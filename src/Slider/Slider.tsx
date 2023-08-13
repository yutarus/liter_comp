import React from 'react'
import cls from '../../css/Slider.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

SwiperCore.use([Navigation, Pagination])

interface SvgData {
	path: string
}

interface SliderProps {
	svg: SvgData[]
}

const Slider: React.FC<SliderProps> = ({ svg }) => {
	const swiperOptions = {
		spaceBetween: 50,
		slidesPerView: 5,
		navigation: true,
		pagination: false,
		loop: false
	}

	return (
		<Swiper {...swiperOptions}>
			{svg.map(slide => (
				<SwiperSlide key={slide.path}>
					<div
						dangerouslySetInnerHTML={{ __html: slide.path }}
						className={cls.slide}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default Slider
