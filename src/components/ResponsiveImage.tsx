import React from "react";

interface Image {
  Height: number;
  Width: number;
  Url: string;
  Name: string;
}

interface ResponsiveImageProps {
  images: Image[] | null;
  alt: string;
  className: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  images,
  alt,
  className,
}) => {
  if (!images || images.length === 0) {
    return (
      <div className="bg-gray-200 text-center py-16">No image available</div>
    );
  }
  const sortedImages = [...images].sort((a, b) => b.Width - a.Width);
  console.log(sortedImages);
  return (
    <>
      <picture>
        {sortedImages.map((image) => (
          <source
            key={image.Url}
            srcSet={image.Url}
            media={`(min-width: ${image.Width}px)`}
          />
        ))}
        <img src={sortedImages[0].Url} alt={alt} className={className} />
      </picture>
    </>
  );
};

export default ResponsiveImage;
