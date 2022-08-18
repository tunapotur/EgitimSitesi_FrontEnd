import ifCorrectPage_DOMContentLoaded from '../../functions/ifCorrectPage_DOMContentLoaded';
import { PhotoOperationsBase } from '../forms/formPhotoOparations';

// UserBackgroundPhotoElements
const frmContentHeader_headerPhoto = document.getElementById('frmContentHeader_headerPhoto');

ifCorrectPage_DOMContentLoaded(frmContentHeader_headerPhoto, () => {
  const frmContentHeader_input = document.getElementById('frmContentHeader_input'),
    frmContentHeader_label = frmContentHeader_headerPhoto.querySelector('.frmGroup__photo-label');

  const previewPhotos = [];
  previewPhotos.push(frmContentHeader_headerPhoto.querySelector('.aCard__image-top'));

  const photo = new PhotoOperationsBase(frmContentHeader_headerPhoto);

  frmContentHeader_input.addEventListener('change', e => {
    photo.photoInputEventFunction(e.target.files[0]);
  });

  frmContentHeader_label.addEventListener('drop', e => {
    photo.photoInputEventFunction(e.dataTransfer.files[0]);
  });
});
