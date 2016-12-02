import animation from './behaviors/animation';

const CONFIRM_CLASS = 'simple-modal-confirm';

class SimpleModal {
  beforeRegister() {
    this.is = 'simple-modal';

    this.properties = {
      /**
       * Title of the modal
       * @type {String}
       */
      title: {
        type: String,
        value: ''
      },

      /**
       * Whether the user should be able to exit the modal without clicking confirm
       * @type {Boolean}
       */
      noExit: Boolean,

      /**
       * Whether modal is active or not
       * @type {Boolean}
       */
      active: {
        type: Boolean,
        notify: true,
        observer: '_activeChanged',
        value: false
      }
    }
  }

  get behaviors() {
    return [ animation ];
  }

  /**
   * Observer for the active property, fires events on change
   * @param  {Boolean} active   Current state of the active property
   * @param  {Boolean} previous Previous state of the active property
   * @return {undefined}
   */
  _activeChanged(active, previous) {
    if (active) {
      this.animateModalOpen();
      this._toggleBodyLock(true);
      this.fire('simple-modal-opened');
    } else if (previous) {
      this.animateModalClosed();
      this._toggleBodyLock(false);
      this.fire('simple-modal-closed');
    }
  }

  /**
   * Convinience method for setting active to true
   * @return {undefined}
   */
  open() {
    this.active = true;
  }

  /**
   * Convinience method for setting active to false
   * @return {undefined}
   */
  close() {
    if (!this.noExit) {
      this.active = false;
    }
  }

  /**
   * Get the internal modal element
   * @return {HTMLNode} Internal modal element
   */
  getModal() {
    return this.$.modal;
  }


  /**
   * Toggles locking the <body> element with overflow hidden
   * @param  {Boolean} lock Whether to lock or unlock the body
   * @return {undefined}
   */
  _toggleBodyLock(lock) {
    let body = document.body;

    if (lock) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  }

  /**
   * Close the modal on escape key press
   * @return {undefined}
   */
  _closeOnEscape() {
    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) {
        this.close();
      }
    });
  }

  /**
   * Initialise close listeners on element attach
   * @return {undefined}
   */
  attached() {
    this._closeOnEscape();
  }

}

Polymer(SimpleModal);