'use client'

import Image from "next/image";
import { useState, useRef } from "react";

type ImagePreviewProps = {
	src: string;
	alt?: string;
	className?: string;
};

export function ImagePreview({
	src,
	alt = "Image",
	className,
}: ImagePreviewProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [scale, setScale] = useState(1);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const imgRef = useRef<HTMLImageElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);

	const handleZoom = (factor: number) => {
		setScale((prev) => Math.max(1, prev + factor)); // Prevent zooming out too much
	};

	const handleMouseDown = (event: React.MouseEvent) => {
		if (!imgRef.current) return;
		const startX = event.clientX;
		const startY = event.clientY;
		const startPos = { ...position };

		const handleMouseMove = (moveEvent: MouseEvent) => {
			setPosition({
				x: startPos.x + (moveEvent.clientX - startX),
				y: startPos.y + (moveEvent.clientY - startY),
			});
		};

		const handleMouseUp = () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseup", handleMouseUp);
		};

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseup", handleMouseUp);
	};

	return (
		<>
			{/* Thumbnail */}
			<img
				src={src}
				alt={alt}
				className={`cursor-pointer rounded ${className}`}
				onClick={() => setIsOpen(true)}
			/>

			{/* Preview Modal */}
			{isOpen && (
				<div
					className="fixed inset-0 flex items-center justify-center bg-black/80 z-50"
					onClick={() => setIsOpen(false)}
				>
					<div
						className="relative flex flex-col items-center p-4 bg-white rounded-lg shadow-lg"
						onClick={(e) => e.stopPropagation()} // Prevent click-through
					>
						{/* Image Container */}
						<div
							ref={containerRef}
							className="overflow-hidden relative w-[80vw] h-[80vh] flex items-center justify-center bg-gray-100"
						>
							<Image
								ref={imgRef}
								src={src}
								alt={alt}
								draggable={false}
								className="cursor-grab"
								style={{
									transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
									transition: "transform 0.1s ease-out",
								}}
								onMouseDown={handleMouseDown}
								fill
								loading="eager"
							/>
						</div>

						{/* Controls */}
						<div className="mt-3 flex gap-4">
							<button
								className="px-4 py-2 bg-cardButtonColor text-white rounded-md"
								onClick={() => handleZoom(0.2)}
							>
								➕ Zoom In
							</button>
							<button
								className="px-4 py-2 bg-cardButtonColor text-white rounded-md"
								onClick={() => handleZoom(-0.2)}
							>
								➖ Zoom Out
							</button>
							<button
								className="px-4 py-2 bg-cardButtonColor text-white rounded-md"
								onClick={() => setIsOpen(false)}
							>
								❌ Close
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
