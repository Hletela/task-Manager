import React, { useEffect, useState } from 'react';

const MarsImage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(false);

  const fetchImage = () => {
    fetch('https://source.unsplash.com/random/800x600/?mars')
      .then(response => {
        if (response.ok) {
          setImageUrl(response.url);
          setError(false);
        } else {
          throw new Error('Image not found');
        }
      })
      .catch(error => {
        console.error('Error fetching image:', error);
        setError(true);
      });
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="mars-image-container">
      {error ? (
        <div>
          <p>Failed to load image. <button onClick={fetchImage}>Retry</button></p>
        </div>
      ) : (
        imageUrl ? <img src={imageUrl} alt="Mars" className="mars-image" /> : <p>Loading...</p>
      )}
    </div>
  );
};

export default MarsImage;
