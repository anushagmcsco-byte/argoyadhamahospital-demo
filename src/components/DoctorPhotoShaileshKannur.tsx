import React from 'react';
import { DR_SHAILESH_KANNUR_IMAGE } from '../data/doctorImages';

interface Props {
  className?: string;
  alt?: string;
}

export const DoctorPhotoShaileshKannur: React.FC<Props> = ({
  className = '',
  alt = 'Dr. Shailesh Kannur - MS (General Surgery), Fellowship in Oncosurgery',
}) => {
  return (
    <img
      src={DR_SHAILESH_KANNUR_IMAGE}
      alt={alt}
      className={`object-cover ${className}`}
    />
  );
};
