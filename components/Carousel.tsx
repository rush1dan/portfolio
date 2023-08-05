import React from 'react'
import styles from './carouselstyle.module.css'

type CarouselProps = {
    children: JSX.Element[]
}

export default function Carousel({ children }: CarouselProps) {
    const carousel = document.querySelector(".carousel")!,
        firstItem = carousel.querySelectorAll(".carouselItem")[0],
        arrowIcons = document.querySelectorAll<HTMLElement>(".wrapper i");
    let isDragStart = false, isDragging = false, prevPageX: number, prevScrollLeft: number, positionDiff: number;
    const showHideIcons = () => {
        // showing and hiding prev/next icon according to carousel scroll left value
        let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
        arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
        arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
    }
    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            let firstImgWidth = firstItem.clientWidth + 14; // getting first img width & adding 14 margin value
            // if clicked icon is left, reduce width value from the carousel scroll left else add to it
            carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
            setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
        });
    });
    const autoSlide = () => {
        // if there is no image left to scroll then return from here
        if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
        positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
        let firstImgWidth = firstItem.clientWidth + 14;
        // getting difference value that needs to add or reduce from carousel left to take middle img center
        let valDifference = firstImgWidth - positionDiff;
        if (carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
            return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
        }
        // if user is scrolling to the left
        carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }

    const dragStart = (e: Event) => {
        // updatating global variables value on mouse down event
        isDragStart = true;
        if (e instanceof MouseEvent) {
            prevPageX = e.pageX;
        }
        else if (e instanceof TouchEvent) {
            prevPageX = e.touches[0].pageX;
        }
        prevScrollLeft = carousel.scrollLeft;
    }
    const dragging = (e: Event) => {
        // scrolling images/carousel to left according to mouse pointer
        if (!isDragStart) return;
        e.preventDefault();
        isDragging = true;
        carousel.classList.add("dragging");
        if (e instanceof MouseEvent) {
            positionDiff = e.pageX - prevPageX;
        }
        else if (e instanceof TouchEvent) {
            positionDiff = e.touches[0].pageX - prevPageX;
        }
        carousel.scrollLeft = prevScrollLeft - positionDiff;
        showHideIcons();
    }
    const dragStop = () => {
        isDragStart = false;
        carousel.classList.remove("dragging");
        if (!isDragging) return;
        isDragging = false;
        autoSlide();
    }
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart);
    document.addEventListener("mousemove", dragging);
    carousel.addEventListener("touchmove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("touchend", dragStop);

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.wrapper}>
                <i id="left" className="fa-solid fa-angle-left"></i>
                <div className={styles.carousel}>
                    <div className={styles.carouselItem}>
                        <>{children}</>
                    </div>
                </div>
                <i id="right" className="fa-solid fa-angle-right"></i>
            </div>
        </div>
    )
}