import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { IoIosCloseCircle } from "react-icons/io";
import { IoOpenOutline } from "react-icons/io5";
import { P1, P2 } from '../assets/MyWorkImages/index';

const images = [
  { id: 1, title: "Chrono Blaster Mark V", url: P1, work_link: 'https://www.artstation.com/artwork/1xzql3'},
  { id: 2, title: "Village Haven Game Asset Render", url: P2, work_link: 'https://www.artstation.com/artwork/49ZVal'}
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
            {images.map((image) => (
              <img
                key={image.id}
                src={image.url}
                onClick={() => openModal(image.id)}
                style={{ cursor: 'pointer' }}
                className="rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:opacity-[0.7] ease-out"
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-[0.7]">
          <div className="max-w-3xl w-full h-full bg-transparent rounded-lg overflow-hidden shadow-xl flex justify-center items-center">
            <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-900 bg-opacity-50">
              <div className="max-w-3xl bg-gradient-to-r from-black to-gray-950 border-2 border-gray-600 rounded-xl p-8 relative">
                <button className="absolute top-4 right-4 text-white text-lg" onClick={closeModal}>
                  <IoIosCloseCircle className='bg-transparent' />
                </button>
                <h2 className="text-3xl font-bold mb-4 bg-transparent">{images.find((image) => image.id === selectedImage).title}</h2>
                <hr className="mb-4" />
                <div className="flex items-center mb-4 bg-transparent">
                  <span className="text-lg font-semibold mr-2"><IoOpenOutline className="inline-block mr-1 bg-transparent"/> Preview:</span>
                  <span className="text-lg"><button className="underline text-white font-medium" onClick={visitImageLink}>Art Station</button></span>
                </div>
                <div className="relative w-full h-64">
                  <img src={images.find((image) => image.id === selectedImage).url} alt="Project Image" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
