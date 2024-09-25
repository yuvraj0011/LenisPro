import React from 'react';

const imgData = [
  {
    id: 1,
    src: 'src/img/1.jpg',
    alt: 'Image 1',
    style: { "--r": 1, "--c": 3 }
  },
  {
    id: 2,
    src: 'src/img/2.jpg',
    alt: 'Image 2',
    style: { "--r": 1, "--c": 7 }
  },
  {
    id: 3,
    src: 'src/img/3.jpg',
    alt: 'Image 3',
    style: { "--r": 2, "--c": 2 }
  },
  {
    id: 4,
    src: 'src/img/4.jpg',
    alt: 'Image 4',
    style: { "--r": 2, "--c": 5 }
  },
  {
    id: 5,
    src: 'src/img/5.jpg',
    alt: 'Image 5',
    style: { "--r": 3, "--c": 1 }
  },
  {
    id: 6,
    src: 'src/img/6.jpg',
    alt: 'Image 6',
    style: { "--r": 3, "--c": 8 }
  },
  {
    id: 7,
    src: 'src/img/7.jpg',
    alt: 'Image 7',
    style: { "--r": 4, "--c": 4 }
  },
  {
    id: 8,
    src: 'src/img/8.jpg',
    alt: 'Image 8',
    style: { "--r": 4, "--c": 6 }
  },
  {
    id: 9,
    src: 'src/img/9.jpg',
    alt: 'Image 9',
    style: { "--r": 5, "--c": 2 }
  },
  {
    id: 10,
    src: 'src/img/10.jpg',
    alt: 'Image 10',
    style: { "--r": 5, "--c": 7 }
  },
  {
    id: 11,
    src: 'src/img/11.jpg',
    alt: 'Image 11',
    style: { "--r": 6, "--c": 1 }
  },
  {
    id: 12,
    src: 'src/img/12.jpg',
    alt: 'Image 12',
    style: { "--r": 6, "--c": 5 }
  },
  {
    id: 13,
    src: 'src/img/13.jpg',
    alt: 'Image 13',
    style: { "--r": 7, "--c": 3 }
  },
  {
    id: 14,
    src: 'src/img/14.jpg',
    alt: 'Image 14',
    style: { "--r": 7, "--c": 8 }
  },
  {
    id: 15,
    src: 'src/img/15.jpg',
    alt: 'Image 15',
    style: { "--r": 8, "--c": 2 }
  },
  {
    id: 16,
    src: 'src/img/16.jpg',
    alt: 'Image 16',
    style: { "--r": 8, "--c": 6 }
  },
  {
    id: 17,
    src: 'src/img/17.jpg',
    alt: 'Image 17',
    style: { "--r": 9, "--c": 4 }
  },
  {
    id: 18,
    src: 'src/img/18.jpg',
    alt: 'Image 18',
    style: { "--r": 9, "--c": 7 }
  },
  {
    id: 19,
    src: 'src/img/19.jpg',
    alt: 'Image 19',
    style: { "--r": 10, "--c": 1 }
  },
  {
    id: 20,
    src: 'src/img/20.jpg',
    alt: 'Image 20',
    style: { "--r": 10, "--c": 5 }
  },
  {
    id: 21,
    src: 'src/img/21.jpg',
    alt: 'Image 21',
    style: { "--r": 11, "--c": 3 }
  },
  {
    id: 22,
    src: 'src/img/22.jpg',
    alt: 'Image 22',
    style: { "--r": 11, "--c": 7 }
  },
  {
    id: 23,
    src: 'src/img/23.jpg',
    alt: 'Image 23',
    style: { "--r": 12, "--c": 2 }
  },
  {
    id: 24,
    src: 'src/img/24.jpg',
    alt: 'Image 24',
    style: { "--r": 12, "--c": 5 }
  },
  {
    id: 25,
    src: 'src/img/25.jpg',
    alt: 'Image 25',
    style: { "--r": 13, "--c": 1 }
  },
  {
    id: 26,
    src: 'src/img/26.jpg',
    alt: 'Image 26',
    style: { "--r": 13, "--c": 8 }
  },
  {
    id: 27,
    src: 'src/img/27.jpg',
    alt: 'Image 27',
    style: { "--r": 14, "--c": 4 }
  },
  {
    id: 28,
    src: 'src/img/28.jpg',
    alt: 'Image 28',
    style: { "--r": 14, "--c": 6 }
  },
  {
    id: 29,
    src: 'src/img/29.jpg',
    alt: 'Image 29',
    style: { "--r": 15, "--c": 2 }
  },
  {
    id: 30,
    src: 'src/img/30.jpg',
    alt: 'Image 30',
    style: { "--r": 15, "--c": 7 }
  },
  {
    id: 31,
    src: 'src/img/31.jpg',
    alt: 'Image 31',
    style: { "--r": 16, "--c": 1 }
  },
  {
    id: 32,
    src: 'src/img/32.jpg',
    alt: 'Image 32',
    style: { "--r": 16, "--c": 5 }
  },
  {
    id: 33,
    src: 'src/img/33.jpg',
    alt: 'Image 33',
    style: { "--r": 17, "--c": 3 }
  },
  {
    id: 34,
    src: 'src/img/34.jpg',
    alt: 'Image 34',
    style: { "--r": 17, "--c": 8 }
  },
  {
    id: 35,
    src: 'src/img/35.jpg',
    alt: 'Image 35',
    style: { "--r": 18, "--c": 2 }
  },
  {
    id: 36,
    src: 'src/img/36.jpg',
    alt: 'Image 36',
    style: { "--r": 18, "--c": 6 }
  },
  {
    id: 37,
    src: 'src/img/37.jpg',
    alt: 'Image 37',
    style: { "--r": 19, "--c": 4 }
  },
  {
    id: 38,
    src: 'src/img/38.jpg',
    alt: 'Image 38',
    style: { "--r": 19, "--c": 7 }
  },
  {
    id: 39,
    src: 'src/img/39.jpg',
    alt: 'Image 39',
    style: { "--r": 20, "--c": 1 }
  },
  {
    id: 40,
    src: 'src/img/40.jpg',
    alt: 'Image 40',
    style: { "--r": 20, "--c": 5 }
  }
];

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-8 grid-rows-20 gap-2 overflow-hidden">
      {imgData.map((image) => (
        <div
          key={image.id}
          style={image.style}
          className="elem col-start-[var(--c)] row-start-[var(--r)]"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export { imgData, ImageGallery };