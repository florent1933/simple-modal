const EASINGS = {
        standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        accelerate: 'cubic-bezier(0.4, 0.0, 1, 1)',
        decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)'
      },
      ANIMATIONS = {
        modal: {
          frames: [
            { transform: 'scale(0.75, 0.95)', opacity: 0 },
            { transform: 'scale(1, 1)', opacity: 1 }
          ],
          opts: {
            open: {
              easing: EASINGS.standard,
              fill: 'both',
              duration: 140,
            },
            close: {
              easing: EASINGS.decelerate,
              fill: 'both',
              offset: 20,
              duration: 90
            }
          }
        },
        overlay: {
          frames: [
            { opacity: 0 },
            { opacity: 1 }
          ],
          opts: {
            open: {
              easing: 'ease',
              fill: 'both',
              duration: 270
            },
            close: {
              easing: 'ease',
              fill: 'both',
              offset: 20,
              duration: 120
            }
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

  /**
   * Animate the modal open and give it a visible attribute
   * @return {undefined}
   */
  animateModalOpen() {
    let overlay = ANIMATIONS.overlay,
        modal = ANIMATIONS.modal;

    this.visible = true;
    this.$.overlay.animate(overlay.frames, overlay.opts.open);
    this.$.modal.animate(modal.frames, modal.opts.open);
  },

  /**
   * Animate the modal close and remove the visible attribute
   * @return {undefined}
   */
  animateModalClosed() {
    let modalAnimation,
        overlayAnimation,
        overlay = ANIMATIONS.overlay,
        modal = ANIMATIONS.modal;

    overlayAnimation = this.$.overlay.animate(overlay.frames.slice().reverse(), overlay.opts.close);
    modalAnimation = this.$.modal.animate(modal.frames.slice().reverse(), modal.opts.close);

    Promise.all([
      modalAnimation.finished,
      overlayAnimation.finished
    ]).then(() => this.visible = false);
  }

};
