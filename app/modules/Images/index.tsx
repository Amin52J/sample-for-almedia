import React, { useState, useRef, Fragment } from "react";
import {
  IndexContainer,
  Image,
  ImageIcon,
  ImageItem,
  ImagesContainer,
  LoadMore,
  ModalButton,
  ModalImage,
  StyledModal,
  ImagesEmptyState,
} from "@Modules/Images/styles";
import Next from "@Modules/Images/components/Next";
import Prev from "@Modules/Images/components/Prev";
import { VISIBLE_IMAGE_LIMIT } from "@Modules/Images/data/constants";

const Images = ({ images }: { images: string[] }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [imageCount, setImageCount] = React.useState<number>(
    VISIBLE_IMAGE_LIMIT,
  );
  const modalImage = useRef(null);

  const handleTouchStart = (e) => {
    modalImage.current.touchStartPoint = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    modalImage.current.style.transform = `translateX(${
      (e.targetTouches[0].clientX - modalImage.current.touchStartPoint) / 2
    }px)`;
    modalImage.current.touchEndPoint = e.targetTouches[0].clientX;
  };

  const onNext = () => setActiveIndex((activeIndex + 1) % images.length);

  const onPrev = () =>
    setActiveIndex((activeIndex - 1 + images.length) % images.length);

  const handleTouchEnd = () => {
    if (
      modalImage.current.touchStartPoint - modalImage.current.touchEndPoint >
      15
    ) {
      onNext();
    }

    if (
      modalImage.current.touchStartPoint - modalImage.current.touchEndPoint <
      -15
    ) {
      onPrev();
    }

    modalImage.current.touchStartPoint = 0;
    modalImage.current.touchEndPoint = 0;
    modalImage.current.style.transform = "translateX(0)";
  };

  if (images.length < 1) {
    return (
      <ImagesEmptyState>
        Für die Firma liegen uns noch keine Bilder vor.
      </ImagesEmptyState>
    );
  }

  return (
    <Fragment>
      <ImagesContainer>
        {images.slice(0, imageCount).map((image, index) => (
          <ImageItem
            key={image}
            onClick={() => {
              setActiveIndex(index);
              setIsGalleryOpen(true);
            }}
          >
            <Image src={image} alt={`Number ${index + 1}`} />
            <ImageIcon width="4rem" height="4rem" />
          </ImageItem>
        ))}
        <StyledModal
          isOpen={isGalleryOpen}
          onChange={(isOpen) => setIsGalleryOpen(isOpen)}
        >
          <ModalImage
            src={images[activeIndex]}
            alt={`Number ${activeIndex + 1}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            ref={modalImage}
          />
          <ModalButton as={Next} type="next" onClick={onNext} />
          <ModalButton as={Prev} type="prev" onClick={onPrev} />
          <IndexContainer>
            {`${activeIndex + 1}/${images.length}`}
          </IndexContainer>
        </StyledModal>
      </ImagesContainer>
      {imageCount < images.length && (
        <LoadMore
          onClick={() => setImageCount(imageCount + VISIBLE_IMAGE_LIMIT)}
        >
          Mehr anzeigen
        </LoadMore>
      )}
    </Fragment>
  );
};

export default Images;
