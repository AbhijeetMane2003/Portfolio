import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { IoIosCloseCircle } from "react-icons/io";
import { IoOpenOutline } from "react-icons/io5";
import { P1, P2 , P3, P4, P5 } from '../assets/MyWorkImages/index';

const images = [
  { id: 1, title: "Chrono Blaster Mark V", url: P1, work_link: 'https://www.artstation.com/artwork/1xzql3' },
  { id: 2, title: "Village Game Environment", url: P2, work_link: 'https://www.artstation.com/artwork/Jv45qz' },
  { id: 3, title: "Dassault Rafale Model And Environment", url: P3, work_link: 'https://www.artstation.com/artwork/obL3Gm' },
  { id: 4, title: "Stylised Karambet knife Game Ready Asset Model", url: P4, work_link: 'https://www.artstation.com/artwork/qex4ve' },
  { id: 5, title: "Cinematic Batman Ship Port Render | 3D Animation Showcase", url: P5, work_link: 'https://www.artstation.com/artwork/Ev3zxA' }
];

export default function MyWorkGallery() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageId) => {
    setSelectedImage(imageId);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const visitImageLink = () => {
    const selectedImageObj = images.find((image) => image.id === selectedImage);
    window.open(selectedImageObj.work_link, '_blank');
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className='mt-10 w-[90%] mx-auto'>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter='20px'>
            {images.slice().reverse().map((image) => (
              <img
                key={image.id}
                src={image.url}
                onClick={() => openModal(image.id)}
                style={{ cursor: 'pointer' }}
                className="rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:opacity-[0.7] ease-out"
                alt={`Projects ${image.title}`}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative max-w-3xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <button
              className="absolute top-3 right-3 text-white text-3xl z-50"
              onClick={closeModal}
            >
              <IoIosCloseCircle className='bg-transparent'/>
            </button>
            <div className="relative w-full h-96 overflow-hidden">
              <img
                src={images.find((image) => image.id === selectedImage)?.url}
                alt="Project"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-transparent">
                <h2 className="text-3xl font-semibold mb-2 bg-transparent" style={{ color: 'white' }}>
                  {images.find((image) => image.id === selectedImage)?.title}
                </h2>
                <div className="flex items-center mb-2 bg-transparent" style={{ color: 'white' }}>
                  <IoOpenOutline className="inline-block mr-2 bg-transparent" />
                  <span className="text-lg font-semibold mr-2 bg-transparent">
                    Preview:
                  </span>
                  <button
                    className="underline font-medium"
                    onClick={visitImageLink}
                  >
                    Art Station
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
