const MODAL = {
        frames: [
          { transform: 'scale(0.75, 0.95)', opacity: 0 },
          { transform: 'scale(1, 1)', opacity: 1 }
        ],
        opts: {
          open: {
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            fill: 'both',
            duration: 120,
          },
          close: {
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            fill: 'both',
            duration: 100
          }
        }
      },
      OVERLAY = {
        frames: [
          { opacity: 0 },
          { opacity: 1 }
        ],
        opts: {
          open: {
            easing: 'ease',
            fill: 'both',
            duration: 230
          },
          close: {
            easing: 'ease',
            fill: 'both',
            duration: 170
          }
        }
      };

export default {
  properties: {

    visible: {
      type: Boolean,
      reflectToAttribute: true
    }

  },

  observers: [
    '_toggleModal(active)'
  ],

  /**
   * Animation observer for the active property
   * @param  {Boolean} active Current state of the active property
   * @return {undefined}
   */
  _toggleModal(active) {
    if (active) {
      this._openModal();
    } else {
      this._closeModal();
    }
  },

  /**
   * Animate the modal open and give it a visible attribute
   * @return {undefined}
   */
  _openModal() {
    this.visible = true;
    this.$.overlay.animate(OVERLAY.frames, OVERLAY.opts.open);
    this.$.modal.animate(MODAL.frames, MODAL.opts.open);
  },

  /**
   * Animate the modal close and remove the visible attribute
   * @return {undefined}
   */
  _closeModal() {
    let overlay,
        modal,
        overlayFrames = OVERLAY.frames.slice().reverse(),
        modalFrames = MODAL.frames.slice().reverse();

    overlay = this.$.overlay.animate(overlayFrames, OVERLAY.opts.close);
    modal = this.$.modal.animate(modalFrames, MODAL.opts.close);

    Promise.all([
      overlay.finished,
      modal.finished
    ]).then(() => this.visible = false);
  }

};
