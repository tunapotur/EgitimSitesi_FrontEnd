// https://stackoverflow.com/questions/53675785/how-do-i-enable-eslint-classprivatemethods-parser-plugin
// https://github.com/WangYuLue/image-conversion
import { compress, filetoDataURL, downloadFile } from 'image-conversion';
import Croppie from 'croppie';
import preventDefaults from '../../functions/preventDefaults';
import addElementToMultipleEvents from '../../functions/addElementToMultipleEvents';
import ifCorrectPage_DOMContentLoaded from '../../functions/ifCorrectPage_DOMContentLoaded';

export class PhotoOperationsBase {
  //* elements
  #elPhotoForm;
  #elPhotoOperation;
  #elPhotoInputLabel;
  #elPhotoEdit;
  #elPhotoImage;
  #elReturnPhotoInput;
  #elPhotoFormButton;

  //* Compress values
  #compressedImageFile;
  #urlImageFile;

  constructor(elPhotoForm) {
    // ana form elementi
    this.#elPhotoForm = elPhotoForm;

    // fotoğrafın yüklendiği element
    this.#elPhotoOperation = this.#elPhotoForm.querySelector('.frmGroup__photo-operation');
    this.#elPhotoInputLabel = this.#elPhotoOperation.firstElementChild;
    this.#elPhotoEdit = this.#elPhotoOperation.lastElementChild;
    this.#elReturnPhotoInput = this.#elPhotoForm.querySelector('.frmGroup__close-icon');
    this.#elPhotoFormButton = this.#elPhotoForm.querySelector('.frmGroup__button');

    //* events
    // fotoğraf yükleme işlemi en başa alınıyor
    this.#elReturnPhotoInput.addEventListener('click', () => {
      this.returnPhotoInput();
    });
    // form kaydet buttonu
    this.#elPhotoFormButton.addEventListener('click', e => {
      e.preventDefault();
      this.downloadProcessedImage();
    });
    // Drop eventlerinin varsayılan eventleri devre dışı bırakılıyor
    addElementToMultipleEvents(
      ['change', 'dragenter', 'dragover', 'dragleave', 'drop'],
      this.#elPhotoInputLabel,
      preventDefaults
    );
    // resim dosyası yükleme alanına sürüklenince yükleme alanına border koy
    addElementToMultipleEvents(['dragenter', 'dragover'], this.#elPhotoInputLabel, this.#highlightDropArea);
    // resim dosyası yükleme alanı dışına sürüklenince yükleme alanından border çıkar
    addElementToMultipleEvents(['dragleave', 'drop'], this.#elPhotoInputLabel, this.#unhighlightDropArea);
  }

  get urlImageFile() {
    return this.#urlImageFile;
  }

  get elPhotoForm() {
    return this.#elPhotoForm;
  }

  get elPhotoEdit() {
    return this.#elPhotoEdit;
  }

  get elPhotoOperation() {
    return this.#elPhotoOperation;
  }

  get elPhotoImage() {
    return this.#elPhotoImage;
  }

  set elPhotoImage(el) {
    this.#elPhotoImage = el;
  }

  #renderLoader = parentElment => {
    const loader = `
        <div class="loader">
            <svg class="loader__icon">
                <use href="img/svg/icons.svg#spinner2"></use>
            </svg>
        </div>
    `;
    parentElment.insertAdjacentHTML('afterbegin', loader);
  };

  #clearLoader(parentElment) {
    const loader = parentElment.querySelector(`.loader`);
    if (loader) loader.parentElement.removeChild(loader);
  }

  #highlightDropArea(el) {
    const frmGroupPhoto_label = el.target.closest('.frmGroup__photo-label');
    if (el.target.matches('.frmGroup__photo-label, .frmGroup__photo-label *'))
      frmGroupPhoto_label.classList.add('frmGroup__photo-label--drop');
  }

  #unhighlightDropArea = el => {
    const frmGroupPhoto_label = el.target.closest('.frmGroup__photo-label');
    if (el.target.matches('.frmGroup__photo-label, .frmGroup__photo-label *'))
      frmGroupPhoto_label.classList.remove('frmGroup__photo-label--drop');
  };

  downloadProcessedImage() {
    downloadFile(this.#compressedImageFile);
  }

  // türetilen sınıfın bu fonksiyonu kullanması için arrow operatörürün kullanılmaması gerek
  // https://javascript.info/class-inheritance
  async inputPhotoFile(photoFile) {
    // resim yükleme alanı kaldırılıyor
    this.#elPhotoInputLabel.setAttribute('style', 'display:none;');
    // Resim yüklemeden önce yükleme animasyonu çalıştırılıyor
    this.#renderLoader(this.#elPhotoOperation);
    // Kullanıcının seçtiği resim sıkıştıralarak yükleniyor
    this.#compressedImageFile = await compress(photoFile, {
      quality: 0.8,
      type: 'image/jpeg',
      width: 400,
    });
    // resim dosyası DataURL haline getirilerek img.src alanına gönderiliyor
    this.#urlImageFile = await filetoDataURL(this.#compressedImageFile);
    // animasyon sonlandırılıyor
    this.#clearLoader(this.#elPhotoOperation);

    // Yüklenen resimin bulunduğu alan görüntüleniyor
    this.#elPhotoEdit.setAttribute('style', 'display:flex;');
    // Resim elementi oluşturulup ekleniyor
    const elImage = document.createElement('img');
    elImage.className = 'frmGroup__edit-img';
    this.#elPhotoEdit.appendChild(elImage);

    // oluşturulan img elementi atanıyor
    this.#elPhotoImage = this.#elPhotoEdit.lastElementChild;

    // kullanıcının yüklediği fotoğraf resim elementinin kaynağına yükleniyor
    this.#elPhotoImage.src = this.#urlImageFile;

    // ana form kaydet butonu
    this.#elPhotoFormButton.classList.remove('frmGroup__button--disabled');
    this.#elPhotoFormButton.removeAttribute('disabled', 'disabled');
  }

  returnPhotoInput() {
    // yüklü resim elementi kaldırılıyor

    this.#elPhotoEdit.removeChild(this.#elPhotoImage);
    // img kaldırıldığından ona erisim saglayan element none yapılıyor

    // resim işleminin yapıldığı ana form resetleniyor
    this.#elPhotoForm.reset();

    // elementler ilk hale getiriliyor
    this.#elPhotoEdit.removeAttribute('style', 'display:flex;');
    this.#elPhotoInputLabel.removeAttribute('style', 'display:none;');

    // form butonu
    this.#elPhotoFormButton.classList.add('frmGroup__button--disabled');
    this.#elPhotoFormButton.setAttribute('disabled', 'disabled');
  }

  async photoInputEventFunction(photoFile) {
    if (photoFile) {
      await this.inputPhotoFile(photoFile);
    }
  }
}

export class PhotoOperations extends PhotoOperationsBase {
  //* elements
  #all_elPreviewImage;

  constructor(elPhotoForm, all_elPreviewImage) {
    super(elPhotoForm);
    // ana form elementi

    this.#all_elPreviewImage = all_elPreviewImage;
  }

  get all_elPreviewImage() {
    return this.#all_elPreviewImage;
  }

  set_all_elPreviewImage() {
    this.#all_elPreviewImage.forEach(el => {
      el.src = this.urlImageFile;
    });
  }

  #set_all_elPreviewImage_default = () => {
    this.#all_elPreviewImage.forEach(el => {
      el.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=';
    });
  };

  returnPhotoInput() {
    super.returnPhotoInput();

    // previw resimleri ilk haline getirilor
    this.#set_all_elPreviewImage_default();
  }

  async photoInputEventFunction(photoFile) {
    if (photoFile) {
      await super.inputPhotoFile(photoFile);
      this.set_all_elPreviewImage();
    }
  }
}

export class CropPhotoOperations extends PhotoOperations {
  //* element
  #elPhotoCropButtons;
  #elPhotoEditGroup;
  #all_elPhotoCropButton;

  //* crop variables
  #croppie;
  #cropedImage;

  constructor(elPhotoForm, all_elPreviewImage) {
    super(elPhotoForm, all_elPreviewImage);

    //* Elements
    this.#elPhotoEditGroup = this.elPhotoForm.children[1];
  }

  #renderCropButtons = parentElement => {
    const buttonsHtml = `
    <div class="frmGroup__crop-buttons">
      <div class="frmCropBtn__group">

        <div class="frmCropBtn__btn">
          <svg class="frmCropBtn__icon">
            <use xlink:href="img/svg/icons.svg#rotate-left"></use>
          </svg>
        </div>

        <div class="frmCropBtn__btn">
          <svg class="frmCropBtn__icon">
            <use xlink:href="img/svg/icons.svg#repeat"></use>
          </svg>
        </div>

        <div class="frmCropBtn__btn">
          <svg class="frmCropBtn__icon">
            <use xlink:href="img/svg/icons.svg#check"></use>
          </svg>
        </div>

      </div>
    </div>
    `;
    parentElement.insertAdjacentHTML('beforeend', buttonsHtml);

    this.#elPhotoCropButtons = this.elPhotoForm.querySelector('.frmGroup__crop-buttons');
    this.#all_elPhotoCropButton = Array.from(this.elPhotoForm.querySelector('.frmCropBtn__group').children);
  };

  #checkCrop = async () => {
    // Yüklenen resim kırpılıyor
    this.#cropedImage = await this.#croppie.result({ type: 'blob', size: 'viewport', format: 'jpeg' });
    // Kırpılan resimler preview alanında görüntüleniyor

    this.all_elPreviewImage.forEach(async el => {
      el.src = await filetoDataURL(this.#cropedImage);
    });
  };

  async inputPhotoFile(image) {
    await super.inputPhotoFile(image);

    this.#renderCropButtons(this.#elPhotoEditGroup);

    this.#croppie = new Croppie(this.elPhotoImage, {
      viewport: { width: 150, height: 150 },
      enableOrientation: true,
    });

    // img dosyası croppie elementiyle çevrelendiğinden elPhotoImage yeniden atanıyor
    this.elPhotoImage = this.elPhotoEdit.lastElementChild;

    // croppie css sınıfları override ediliyor
    this.elPhotoOperation
      .querySelector('.cr-slider-wrap')
      .setAttribute('style', 'margin-top: 0.8rem; margin-bottom: 0;');
    this.elPhotoOperation.querySelector('.cr-boundary').setAttribute('style', 'border-radius: 0.5rem;');

    this.#all_elPhotoCropButton[0].addEventListener('click', () => this.#croppie.rotate(90));
    this.#all_elPhotoCropButton[1].addEventListener('click', () => this.#croppie.rotate(-90));
    this.#all_elPhotoCropButton[2].addEventListener('click', () => this.#checkCrop());
  }

  returnPhotoInput() {
    super.returnPhotoInput();

    this.#elPhotoEditGroup.removeChild(this.#elPhotoCropButtons);
    // resim crop nesnesi yok ediliyor
    this.#croppie.destroy();
  }

  downloadProcessedImage() {
    downloadFile(this.#cropedImage);
  }

  async photoInputEventFunction(photoFile) {
    if (photoFile) {
      await this.inputPhotoFile(photoFile);
      super.set_all_elPreviewImage();
    }
  }
}

// UserPhotoElements
const frmUserPhoto = document.getElementById('frmUserPhoto');
ifCorrectPage_DOMContentLoaded(frmUserPhoto, () => {
  const frmUserPhoto_input = document.getElementById('frmUserPhoto_input'),
    frmUserPhoto_label = frmUserPhoto.querySelector('.frmGroup__photo-label');

  const previewPhotos = Array.from(frmUserPhoto.querySelector('.frmGroup__previewPhoto').children);
  previewPhotos.push(frmUserBackground.querySelector('.aCard__profile-image'));

  const userPhoto = new CropPhotoOperations(frmUserPhoto, previewPhotos);

  frmUserPhoto_input.addEventListener('change', e => {
    userPhoto.photoInputEventFunction(e.target.files[0]);
  });

  frmUserPhoto_label.addEventListener('drop', e => {
    userPhoto.photoInputEventFunction(e.dataTransfer.files[0]);
  });
});

// UserBackgroundPhotoElements
const frmUserBackground = document.getElementById('frmUserBackground');
ifCorrectPage_DOMContentLoaded(frmUserBackground, () => {
  const frmUserBackground_input = document.getElementById('frmUserBackground_input'),
    frmUserBackground_label = frmUserBackground.querySelector('.frmGroup__photo-label');

  const previewPhotos = [];
  previewPhotos.push(frmUserBackground.querySelector('.aCard__image-top'));

  const userBackground = new PhotoOperations(frmUserBackground, previewPhotos);

  frmUserBackground_input.addEventListener('change', e => {
    userBackground.photoInputEventFunction(e.target.files[0]);
  });

  frmUserBackground_label.addEventListener('drop', e => {
    userBackground.photoInputEventFunction(e.dataTransfer.files[0]);
  });
});
