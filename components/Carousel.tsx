'use client'

import React, { useEffect, useRef } from 'react'
import styles from './carouselstyle.module.css'

type CarouselProps = {
    children: JSX.Element[]
}

export default function Carousel({ children }: CarouselProps) {
    const carousel = useRef<HTMLDivElement>(null),
        firstItem = useRef<HTMLDivElement>(null),
        arrowIconLeft = useRef<HTMLDivElement>(null),
        arrowIconRight = useRef<HTMLDivElement>(null);
    let isDragStart = false, isDragging = false, prevPageX: number, prevScrollLeft: number, positionDiff: number;
    
    useEffect(() => {
        const showHideIcons = () => {
            // showing and hiding prev/next icon according to carousel scroll left value
            if (carousel.current && arrowIconLeft.current && arrowIconRight.current) {
                let scrollWidth = carousel.current.scrollWidth - carousel.current.clientWidth; // getting max scrollable width
                arrowIconLeft.current.style.display = carousel.current.scrollLeft == 0 ? "none" : "block";
                arrowIconRight.current.style.display = carousel.current.scrollLeft == scrollWidth ? "none" : "block";
            }
        }
        const arrowIcons = [arrowIconLeft, arrowIconRight]
        arrowIcons.forEach(icon => {
            icon?.current?.addEventListener("click", () => {
                if (firstItem.current) {
                    let firstImgWidth = firstItem.current.clientWidth + 14; // getting first img width & adding 14 margin value
                    // if clicked icon is left, reduce width value from the carousel scroll left else add to it
                    if (carousel.current && icon.current) {
                        carousel.current.scrollLeft += icon.current.id == "left" ? -firstImgWidth : firstImgWidth;
                    }
                }
                setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
            });
        });
        const autoSlide = () => {
            if (carousel.current && firstItem.current) {
                // if there is no image left to scroll then return from here
                if (carousel.current.scrollLeft - (carousel.current.scrollWidth - carousel.current.clientWidth) > -1 || carousel.current.scrollLeft <= 0) return;
                positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
                let firstImgWidth = firstItem.current.clientWidth + 14;
                // getting difference value that needs to add or reduce from carousel left to take middle img center
                let valDifference = firstImgWidth - positionDiff;
                if (carousel.current.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
                    return carousel.current.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
                }
                // if user is scrolling to the left
                carousel.current.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
            }
        }
    
        const dragStart = (e: Event) => {
            if (carousel.current) {
                // updatating global variables value on mouse down event
                isDragStart = true;
                if (e instanceof MouseEvent) {
                    prevPageX = e.pageX;
                }
                else if (e instanceof TouchEvent) {
                    prevPageX = e.touches[0].pageX;
                }
                prevScrollLeft = carousel.current.scrollLeft;
            }
        }
        const dragging = (e: Event) => {
            if (carousel.current) {
                // scrolling images/carousel to left according to mouse pointer
                if (!isDragStart) return;
                e.preventDefault();
                isDragging = true;
                carousel.current.classList.add("dragging");
                if (e instanceof MouseEvent) {
                    positionDiff = e.pageX - prevPageX;
                }
                else if (e instanceof TouchEvent) {
                    positionDiff = e.touches[0].pageX - prevPageX;
                }
                carousel.current.scrollLeft = prevScrollLeft - positionDiff;
                showHideIcons();
            }
    
        }
        const dragStop = () => {
            if (carousel.current) {
                isDragStart = false;
                carousel.current.classList.remove("dragging");
                if (!isDragging) return;
                isDragging = false;
                autoSlide();
            }
        }
        carousel?.current?.addEventListener("mousedown", dragStart);
        carousel?.current?.addEventListener("touchstart", dragStart);
        document.addEventListener("mousemove", dragging);
        carousel?.current?.addEventListener("touchmove", dragging);
        document.addEventListener("mouseup", dragStop);
        carousel?.current?.addEventListener("touchend", dragStop);
        console.log("hello");
    }, [carousel]);

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.wrapper}>
                <i id="left" className="fa-solid fa-angle-left" ref={arrowIconLeft}></i>
                <div className={styles.carousel} ref={carousel}>
                    {
                        children.map((item, index) => {
                            return (
                                <div className={styles.carouselItem} key={index} ref={index == 0 ? firstItem : null}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
                <i id="right" className="fa-solid fa-angle-right" ref={arrowIconRight}></i>
            </div>
        </div>
    )
}